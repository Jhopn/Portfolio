import { useEffect } from 'react';

// Adiciona a classe "visivel" aos elementos .reveal quando entram na tela.
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const elementos = document.querySelectorAll('.reveal:not(.visivel)');

    if (!('IntersectionObserver' in window)) {
      elementos.forEach((el) => el.classList.add('visivel'));
      return;
    }

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
            observer.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elementos.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
