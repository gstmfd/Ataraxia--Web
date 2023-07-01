// Contoh JavaScript untuk website blog pribadi AtaraxiaWeb

// Mengubah warna latar belakang header saat di-scroll
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mengambil data dari form kontak dan menampilkan pesan sukses
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Lakukan validasi form di sini (misalnya, memeriksa apakah semua input terisi)

  // Kirim data form ke server (asumsikan menggunakan AJAX)

  // Tampilkan pesan sukses
  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";

  // Reset form setelah pengiriman
  contactForm.reset();
});

// Mengaktifkan efek hover pada floating contact
const floatingContact = document.querySelector(".floating-contact");
floatingContact.addEventListener("mouseenter", function() {
  floatingContact.classList.add("hovered");
});

floatingContact.addEventListener("mouseleave", function() {
  floatingContact.classList.remove("hovered");
});
