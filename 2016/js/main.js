var mq = window.matchMedia( "(min-width: 421px)" );

if (mq.matches) {
function scrollBanner() {
  $(document).scroll(function(){
    console.log("scrolling");
    var scrollPos = $(this).scrollTop();
    $('.banner-centered').css({
      //'top' : (scrollPos/3)+'px',
      'opacity' : 1-((scrollPos-20)/310)
    });

    if(scrollPos>700){
    $('.information1 h2, .information1 p, .information1 h4').css({
      'opacity' : 1-((scrollPos-700)/210)
    }); } 

    if(scrollPos>1500){
    $('.information2 h2, .information2 p, .information2 h4').css({
      'opacity' : 1-((scrollPos-1500)/210)
    }); } 

    if(scrollPos>2100){
    $('.information3 h2, .information3 p, .information3 h4').css({
      'opacity' : 1-((scrollPos-2100)/210)
    }); } 

    if(scrollPos>2650){
    $('.information4 h2, .information4 p, .information4 h4').css({
      'opacity' : 1-((scrollPos-2650)/210)
    }); } 

    if(scrollPos>3150){
    $('.information5 h2, .information5 p, .information5 h4').css({
      'opacity' : 1-((scrollPos-3150)/210)
    }); } 

    if(scrollPos>3680){
    $('.information6 h2, .information6 p, .information6 h4').css({
      'opacity' : 1-((scrollPos-3680)/210)
    }); } 

    if(scrollPos>4230){
    $('.information7 h2, .information7 p, .information7 h4').css({
      'opacity' : 1-((scrollPos-4230)/210)
    }); } 

    if(scrollPos>4600){
    $('.information8 h2, .information8 p, .information8 h4').css({
      'opacity' : 1-((scrollPos-4600)/210)
    }); } 

    if(scrollPos>5150){
    $('.information9 h2, .information9 p, .information9 h4').css({
      'opacity' : 1-((scrollPos-5150)/210)
    }); } 

    if(scrollPos>5600){
    $('.information10 h2, .information10 p, .information10 h4').css({
      'opacity' : 1-((scrollPos-5600)/210)
    }); } 

    //$('#banner').css({
    //  'background-position' : 'center ' + (-scrollPos/2)+'px'
    //});
  });    
}
scrollBanner(); 
}
