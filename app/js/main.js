$(document).ready(function(){
	var $grid = $('.grid').masonry();
	// open close card
	$('.open-js').click(function(){
		if ($('.element-item').hasClass('open')) {
			$('.element-item').removeClass('open'); //closed open card
			$(this).parent().addClass('open');// opend current card
			$grid.masonry('layout');// re masonry
		} else {
			$(this).parent().toggleClass('open');//toggle opend card
			$grid.masonry('layout');// re masonry
		};
	});

	// next prew card
	$('.next-js').click(function(){
		$(this).parent().removeClass('open');
		$(this).parent().next().addClass('open');
		$grid.masonry('layout');// re masonry
	});
	$('.prev-js').click(function(){
		$(this).parent().removeClass('open');
		$(this).parent().prev().addClass('open');
		$grid.masonry('layout');// re masonry
	});


	console.log($('.element-item').hasClass('open'));
});

