//CODICI JAVASCRIPT UTILIZZATI DA www.rolandoscaccabarozzi.it

//CHIAMATA FUNZIONI DA ATTIVARE ALLO SCORRIMENTO PAGINA
document.onscroll = function() {
	    		/*myFunction();*/
				displayToTopBtn();
	    		if (effettoDelay('#biografia')) {
	    			/*console.log('ho ricevuto true dalla funzione per BIOGRAFIA');*/
	    			document.getElementById('biografia').style.opacity = '1';
	    		};
	    		if (effettoDelay('#container-contatti')) {
	    			/*console.log('ho ricevuto true dalla funzione per CONTAINER-CONTATTI');*/
	    			document.getElementById('container-contatti').style.opacity = '1';
	    		};
	    		//MOSTRO IL MENU SOTTILE SOLO SE LO SCHERMO é PICCOLO
	    		if ($(window).scrollTop()> 192 && $(window).width() <= 660) {
	    			console.log('Devo mostrare menu fisso');
	    			document.getElementById('header-2').style.display = 'block';
	    		} else {
	    			document.getElementById('header-2').style.display = 'none';	
	    		};

	    	}


//MOSTRA IL PULSATE TO TOP
			// When the user scrolls down 20px from the top of the document, show the button
			// Modificata per poter (poi) nascondere bottone quando sono nel footer
			function displayToTopBtn() {
				//if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
			    if (
			    	(document.body.scrollTop > 20 && 1) || 
			    	(document.documentElement.scrollTop > 20 && 1))
			    	{

			        document.getElementById("scrollToTopBtn").style.display = "block";
			    } else {
			        document.getElementById("scrollToTopBtn").style.display = "none";
			    }
			}

			// When the user clicks on the button, scroll to the top of the document
			function ScrollToTopFunction() {
			    	$('html,body').animate({
				    	 scrollTop: 0
					}, 1000);
			}


//ANIMAZIONE SU CLICK PULSANTE MENU
	    	$(document).ready(function(){   
	    
			//When btn is clicked
			$(".icona-menu").click(function() {
				$(".main-menu").toggleClass("show");
				$("body").toggleClass("stop-scrolling");
				$('body').bind('touchmove', function(e){e.preventDefault()})
				$(".effetto-opaco").toggleClass("show");
				//$(".icona-menu-attivo").toggleClass("show");
			});  
			$(".icona-menu-2").click(function() {
				$(".main-menu-2").toggleClass("show");
				$("body").toggleClass("stop-scrolling");
				$('body').bind('touchmove', function(e){e.preventDefault()})
				$(".effetto-opaco").toggleClass("show");
				//$(".icona-menu-attivo").toggleClass("show");
			}); 

	    });


//EFFETTO SCROLL PAGE SU LINK ANCORE
	    	$(function() {
				$('a[href*=#]:not([href=#])').click(function() {
					//$(".effetto-opaco").toggleClass("show");  l'avevo messo io???
					//$(".main-menu").toggleClass("show");
				if (document.body.scrollTop > 200){ //se sono sceso nella pagina, agisco solo su 2) quelli del menu fisso
					$(".main-menu-2").toggleClass("show");
					$("body").toggleClass("stop-scrolling");
					$('body').unbind('touchmove');
					$(".effetto-opaco").toggleClass("show");
				} else {
					$(".main-menu").toggleClass("show");
					$("body").toggleClass("stop-scrolling");
					$('body').unbind('touchmove');
					$(".effetto-opaco").toggleClass("show");
				}
				if (location.pathname.replace(/^\//,") == this.pathname.replace(/^\//,") && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
				$('html,body').animate({
				scrollTop: target.offset().top
				}, 1000);
				return false;
				}
				}
				});
				});	    	

//EFFETTO APPARIZIONE CONTENUTO MENTRE STAI SCORRENDO LA PAGINA

	    	function effettoDelay(elem) {
	    		var docViewTop = $(window).scrollTop();
			    var docViewBottom = docViewTop + $(window).height();
			    var elemTop = $(elem).offset().top;
			    var elemBottom = elemTop + $(elem).height();
			    return(docViewBottom >= elemTop + 50);
			};	    	

//GOOGLE MAPS

	      function initMap() {
	        var uluru = {lat: 45.615297, lng: 9.371823};
	        var map = new google.maps.Map(document.getElementById('mappa-google'), {
	          zoom: 10,
	          center: uluru
	        });
	        var marker = new google.maps.Marker({
	          position: uluru,
	          map: map
	        });
	      }

//CAROUSEL

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
