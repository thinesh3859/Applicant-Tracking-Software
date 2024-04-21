$(window).on('load', function() {
    // Your code here
    //LoadPage();
    console.log("Window is fully loaded!");
});

function LoadPage(){
    $.ajax({
        url: 'possition/index',
        method: 'GET',
        success: function(response) {
            // Insert the HTML content into a specific element
            $('#body-container').html(response);
        },
        error: function(xhr, status, error) {
            // Handle errors
            console.error(error);
        }
    });
    
}



$(document).click(function(event) {
    if($(event.target).closest('#Theme-icon').length && $(event.target).is('#Theme-icon')){
       
    }
    else if (!$(event.target).closest('#Theme-div').length && !$(event.target).is('#Theme-div')) {
        $("#Theme-div").hide();
    }
});


// $('.top-ribbon ul a li').click(function(_this) {
//     $(".top-ribbon ul a li").removeClass('active');
//     $(this).addClass('active');
// });
function PageMenuActivator(selector){
    $(".top-ribbon ul a li").removeClass('active');
    $(".top-ribbon ul a li."+selector).addClass('active');
}

function ShowThemeSelector(_this){
   var parentDivWidth = _this.offsetParent.offsetWidth - 100;
   $("#Theme-div").css("right",parentDivWidth + "px");
   $("#Theme-div").css("display","flex");
}

$('.theme').click(function(_this) {

    $('.theme').removeClass('active');
    $(this).addClass('active');

    var classes = $(this).attr('class').split(' ');
    console.log(classes[1]);

    $('body').css('--theme', $('.'+classes[1]).css('background-color'));

});