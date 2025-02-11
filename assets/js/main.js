
//! NAV TOGGLE ACTION
const menu_open_btn = document.getElementById('toggle-open');
const sidebar = document.getElementById('sidebar');
const menu_close_btn = document.getElementById("toggle-close");

menu_open_btn.addEventListener('click', () => {
    sidebar.classList.toggle('toggle-active');
});

menu_close_btn.addEventListener('click', () => {
    sidebar.classList.remove('toggle-active');
});
