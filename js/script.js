document.addEventListener('DOMContentLoaded', function() {
    console.log('Selamat datang di Tekmu Lee!');
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Tutup menu saat link diklik di mobile
const links = document.querySelectorAll('.nav-links a');
for (const link of links) {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
            if (window.innerWidth <= 900) {
                navLinks.classList.remove('open');
            }
        }
    });
}

// Optional: Form submit dummy
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih, pesan Anda telah dikirim!');
        form.reset();
    });
}

// Scrollspy: aktifkan nav-link sesuai section yang sedang dilihat
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}); 