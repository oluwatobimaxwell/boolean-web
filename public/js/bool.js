$( document ).ready(function() {
    var url = window.location.href;

    // passes on every "a" tag
    $(".nav-item a").each(function() {
        // checks if its the same on the address bar
        if (url == (this.href)) {
            $(this).closest("li.top").addClass("active");
            $(this).closest("li.top").addClass("underline");
        }
    });    
});