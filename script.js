// Năm hiện tại ở footer
document.getElementById('year').textContent = new Date().getFullYear();

// Tô sáng mục nav theo phần đang xem
const links = document.querySelectorAll('.nav-link');
const sections = [...links].map(l => document.querySelector(l.getAttribute('href')));
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => s && observer.observe(s));

// Nút sao chép email
const copyBtn = document.getElementById('copy-email');
copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('dun3632@gmail.com');
    copyBtn.textContent = 'Đã sao chép email';
  } catch {
    copyBtn.textContent = 'Không sao chép được, hãy chép thủ công';
  }
  setTimeout(() => (copyBtn.textContent = 'Sao chép email'), 2000);
});
