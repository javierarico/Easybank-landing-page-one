//gets the hamburger menu
const hamburgerMenu = document.querySelector(".hamburger");

//gets modal menu
const modalMenu = document.querySelector(".modal-menu");

//gets the top section
const topSection = document.querySelector('.top');
const middleSection = document.querySelector('.middle');
const bottomSection = document.querySelector('.bottom');
const footerSection = document.querySelector('footer');

hamburgerMenu.addEventListener("click", () => {
    //toggle modalMenu on click
    modalMenu.classList.toggle("show");
    topSection.classList.toggle("darken");
    middleSection.classList.toggle("darken");
    bottomSection.classList.toggle("darken");
    footerSection.classList.toggle("darken");
});

//hides modal menu if user clicks on a menu item
const menuItems = document.querySelectorAll(".nav_links-modal");
for (let i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener("click", () => {
        modalMenu.classList.toggle("show");
        topSection.classList.toggle("darken");
        middleSection.classList.toggle("darken");
        bottomSection.classList.toggle("darken");
        footerSection.classList.toggle("darken");
    });
}