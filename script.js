document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("bookingForm");

  form.addEventListener("submit", function(e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const people = document.getElementById("people").value;

    if (!name || !email || people < 5) {
      e.preventDefault();
      alert("Please complete the form correctly. Minimum 5 people required.");
    }
  });
});
