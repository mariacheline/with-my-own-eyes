$(document).ready(function(){

	/* animation for notify selection */
	$('.main-content__btn').click(function(){
		$(this).data('clicked', true);

		if($('.main-content__btn').data('clicked')){
			$('.main-content__subtitle, .main-content__btn').hide();

			$('.mail-list').css('display', 'flex');
		}

		$('.mail-list__close-icon').click(function(){
			$(this).data('clicked', true);

			if($('.mail-list__close-icon').data('clicked')){
				$('.main-content__subtitle, .main-content__btn').css('animation-delay', '0s').show();

				$('.mail-list').css('display', 'none');
			}
		});
	});

/** slide module script **/

	/*var moduleState = function (active) {
		if (active === "info" || $('.fa-envelope-o--clicked').hasClass('fa-close')) {
			console.log(active);
			$('.fa-envelope-o--clicked').removeClass('fa-close').addClass('fa-envelope-o');
			$('.fa-info--clicked').removeClass('fa-info').addClass('fa-close');
			$('.slide-module, .call-to-action').addClass('show');
			$('.info-container__about').show();
			$('.info-container__form').hide();
		} else if (active === "mail" || $('.fa-info--clicked').hasClass('fa-close')) {
			console.log(active);
			$('.fa-info--clicked').removeClass('fa-close').addClass('fa-info');
			$('.fa-envelope-o--clicked').removeClass('fa-envelope-o').addClass('fa-close');
			$('.slide-module, .call-to-action').addClass('show');
			$('.info-container__about').hide();
			$('.info-container__form').show();
		} else if (($('.fa-info--clicked').hasClass('fa-close') || $('.fa-envelope-o--clicked').hasClass('fa-close')) && $('.slide-module, call-to-action').hasClass('show')) {
			console.log(active);
			$('.fa-close').click(function(){
				$('.slide-module, .call-to-action').removeClass('show');
			})
		}
	}

	$('.fa-info').click(function() {
		moduleState("info");
	});

	$('.fa-envelope-o').click(function() {
		moduleState("mail");
	});*/


  var info = $('.fa-info--clicked');
	var mail = $('.fa-envelope-o--clicked');

	if (info.hasClass('fa-info')) {
		info.click(function(){
			info.removeClass('fa-info').addClass('fa-close');
			mail.removeClass('fa-close').addClass('fa-envelope-o');
			$('.info-container__about').show();
			$('.info-container__form').hide();
			$('.slide-module, .call-to-action').addClass('show');
		});
	}

	if (mail.hasClass('fa-envelope-o')) {
		mail.click(function(){
			mail.removeClass('fa-envelope-o').addClass('fa-close');
			info.removeClass('fa-close').addClass('fa-info');
			$('.info-container__about').hide();
			$('.info-container__form').show();
			$('.slide-module, .call-to-action').addClass('show');
		});
	}
});
