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
  let isEmailValid = false;

  $(".inp-box .inp").each(function () {
    if (!$(this).val()) {
      $(this).parent().addClass("empty");
    } else {
      $(this).parent().removeClass("empty");
      num = num + 1;
    }
  });

  // Email validation
  const emailInput = $("#b-name");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

  if (emailInput.val() !== "") {
    if (!emailPattern.test(emailInput.val())) {
      emailInput.parent().addClass("empty");
      emailInput
        .siblings(".empty-tooltip")
        .find("p")
        .text("Please enter a valid email address.");
      emailInput.siblings(".empty-tooltip").show(); // Show the error message
    } else {
      emailInput.parent().removeClass("empty");
      emailInput.siblings(".empty-tooltip").hide(); // Hide the error message
      isEmailValid = true;
    }
  }

  if ($(".drop-row select").val() == "") {
    $(".drop-row").addClass("empty");
  } else {
    $(".drop-row").removeClass("empty");
    num = num + 1;
  }

  if (num === 5 && isEmailValid) {
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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  var video = document.getElementById("myVideo");
  video.currentTime = 0; // Reset video to the beginning
  video.play();
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.getElementById("myVideo").pause();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("myVideo").pause();
  }
};
