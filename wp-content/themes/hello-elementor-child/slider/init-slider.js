jQuery( document ).ready(function(){
	
	if ( jQuery( '.references__carousel .eael-post-grid' ) ) {
		jQuery( '.references__carousel .eael-post-grid' ).slick({
			autoplay: true,
			dots: false,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1, 
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 2
					}
				}, 
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	}
	
	if ( jQuery( '.gallery__carousel' ) ) {
		jQuery( '.gallery__carousel' ).slick({
			autoplay: false,
			dots: true,
			infinite: false,
			slidesToShow: 2,
			slidesToScroll: 1, 
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	}
	
});