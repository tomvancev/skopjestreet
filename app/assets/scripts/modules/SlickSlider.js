import $ from 'jquery';
class SlickSlider { 
	constructor(){  

		$('.ssf-gallery').slick({
			arrows: true,
			autoplay:true,
			dots:true

		});
		
	}


}

export default SlickSlider;

