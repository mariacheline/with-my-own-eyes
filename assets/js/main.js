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

	var module = {
		active: "",
		open: false
	}

	var state = function (act) {
		if (module.active === "info") {
			$('.fa-info--clicked').toggleClass('fa-info fa-close');
			$('.slide-module, .call-to-action').toggleClass('show');
			module.open = true;
			$('.info-container__about').show();
			$('.info-container__form').hide();
		} else if (module.active === "mail") {
			$('.fa-envelope-o--clicked').toggleClass('fa-envelope-o fa-close');
			$('.slide-module, .call-to-action').toggleClass('show');
			module.open = true;
			$('.info-container__about').hide();
			$('.info-container__form').show();
		}
	}

	$('.fa-info--clicked').click(function() {
		module.active = "info";
		state("info");
	});

	$('.fa-envelope-o--clicked').click(function() {
		module.active = "mail";
		state("mail");
	});

});
