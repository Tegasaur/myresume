!(function ($) {
  "use strict";

  if ($(".typed").length) {
    var typed_strings = $(".typed").data("typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  window.tooltipone = (args) => {
    if (args.id == "skill1") {
      return "<p class='tooltiptext'>UX Design</p>";
    } else if (args.id == "skill2") {
      return "<p class='tooltiptext'>Backend <br> Web Design</p>";
    } else if (args.id == "skill3") {
      return "<p class='tooltiptext'>Frontend <br> Web Design</p>";
    } else if (args.id == "skill4") {
      return "<p class='tooltiptext'>Data Science</p>";
    } else if (args.id == "skill5") {
      return "<p class='tooltiptext'>RESTfull Api's</p>";
    } else if (args.id == "skill6") {
      return "<p class='tooltiptext'>Database <br> Management</p>";
    }
  };

  var skill_values = {
    width: 25,
    radius: 130,
    circleShape: "pie",
    handleShape: "round",
    editableTooltip: false,
    showTooltip: true,
    readOnly: true,
    startAngle: 315,
    lineCap: "round",
    sliderType: "min-range",
    keyboardAction: false,
    svgMode: true,
    borderWidth: 0,
    pathColor: "#888",
    tooltipFormat: "tooltipone",
  };

  var skill1 = $("#skill1")
    .roundSlider(
      Object.assign({ value: 0, rangeColor: "#9ff2e1" }, skill_values)
    )
    .hover(
      function () {
        $("#skill1").roundSlider("option", { value: 60 });
      },
      function () {
        $("#skill1").roundSlider("option", { value: 0 });
      }
    );
  var skill2 = $("#skill2")
    .roundSlider(
      Object.assign({ value: 0, rangeColor: "#135346" }, skill_values)
    )
    .hover(
      function () {
        $("#skill2").roundSlider("option", { value: 85 });
      },
      function () {
        $("#skill2").roundSlider("option", { value: 0 });
      }
    );

  var skill3 = $("#skill3")
    .roundSlider(
      Object.assign({ value: 0, rangeColor: "#1abc9c" }, skill_values)
    )
    .hover(
      function () {
        $("#skill3").roundSlider("option", { value: 80 });
      },
      function () {
        $("#skill3").roundSlider("option", { value: 0 });
      }
    );
  var skill4 = $("#skill4")
    .roundSlider(
      Object.assign({ value: 0, rangeColor: "#9ff2e1" }, skill_values)
    )
    .hover(
      function () {
        $("#skill4").roundSlider("option", { value: 55 });
      },
      function () {
        $("#skill4").roundSlider("option", { value: 0 });
      }
    );
  var skill5 = $("#skill5")
    .roundSlider(
      Object.assign({ value: 0, rangeColor: "#135346" }, skill_values)
    )
    .hover(
      function () {
        $("#skill5").roundSlider("option", { value: 75 });
      },
      function () {
        $("#skill5").roundSlider("option", { value: 0 });
      }
    );
  var skill6 = $("#skill6")
    .roundSlider(
      Object.assign({ value: 0, rangeColor: "#1abc9c" }, skill_values)
    )
    .hover(
      function () {
        $("#skill6").roundSlider("option", { value: 90 });
      },
      function () {
        $("#skill6").roundSlider("option", { value: 0 });
      }
    );

  var owl = $(".owl-carousel").owlCarousel({
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
        loop: false,
      },
    },
  });

  $(document.documentElement).keyup(function (event) {
    // handle cursor keys
    if (event.keyCode == 37) {
      //left key
      owl.trigger("prev.owl.carousel", [700]);
    } else if (event.keyCode == 39) {
      //right key
      owl.trigger("next.owl.carousel", [700]);
    }
  });
  $("#right").click(function () {
    owl.trigger("next.owl.carousel", [700]);
  });
  $("#left").click(function () {
    owl.trigger("prev.owl.carousel", [700]);
  });
})(jQuery);
