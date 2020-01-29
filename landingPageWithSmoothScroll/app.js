document.querySelector(".container").addEventListener("scroll", function(e) {
  let currentSection =
    document.querySelector(".container").scrollTop /
    document.querySelectorAll(".story")[0].scrollHeight;
  console.log("currentSection", currentSection);
});
