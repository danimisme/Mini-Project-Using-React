const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100 && window.scrollY < 500) {
    nav.classList.add("none");
  } else if (window.scrollY > 500) {
    nav.classList.add("navbar-scrolled");
    nav.classList.remove("none");
  } else if (window.scrollY < 100) {
    nav.classList.remove("none");
    nav.classList.remove("navbar-scrolled");
  }
});

$(document).ready(function () {
  $(".header_title").waypoint(
    function () {
      $(".header_title").addClass("animate__animated animate__fadeInLeft");
    },
    { offset: "80%" }
  );
  $(".header_caption").waypoint(
    function () {
      $(".header_caption").addClass("animate__animated animate__fadeInRight");
    },
    { offset: "80%" }
  );

  $(".card_title").waypoint(
    function () {
      $(".card_title").addClass("animate__animated animate__fadeInLeft");
    },
    { offset: "80%" }
  );

  $(".article_content_2").waypoint(
    function () {
      $(".card_list").each(function (i) {
        setTimeout(function () {
          $(".card_list").eq(i).addClass("animate__animated animate__zoomIn");
        }, 300 * (i + 1));
      });
    },
    { offset: "80%" }
  );

  $(".button_menu").waypoint(
    function () {
      $(".button_menu").addClass("animate__animated animate__swing");
    },
    { offset: "80%" }
  );

  $(".image_content_1").waypoint(
    function () {
      $(".image_content_1").addClass("animate__animated animate__zoomIn");
    },
    { offset: "50%" }
  );

  $(".title_content_1").waypoint(
    function () {
      $(".title_content_1").addClass("animate__animated animate__fadeInRight");
    },
    { offset: "50%" }
  );

  $(".article_content_1").waypoint(
    function () {
      $(".article_content_1").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "50%" }
  );

  $(".image_content_2").waypoint(
    function () {
      $(".image_content_2").addClass("animate__animated animate__zoomIn");
    },
    { offset: "70%" }
  );

  $(".title_content_2").waypoint(
    function () {
      $(".title_content_2").addClass("animate__animated animate__fadeInDown");
    },
    { offset: "70%" }
  );

  $(".article_content_2").waypoint(
    function () {
      $(".article_content_2").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "70%" }
  );
  $(".title_content_3").waypoint(
    function () {
      $(".title_content_3").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "70%" }
  );

  $(".article_content_3").waypoint(
    function () {
      $(".article_content_3").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "70%" }
  );

  $(".card_list_container").waypoint(
    function () {
      $(".card_list").each(function (i) {
        setTimeout(function () {
          $(".card_list").eq(i).addClass("animate__animated animate__zoomIn");
        }, 300 * (i + 1));
      });
    },
    { offset: "80%" }
  );

  $(".info_list_container").waypoint(
    function () {
      $(".info_list").each(function (i) {
        setTimeout(function () {
          $(".info_list")
            .eq(i)
            .addClass("animate__animated animate__fadeInUpBig");
        }, 200 * (i + 1));
      });
    },
    { offset: "80%" }
  );

  $(".image_header_1").waypoint(
    function () {
      $(".image_header_1").addClass("animate__animated animate__fadeInRight");
    },
    { offset: "80%" }
  );

  $(".title_header_1").waypoint(
    function () {
      $(".title_header_1").addClass("animate__animated animate__fadeInLeft");
    },
    { offset: "80%" }
  );
  $(".caption_header_1").waypoint(
    function () {
      $(".caption_header_1").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "80%" }
  );

  $(".menu_title_1").waypoint(
    function () {
      $(".menu_title_1").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "70%" }
  );
  $(".menu_title_2").waypoint(
    function () {
      $(".menu_title_2").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "70%" }
  );
  $(".menu_title_3").waypoint(
    function () {
      $(".menu_title_3").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "70%" }
  );

  $(".menu_title_1").waypoint(
    function () {
      $(".menu_item_1").each(function (i) {
        setTimeout(function () {
          $(".menu_item_1")
            .eq(i)
            .addClass("animate__animated animate__zoomIn ");
          console.log(i);
        }, 300 * (i + 1));
      });
    },
    { offset: "80%" }
  );

  $(".menu_title_2").waypoint(
    function () {
      $(".menu_item_2").each(function (i) {
        setTimeout(function () {
          $(".menu_item_2").eq(i).addClass("animate__animated animate__zoomIn");
        }, 300 * (i + 1));
      });
    },
    { offset: "80%" }
  );

  $(".menu_title_3").waypoint(
    function () {
      $(".menu_item_3").each(function (i) {
        setTimeout(function () {
          $(".menu_item_3").eq(i).addClass("animate__animated animate__zoomIn");
        }, 300 * (i + 1));
      });
    },
    { offset: "80%" }
  );
});
