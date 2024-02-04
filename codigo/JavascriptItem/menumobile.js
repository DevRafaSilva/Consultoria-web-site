export default function menumobileinit() {
  const menuMobileLogo = document.querySelector(".menu-item-hamburguer");
  const menuMobileContainer = document.querySelector(".links-mobile");
  const menuMobileContainerColor = document.querySelector(".links-menu");

  function menumobile() {
    menuMobileContainer.classList.toggle("ativo");
    menuMobileContainerColor.classList.toggle("ativo");
  }

  menuMobileLogo.addEventListener("click", menumobile);
}
