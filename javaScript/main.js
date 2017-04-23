
//FLICKITY
$('.item-carousel').flickity({
  cellAlign: 'left',
  contain: true
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
$("form").submit(function(){
  if (email=='')
    alert("Please submit a valid e-mail address");
    else if (email!=='') 
    {
      
      alert("Thanks for subscribing!");
    }
}
);
