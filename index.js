document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll(".container");

  function checkPosition() {
    sections.forEach(function (section) {
      var position = section.getBoundingClientRect();

      if (position.top < window.innerHeight - 100) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  checkPosition();
  window.addEventListener("scroll", checkPosition);
});
