$(".hamburger").on("click", function () {
    $(".hamburger").removeClass("active").addClass("fa-times");
    if ($(".hamburger").hasClass("fa-times")) {
        $(".hero-image").css("background-color", "#262626");
        $(".menu").css("flex-direction", "column");
        $(".menu").css("justify-content", "center");
        $(".menu").css("align-items", "space-between");
        $(".menu").css("color", "#D1A16C");
    }
});

$(".fa-times").on("click", function () {
    $(".fa-times").removeClass("active").addClass("hamburger");
})