window.onload = function () {
  window.onfocus = function () {
    var textarea = document.querySelector("textarea");
    textarea && textarea.focus();
  };
};