$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
});

window.addEventListener('scroll', function(){
	if (window.scrollY < window.innerHeight*.75){
		activeLink(0);
	}
	else if (window.scrollY < window.innerHeight*1.75){
		activeLink(1);
	}
	else if (window.scrollY < window.innerHeight*2.75){
		activeLink(2);
	}
	else{
		activeLink(3);
	}
});

var $navLink = $('.navLink');

function activeLink(i){	
	$navLink.removeClass('active');
	$($navLink[i]).addClass('active');
}

$('.fImage').html('');

$('.gWrapper').on('click', 'div', function(){
	$('.fImage').css('background-image', '' + $(this).css('background-image'));
});

$('.nav ul li').click(function(){
	$('.nav ul li').toggleClass('open');
	$('.navLink').click(function(){
		$('.nav ul li').removeClass('open');
	});
});