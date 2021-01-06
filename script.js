function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function goToAbout() {
    document.getElementById("about").scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center"
    });
}

function goToProjects() {
    document.getElementById("projects").scrollIntoView();
}

function goToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center"
    });
}