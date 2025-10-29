window.onload = () => {
  const correctPassword = "yaoxinyi"; // 修改密码
  const birthdayDate = "2025-11-27";   // 修改生日

  const loginDiv = document.getElementById("login");
  const mainDiv = document.getElementById("main");
  const errorP = document.getElementById("error");
  const passwordInput = document.getElementById("password");
  const enterBtn = document.getElementById("enterBtn");
  const music = document.getElementById("music");

  enterBtn.addEventListener("click", () => {
    if (passwordInput.value === correctPassword) {
      loginDiv.classList.add("hidden");
      mainDiv.classList.remove("hidden");

      startSlideshow();
      startFireworks();
      updateCountdown();
      playMusic();
    } else {
      errorP.textContent = "密码错误，请再试一次 💔";
    }
  });

  function playMusic() {
    music.play().catch(() => alert("请点击页面以允许播放音乐 🎵"));
  }

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

  function startSlideshow() {
    const slides = document.querySelectorAll(".slide");
    if (!slides.length) return;

    slides[0].classList.add("active"); // 确保第一张显示
    let currentIndex = 0;

    setInterval(() => {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("active");
    }, 3000);
  }

  function updateCountdown() {
    const countdown = document.getElementById("countdown");
    const today = new Date();
    const target = new Date(birthdayDate);
    const diff = target - today;
    const days = Math.ceil(diff / (1000*60*60*24));
    countdown.textContent = days > 0 
      ? `🎈 距离生日还有 ${days} 天 🎈` 
      : "🎉 今天是你的生日！🎉";
  }
};
