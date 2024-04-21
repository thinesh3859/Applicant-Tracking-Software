$(document).ready(function(){
    PageMenuActivator("position");
    loadPositionPage('/position/detail');
});



function loadPositionPage(pageurl){
    $.ajax({
        url: pageurl,
        method: 'GET',
        success: function(response) {
            // Insert the HTML content into a specific element
            $('#position-body').html(response);
        },
        error: function(xhr, status, error) {
            // Handle errors
            console.error(error);
        }
    });
}