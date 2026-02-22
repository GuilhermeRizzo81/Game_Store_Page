/* Summaries arrows animation */

const summaries = document.querySelectorAll(".summary");
console.log(summaries);
const details = document.querySelectorAll(".details");
const summariesArrows = document.querySelectorAll(".summary span");

for(let i = 0; i < 3; i++) {
    summaries[i].addEventListener("click", () => {

        if(details[i].classList.contains("hidden")) {
            details[i].classList.remove("hidden");
            summariesArrows[i].style.transform = "rotate(0deg)";
            summariesArrows[i].style.marginTop = "-60px";
        }
        else {
            details[i].classList.add("hidden");
            summariesArrows[i].style.transform = "rotate(180deg)";
            summariesArrows[i].style.marginTop = "-70px";
        }
        
    });
}

/* Setting current date */

const currentTime = document.querySelector("#current-time");
currentTime.textContent = new Date().getFullYear();

/* company-nav-expansion sliding nav menu */

const navBarOptions = document.querySelectorAll(".company-nav-left a");
const companyNavExpansion = document.querySelector(".company-nav-expansion");
const navExpansionIcons = document.querySelectorAll(".nav-expansion-options i");

const gamesIcons = ["fa-computer", "fa-gamepad", "fa-share"];
const acessoriesIcons = ["fa-headset", "fa-list", "fa-forward-step"];
const newsIcons = ["fa-newspaper", "fa-calendar", "fa-question"];
let classlistTemp;
let optionClicked = 20;

function removeOldIcons() {
    for(let i = 0; i < 3; i++) {
        //Remove the first class from each icon
        classlistTemp = Array.from(navExpansionIcons[i].classList);
        classlistTemp.pop();
        navExpansionIcons[i].className = classlistTemp.join(' ');
    }
}

for(let i = 0; i < navBarOptions.length; i++) {
    navBarOptions[i].addEventListener("click", () => {
        if(optionClicked == i) {
            companyNavExpansion.classList.remove("active");
            optionClicked = 20;
        }
        else {
            companyNavExpansion.classList.add("active");
            optionClicked = i;
            console.log(i);
        }
        console.log(optionClicked);
    });
}

navBarOptions[0].addEventListener("click", () => {
    removeOldIcons();
    for(let i = 0; i < navExpansionIcons.length; i++) {
        navExpansionIcons[i].classList.add(gamesIcons[i]);
    }
});

navBarOptions[1].addEventListener("click", () => {
    removeOldIcons();
    for(let i = 0; i < navExpansionIcons.length; i++) {
        navExpansionIcons[i].classList.add(acessoriesIcons[i]);
    }
});

navBarOptions[2].addEventListener("click", () => {
    removeOldIcons();
    for(let i = 0; i < navExpansionIcons.length; i++) {
        navExpansionIcons[i].classList.add(newsIcons[i]);
    }
});

// Store Search Event

const storeSearchBtn = document.querySelector("#store-search-btn");
const storeSearchInput = document.querySelector("#store-search-input");
storeSearchBtn.addEventListener("click", () => {
    storeSearchInput.classList.toggle("hidden");
});
