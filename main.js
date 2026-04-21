window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)",
      },
      colors: {
        ink: "#0f172a",
        paper: "#f8fafc",
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }

  const form = document.getElementById("contactForm");
  const statusText = document.getElementById("formStatus");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      if (statusText) {
        statusText.textContent = "Vui lòng điền đầy đủ thông tin.";
        statusText.className = "text-sm font-medium text-rose-600";
      }
      return;
    }

    if (statusText) {
      statusText.textContent = "Đang gửi tin nhắn...";
      statusText.className = "text-sm font-medium text-blue-600";
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Submit failed");
      }

      if (statusText) {
        statusText.textContent =
          "Tin nhắn đã gửi thành công. Cảm ơn bạn đã liên hệ.";
        statusText.className = "text-sm font-medium text-emerald-600";
      }
      form.reset();
    } catch (error) {
      if (statusText) {
        statusText.textContent =
          "Không thể gửi tự động lúc này. Vui lòng gửi trực tiếp tới dun3632@gmail.com.";
        statusText.className = "text-sm font-medium text-rose-600";
      }
    }
  });

  menuToggle?.addEventListener("click", () => {
    if (!mobileMenu) return;

    const isOpen = mobileMenu.classList.toggle("hidden") === false;
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng",
    );
  });

  mobileMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Mở menu điều hướng");
      }
    });
  });
});
