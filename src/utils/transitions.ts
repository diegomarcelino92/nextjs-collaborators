export function anchorTo(id: string, top = 0) {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  const y = element.getBoundingClientRect().top + window.pageYOffset - top;

  window.scrollTo({ top: y, behavior: 'smooth' });
}
