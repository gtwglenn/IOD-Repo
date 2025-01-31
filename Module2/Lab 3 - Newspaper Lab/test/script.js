// JavaScript to add hover effect for dropdown (for more control)
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('mouseover', () => {
    const menu = dropdown.querySelector('.dropdown-menu');
    menu.style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', () => {
    const menu = dropdown.querySelector('.dropdown-menu');
    menu.style.display = 'none';
  });
});
