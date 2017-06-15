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

	$('.fa-info--clicked').click(function() {
		$(this).toggleClass('fa-info fa-close');
		$('.slide-module').toggleClass('show');
	})

	$('.fa-envelope-o--clicked').click(function(){
		$(this).toggleClass('fa-envelope-o fa-close');
		$('.slide-module').toggleClass('show');
		$('.info-container__about, .info-container__form').toggleClass('show__info-content');
	});

	var module = {
    active: "",
    open: false
};

$(".fa-info--clicked").click(function(){
    if(module.open){
        if(module.active === "info"){
            $(this).toggleClass('fa-info fa-close');
            $('.slide-module').toggleClass('show');
            module.active = "";
            module.open = false;
        }else{
            $(this).toggleClass('fa-info fa-close');
            module.active = "info";
        }
    }else{
        $(this).toggleClass('fa-info fa-close');
        $('.slide-module').toggleClass('show');
        module.active = "info";
        module.open = true;
    }
});

$(".fa-envelope-o--clicked").click(function(){
    if(module.open){
        if(module.active === "mail"){
            $(this).toggleClass('fa-envelope-o fa-close');
            $('.slide-module').toggleClass('show');
            $('.info-container__about, .info-container__form').toggleClass('show__info-content');
            module.active = "";
            module.open = false;
        }else{
            $(this).toggleClass('fa-info fa-close');
            module.active = "mail";
        }
    }else{
        $(this).toggleClass('fa-envelope-o fa-close');
        $('.slide-module').toggleClass('show');
        $('.info-container__about, .info-container__form').toggleClass('show__info-content');
        module.active = "mail";
        module.open = true;
    }
});
});
