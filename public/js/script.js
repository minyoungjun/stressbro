	

/*== Asynchronous Loading Google Maps ==============================*/

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}
window.onload = loadScript;

/*-----------------------------------------------------------------*/




$(document).ready(function() {  /*-- initiation document ready --*/
	
/*== page loading animation header ================================*/

	$('body').jpreLoader({
	}, function() {	  				
		$('header').animate({ top: "0",opacity:".96" }, 1600 );		
	    
		});
/*-----------------------------------------------------------------*/
	
	

	
/*== Submit Contact Form ==========================================*/  	
	
	//if submit button is clicked
	$('#submit_contact_form').click(function () {

		if($("#form-contact").valid()) {
			
	 //Get the data from all the fields
		var name = $("#name").val();
		var email = $("#email").val();
		var comment = $("#comment").val();

	  //organize the data properly
		var data = 'name=' + name+ '&email=' + email+ '&comment='  + encodeURIComponent(comment);		
				
		//show the loading sign
		$('.load-form').toggle();
		
		//disable button submit
		$('#submit_contact_form:submit').attr("disabled", true);
		
		$('.success').hide();
		
		//start the ajax
		$.ajax({
			//this is the php file that processes the data and send mail
			url: "php/process_contact_form.php",	
			
			//GET method is used
			type: "POST",

			//pass the data			
			data: data,		
			
			//Do not cache the page
			cache: false,
			
			//success
			success: function (html) {				
				//if process.php returned 1/true (send mail success)			
					//disabled all the text fields
										
					$('.load-form').toggle();
					$('#form-contact')[0].reset();
					$('.success').toggle('slow');
					$('#submit_contact_form:submit').attr("disabled", false);
			}		
		});
		
		//cancel the submit button default behaviours
		return false;
		}
	});
	
/*-----------------------------------------------------------------*/
	
		
	
/*== Submit subscribe Form ========================================*/    

	//if submit button is clicked
	$('#submit_subscribe').click(function () {		
		if($("#form-subscribe").valid()) {
		
		
		//Get the data from all the fields		
		var email = $("#email-subscribe").val();
		
		var data = '&email=' + email;
		
		//show the loading sign
		$('.subscribe_loading').toggle("slow");
		
		//start the ajax
		$.ajax({
			//this is the php file that processes the data subscribe input
			/*
			 * Select if you prefer to store the list of mails.
			 * 1-Send your email address
			   2-Save in TXT file
			   3-Save in database
			   4-Send to a MailChimp list
			 */
			
		     /*url: "php/subscribed_EMAIL.php",*/
		     /*url: "php/subscribed_TXT.php",*/			
			 /*url: "php/subscribed_BD.php",*/
			   url: "php/subscribed_mailchimp.php",
			
			
			//GET method is used
			type: "POST",

			//pass the data			
			data: data,		
			
			//Do not cache the page
			cache: false,
			
			//success
			success: function (html) {
		
				 $('.subscribe-box').animate({opacity:".0"}, 100);
				 $('.subscribe-box').toggle("slow");
				$('.subscribe_message').delay(500).toggle("slow");
				         			
			}		
		});
		
		//cancel the submit button default behaviours
		return false;
		}
	});	

/*-----------------------------------------------------------------*/


	
/*== animation effects ============================================*/
	
		$('section.service').waypoint(function(direction) {			
			$('#feature1').delay(0).animate({'opacity':'1'}, 100,'easeInOutSine');
			$('#feature2').delay(400).animate({'opacity':'1'}, 100,'easeInOutSine');
			$('#feature3').delay(800).animate({'opacity':'1'}, 100,'easeInOutSine');
		}, { offset: '110%',
			 triggerOnce: true});
		
		
		$('section.contact').waypoint(function(direction) {				
			$('.info').delay(0).animate({'opacity':'1'}, 100,'easeInOutSine');
			$('.form-contact').delay(400).animate({'opacity':'1'}, 100,'easeInOutSine');
		}, { offset: '70%',
			 triggerOnce: true});	
		
/*-----------------------------------------------------------------*/		
});/*-- close document ready --*/



/*== validation run forms =========================================*/

$( function() {
	$('form').each(function () {
	    $(this).validate();
	}); 

/*-----------------------------------------------------------------*/	
	

	
	
/*== vega plugin settings =========================================*/
/*Change background images.*/
/*Replace the image path for the directory path where the new images are to be used, */

	$.vegas( 'slideshow', {
		delay: 8000,

		backgrounds: [
			{ src: 'http://stressbro.com/img/bg/1.jpg', fade: 2000 },
			{ src: 'http://stressbro.com/img/bg/2.jpg', fade: 2000 },
			{ src: 'http://stressbro.com/img/bg/3.jpg', fade: 2000 },
			{ src: 'http://stressbro.com/img/bg/4.jpg', fade: 2000 },
			{ src: 'http://stressbro.com/img/bg/5.jpg', fade: 2000 },
			{ src: 'http://stressbro.com/img/bg/6.jpg', fade: 2000 },
			{ src: 'http://stressbro.com/img/bg/7.jpg', fade: 2000 },
		]
	} );
	
/*-----------------------------------------------------------------*/

	
	
	
/*== page scroller plugin settings ================================*/
	
	$('body').pageScroller({
		HTML5mode: true,
		scrollOffset: -20,
		navigation: 'header'
	});
	
/*-----------------------------------------------------------------*/

	
	
	
	/*== animation when performing scrolling header ===================*/
 	$(window).scroll(function (){ 
		$(".cbp-af-header").addClass("cbp-af-header-shrink"); 
		$("#prev").addClass("visible");
		
		if(navigator.appVersion.indexOf("MSIE 8.")!=-1){
			$("#prev").show();	
		}
		

		var pos = $(window).scrollTop();
		
		if (pos == 0) {
			$("#prev").removeClass("visible");
			if(navigator.appVersion.indexOf("MSIE 8.")!=-1){
				$("#prev").hide();	
			}
			$(".cbp-af-header").removeClass("cbp-af-header-shrink"); 
		}
 	});
/*-----------------------------------------------------------------*/	

 	
 	
	
/*== Count Down settings ==========================================*/
 /*
  * The date is set determines the countdown, date you want.
  */	
	 $('#clock').countdown("2014/6/11", function(event) {
		    var $this = $(this);
		    switch(event.type) {
		      case "seconds":
		      case "minutes":
		      case "hours":
		      case "days":
		      case "daysLeft":
		      $this.find('span#'+event.type).html(event.value);
		        break;
		      case "finished":
		        $this.hide();
		        break;
		    }
		  });
	});

/*-----------------------------------------------------------------*/



/*== scroll Top =========================================*/
$('#prev').click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 800);
	return false;
});

/*---------------------------------------------------------------


		
/*== Google Maps settings =========================================*/
/*
 * define the coordinates of your company
 */

lat = 49.14584;
lng = -122.886557; 

var map;
var MY_MAPTYPE_ID = 'custom_style';
 
function initialize() {

	  var featureOpts = [
	                     {
	                    	    "featureType": "landscape",
	                    	    "stylers": [
	                    	      { "weight": 0.1 },
	                    	      { "color": "#ffffff" }
	                    	    ]
	                    	  },{
	                    	    "featureType": "road",
	                    	    "elementType": "geometry",
	                    	    "stylers": [
	                    	      { "visibility": "simplified" },
	                    	      { "color": "#ffffff" }
	                    	    ]
	                    	  },{
	                    	    "featureType": "poi",
	                    	    "elementType": "geometry",
	                    	    "stylers": [
	                    	      { "color": "#ededec" }
	                    	    ]
	                    	  },{
	                    	    "featureType": "road",
	                    	    "elementType": "labels.text.fill",
	                    	    "stylers": [
	                    	      { "color": "#222222" }
	                    	    ]
	                    	  },{
	                    		    "featureType": "poi",
	                    		    "elementType": "labels.text.fill",
	                    		    "stylers": [
	                    		      { "color": "#222222" }
	                    		    ]
	                    		  },{
	                    	    "featureType": "road",
	                    	    "elementType": "labels.text.stroke",
	                    	    "stylers": [
	                    	      { "color": "#ffffff" }
	                    	    ]
	                    	  },{
	                    	    "featureType": "water",
	                    	    "stylers": [
	                    	      { "color": "#f0f0f0" }
	                    	    ]
	                    	  }
	                    	];
	  	 

  
  var myLatlng = new google.maps.LatLng(lat,lng);
  var mapOptions = {
    zoom: 12,
    scrollwheel: false,
    mapTypeControl:false,
    streetViewControl:false,
    center: myLatlng,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
  };
  
  
  
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
  	icon: "img/mark-bw.png",
      map: map
  });
  
  var styledMapOptions = {
		    name: 'Custom Style'
		  };
  
  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions); 
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

//google.maps.event.addDomListener(window, 'load', initialize);

/*-----------------------------------------------------------------*/





