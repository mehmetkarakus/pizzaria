document.addEventListener("DOMContentLoaded", function () {
    function checkScreenWidthAndActivate() {
        var screenWidth = window.innerWidth;
        var threshold = 500;

        if (screenWidth <= threshold) {
            activateTabMenuScrolling();
        }
    }

    function activateTabMenuScrolling() {
        var tabMenuItems = document.querySelectorAll("#myTabMenu .nav-link");

        tabMenuItems.forEach(function (item) {
            item.addEventListener("click", function (event) {
                var targetId = this.getAttribute("href");

                var targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        });
    }

    function checkAndActivate() {
        if (window.innerWidth <= 500) {
            checkScreenWidthAndActivate();
        }
    }

    checkAndActivate();

    window.addEventListener("resize", checkAndActivate);
});
