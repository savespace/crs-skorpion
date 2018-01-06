$(document).ready(function () {
  var
    deg = 0,
    time = setInterval(function () {
      deg++;
      $('.bg').css('background','linear-gradient('+deg+'deg,#4E5744,orange)');
    },1000/50);
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  }
  else {
    $('nav').removeClass('shrink');
  }
});

$(document).ready(function(){
	$("#sticker").sticky({topSpacing:0});
});	

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

