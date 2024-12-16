	(function($) {
		'use strict';
		$(function() {
			var body = $('body');
			var sidebar = $('.sidebar');
			
			// set active for navs
			function setActiveNavItem() {
				var currentUrl = window.location.href;
			
				$('.nav-item').removeClass('active');
				
				$('.nav-item').each(function() {
					var $navLink = $(this).find('.nav-link');
					var href = $navLink.attr('href');

					if (currentUrl === href) {
						if ($(this).parents('.sub-menu').length) {
							$(this).parents('.nav-item').last().addClass('active');
							$(this).closest('.collapse').addClass('show');
							$(this).find('.nav-link').addClass('active');
						} else {
							$(this).addClass('active');
						}
					}
				});
			}
			
			// call setActiveNavItem
			setActiveNavItem();

			// closes sub menus after opening another
			sidebar.on('show.bs.collapse', '.collapse', function() {
				sidebar.find('.collapse.show').collapse('hide');
				// sidebar.find('.collapse.show').closest('.nav-item').removeClass('active');
				$('.nav-item').removeClass('active');

			});

			// hides side bar
			$('[data-toggle="minimize"]').on("click", function() {
				if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
					body.toggleClass('sidebar-hidden');
				} else {
					body.toggleClass('sidebar-icon-only');
				}
			});
		});
	})(jQuery);