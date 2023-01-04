/**
*
* Filters
*
*/

jQuery(document).ready(($) => {

  // Init
  initFiltersHideShow();

  // Init functions
  function initFiltersHideShow() {
		const $filterList = $('.component-filters-list');
		const $filterWrapper = $('.component-filters');

		$('.component-filters-title').click(function() {
			let ww = $(window).width();

			if ( ww > 767) {
				$filterWrapper.removeClass('closed');
				$filterList.slideDown(100)
			} else {
				$filterWrapper.toggleClass('closed');

				if ($filterWrapper.hasClass('closed')) {
					$filterList.slideUp(100);
				} else {
					$filterList.slideDown(100);
				}
			}
		})
	}
})