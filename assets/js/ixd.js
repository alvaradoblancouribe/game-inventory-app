// Keep interaction layer (JS) separate from presentation layer (CSS) as much as possible.

$(document).ready(function() {
		$('.more').click(function() {
			$('.addendum').slideDown('slow');
			$(this).hide();
			console.log("Addendum is hidden. Let's show it again.");
		});
		$('.less').click(function() {
			$('.addendum').slideUp('slow');
			$('.more').show();
			console.log("Addendum is visible. Let's hide it again.")
		});
});
