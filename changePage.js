window.onload = function () {
    $(".0").css("display", "block");
}

function page(i) {
    $(".container").css("display", "none");
    $("." + i).css("display", "block");
}