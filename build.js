const esbuild = require('esbuild');
const path = require('path');

const nodeModulesPath = 'C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules';

console.log('--- Đang tiến hành đóng gói NNP Logistics TMS MVP ---');

try {
  const result = esbuild.buildSync({
    entryPoints: [path.join(__dirname, 'src/main.tsx')],
    bundle: true,
    outfile: path.join(__dirname, 'dist/bundle.js'),
    nodePaths: [nodeModulesPath],
    define: {
      'process.env.NODE_ENV': '"production"'
    },
    loader: {
      '.ts': 'ts',
      '.tsx': 'tsx'
    },
    format: 'iife',
    minify: false,
    sourcemap: false
  });

  console.log('✅ Đóng gói thành công! File xuất ra: dist/bundle.js');
} catch (error) {
  console.error('❌ Lỗi đóng gói:', error);
  process.exit(1);
}
