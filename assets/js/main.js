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
	var module = {
		active: "",
		open: false
	}

	var moduleState = function (act) {
		if (module.active === "info" || $('.fa-envelope-o--clicked').hasClass('fa-close')) {
			$('.fa-envelope-o--clicked').addClass('fa-envelope-o').removeClass('fa-close');
			$('.fa-info--clicked').removeClass('fa-info').addClass('fa-close');
			$('.info-container__about').show();
			$('.info-container__form').hide();
		} else if (module.active === "mail" || $('.fa-info--clicked').hasClass('fa-close')) {
			$('.fa-info--clicked').removeClass('fa-close').addClass('fa-info');
			$('.fa-envelope-o--clicked').removeClass('fa-envelope-o').addClass('fa-close');
			$('.info-container__about').hide();
			$('.info-container__form').show();
		}
	}

	$('.fa-info--clicked').click(function() {
		$('.slide-module, .call-to-action').addClass('show');
		module.open = true;
		module.active = "info";
		moduleState("info");
	});

	$('.fa-envelope-o--clicked').click(function() {
		$('.slide-module, .call-to-action').addClass('show');
		module.open = true;
		module.active = "mail";
		moduleState("mail");
	});

	/*if ($('.fa-info--clicked').hasClass('fa-close')) {
		$('.fa-info--clicked').click(function(){
			module.active = "info-close";
			moduleState("info-close");
		});
	}

	if ($('.fa-envelope-o--clicked').hasClass('fa-close')) {
		$('.fa-envelope-o--clicked').click(function(){
			module.active = "mail-close";
			moduleState("mail-close");
		});
	}*/

});
