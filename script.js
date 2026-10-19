// Карусель галереи: стрелки, свайп пальцем и клавиши ← → прокручивают карточки по кругу.
(() => {
  const track = document.getElementById('track');
  const prev = document.querySelector('.arrow--prev');
  const next = document.querySelector('.arrow--next');
  if (!track) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let busy = false;

  const move = (dir) => {
    if (busy) return;
    busy = true;
    const swap = () => {
      if (dir > 0) track.appendChild(track.firstElementChild);
      else track.prepend(track.lastElementChild);
    };
    if (reduce) { swap(); busy = false; return; }
    track.style.transition = 'opacity .15s';
    track.style.opacity = '0';
    setTimeout(() => { swap(); track.style.opacity = '1'; }, 150);
    setTimeout(() => { busy = false; }, 320);
  };

  next.addEventListener('click', () => move(1));
  prev.addEventListener('click', () => move(-1));

  // клавиатура: стрелки, когда фокус в галерее
  document.getElementById('gallery').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') move(1);
    if (e.key === 'ArrowLeft') move(-1);
  });

  // свайп (тач и мышь)
  let startX = 0, startY = 0, tracking = false, swiped = false;
  track.addEventListener('pointerdown', (e) => {
    tracking = true; swiped = false;
    startX = e.clientX; startY = e.clientY;
  });
  track.addEventListener('pointerup', (e) => {
    if (!tracking) return;
    tracking = false;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      swiped = true;
      move(dx < 0 ? 1 : -1);
    }
  });
  track.addEventListener('pointercancel', () => { tracking = false; });
  // после свайпа не «кликаем» по карточке
  track.addEventListener('click', (e) => { if (swiped) { e.preventDefault(); swiped = false; } });
})();
