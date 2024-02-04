export default function suaveinit() {
  const link = document.querySelectorAll(".links-nav a");

  function fun(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
  }

  link.forEach((itemclick) => {
    itemclick.addEventListener("click", fun);
  });
}
