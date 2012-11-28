$(function(){

	//GERAL
	var janela = $(window);
	var larguraDisponivel = $(janela).innerWidth();
	var alturaDisponivel = $(janela).innerHeight();

	$('.html5lightbox').each(function(){
		$(this).attr({
			'data-width': larguraDisponivel -200,
			'data-height': alturaDisponivel -200,
		});
		
	});

	//THUMBS
	var larguraContainer = parseInt($('.container').width());	
	var larguraThumb = $('.thumb-video').innerWidth();
	var totalThumbs = parseInt(larguraContainer / larguraThumb);
	var larguraTotalThumbs = larguraThumb * totalThumbs;
	var sobra = larguraContainer - larguraTotalThumbs;
	var margin = sobra / totalThumbs;
	var marginLeft = margin / 2 + 'px';
	var marginRight = margin / 2 + 'px';

	//console.log(larguraContainer +' - '+ larguraThumb +' = '+ totalThumbs +' - '+ larguraTotalThumbs +' - '+ sobra  +' - '+ margin +' - '+ marginLeft);

	$('.thumb-video').each(function(){
		$(this).css({
			'margin-left': marginLeft,
			'margin-right': marginRight,
			'margin-bottom': '35px'
		});
	});

});
