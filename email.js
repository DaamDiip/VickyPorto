document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_y38r4en", "template_iajxb99", form)
      .then(() => {
        alert("✅ Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("❌ Failed to send:", error);
        alert("❌ Failed to send message. Please try again later.");
      });
  });
});
