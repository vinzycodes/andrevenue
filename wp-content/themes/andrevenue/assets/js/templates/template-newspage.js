// Option 1 - Loads new post when scrolling to bottom of page
$(document).ready(function() {
    let currentPage = 1;
    var canBeLoaded = true; // this param allows to initiate the AJAX call only if necessary
    var bottomOffset = 2000; // the distance (in px) from the page bottom when you want to load more posts
    const button = $('#load-more');
    $(window).scroll(function() {
     // Do currentPage + 1, because we want to load the next page
        if( $(document).scrollTop() > ( $(document).height() - bottomOffset ) && canBeLoaded == true ){
            currentPage++;
            $.ajax({
                type: 'POST',
                url: '/wp-admin/admin-ajax.php',
                dataType: 'json',
                data: {
                action: 'news_load_more',
                paged: currentPage,
                },
                beforeSend : function ( xhr ) {
                    canBeLoaded = false; // change the button text, you can also add a preloader image
                    button.text('Loading more news...');
                },
                success: function (res) {
                    if(currentPage >= res.max) {
                        button.hide();
                    }
                    $('.news-list').append(res.html);
                    canBeLoaded = true;
                }
            });
        }
    });

});

// Option 2 - Load new post when button is clicked
// $(document).ready(function() {
//     let currentPage = 1;
//     $('#load-more').on('click', function() {
//     currentPage++; // Do currentPage + 1, because we want to load the next page
//     const button = $('#load-more');
//     $.ajax({
//         type: 'POST',
//         url: '/wp-admin/admin-ajax.php',
//         dataType: 'json',
//         data: {
//         action: 'news_load_more',
//         paged: currentPage,
//         },
//         beforeSend : function ( xhr ) {
//             button.text('Loading...'); // change the button text, you can also add a preloader image
//         },
//         success: function (res) {
//             if(currentPage >= res.max) {
//                 button.hide();
//             }
//             $('.news-list').append(res.html);
//             button.text('Load more news');
//         }
//     });
//     });

// });