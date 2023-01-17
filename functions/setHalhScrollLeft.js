export function setHalhScrollLeft(elName) {
  let overall = document.querySelector(elName);
  overall.scrollLeft = overall.offsetWidth / 2;
}
