# HỆ THỐNG QUẢN LÝ VẬN TẢI (TMS) - CÔNG TY TNHH ĐẦU TƯ VÀ XUẤT NHẬP KHẨU NNP
> **Chủ đề cốt lõi:** *"Nâng cao hiệu quả sử dụng phương tiện vận tải"*  
> **Khu vực hoạt động:** Cụm Cảng Hải Phòng (Đình Vũ, Tân Vũ, Lạch Huyện, Chùa Vẽ) & Các hành lang công nghiệp phía Bắc (Hà Nội, Bắc Ninh, Hưng Yên, Hải Dương).

---

## 1. Giới thiệu Tổng quan
Hệ thống TMS của **Công ty TNHH Đầu tư và Xuất nhập khẩu NNP** được thiết kế nhằm giải quyết bài toán cốt lõi trong ngành vận tải container và xe tải nặng: **Tối đa hóa hệ số sử dụng trọng tải ($\gamma$)** và **Triệt tiêu tối đa tỷ lệ chạy rỗng ($\beta$)**, giúp giảm chi phí nhiên liệu, tăng doanh thu trên mỗi km lăn bánh và rút ngắn thời gian quay vòng phương tiện.

Ứng dụng được xây dựng hoàn chỉnh với React, TypeScript, Tailwind CSS, Lucide Icons và hệ thống biểu đồ trực quan hóa dữ liệu vận hành.

---

## 2. Kiến trúc 4 Phân hệ Nghiệp vụ & Module Kỹ thuật

### 👑 Phân hệ 1: Ban Giám đốc (Executive KPI Dashboard)
- **4 Thẻ KPI Hiệu suất trọng yếu:**
  - **Tỷ lệ xe vận doanh ($\alpha$):** Đạt **91.7%** (44/48 xe đang lăn bánh trên tuyến, vượt mục tiêu 88%).
  - **Hệ số sử dụng trọng tải bình quân ($\gamma$):** Đạt **84.6%** (tăng +7.2% nhờ thuật toán gom hàng lẻ LTL).
  - **Hệ số sử dụng quãng đường có hàng ($\beta$):** Đạt **78.5%** (Tỷ lệ chạy rỗng giảm từ 38% xuống chỉ còn **21.5%**).
  - **Tổng sản lượng luân chuyển (Tấn.km):** Đạt **1,428,500 Tấn.km** (+12.8% so với cùng kỳ).
- **Hệ thống Biểu đồ:**
  - Biểu đồ kết hợp cột và đường so sánh Doanh thu (3.42 tỷ đ) vs Chi phí dầu (1.07 tỷ đ) vs Tỷ lệ chạy rỗng theo 6 tháng gần nhất.
  - Phân tích hiệu suất tải trọng và tỷ lệ chạy rỗng theo từng phân nhóm xe (Đầu kéo Cont 40ft, Đầu kéo Cont 20ft, Xe tải 15T, Xe tải 8T).
  - Biểu đồ tròn Donut cơ cấu thời gian hoạt động 24/7 (Lăn bánh có hàng 62.4%, Xếp dỡ cảng 17.8%, Chạy rỗng 11.2%, Bảo dưỡng 8.6%).
  - Bảng hạch toán giá trị gia tăng thu về từ việc tối ưu hóa: Tiết kiệm **4,850 lít dầu** và tăng doanh thu **+486.700.000 VNĐ/tháng**.

### 🛰️ Phân hệ 2: Điều độ viên (Dispatcher Control Tower & Smart Consolidation)
- **Bảng điều phối trực quan (Dispatch Board):**
  - Trực quan hóa trạng thái đội xe: Đang chở hàng, Đang chạy rỗng (cần ghép), Đang xếp dỡ tại cảng, Cảnh báo nghẽn cảng, Đang bảo dưỡng, Sẵn sàng.
  - Lọc theo chủng loại phương tiện và tìm kiếm thời gian thực.
- **Tính năng "Ghép hàng thông minh" (Smart Consolidation Engine):**
  - **Gom đơn hàng lẻ (LTL):** Ghép 2 đơn lẻ từ Cảng Đình Vũ & Chùa Vẽ đi KCN Quế Võ & Yên Phong vào 1 xe tải 15T, nâng tỷ lệ tải từ **38.7% lên 94.7%**, tiết kiệm 2.15 triệu đ.
  - **Gợi ý đơn hàng chiều về (Backhaul Matcher):** Xe 15H-019.52 vừa hạ hàng tại KCN Yên Phong được khớp lệnh ngay với đơn hàng xuất khẩu cont 40ft tại Bắc Giang về Cảng Lạch Huyện, cắt giảm **118 km chạy rỗng** và mang lại **+5.400.000 VNĐ** doanh thu.
- **Bản đồ Giám sát Hành trình GPS & Cảnh báo điểm nghẽn:**
  - Mô phỏng không gian địa lý trục Cảng Hải Phòng ↔ Cao tốc 5B ↔ Hà Nội ↔ Bắc Ninh.
  - Cảnh báo phương tiện dừng đỗ vượt quá 90 phút tại cổng cảng Tân Vũ/Đình Vũ do ách tắc kiểm hóa kèm nút xử lý hối thúc điều độ.
- **Form Phát lệnh điều động điện tử:** Phân xe, gán tài xế, kẹp chì seal và vạch lộ trình tối ưu.

### 📱 Phân hệ 3: Tài xế (Driver Mobile App Interface)
- Giao diện giả lập Smartphone công thái học sắc nét với nút bấm to, rõ.
- Nhận lệnh điều động điện tử với lộ trình tối ưu và số chì/seal kẹp container.
- **4 Bước cập nhật hành trình thời gian thực:**
  1. *Đã nhận lệnh* $\rightarrow$ 2. *Đã đến cảng/kho xếp hàng* $\rightarrow$ 3. *Đang vận chuyển* $\rightarrow$ 4. *Hoàn thành giao hàng*.
- **Phiếu khai báo nhiên liệu nhanh:** Chọn trạm dầu, nhập số lít, số tiền, số công-tơ-mét (Odometer) và tải ảnh hoá đơn.
- **Biên bản giao nhận điện tử (e-POD):** Ký tên trực tiếp trên màn hình cảm ứng (Canvas signature), xác nhận số seal nguyên vẹn.

### 🏢 Phân hệ 4: Khách hàng (Customer Self-Service Portal)
- **Đặt xe trực tuyến & Báo giá tự động:**
  - Chọn điểm bốc (Cụm Cảng Hải Phòng) và điểm giao (Các KCN phía Bắc).
  - Tự động bóc tách: Cước cơ sở, phụ phí xăng dầu, phí cầu đường BOT cao tốc 5B.
  - **Chiết khấu -15% cước chiều về** nếu khớp lịch trình xe rỗng của NNP.
- **Tra cứu tiến độ vận đơn (Tracking & Tracing):**
  - Tìm kiếm theo mã vận đơn (VD: `NNP-2026-8891`).
  - Thanh tiến trình 5 bước trực quan từ tiếp nhận đến khi hoàn tất giao hàng.
  - Xem và in Hóa đơn điện tử VAT & Biên bản giao nhận e-POD có chữ ký số.

### ⚙️ Module 5: Quản lý Kỹ thuật & Nhiên liệu (Fleet Technical & Fuel Auditing)
- **Hồ sơ phương tiện & Cảnh báo an toàn:**
  - Giám sát tự động hạn Đăng kiểm (cảnh báo cờ đỏ nếu còn $\le 7$ ngày), hạn bảo hiểm TNDS & vật chất.
  - Thanh đo chu kỳ bảo dưỡng định kỳ theo số km lăn bánh thực tế.
- **Đối soát định mức nhiên liệu:**
  - So sánh tiêu hao thực tế so với định mức kỹ thuật quy định (L/100km).
  - Tự động gắn cờ đỏ cảnh báo bất thường khi vượt định mức $\ge +5\%$ (do dừng nổ máy chờ điều hòa, sai tuyến hoặc nghi vấn thất thoát).
  - Quản lý nhật ký các phiếu đổ dầu do lái xe gửi lên từ trạm xăng dầu.

---

## 3. Hướng dẫn Mở và Trải nghiệm Ứng dụng

### Cách 1: Mở trực tiếp trong Trình duyệt (Không cần cài đặt thêm)
- Mở file `d:\Thư mục mới\index.html` bằng bất kỳ trình duyệt nào (Google Chrome, Microsoft Edge, Cốc Cốc, Firefox).
- Hoặc nhấp đúp chuột vào file `start.bat`.

### Cách 2: Khởi chạy Máy chủ Cục bộ (Local Server)
```bash
# Đóng gói lại khi chỉnh sửa mã nguồn
npm run build

# Khởi chạy máy chủ HTTP phục vụ tại http://localhost:3000
npm run serve
```

---

## 4. Công nghệ Sử dụng
- **React 18** & **TypeScript**
- **Tailwind CSS** (Chủ đề Dark Logistics Navy chuyên nghiệp)
- **Lucide Icons**
- **Recharts-compatible SVG Chart Engine** (Biểu đồ tương tác đa trục, Donut và Progress Bars)
- **HTML5 Canvas Touch Signature Pad** cho chữ ký số e-POD.
