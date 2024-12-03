//initializes popovers//
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    })
});

//initializes toast//
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
})

//function to display toast with selected options//
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    //display toast//
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show()
}

function buyTickets() {
    displaySelectedMovieOptions();
}

//JQUERY//
//shrinks header when document is scrolled down by 80 pixels//
$(document).on("scroll", function () {
    //when webpage is scrolled down from top by 50px this if will trigger//
    if ($(document).scrollTop() > 50) {
        //once 50px requirement is met, ass nav-shrink class selector to //
        //html elements with nav class//
        $("nav").addClass("nav-shrink");
        //adjusts position of mobile drop menu to accomodate new height decrease//
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //removes nav-shrink class selector when user is at top of webpage//
        $("nav").removeClass("nav-shrink");
        $("div.navbar-collapse").css("margin-top", "14px");
    }

    //Close mobile menu when navigation link is clicked//
    $(document).ready(function () {
        $(".navbar-collapse").collapse('hide');
    });
});

