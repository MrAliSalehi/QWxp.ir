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

// mobile chart
const mc = document.getElementById("chart-mobile");
const data = {
    labels: [
        "Csharp",
        "Rust",
        "Meta Programming",
        "Software Architecture",
        "Desktop Development",
        "Database Design",
        "Git & AzureDevOps",
        "Linux & server administration",
    ],
    datasets: [
        {
            label: "My proficiency",
            data: [97, 53, 70, 73, 80, 50, 63, 76],
            fill: true,
            backgroundColor: "rgba(0, 208, 219,0.2)",
            borderColor: "#00d0db",
            pointBackgroundColor: "rgb(255, 140, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)",
        },
    ],
};
import {Chart, RadarController, LineElement, PointElement, RadialLinearScale, Filler, Tooltip} from 'chart.js'

Chart.register(RadarController, LineElement, PointElement, RadialLinearScale, Filler, Tooltip);

Chart.defaults.color = "white";
Chart.defaults.tick = "red";
Chart.defaults.borderColor = "rgba(255,255,255,0.4)";
new Chart(mc, {
    type: "radar",
    data: data,
    options: {
        maintainAspectRatio: false,
        scales: {
            r: {
                ticks: {
                    stepSize: 10,
                    display: false,
                },
            },
        },
        elements: {
            line: {
                borderWidth: 3,
            },
        },
        plugins: {
            legend: {
                display: true,
            },
        },
    },
});
