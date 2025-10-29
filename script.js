const correctPassword = "yaoxinyi"; // 可自行修改
const birthdayDate = "2025-11-27"; // 修改为目标生日日期

function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
    startFireworks();
    startSlideshow();
    updateCountdown();
    playMusic();
  } else {
    error.textContent = "密码错误，请再试一次 💔";
  }
}

function playMusic() {
  const music = document.getElementById("music");
  music.play();
}

// 烟花动画
function startFireworks() {
  const duration = 20 * 1000;
  const end = Date.now() + duration;
  (function frame() {
    confetti({
      particleCount: 6,
      spread: 70,
      origin: { x: Math.random(), y: Math.random() * 0.5 }
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// 图片轮播
let currentIndex = 0;
function startSlideshow() {
  const slides = document.querySelectorAll(".slide");
  setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }, 3000);
}

// 倒计时
function updateCountdown() {
  const countdown = document.getElementById("countdown");
  const today = new Date();
  const target = new Date(birthdayDate);
  const diff = target - today;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  if (days > 0) {
    countdown.textContent = `🎈 距离生日还有 ${days} 天 🎈`;
  } else {
    countdown.textContent = "🎉 今天是你的生日！🎉";
  }
}
