# Newsroom AI – Trợ lý AI

## 1. Giới thiệu

**Newsroom AI** là giao diện hệ thống hỗ trợ phóng viên trong quá trình biên tập và xử lý nội dung tin tức.

Trang được thực hiện trong bài kiểm tra giữa kỳ học phần **Phát triển ứng dụng Web cơ bản – CSE122**.

Trang chính mà em thực hiện là:

> **Trợ lý AI**

Trang cho phép người dùng tương tác với trợ lý AI thông qua giao diện chat, đồng thời cung cấp các chức năng gợi ý phục vụ quá trình biên tập bài viết.

---

## 2. Mục đích của trang

Trang **Trợ lý AI** được xây dựng nhằm hỗ trợ phóng viên:

- Đặt câu hỏi và gửi yêu cầu cho trợ lý AI.
- Gợi ý tiêu đề cho bài viết.
- Tóm tắt nội dung bài viết.
- Kiểm tra tính trung lập của nội dung.
- Tìm những vị trí cần bổ sung nguồn.
- Quản lý và xem lại các cuộc trò chuyện gần đây.

Giao diện được thiết kế theo hướng đơn giản, dễ sử dụng và phù hợp với môi trường làm việc của phóng viên.

---

## 3. Các chức năng chính

### 3.1. Giao diện quản lý

- Thanh menu bên trái.
- Các mục Dashboard, Trình soạn thảo, Trợ lý AI, Nguồn tin, Duyệt bài, Xuất bản, Phân tích và Thư viện Media.
- Hiển thị thông tin người dùng.
- Thanh tìm kiếm.
- Nút tạo bài viết mới.
- Các biểu tượng thông báo và chế độ hiển thị.

### 3.2. Quản lý cuộc trò chuyện

- Hiển thị danh sách các cuộc trò chuyện gần đây.
- Hiển thị tên và thời gian của từng cuộc trò chuyện.
- Có nút **Cuộc trò chuyện mới**.
- Hiển thị cuộc trò chuyện đang được chọn.

### 3.3. Trợ lý AI

Khu vực chính hiển thị:

- Tên trợ lý **Newsroom AI**.
- Trạng thái hoạt động.
- Tin nhắn của AI.
- Tin nhắn của người dùng.
- Các gợi ý nhanh.

Một số gợi ý có sẵn:

- Gợi ý 5 tiêu đề hấp dẫn.
- Tóm tắt bài đang viết.
- Kiểm tra tính trung lập.
- Tìm điểm cần bổ sung nguồn.

### 3.4. Tương tác bằng JavaScript

Người dùng có thể:

- Nhập nội dung vào ô chat.
- Nhấn nút gửi để gửi tin nhắn.
- Nhấn **Enter** để gửi tin nhắn.
- Nhấn các nút gợi ý để gửi nhanh nội dung.
- Tin nhắn mới được thêm trực tiếp vào khu vực hội thoại.
- Sau khi gửi, hệ thống hiển thị phản hồi mô phỏng từ Newsroom AI.

JavaScript sử dụng DOM để lấy dữ liệu từ ô nhập, tạo phần tử tin nhắn mới và đưa tin nhắn vào khu vực hội thoại.

---

## 4. Công nghệ sử dụng

### HTML

- HTML5.
- Semantic HTML cơ bản.
- Các thẻ `header`, `main`, `aside`, `section`, `button`, `input`, `ul`, `li`...
- Liên kết file CSS và JavaScript bên ngoài.

### CSS

- CSS3.
- CSS Variables.
- Flexbox.
- Box Model.
- Border và Border-radius.
- Hover.
- Transition.
- Thiết kế giao diện sidebar, header và chat.
- Thiết kế màu sắc, typography và khoảng cách.

### JavaScript

- JavaScript thuần.
- DOM.
- `getElementById()`.
- `querySelectorAll()`.
- `addEventListener()`.
- Xử lý sự kiện `click`.
- Xử lý phím `Enter`.
- Tạo phần tử HTML bằng JavaScript.
- Thay đổi nội dung và cập nhật giao diện chat.

### Thư viện

- Font Awesome 6.4.0 được sử dụng để tạo các biểu tượng trong giao diện.

---

## 5. Cấu trúc thư mục

```text
Newsroom-AI/
│
├── bt1.html
├── bt1.css
├── bt1.js
│
├── assets/
│
└── README.md
```

---

## 6. Luồng hoạt động của JavaScript

```text
Người dùng nhập nội dung
        ↓
Nhấn nút Gửi hoặc Enter
        ↓
JavaScript lấy nội dung từ ô nhập
        ↓
Tạo tin nhắn mới
        ↓
Hiển thị tin nhắn trong khu vực chat
        ↓
Xóa nội dung ô nhập
        ↓
Hiển thị phản hồi mô phỏng từ AI
```

Ngoài ra, người dùng có thể chọn các nút gợi ý. Khi nhấn vào một nút gợi ý, nội dung của nút sẽ được đưa vào cuộc trò chuyện như một tin nhắn của người dùng.

---

## 7. Giao diện

Giao diện gồm 3 khu vực chính:

### Sidebar

Chứa logo Newsroom AI, menu chức năng và thông tin người dùng.

### Khu vực lịch sử trò chuyện

Hiển thị các cuộc trò chuyện gần đây và nút tạo cuộc trò chuyện mới.

### Khu vực chat

Hiển thị thông tin trợ lý AI, nội dung hội thoại, các nút gợi ý và ô nhập tin nhắn.

---

## 8. Link dự án

### Figma

**Link Figma:**  
`https://www.figma.com/make/IUtJfbccJFCupAwPmCd52s/Web-Interface-for-Newsroom-AI?t=CeeSPWGDIaPP92be-20&fullscreen=1`

### GitHub

**Link GitHub:**  
`https://github.com/phamdieu2007ks-sudo/Newsroom-ai.git`

### Video trình bày

**Link Video:**  
`https://youtu.be/ASy6LQMkAhE`

---

## 9. Thông tin bài làm

| Nội dung | Thông tin |
|---|---|
| Học phần | Phát triển ứng dụng Web cơ bản – CSE122 |
| Đề tài | Newsroom AI |
| Trang thực hiện | Trợ lý AI |
| Ngôn ngữ | HTML, CSS, JavaScript |
| Giao diện | Newsroom AI |
| Chức năng tương tác | Chat và nút gợi ý |
| Repository | GitHub |

---

## 10. Kết luận

Trang **Trợ lý AI – Newsroom AI** được xây dựng từ HTML, CSS và JavaScript nhằm mô phỏng một giao diện hỗ trợ phóng viên trong quá trình biên tập nội dung.

Sản phẩm tập trung vào việc xây dựng giao diện rõ ràng, dễ sử dụng và có tương tác cơ bản bằng JavaScript thông qua chức năng trò chuyện với trợ lý AI.
