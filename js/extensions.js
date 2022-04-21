/*
    File:  interactive.js
*/

// activate the BS components
$(document).ready(function(){
    //activate tooltip
    $('[data-toggle="tooltip"]').tooltip(); 
    //activate popover
    $('[data-toggle="popover"]').popover(); 
});

$(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $("button.navbar-toggler").click();
        }
    });
});


