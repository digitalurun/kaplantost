// script.js — Etkileşimleri yönetir

// 📱 Mobil menü toggle
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// 📩 İletişim formu gönderimi
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Basit doğrulama
    if (!name || !phone) {
      alert('Lütfen adınızı ve telefon numaranızı girin.');
      return;
    }

    // Başarı mesajı
    alert(`Teşekkürler, ${name}! 🐾\nMesajınız alındı. En kısa sürede dönüş yapacağız.\nTelefon: ${phone}`);

    // Formu sıfırla
    contactForm.reset();
  });
}

// 📌 Smooth scroll (isteğe bağlı ama profesyonel dokunuş)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      // Mobil menüyü kapat
      navMenu.classList.remove('active');
    }
  });
});