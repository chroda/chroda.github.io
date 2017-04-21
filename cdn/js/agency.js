$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
$("img").lazyload({
    effect : "fadeIn"
});
$('body').scrollspy({
    target: '.navbar-fixed-top'
});
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function preload(srcArray,dir,subdir) {
  for(var i = 0; i < srcArray.length; i++) {
    (new Image()).src = srcArray[i];
  }
}
$(window).load( function(){
  var dir = "./cdn/img/";
  preload([
    dir+'header-bg.jpg',
    dir+'map-image.png',
    dir+'logos/logo_black.svg',
    // dir+'logos/logo_red_spacing.svg',
    dir+'logos/logo_red.svg',
    dir+'logos/logo_white.svg',
    dir+'portfolio/formerjob_grupow.png',
    dir+'portfolio/formerjob_grupow_modal.png',
    dir+'portfolio/formerjob_softmak.png',
    dir+'portfolio/formerjob_softmak_modal.png',
    dir+'portfolio/formerjob_viaartistica.png',
    dir+'team/chroda.jpeg',
  ]);
});

function skillProgress(skillId,skillValue){
  var skillProgressOptions = {
    color: '#fff',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 2000,
    from: { color: '#C0262C', width:4},
    to: { color: '#C0262C', width:4},
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);
      value === 0 ? circle.setText('') : circle.setText(skillId.getAttribute('id') + ' ' +value + '%');
    }
  };
  var bar = new ProgressBar.Circle(skillId,skillProgressOptions);
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '1.2rem';
  bar.animate(skillValue);
}

skillProgress(php,.83);
skillProgress(html5,.92);
skillProgress(css3,.91);
skillProgress(mysql,.6);
skillProgress(mongodb,.7);
skillProgress(firebase,.5);
skillProgress(git,.75);
skillProgress(linux,.58);
skillProgress(js,.72);
skillProgress(nodejs,.5);
skillProgress(jquery,.85);
skillProgress(angular,.5);
skillProgress(react,.2);
skillProgress(ionic,.41);
skillProgress(express,.1);
