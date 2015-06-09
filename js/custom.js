// Eventify, Responsive HTML5 Event Template - Version 1.1 //

// Javascripts //
$(document).ready(function () {

	// Top Bar //
	$('.top-bar nav').addClass('hidden');
	$('.navbar.main-nav button').on('click', function() {
		$('.navbar.main-nav nav.hidden .nav-collapse').removeClass('collapse');
	});
	$('.navbar.main-nav nav.hidden .nav-collapse ul li').on('click', function() {
		if(!$('.navbar.main-nav button').hasClass('collapsed')) {
			$('.navbar.main-nav button').addClass('collapsed');
			$('.navbar.main-nav nav.hidden .nav-collapse').removeClass('in');
			$('.navbar.main-nav nav.hidden .nav-collapse').attr('style', 'height: 0px');
		}
	});
	$('.menu-link').on('click', function (
		e) {
		e.preventDefault();
		$('.top-bar nav').toggleClass(
			'hidden');
	});
	$(window).scroll(function () {
		if ($(window).scrollTop() <= 50) {
			$('.top-bar').removeClass('alt')
		} else {
			$('.top-bar').addClass('alt')
		}
	});
	$(window).load(function () {
		if ($(window).scrollTop() <= 30) {
			$('.top-bar').removeClass('alt')
		} else {
			$('.top-bar').addClass('alt')
		}
	});
	//
	$('#mainnav .nav a').click(function (e) {
		e.preventDefault();
		var des = $(this).attr('href');
		if ($('.navbar').hasClass(
			'in')) {
			$('.navbar .btn-navbar').trigger(
				'click');
		}
		goToSectionID(des);
	})

	// Local Scroll //
	$('#mainnav li').localScroll({
		duration: 1000
	});
	$('.logo').localScroll({
		duration: 1000
	});

	// One Page Nav //
	$('.top-bar').onePageNav({
		currentClass: 'current',
		filter: ':not(.external)'
	});

	// Calculate the viewport height //
	var viewHeight = $(window).height();
	$("#intro").css({
		'height': viewHeight
	});
	$(window).on('resize', function () {
		var viewHeight = $(window).height();
		$("#intro").css({
			'height': viewHeight
		});
	});

	// Flexslider
	// Can also be used with $(document).ready()
	$('.flexslider').flexslider({
		animation: "slide"
	});

	// Tabs //
	$('#schedule-tabs a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	})

	// Tooltip //
	$("[rel=tooltip]").tooltip();
	$("[data-rel=tooltip]").tooltip();

	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#intro').parallax("50%", 0.1);
	$('#venue').parallax("50%", 0.02);

	// Toggle //
	$('.toggle-item-title').click(function () {
		$(this).next().slideToggle();
		$(this).toggleClass(
			'ui-state-active');
	});

	// end
})
