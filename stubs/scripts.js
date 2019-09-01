window.onload = function () {
    window.onfocus = function () {
        var input = document.querySelector('[aria-label="Type a message here"]');
        input && input.focus();
    };
};