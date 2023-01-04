jQuery(document).ready(function ($) {
	
	// Init
	initFilter();
	filterHideShow();

	function initFilter() {
		const $filterWrapper = $('.cases-body-filter-list');
		const $filters = $filterWrapper.find('input[type="checkbox"]');
		const $itemsWrapper = $('.cases-body-list');
		const $items = $itemsWrapper.find('.cases-body-listItem');
		
		let isFiltered = false;
		let cbChecked = new Set();

		// On load
		filterOnLoad();

		// Adjust list padding bottom
		addRemoveListPaddingBottom();

		// On change filter event
		$($filters).on('change', function() {
			// Current checkbox
			let cb = $(this);

			// Update filtering status
			isFiltered = onCheckboxCheck(cb);

			// Scroll to cases body
			scrollToCasesBody();

			// Filter actions
			if (isFiltered) {	
				$filterWrapper.removeClass('unfiltered');
				filtering();
			} else {
				resetFilters();
			}
		});

		// Helpers
		function scrollToCasesBody() {
			$('html, body').animate({
	      scrollTop: $(".cases-body").offset().top - 100
	    }, 500);
		}

		function filtering() {
			// Vars
			let cbCheckedArray = Array.from(cbChecked);
			let $checkedItems = [];
			let $uncheckedItems = [];

			// Fading out all items
			$items.fadeOut(100).promise().done(function() {

				// Filtering items on checked and unchecked
				$items.each(function() {
					let $currentItem = $(this);
					let $filterStr = $currentItem.data('filter').replace(/\s/g, '');
					let $filterArr = $filterStr.split(',');

					if ( cbCheckedArray.find( checkedValue => $filterArr.indexOf(checkedValue) != -1 ) ){
						$checkedItems.push($currentItem);
					} else {
						$uncheckedItems.push($currentItem);
					}
				})
				.promise().done(function() {
					// Append unchecked items to the end of list
					$($uncheckedItems).each(function() {
						$(this).appendTo('.cases-body-list');
					})
					.promise().done(function() {
						// Fading in the checked items
						$($checkedItems).each(function() {
							$(this).fadeIn(100);
						})
						.promise().done(function() {
							addRemoveListPaddingBottom();
						});
					});
				});
			});
		}

		function filterOnLoad() {
			let checkedOnLoadInputs = $filterWrapper.find('input[type="checkbox"]:checked');

			if ( !checkedOnLoadInputs.length ) return;
			
			isFiltered = true;
			
			$(checkedOnLoadInputs).each(function() {
				cbChecked.add( $(this).val() );
			});

			filtering();
		}

		function resetFilters() {
			$items.sort( function(a, b) {
				return parseInt( $(a).data('order') ) > parseInt( $(b).data('order') );
			}).appendTo('.cases-body-list').promise().done(function() {
				// Show all items
				$items.fadeIn(100);

				// Filter wrapper class
				$filterWrapper.addClass('unfiltered');
			})

			
		}

		function onCheckboxCheck(cb) {
			// On input change
			let $this = cb;
			let filterValue = $this.val();

			// Add or remove value from cbChecked Set
			if ($this.is(':checked')) { // Adding value to cbChecked
				cbChecked.add(filterValue);
			} else { // Remove value from cbChecked
				cbChecked = new Set(Array.from(cbChecked).filter( cbValue => cbValue != filterValue));
			}

			// Return true if list is filtered and false if cbChecked is empty
			if (cbChecked.size) {
				return true;
			} else {
				return false;
			}
		}

		function addRemoveListPaddingBottom() {
			if ( !($('.cases-body-listItem:visible').length % 2 ) ) {
				$('.cases-body-list').addClass('plusPaddingBottom');
			} else {
				$('.cases-body-list').removeClass('plusPaddingBottom');
			}
		}
	}

	function filterHideShow() {
		const $filterList = $('.cases-body-filter-list');
		const $filterWrapper = $('.cases-body-filter');

		$('.cases-body-filter-title').click(function() {
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


});
