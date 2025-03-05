function loadNavbar() {
    fetch('partials/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading navbar:", error);
        });
}

function loadContent() {
    fetch('pages/pasar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading content:", error);
        });
}

window.onload = function() {
    loadNavbar();
    loadContent();
};
