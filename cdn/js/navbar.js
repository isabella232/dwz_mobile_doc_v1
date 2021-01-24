(function () {
  window.onload = function () {
    var navbarToggle = document.querySelector(".navbar-toggle"),
      navbarNav = document.querySelector("nav.app-nav"),
      hasClass = function (elem, className) {
        return new RegExp(" " + className + " ").test(
          " " + elem.className + " "
        );
      },
      addClass = function (elem, className) {
        var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
        elem.className += " " + className;
      },
      removeClass = function (elem, className) {
        var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
        while (newClass.indexOf(" " + className + " ") >= 0) {
          newClass = newClass.replace(" " + className + " ", " ");
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, "");
      },
      toggleClass = function (elem, className) {
        if (hasClass(elem, className)) {
          removeClass(elem, className);
        } else {
          addClass(elem, className);
        }
      };

    function clickEvent(elem, fn) {
      if (!elem.addEventListener) {
        elem.attachEvent("onclick", fn);
      } else {
        elem.addEventListener("click", fn);
      }
    }

    clickEvent(navbarToggle, function (event) {
      toggleClass(navbarToggle, "active");
      toggleClass(navbarNav, "active");
      event.preventDefault();
      event.stopPropagation();
    });

    clickEvent(navbarNav, function (event) {
      event.stopPropagation();
    });
    clickEvent(document, function (event) {
      removeClass(navbarToggle, "active");
      removeClass(navbarNav, "active");
    });
  };
})();
