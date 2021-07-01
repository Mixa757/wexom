/*ВЫБОРКА КАТЕГОРИ*/
$(function() {
	let filter = $("[data-filter]");

	filter.on('click', function(event) {
		event.preventDefault();

		let cat = $(this).data('filter');

		if(cat == "all") {
			$("[data-cat]").removeClass('hide');

		} else {
			$("[data-cat]").each(function() {
				
				let workCat = $(this).data("cat");

				if(workCat != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}
			})
		}
	});
});


/*ВЫДЕЛЕНИЕ АКТИВНОЙ ССЫЛКИ В МЕНЮ*/
$(function() {
	$('.projects__menu a').on('click', function(){
	$('.projects__menu a').removeClass('brown');
	$(this).addClass('brown');
	})
})

/*АНИМИРОВАННЫЙ СЧЁТЧИК*/

function Counter() {
		$('.counters__title').each(function() {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 3000,
			easing: 'swing',
			step:function(now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
}

Counter();


/*ПОЛУЧЕНИЕ ПОЛОЖЕНИЕ ЭЛЕММЕНТА id="counters"*/

// $(function() {
// 	let headerTop = $('#header__top');
// 	let 
// });

// $(window).on('scroll load resize', function() {
// 	let counters = $('#counters'),  //получаем ID
// 		countersH = $(counters).innerHeight(); // Возвращает высоту элемента, включая внутренние отступы, в пикселях
// 		scrollPos = $(window).scrollTop();

// 		// console.log(scrollPos);
// 		if(scrollPos >= countersH) {
// 			Counter();
// 		} else if (scrollPos == countersH){
// 			return false;
// 		} else {

// 		}

// });

/*Smooth scroll*/

$(function() {
	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		console.log(elementOffset);

		$('html, body').animate ({
			scrollTop: elementOffset - 100 
		}, 1000);
	});
});



/*SLIDER*/
$(document).ready(function() {
	$(".header__intro").slick({
		slidesToShow:1,
		slidesToScroll:1,
		dots: true,
	});
});


/*SLIDER - 2*/
$(document).ready(function() {
	$(".project__col--posts").slick({
		slidesToShow:3,
		slidesToScroll:1,
		dots: false,
		responsive: [
    	
    	{
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
      		}
    	},
    	{
	      breakpoint: 800,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
      		}
    	},


    	]
	});
});

/*SCROLL*/

// let progress = document.getElementById('progressbar');
// let totalHeight = document.body.scrollHeight - window.innerHeight; 
 

// window.onscroll = function() {
// 	progressHeight = (window.pageYOffset / totalHeight) * 100 ;
// 	progress.style.height = progressHeight + "%";
// }


/*BURGER*/



const burger = document.getElementById('burger');
const nav = document.getElementById('header__nav');
// const link = document.getElementById('header__link');
const wrapper = document.getElementById('wrapper');
const body = document.body;



burger.addEventListener('click', event => {	
	if(body.classList.contains('show-nav')){
		closeNav();
	} else {
		showNav();
	}
});

nav.addEventListener('click', event => {	
	closeNav();
});


function showNav() {
	let mask = document.createElement('div');
	mask.classList.add('mask');
	mask.addEventListener('click', closeNav);
	wrapper.appendChild(mask);

	body.classList.add('show-nav');
}

function closeNav() {
	body.classList.remove('show-nav');
	document.querySelector('.mask').remove();
}
 

/*fixed header__top*/

window.addEventListener('scroll', function() {
	const headerTop = document.querySelector('.header__top');
	headerTop.classList.toggle('fixed', window.scrollY > 0);
})

	


/*ВИДЕО*/
let blockPrev = $('.block__prev');
let prevCenter = $('.block__prevcenter');
let videoLink = $('.block__prevlink');
$(videoLink).on('click', function() {
	event.preventDefault();
	prevCenter.css("z-index", "0");
	blockPrev.css("z-index", "0");
});
 


 /*SWIPER*/

 var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },

    loop: true,
  });