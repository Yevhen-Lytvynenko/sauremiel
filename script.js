// Карусель галереи: стрелки прокручивают карточки по кругу.
(() => {
  const track = document.getElementById('track');
  const prev = document.querySelector('.arrow--prev');
  const next = document.querySelector('.arrow--next');
  if (!track) return;

  const fade = (fn) => {
    track.style.transition = 'opacity .15s';
    track.style.opacity = '0';
    setTimeout(() => { fn(); track.style.opacity = '1'; }, 150);
  };

  next.addEventListener('click', () => fade(() => track.appendChild(track.firstElementChild)));
  prev.addEventListener('click', () => fade(() => track.prepend(track.lastElementChild)));
})();
