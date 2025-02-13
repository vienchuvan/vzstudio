export function animateOnScroll(elements, animationClass, options = { threshold: 0.3 }) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
      }
    });
  }, options);

  elements.forEach((el) => {
    if (el) observer.observe(el);
  });
}