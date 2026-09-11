function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = "block";
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = "none";
}

window.onclick = function (event) {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (event.target === modal) modal.style.display = "none";
  });
};

function checkAvailability(btn) {
  const scope = btn ? btn.closest(".modal-content") : document;
  const pickupDateInput = scope.querySelector('input[id="pickupDate"]');
  const message = scope.querySelector("[id='availabilityMessage']");
  if (!pickupDateInput || !message) return;

  const pickupDate = pickupDateInput.value;
  const unavailableDates = ["2025-05-28", "2025-05-30", "2025-06-01"];

  if (!pickupDate) {
    message.textContent = "Please select a pickup date.";
    message.style.color = "red";
    return;
  }

  if (unavailableDates.includes(pickupDate)) {
    message.textContent = "Sorry, no vehicles available on this date.";
    message.style.color = "red";
  } else {
    message.textContent = "Vehicle available! Proceed with booking.";
    message.style.color = "green";
  }
}

function confirmBooking(event) {
  event.preventDefault();
  alert("Booking Successful!");
  window.location.href = "bookingava.html";
  return false;
}

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("nav");
  if (navbar) {
    window.addEventListener("scroll", () =>
      navbar.classList.toggle("sticky", window.scrollY > 0)
    );
  }

  const menu = document.querySelector(".menu");
  const toggleMenu = () => menu && menu.classList.toggle("active");

  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".close-btn");
  if (menuBtn) menuBtn.addEventListener("click", toggleMenu);
  if (closeBtn) closeBtn.addEventListener("click", toggleMenu);

  document.querySelectorAll(".menu a").forEach((link) =>
    link.addEventListener("click", toggleMenu)
  );

  if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "40px",
      duration: 1000,
      delay: 40,
      easing: "ease-in-out",
    });

    sr.reveal(".hero-headlines", { origin: "left" });
    sr.reveal(".hero-page img", { origin: "right" });
    sr.reveal(".about");
    sr.reveal(".about h1", { delay: 500 });
    sr.reveal(".about p", { delay: 700 });
    sr.reveal(".about-info", { delay: 1000 });
    sr.reveal(".collection h1");
    sr.reveal(".collection-container", { delay: 900 });
    sr.reveal(".review h1");
    sr.reveal(".review-container", { delay: 800 });
    sr.reveal(".callout");
    sr.reveal(".contact");
  }
});