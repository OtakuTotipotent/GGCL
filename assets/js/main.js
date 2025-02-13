
//! NAV TOGGLE ACTION IS WRITTEN HERE
const menu_open_btn = document.getElementById('toggle-open');
const sidebar = document.getElementById('sidebar');
const menu_close_btn = document.getElementById("toggle-close");

menu_open_btn.addEventListener('click', () => {
    sidebar.classList.toggle('toggle-active');
});

menu_close_btn.addEventListener('click', () => {
    sidebar.classList.remove('toggle-active');
});

//! ACTIVE NAVBAR INDICATION CODE GOES HERE

const links = document.body.querySelectorAll("nav a");
const current_url = window.location.href;
links.forEach((link) => {
    if (link.href === current_url) {
        link.classList.add("active-link");
    }
});

//! ACTIVE DROPDOWN MENU ACTION IS HANDLED HERE

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".dropdown-btn button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let dropdown_list = button.parentElement.nextElementSibling;
            dropdown_list.classList.toggle("dropdown-activated")
            if (!dropdown_list) {
                console.error("Dropdown list is not found for ,", this);
                return;
            }
        });
    });
});