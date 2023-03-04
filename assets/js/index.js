//responsive nav bar
const navIcon = document.getElementById("nav-mobile-icon");
const header = document.querySelector("body header");
navIcon.addEventListener("click", () => {
    if (header.className.includes("nav-mobile")) {
        header.removeAttribute("class");
        navIcon.innerText = "expand_more";
    } else {
        header.className += "nav-mobile";
        navIcon.innerText = "expand_less";
    }
});

// add or remove active class
const pages = document.querySelectorAll("header a");
pages.forEach(function (element) {
    element.addEventListener("click", () => {
        if (!element.className.includes("active")) {
            document.querySelectorAll("header a.active").forEach(function (el) {
                el.classList.remove("active");
            });
            element.classList.add("active");
        }
    });
});

// load percentages
const progressBars = document.querySelectorAll("progress");
progressBars.forEach(function (progressBar) {
    const value = progressBar.value;
    progressBar.dataset.value = value + "%";
});

//scroll on to foss
const fossButtons = document.querySelectorAll(".scroll-foss");
const target = document.getElementsByClassName("foss")[0];

fossButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("click");
        target.scrollIntoView();
    });
});