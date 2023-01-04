// jQuery(document).ready(function ($) {
	
// 	// Init
// 	initMasonry();

// 	// Init functions
// 	function initMasonry() {

// 		const $grid = $('.blog-body-list');

// 		// On window resize/load
// 		$(window).on('resize load', function() {
// 			let ww = $(window).width();

// 			if (ww < 768) {
// 				destroy();
// 			} else {
// 				clearTimeout(window.resizedFinished);
			
// 		    window.resizedFinished = setTimeout(function(){
// 		      $grid.imagesLoaded(function() {
// 						init();
// 					})
// 		    }, 200);
// 			}
// 		});

// 		// Destroy masonry
// 		function destroy() {
// 			let hasMasonry = $grid.data('masonry');

// 			if (!hasMasonry) return;

// 			$grid.masonry('destroy');
// 			$grid.removeData('masonry');
// 		}

// 		// Init masonry
// 		function init() {
// 			let hasMasonry = $grid.data('masonry');

// 			if (hasMasonry) return;

// 			$grid.masonry({
// 				itemSelector: '.blog-body-article',
// 				gutter: 30,
// 				percentPosition: true,
// 				horizontalOrder: true
// 			});
// 		}
		
// 	}


// });
