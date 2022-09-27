/**
 * FUNÇÃO MENU MOBILE
 */
const menuTrigger = document.getElementById("menu-trigger");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();

  const menu = document.getElementById("menu");
  menu.classList.toggle('active');

  const menuItem = document.getElementById("menu-item");
  menuItem.style.display = "flex"

  const active = menu.classList.contains('active');
  event.currentTarget.setAttribute("aria-expanded", active);

  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

menuTrigger.addEventListener('click', toggleMenu);
menuTrigger.addEventListener('touchstart', toggleMenu);


/**
 * FUNÇÃO SELECIONAR BUSCA CONTA
 */

const selectType = document.getElementById("select-type");

function showSelectedOption() {
  let select = document.getElementById("select-type");
  let option = select.options[select.selectedIndex];

  document.getElementById("input-account").value = option.text;
  document.getElementById("input-account").value = option.value;
}

showSelectedOption();


