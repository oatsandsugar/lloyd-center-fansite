/* ============================================
   Lloyd Center Fan Page — Scripts
   ============================================ */

// --- Menu Toggle ---
function toggleMenu() {
    var nav = document.getElementById("site-nav");
    if (nav) {
        nav.classList.toggle("open");
    }
}

// Close menu when a nav link is tapped
function initMenuClose() {
    var nav = document.getElementById("site-nav");
    if (!nav) return;
    var links = nav.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
            nav.classList.remove("open");
        });
    }
}

// --- Init on page load ---
window.addEventListener("DOMContentLoaded", function () {
    initMenuClose();
});
