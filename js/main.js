// Logo animate

$(function() {
	$('#logo .a2').attr('class', 'a2 animate');
	$('#logo .r2').attr('class', 'r2 animate');
	$('#logo .o').attr('class', 'o animate');
	$('#logo .r').attr('class', 'r animate');
	$('#logo .u').attr('class', 'u animate');
	$('#logo .a').attr('class', 'a animate-a');
});

// !SESSIONSTORAGE for storing session roles!

$('.logout').on('click', function() {
	sessionStorage.removeItem('role');
});

$('.unregistered').on('click', function() {
  sessionStorage.role = 'unregistered';
});

$(window).on('hashchange load', function(e){
  $(function(){

	  if (sessionStorage.role == 'student') {
		  hideNavItems();
		  // student header nav links
		  $('.page-2-link, .page-3-link, .page-4-link, .page-10-link, .search, .logout').show();

	  }else if (sessionStorage.role == 'teacher') {
		  hideNavItems();
		  // teacher header nav links
		  $('.page-4-link, .page-5-link, .search, .page-11-link, .logout, .page-9-link').show();

	  }else if (sessionStorage.role == 'admin') {
		  hideNavItems();
		  // admin header nav links
		  $(' .page-4-link, .page-6-link, .page-12-link, .search, .logout').show();

	  }else if (sessionStorage.role == 'unregistered') {
		  hideNavItems();
		  // unregistered header nav links
		  $('.page-1-link, .page-4-link, .search, .logout').show();
		  $('.logout a').text('sign in');

	  }

  });
});

function hideNavItems(){
  $('nav ul li, .nav-desktop-indicator ul li, .slideout ul li').hide();
}

// See role while working
$('#role').text(sessionStorage.role)

// END - SESSIONSTORAGE

// ____________________________________

// START - NAV FLEX

$(function(){

	$(function(){
   	setTimeout(function(){
			if(

				$('nav.desktop ul li').filter(function() {
					return $(this).css('display') !== 'none';
				}).length <= 4

			){
				$('nav.desktop ul').removeClass('flex-between');
				$('nav.desktop ul').addClass('flex-around');
				$('.nav-desktop-indicator ul').removeClass('flex-between');
				$('.nav-desktop-indicator ul').addClass('flex-around');
			}else{
			};
		}, 600);
   });

});

// END - NAV FLEX

// ____________________________________

// START - SEARCHBOX
$('.search-press, .search-press-mobile').on('click', function(){
		$('.searchbox').addClass('open');
		$('li.search').addClass('activeColor');
		$('nav.mobile .nav-items').addClass('search-active');
		$('.blur-trigger, .blur-trigger-mobile').show();
		$('.search-icon').hide();
		$('.close-icon').show();
		$('.searchbox input').focus();
});

$('.searchbox input').on('blur', function(){
	$('.searchbox').removeClass('open');
	$('li.search').removeClass('activeColor');
	$('nav.mobile .nav-items').removeClass('search-active');
	$('.search-icon').show();
	$('.close-icon').hide();
	$('.blur-trigger, .blur-trigger-mobile').hide();
});

// END - SEARCHBOX

// ____________________________________

// START - HAMBURGER

$(function(){
	$('.hamburger').click(function(){
		if($('.hamburger').hasClass('hamburger') || $('.hamburger').hasClass('active-out')){
			$('.slideout-wrap').addClass("active").removeClass("active-out");
		}else{
			$('.slideout-wrap').addClass("active-out").removeClass("active");
		}
	});
});

$(".slideout ul li a, .body-overlay").click(function(){
	$(".slideout-wrap").addClass("active-out").removeClass("active");
});

// END - HAMBURGER

// ____________________________________

// LIKE - DISLIKE

$('.controllers .icons .like').on('click', function(){
	$('.dislike').removeClass('checked');
	$('.like').addClass('checked');
});

$('.controllers .icons .dislike').on('click', function(){
	$('.like').removeClass('checked');
	$('.dislike').addClass('checked');
});

$('.controllers .icons .favorite').on('click', function(){
	$('.favorite').toggleClass('checked');
});

// END LIKE - DISLIKE

// ____________________________________

// fetch subpage from Url and display as title and in header and tab

var pageBaseTitle = "Aurora";
var pageDivider = "#/";
var ttl = document.getElementById("title");

function getUrl(){
	var url = window.location.href.split(pageDivider)[1];
	return (typeof url == 'undefined' ? page1 : url);
}
String.prototype.ucFirst = function(){
	 return this.charAt(0).toUpperCase() + this.slice(1);
}
function urlTitle() {
	if(
		getUrl() == page1 ||
		getUrl() == page2 ||
		getUrl() == page3 ||
		getUrl() == page4 ||
		getUrl() == page5 ||
		getUrl() == page6 ||
		getUrl() == page9 ||
		getUrl() == page8 ||
		getUrl() == page10 ||
		getUrl() == page11
	){
		switch (url = window.location.href.split(pageDivider)[1]) {
			case page1:
				ttl.textContent = getUrl().replace('-', ' ');
				document.title = pageBaseTitle + " - " + getUrl().ucFirst();
				break;
			case page19:
				ttl.textContent = 'Home';
				document.title = pageBaseTitle + " - " + 'Home';
				break;
			case page2:
				ttl.textContent = 'your lectures';
				document.title = pageBaseTitle + " - " + 'Your lectures';
				break;
			case page3:
				ttl.textContent = 'home';
				document.title = pageBaseTitle + " - " + 'Home';
				break;
			case page4:
				ttl.textContent = getUrl().replace('-', ' ');
				document.title = pageBaseTitle + " - " + getUrl().ucFirst();
				break;
			case page5:
				ttl.textContent = 'home';
				document.title = pageBaseTitle + " - " + 'Home';
				break;
			case page6:
				ttl.textContent = 'home';
				document.title = pageBaseTitle + " - " + 'Home';
				break;
			case page9:
				ttl.textContent = 'your lectures';
				document.title = pageBaseTitle + " - " + 'Your lectures';
				break;
			case page8:
				ttl.textContent = 'profile';
				document.title = pageBaseTitle + " - " + 'profile';
				break;
			case page10:
				ttl.textContent = 'profile';
				document.title = pageBaseTitle + " - " + 'profile';
				break;
			case page11:
				ttl.textContent = 'profile';
				document.title = pageBaseTitle + " - " + 'profile';
				break;
		}
	} else {
		ttl.textContent = ''
		document.title = pageBaseTitle
	}
}

$(function(){
	urlTitle();
	setActiveMenuItem();
});

window.addEventListener("hashchange", function(){
	urlTitle();
	setActiveMenuItem();
	$('body').animate({scrollTop:0}, '500', 'swing');
});

// See which subpage is currently active in the navigation

function setActiveMenuItem(){
	switch (url = window.location.href.split(pageDivider)[1]) {
		case page19:
			removeActiveClass();
			//document.getElementById('page-one-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('.nav-desktop-indicator .page-1-link').addClass('active');
			break;
		case page2:
			removeActiveClass();
			//document.getElementById('page-two-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('.nav-desktop-indicator .page-2-link').addClass('active');
			break;
		case page3:
			removeActiveClass();
			//document.getElementById('page-three-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('.nav-desktop-indicator .page-3-link').addClass('active');
			break;
		case page4:
			removeActiveClass();
			//document.getElementById('page-four-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('.nav-desktop-indicator .page-4-link').addClass('active');
			break;
		case page5:
			removeActiveClass();
			//document.getElementById('page-five-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('.nav-desktop-indicator .page-5-link').addClass('active');
			break;
      case page6:
			removeActiveClass();
			//document.getElementById('page-five-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('.nav-desktop-indicator .page-6-link').addClass('active');
			break;
		case page9:
			removeActiveClass();
			//document.getElementById('page-five-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('.nav-desktop-indicator .page-9-link').addClass('active');
			break;
		default:
			removeActiveClass();
	};
}

function removeActiveClass(){
	$('.nav-desktop-indicator .page-1-link').removeClass('active');
	$('.nav-desktop-indicator .page-2-link').removeClass('active');
	$('.nav-desktop-indicator .page-3-link').removeClass('active');
	$('.nav-desktop-indicator .page-4-link').removeClass('active');
	$('.nav-desktop-indicator .page-5-link').removeClass('active');
   $('.nav-desktop-indicator .page-6-link').removeClass('active');
	$('.nav-desktop-indicator .page-9-link').removeClass('active');
	$('.nav-desktop-indicator .search').removeClass('active');
};

// ____________________________________

// START | PLAY VIDEO - ETC

$(function(){

	$('.tabs').click(function(e){

		if(e.target.id == 'slide-button' ){

			if($('#slides').css('display') == 'none'){
				$('#wiki').hide();
				$('#slides').fadeIn(300);
				wikiHeight();
				slideHeight();
				$('.tabs').removeClass('active');
				$('#slide-button').addClass('active');
				$('#wiki-button').removeClass('active');
			}

		} else if (e.target.id == 'wiki-button' ) {

			if($('#wiki').css('display') == 'none'){
				$('#wiki').fadeIn(300);
				$('#slides').hide();
				wikiHeight();
				slideHeight();
				$('.tabs').addClass('active');
				$('#slide-button').removeClass('active');
				$('#wiki-button').addClass('active');
			}

		}
	});

})

$(window).resize(function(){
	wikiHeight();
	slideHeight();
});

function wikiHeight(){
	$('#wiki').css({
		'height' : parseInt($('#lectureVideo').css('height')) - parseInt($('.tabs').css('height')) + 'px',
	})
}

function slideHeight(){
	$('#slides').css({
		'height' : parseInt($('#lectureVideo').css('height')) - parseInt($('.tabs').css('height')) - 20 + 'px',
		'marginBottom' :  20 + 'px',
	})
}

// END | PLAY VIDEO - ETC

// ____________________________________
