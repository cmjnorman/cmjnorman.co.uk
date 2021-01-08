function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function goToAbout() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
}

function goToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

function goToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
}

function openCV() {
    var cv = ""
    window.open(pdf);
}

var title = document.getElementById("title");
var pinnedIcons = document.getElementById("icons-pinned");
var titleIcons = document.getElementById("icons-title");

window.onscroll = function() {
    if(title.getBoundingClientRect().top <= 0){
        pinnedIcons.classList.add("--invisible");
        titleIcons.classList.remove("--invisible");
    }

    if(title.getBoundingClientRect().bottom <= 0){
        pinnedIcons.classList.remove("--invisible");
        titleIcons.classList.add("--invisible");
    }
}

