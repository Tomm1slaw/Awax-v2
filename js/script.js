'use strict';
// Navigation

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

// Top Button

let mybutton = document.getElementById('top');

window.onscroll = function(){
 if(window.pageYOffset >= 400){
 	mybutton.classList.add('show');
 }
 else {
 	mybutton.classList.remove('show');
 }
};

mybutton.onclick = function() {
	window.scrollTo(0,0);
};

// Map


      function initMap() {
        let map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 52.064998, lng: 21.028757},
          zoom: 10
        });
      };