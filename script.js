<<<<<<< HEAD
// -----------------------------
// スクロールでフェードイン
// -----------------------------
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
  fadeInObserver.observe(el);
});

// -----------------------------
// ボタンのリップルエフェクト
// -----------------------------
document.querySelectorAll('button, .btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    circle.style.left = `${e.offsetX}px`;
    circle.style.top = `${e.offsetY}px`;
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});
=======
// -----------------------------
// スクロールでフェードイン
// -----------------------------
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
  fadeInObserver.observe(el);
});

// -----------------------------
// ボタンのリップルエフェクト
// -----------------------------
document.querySelectorAll('button, .btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    circle.style.left = `${e.offsetX}px`;
    circle.style.top = `${e.offsetY}px`;
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});
>>>>>>> 9a800df (お客様の声とAboutを追加)
