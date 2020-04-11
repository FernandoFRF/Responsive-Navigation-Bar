const navSlide = () => {
  const burguerMenu = document.querySelector('.burguerMenu');
  const nav = document.querySelector('.nav-menu');
  const navMenu = document.querySelectorAll('.nav-menu li');

  burguerMenu.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //Animate Menu
    navMenu.forEach((menu, index) => {
      if (menu.style.animation) {
        menu.style.animation = '';
      } else {
        menu.style.animation = ` navMenuFade 0.5s ease forwards ${index / 5 + 1}s `;
      }
    });

    //Animate Burguer icon
    burguerMenu.classList.toggle('modifyBurguer');
  });
};

const main = () => {
  navSlide();
};

main();
