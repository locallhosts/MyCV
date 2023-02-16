
/*

change the background to black view on click event on the the wrap with profile view on the index file


*/
document.addEventListener("DOMContentLoaded", function(event) {
    const wrapper = document.querySelector(".wrapper");
    const mode = document.querySelector(".mode");
    const card = document.querySelector(".card");
    
    mode.onclick = function(){
        wrapper.classList.toggle('dark');
        card.classList.toggle('dark-card');
        mode.classList.toggle('dark-mode');
        
        
    }
});


/*

the script action for mousein event on portfolio


*/

$('[data-toggle="collapsible-nav"]').on('click', function(e){
    var target = ($(this).data('target'));
    $('#' + target).toggleClass('show');
});

$(document).ready(function(){
    if(window.innerWidth >= 992) {
        $('#collapsible-nav').addClass('show');  //Show navigation menu in bigger screens by default.
    } else {
        $('#collapsible-nav').removeClass('show');
    }

    if ($('.hover-box').length) {
        setHoverBoxPerspective();
    }
});

$(window).resize(
    function() {
        if ($('.hover-box').length) {
            setHoverBoxPerspective();
        }
    }
);

function setHoverBoxPerspective() {
    $('.hover-box').css({
        'perspective': function () {
            return Math.max( $(this).width(), $(this).height() ) * 2 + 50;
        }
    });
}


var classNames = ['in-up', 'in-right', 'in-down', 'in-left', 'out-up', 'out-right', 'out-down', 'out-left']; // Animation classes.

$('.hover-box').hover(
    function (event) {
        var direction = "up";
        if(jQuery.fn.entry){ //Check if entry js file is loaded.
            direction = $(this).entry({ e: event }); // Get mouse in direction.
        }

        $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
        $(this).addClass("in-" + direction); //Add mouse in animation

    }, 
    
    function (event) {

        var direction = "up";
        if(jQuery.fn.entry){
            direction = $(this).entry({ e: event }); // Get mouse out direction.
        }

        $(this).removeClass(classNames.join(" "));
        $(this).addClass("out-" + direction); //Add mouse out animation

    }
);