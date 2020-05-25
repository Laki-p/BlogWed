/* ปลั้กอินคอมเม้นเฟสบุ้ค*/
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v2.12&appId=971730649659551&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
 
/* บาร์เมนู*/
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 1) {
        $('#navbar').css('padding', '5px 18px')
    } else {
        $('#navbar').css('padding', '1px')
    }
})

 
$('.to-top').click(function (){
    $('html, body').animate({scrollTop: '0px'}, 800);
})

var deck = [];

function setCards(){
  var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
  var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "Ten", "Jack", "Queen", "King"];
  
  suits.forEach(function(suit){
     ranks.forEach(function(rank){
      var card = {};
      card.suit = suit;
      card.rank = rank;
      deck.push(card);
     });
      
    });
}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop :true,
        nav : false,  /* ลูกศรใต้รุปซ้ายขวา */
        dots : true,  /* จุดนำทาง*/ */
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:5,
               
            }
        }
    });
  });