jQuery(document).ready(function ($) {
	
	// Init
	showCardText()
	initMasonry('.masonry-list');

	// Init functions

	function initMasonry(listClassName) {
		if ( !$(listClassName).length ) return;

		const $grid = $(listClassName);

		$grid.imagesLoaded(function() {
			$grid.masonry({
				itemSelector: '.case-body-listItem',
				gutter: '.gutter-sizer',
				percentPosition: true,
				horizontalOrder: true,
			});
		})
	}

	function showCardText() {
		let $card = $('.case-body-listItem-image');

		$card.on('click', function(e) {
			e.preventDefault();
			let ww = $(window).width();
			let $thisCard = $(this);

			if (ww > 767) return;

			$thisCard.toggleClass('textShowed');

		});
	}

});
