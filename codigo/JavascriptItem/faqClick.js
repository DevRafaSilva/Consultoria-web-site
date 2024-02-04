export default function faqInit() {
  const faqh3 = document.querySelectorAll("[data-faqClick]");

  function PfaqEvent() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  faqh3.forEach((itemclick) => {
    itemclick.addEventListener("click", PfaqEvent);
  });
}
