window.onload = function () {
    window.onfocus = function () {
        var input = document.querySelector('[aria-label="Type a message"]');
        input && input.focus();
    };
};
