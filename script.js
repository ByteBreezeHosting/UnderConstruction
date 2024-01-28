document.addEventListener("DOMContentLoaded", function() {
    var footer = document.querySelector("footer");
    var isFooterVisible = false;

    window.addEventListener("scroll", function() {
        var scrollHeight = document.documentElement.scrollHeight;
        var clientHeight = document.documentElement.clientHeight;
        var scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

        var scrollPosition = scrollHeight - clientHeight - scrollTop;
        var threshold = 100;

        if (scrollPosition < threshold && !isFooterVisible) {
            footer.style.bottom = "0";
            isFooterVisible = true;
        } else if (scrollPosition >= threshold && isFooterVisible) {
            footer.style.bottom = "-50px"; 
            isFooterVisible = false;
        }
    });
});
