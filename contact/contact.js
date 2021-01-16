let toggleBtn = document.getElementById('menu-toggle');
let sidebarWrapper = document.getElementById('wrapper');
function main() {
    // check whether we are logged in or not
}

function toggleDropdown(){
    var menu = document.getElementById("dropdown");
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}