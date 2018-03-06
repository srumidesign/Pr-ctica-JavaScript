$("#carrete").ready(function() {
    $("img").hide();
});

$("body").on("click", function() {
    $("img").show();
})

/*$("img").on("mouseover", function() {
    $(this).css("width", 300);
})*/

$("img").hover(function(){
    $(this).css("width", 300);;
}, function() {
    $(this).css("width", 250);;
}) 