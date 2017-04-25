//FLICKITY
$('.item-carousel').flickity({

  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  autoPlay: true
});

//SMOOTHSCROLL
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

//FORMSUBMIT
$('button').on('click', function(){
  var input=$('input').val(); 
  if(input == ""){
    alert('Please enter a valid email address.')
  } else {
    alert('Thank you for subscribing!')
  }
})




