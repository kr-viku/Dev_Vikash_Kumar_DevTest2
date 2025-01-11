$(window).on("load", function () {
  $(".form input").val("");

  $(".form input").focusout(function () {
    if ($(this).val() != "") {
      $(this).addClass("focus");
    } else {
      $(this).removeClass("focus");
    }
  });
});

/* Crousel Scripts*/
$(".carousel-testi").owlCarousel({
  loop: false,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1024: {
      items: 1,
    },
    1025: {
      items: 1,
    },
  },
});

var owl = $(".carousel-testi");
$(".testi-carousel .arrow-left").click(function () {
  owl.trigger("prev.owl.carousel");
});
$(".testi-carousel .arrow-right").click(function () {
  owl.trigger("next.owl.carousel");
});

function playPause() {
  var video = document.querySelector("#myVideo");
  if (video.paused) {
    video.play();
    $(".play").addClass("plo");
  } else {
    video.pause();
    $(".play").removeClass("plo");
  }
}

$(".nav-opener").click(function () {
  $(".c-navbar ul").animate({
    height: "toggle",
  });
});
function validate() {
  let num = 0;
  $(".inp-box .inp").each(function () {
    if (!$(this).val()) {
      $(this).parent().addClass("empty");
    } else {
      $(this).parent().removeClass("empty");
      num = num + 1;
    }
  });

  if ($(".drop-row select").val() == "") {
    $(".drop-row").addClass("empty");
  } else {
    $(".drop-row").removeClass("empty");
    num = num + 1;
  }
  if (num === 5) {
    document.location = "thanks.html";
  }
}
$(document).click(function () {
  $(".inp-box .inp").each(function () {
    $(this).parent().removeClass("empty");
  });
  $(".drop-row").removeClass("empty");
});
$(".btn-row").click(function (e) {
  e.stopPropagation();
});
