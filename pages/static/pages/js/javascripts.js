
$(document).on('click', '.button', function(event){
   event.preventDefault();

   $('html, body').animate({
       scrollTop: $( $.attr(this, 'href') ).offset().top
   }, 800);
});
$(document).on('click', '.up', function(event){
   event.preventDefault();

   $('html, body').animate({
       scrollTop: $( $.attr(this, 'href') ).offset().top
   }, 800);
});
(function(){

  var parallax = document.querySelectorAll("body"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();


$(document).ready( function() {
	resize()
//    $("html, body").animate({ scrollTop: 100 }, 100);
});

$(window).resize(function() {
  resize()
});

function resize() {
	var divH = $(window).innerHeight();
    $(".mydiv").height( divH );
};

function showGit() {
    window.open('https://github.com/stevensonmat2');
}

function showResume() {
    window.open('/static/pages/img/M.Stevenson_print_resume_2017.pdf');
}

function showEarthquake() {
    window.open('/pages/templates/pages/earthquakeMap.html');
}

function showWeather() {
    window.open('/static/pages/img/M.Stevenson_print_resume_2017.pdf');
}

function showDice() {
    window.open('/static/pages/img/M.Stevenson_print_resume_2017.pdf');
}



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
