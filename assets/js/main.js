$(document).ready(function(){

	/* animation for switching between get notified and mail list input
	*/
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
  var info = $('.fa-info--clicked');
	var mail = $('.fa-envelope-o--clicked');

	info.click(function(){
		if($(this).hasClass('fa-close')) {
			$(this).removeClass('fa-close').addClass('fa-info');
			$('.slide-module, .call-to-action, .main-content, .main-content__title, .main-content__subtitle').removeClass('show');
			return;
		}
		info.removeClass('fa-info').addClass('fa-close');
		mail.removeClass('fa-close').addClass('fa-envelope-o');
		$('.info-container__about').show();
		$('.info-container__form').hide();
		$('.slide-module, .call-to-action, .main-content, .main-content__title, .main-content__subtitle').addClass('show');
	});

	mail.click(function(){
		if($(this).hasClass('fa-close')) {
			$(this).removeClass('fa-close').addClass('fa-envelope-o')<
			$('.slide-module, .call-to-action, .main-content, .main-content__title, .main-content__subtitle').removeClass('show');
			return;
		}
		info.removeClass('fa-close').addClass('fa-info');
		mail.removeClass('fa-envelope-o').addClass('fa-close');
		$('.info-container__about').hide();
		$('.info-container__form').show();
		$('.slide-module, .call-to-action, .main-content, .main-content__title, .main-content__subtitle').addClass('show');
	});
});
