$(".to-close").on("click", () => {
  $(".special-offer").hide();
});

$(".basket-product__close").on("click", () => {
  $("my-underline-row").hide();
});

// //////////////////////////////////////////////////////////

let basketoffset = $(".my-nav").offset().top;

$(window).scroll(function () {
  let scrollPos = $(window).scrollTop();

  scrollPos >= basketoffset ?
    $(".information__icons-basket").addClass("fixed") :
    $(".information__icons-basket").removeClass("fixed");
});

// ///////////////////////////////////////////////////////////////////////

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("increase")) {
    ++e.target.parentElement.querySelector("input").value;
  } else if (e.target.classList.contains("decrease")) {
    if (e.target.parentElement.querySelector("input").value > 0) {
      --e.target.parentElement.querySelector("input").value;
    }
  }
});

// //////////////////////////////////////////////////////////////////////

$(".burger").bind("click", function () {
  let src =
    $(this).attr("src") === "./assets/img/burger.png" ?
    "./assets/img/close.png" :
    "./assets/img/burger.png";
  $(this).attr("src", src);
});

// ////////////////////////////////////////////////////////////////////

$(window).scroll(function () {
  let scroll = $(window).scrollTop(),
    dh = $(document).height(),
    wh = $(window).height();
  scrollPercent = (scroll / (dh - wh)) * 100;
  $("#progressbar").css("height", scrollPercent + "%");
});


// ............................................................


// //////////////////////////////////////////////////////////////////////////////////////



$(".regular").slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: $('.prev-button'),
  nextArrow: $('.next-button'),


  responsive: [{
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,

    }
  }]
});
// /////////////////////////////////////////////////////////
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,

  asNavFor: '.slider-nav'

});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,

  asNavFor: '.slider-for',
  vertical: true,

  dots: false,
  focusOnSelect: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: false,

    }
  }]


});

$('a[data-slide]').click(function (e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-nav').slick('slickGoTo', slideno - 1);
});
// ////////////////////////////////////////
$('.loop-img').loupe({
  width: 200, // width of magnifier
  height: 200, // height of magnifier
  loupe: 'loupe' // css class for magnifier
});