function showSection(id) {
    document.querySelectorAll("main section").forEach(section => {
        section.style.display="none";
    });
    document.getElementById(id).style.display="block";
}