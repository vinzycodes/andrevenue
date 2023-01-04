jQuery(document).ready(function ($) {
	
	// Init
	initGlossaryAlphabet();

	// Init functions
	function initGlossaryAlphabet() {

		if (!$('.glossary-body-block').length) return;

		let $glossaryBlock = $('.glossary-body-block');
		let $glossaryAlphabet = $('.glossary-body-alphabet');

		$glossaryBlock.each(function() {
			let currentBlock = $(this);
		  let title = $(this).find('.info-body-title');
		  let firstLetter = ($(title).text()[0]).toUpperCase();

		  if (!$('#'+firstLetter).length) {
		  	currentBlock.attr('id', firstLetter);

		  	$glossaryAlphabet.find('[href=#'+ firstLetter +']').parent().attr('disabled', false);
		  }
		});

	}


});
