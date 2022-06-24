(function () {
  var app = {
    initAos: function () {
      setTimeout(function () {
        AOS.init();
      }, 1000);
    },

    initNavigation: function () {
      var $nav = jQuery("#nav, #nav2");
      if ($nav.length > 0) $nav.navTabDoubleTap();
    },

    initDetectScroll: function () {
      if (jQuery(window).width() > 991 && jQuery(window).scrollTop() > 56) {
        jQuery("header.header").addClass("show-fixed");
      } else {
        jQuery("header.header").removeClass("show-fixed");
      }
    },

    initBurgerMenu: function () {
      jQuery(".burger-menu").on("click", function (e) {
        e.preventDefault();
        if (jQuery(this).hasClass("is-open")) {
          jQuery(this).removeClass("is-active");
          jQuery(".bm-view").removeClass("is-open");
          jQuery("body").removeClass("is-open");
        } else {
          jQuery(this).addClass("is-active");
          jQuery(".bm-view").addClass("is-open");
          jQuery("body").addClass("is-open");
        }
      });
      jQuery(".bm-drop, .bm-close").on("click", function (e) {
        e.preventDefault();
        jQuery(".bm-view").removeClass("is-open");
        jQuery(".bm-btn").removeClass("is-active");
        jQuery("body").removeClass("is-open");
      });
    },

    initQuickSearch: function () {
      //code here

      var $rangeslider = jQuery(".qs-range-field #qs-range"),
        $minPrice = jQuery(".qs-range-field .selected-min-price"),
        $maxPrice = jQuery(".qs-range-field .selected-max-price");

      jQuery(".qs-range-field #qs-range").ionRangeSlider({
        type: "double",
        min: 1,
        max: 10,
        from: 1,
        to: 10,
        hide_min_max: true,
        hide_from_to: true,
        onFinish: function () {},
      });

      $rangeslider.on("change", function () {
        var $this = jQuery(this),
          value = $this.prop("value").split(";");

        _minPrice = value[0] < 1 ? value[0] : value[0] + "M";
        _maxPrice = value[1] < 1 ? value[1] : value[1] + "M";
        $minPrice.text("$" + _minPrice);
        $maxPrice.text("$" + _maxPrice);
        _maxPrice = parseInt(_maxPrice) * 1000000;
        _minPrice = parseInt(_minPrice) * 1000000;
        $minPrice.val(convertPrice(_minPrice));
        $maxPrice.val(convertPrice(_maxPrice));
        jQuery("#min_price").val(_minPrice);
        jQuery("#max_price").val(_maxPrice);
      });
      function convertPrice(price) {
        return Math.abs(Number(price)) >= 1.0e9
          ? Math.abs(Number(price)) / 1.0e9 + "B"
          : Math.abs(Number(price)) >= 1.0e6
          ? Math.abs(Number(price)) / 1.0e6 + "M"
          : Math.abs(Number(price)) >= 1.0e3
          ? Math.abs(Number(price)) / 1.0e3 + "K"
          : Math.abs(Number(price));
      }
    },

    initWelcome: function () {
      //code here
    },

    initVideos: function () {
      //code here
    },

    initProperties: function () {
      //code here

      var sectionSlick = ".properties-slick";
      $(sectionSlick).slick({
        slidesToShow: 3,
        slideToScroll: 1,
        infinite: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 7000,
        speed: 1000,
        arrows: true,
        prevArrow: ".hp-properties .prev",
        nextArrow: ".hp-properties .next",
        rows: 1,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
      });
      var isSliding = false;
      jQuery(sectionSlick).on("beforeChange", function () {
        isSliding = true;
      });
      jQuery(sectionSlick).on("afterChange", function () {
        isSliding = false;
      });
      jQuery(".properties-image img").click(function (e) {
        if (isSliding) {
          e.stopImmediatePropagation();
          e.stopPropagation();
          e.preventDefault();
          return;
        }
      });
    },

    initCta: function () {
      //code here

      var sectionSlick = ".cta-slick";
      $(sectionSlick).slick({
        slidesToShow: 6,
        slideToScroll: 1,
        infinite: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 7000,
        speed: 1000,
        arrows: false,
        rows: 1,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
      });
      var isSliding = false;
      jQuery(sectionSlick).on("beforeChange", function () {
        isSliding = true;
      });
      jQuery(sectionSlick).on("afterChange", function () {
        isSliding = false;
      });
      jQuery(".cta-image img").click(function (e) {
        if (isSliding) {
          e.stopImmediatePropagation();
          e.stopPropagation();
          e.preventDefault();
          return;
        }
      });
    },

    initCommunities: function () {
      //code here
    },

    initTestimonials: function () {
      //code here
    },

    initContact: function () {
      //code here
    },

    initSocial: function () {
      //code here
    },
  };

  jQuery(document).ready(function () {
    app.initAos();
    app.initNavigation();

    app.initBurgerMenu();

    app.initQuickSearch();

    app.initWelcome();

    app.initVideos();

    app.initProperties();

    app.initCta();

    app.initCommunities();

    app.initTestimonials();

    app.initContact();

    app.initSocial();
  });

  jQuery(window).on("scroll", function () {
    app.initDetectScroll();
  });

  jQuery(window).on("load", function () {});

  jQuery(window).on("resize", function () {});
})();
