jQuery(document).ready(function ($) {
	
	// Load posts
	const $grid = $('.blog-body-list');
	
	$('.blog-body-moreArticles').click(function(e){
		e.preventDefault();

		var buttonText = $(this).text();
		var button = $(this),
		    data = {
			'action': 'loadmore',
			'query': andrevenue_loadmore_params.posts, // that's how we get params from wp_localize_script() function
			'page' : andrevenue_loadmore_params.current_page
		};
 
		$.ajax({ // you can also use $.post here
			url : andrevenue_loadmore_params.ajaxurl, // AJAX handler
			data : data,
			type : 'POST',
			beforeSend : function ( xhr ) {
				button.text('Loading...'); // change the button text, you can also add a preloader image
			},
			success : function( data ){
				if( data ) { 
					button.text( buttonText ); 
					// $grid.find('.gutter-sizer').before(data).promise().done(function() {
					// 	init();
					// });
					var $items = $(data);
				  // append items to grid
				  $grid.append( $items )
				    // add and lay out newly appended items
				    .masonry( 'appended', $items );

					andrevenue_loadmore_params.current_page++;
 
					if ( andrevenue_loadmore_params.current_page == andrevenue_loadmore_params.max_page ) { 
						button.remove(); // if last page, remove the button
					}
 
					// you can also fire the "post-load" event here if you use a plugin that requires it
					// $( document.body ).trigger( 'post-load' );
				} else {
					button.remove(); // if no data, remove the button as well
				}
			}
		});
	});
	
});