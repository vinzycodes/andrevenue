jQuery(document).ready(function ($) {
	
	// Init
	initMasonry();

	// Init functions
	function initMasonry() {

		const $grid = $('.about-team-list');

		$grid.imagesLoaded(function() {
			$grid.masonry({
				itemSelector: '.about-teamMember',
				gutter: '.gutter-sizer',
				percentPosition: true,
				horizontalOrder: true,
			});
		})
	}


});
