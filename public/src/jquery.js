$(document).ready(function() {
	var $window = $(window)
		, win_height_padded = $window.height() * 1.1;

		$window.on('scroll', revealOnScroll);

		function revealOnScroll() {
		    var scrolled = $window.scrollTop();
		    $(".revealOnScroll:not(.animated)").each(function () {
		      	var $this     = $(this),
		          	offsetTop = $this.offset().top;

		      	if (scrolled + win_height_padded > offsetTop) {
		      		if ($this.data('timeout')) {
		          		window.setTimeout(function(){
		            	$this.addClass('animated ' + $this.data('animation'));
		          		}, parseInt($this.data('timeout'),10));
		        	} else {
		          		$this.addClass('animated ' + $this.data('animation'));
		        	}
		      	}
		    });
		}
})