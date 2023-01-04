/**
 *
 * Header
 *
 */

jQuery(document).ready(function ($) {

	// Global variables
	const $_header = $('.header');

	// Init
	initHeaderScroll();
	initHeaderOpenClose();
	initDropdownEvents();

	// Init functions
	function initHeaderScroll() {

		// Events 
		$(window).on('scroll load resize', () => {
			changeHeaderClass();
		})

		// Init scroll functions
		function changeHeaderClass() {
			let isTransparent = $_header.hasClass('header-transparent');
			let screenWidth = $(window).width();
			let scrollTop = $(window).scrollTop();
			let scrollStartPos = 1;

			// Define scroll start position for Transparent header
			if (isTransparent) {
				if (screenWidth > 991) {
					scrollStartPos = 28;
				} else {
					scrollStartPos = 1;
				}
			}
			
			if (scrollTop >= scrollStartPos) {
				$_header.addClass('scrolled');
			} else {
				$_header.removeClass('scrolled');
			}
		}
	}

	function initHeaderOpenClose() {
		let $_toggler = $('.header__toggler');

		// Click event
		$_toggler.on('click', (e) => {
			e.preventDefault();
			$_header.toggleClass('opened');

			// Close dropdowns on menu close
			if ($('.dropdown-opened').length) {
	 			$_header.find('.dropdown-opened').each(function() {
					$(this).removeClass('dropdown-opened');
				})
			}
		});
	}

	function initDropdownEvents() {
		let $_dropdown = $_header.find('.dropdown');

		// Click event
		$_dropdown.on('click', function(e) {

			if ( $(window).width() > 991 ) return;

			let $_this = $(this);
			let target = $(e.target);

			if ( target.is('.dropdown') || target.is('.dropdown > a')) {
				// Close siblings dropdowns
				$_this.siblings('.dropdown-opened').each(function() {
					$(this).removeClass('dropdown-opened');
				});

				// If dropdown not opened
				if (!$_this.hasClass('dropdown-opened')) {
					e.preventDefault();
					$_this.addClass('dropdown-opened');
				} else {
					console.log('link');
				}
			}
		});

		// Document click
		$(document).on('click', function(e) {
			let target = $(e.target);

			if (!target.is('.dropdown') && !target.is('.dropdown > a') && $('.dropdown-opened').length) {
				$('.dropdown-opened').each(function() {
					$(this).removeClass('dropdown-opened');
				})
			}
		});
	}

});









