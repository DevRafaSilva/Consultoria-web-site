export default function tabnavInit() {
  const tabnav = document.querySelectorAll(".tab-item");
  const containerProduto = document.querySelectorAll(".escolha-seu-plano");
  const tabnavlabel = document.querySelectorAll("label");

  function tabEvent(index) {
    containerProduto.forEach((itemclick) => {
      itemclick.classList.remove("ativo");
    });
    containerProduto[index].classList.add("ativo");
    tabnavlabel.forEach((itemclick) => {
      itemclick.classList.remove("ativo");
    });
    tabnavlabel[index].classList.add("ativo");
  }

  tabnav.forEach((itemclick, index) => {
    itemclick.addEventListener("click", () => {
      tabEvent(index);
    });
  });
}
