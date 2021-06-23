/*!
GENERAL FUNCTIONS
Theme Name: Intelligence 2.0
Author: Integra IT
Author URI: https://integraite.com.mx/
Version: 2.0.0
*/
import $ from 'jquery'
$(document).ready( function() {
	/* Layout
	--------------------------------------------- */
	// Mobile menu toggler
	$('.btn-toggle').click( function(){
		$('.main-navigation .menu').toggleClass('toggled');
	})

	// Sticky booking widget
	$(window).scroll( function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 150) {
			$('#booking-widget').removeClass('fwidth');
			$('#booking-form').removeClass('show');
			$('#booking-toggler').css('display','block');
		}
		else {
			$('#booking-widget').addClass('fwidth');
			$('#booking-form').addClass('show');
			$('#booking-toggler').css('display','none');
		}
	});

	/* Tooltips a& Popovers
	--------------------------------------------- */
	// Tooltips
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})

	// Popovers
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl)
	})

	/* Togglers
	--------------------------------------------- */
	// Widget Toggler
	$('#booking-toggler').click( function() {
		$('#booking-form').toggleClass('show');
	})

	// Notes button toggler
	$('.btn-notes').click( function() {
		$('.list-container').toggleClass('toggled');
	})
	
	$('#btn-filters').click( function() {
		$('#filters-container').toggleClass('toggled');
	});


	// Custom Dropdown
	$('.dropdown-submenu a.has-children').on("click", function(e){
		$(this).next('ul').toggle();
		e.stopPropagation();
		e.preventDefault();
	});

	// Wizard events
	// btnGuest = $('#btn-guestinfo');
	// btnSale = $('#btn-saleinfo');
	// btnBenefits = $('#btn-benefinfo');
	// btnAccess = $('#btn-accessinfo');
	// btnVat = $('#btn-vatinfo');

	// btnGuest.click( function() {
	// 	$(this).addClass('active');
	// 	btnSale.removeClass('active');
	// 	btnBenefits.removeClass('active');
	// 	btnAccess.removeClass('active');
	// 	btnVat.removeClass('active');
	// });

	// btnSale.click( function() {
	// 	$(this).addClass('active');
	// 	btnGuest.removeClass('active');
	// 	btnBenefits.removeClass('active');
	// 	btnAccess.removeClass('active');
	// 	btnVat.removeClass('active');
	// });

	// btnBenefits.click( function() {
	// 	$(this).addClass('active');
	// 	btnGuest.removeClass('active');
	// 	btnSale.removeClass('active');
	// 	btnAccess.removeClass('active');
	// 	btnVat.removeClass('active');
	// });

	// btnAccess.click( function() {
	// 	$(this).addClass('active');
	// 	btnGuest.removeClass('active');
	// 	btnBenefits.removeClass('active');
	// 	btnSale.removeClass('active');
	// 	btnVat.removeClass('active');
	// });

	// btnVat.click( function() {
	// 	$(this).addClass('active');
	// 	btnGuest.removeClass('active');
	// 	btnBenefits.removeClass('active');
	// 	btnAccess.removeClass('active');
	// 	btnSale.removeClass('active');
	// });

	/* Date Range Picker
	--------------------------------------------- */
	// $('input[name="dates"]').daterangepicker();
	
	// $(function() {
	// 	$('input[name="daterange"]').daterangepicker({
	// 		opens: 'left'
	// 	}, function(start, end, label) {
	// 		console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
	// 	});
	// });

	/* Forms validations
	--------------------------------------------- */
	// Example starter JavaScript for disabling form submissions if there are invalid fields
	// (function () {
	// 	'use strict'

	// 	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	// 	var forms = document.querySelectorAll('.needs-validation')

	// 	// Loop over them and prevent submission
	// 	Array.prototype.slice.call(forms)
	// 	.forEach(function (form) {
	// 		form.addEventListener('submit', function (event) {
	// 			if (!form.checkValidity()) {
	// 				event.preventDefault()
	// 				event.stopPropagation()
	// 			}

	// 			form.classList.add('was-validated')
	// 		}, false)
	// 	})
	// })()
	

});