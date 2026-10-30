# Portfolio – Nguyễn Văn Dũ

Trang portfolio cá nhân của Web Developer Nguyễn Văn Dũ, dùng HTML, CSS, Tailwind CSS, JavaScript thuần.

## Cấu trúc

```
portfolio/
├── index.html    # Giao diện chính (6 hàng: header, hero, thông tin + kỹ năng, kinh nghiệm, liên hệ, footer)
├── style.css     # CSS tùy chỉnh: nút, thẻ, hiệu ứng hover, responsive
├── script.js     # Tô sáng nav khi cuộn, nút sao chép email, năm ở footer
├── assets/
│   └── avatar.png  # Ảnh đại diện (thay bằng ảnh của bạn nếu muốn)
└── README.md
```

## Tính năng

- Responsive cho laptop, tablet, điện thoại: màn hình nhỏ thì các cột xếp dọc.
- Nút và liên kết có con trỏ tay, đổ bóng và dịch lên nhẹ khi rê chuột.
- Nav dính đầu trang, cuộn mượt, tự tô sáng mục đang xem.
- Tôn trọng chế độ giảm chuyển động của hệ điều hành.

## Chạy thử

Mở `index.html` bằng trình duyệt (cần Internet để tải Tailwind CDN và font Be Vietnam Pro).
Hoặc chạy server cục bộ: `npx serve .`

