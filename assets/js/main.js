const toggle_btn = document.getElementById('toggle-open');
const sidebar = document.getElementById('side-nav');

toggle_btn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})
sidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
})