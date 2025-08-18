const typingText = "Olá, aventureiro{a}";
const typingEl = document.getElementById("main-typing");
const fadeInText = document.getElementById("fade-in-text");

let index = 0;

function type() {
  if (index < typingText.length) {
    typingEl.textContent += typingText.charAt(index);
    index++;
    setTimeout(type, 10);
    
  }  {
    // Mostra o texto de baixo com fade após digitação
    setTimeout(() => {
      fadeInText.classList.remove("hidden");
      fadeInText.classList.add("show");
    }, 1); // atraso para suavidade
  }
}

window.onload = function type() {
  if (index < typingText.length) {
    typingEl.textContent += typingText.charAt(index);
    index++;
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      fadeInText.classList.remove("hidden");
      fadeInText.classList.add("show");    
    }, 500); // atraso para suavidade
  }
}
;

window.addEventListener("DOMContentLoaded", () => {
  typeWithFade(fadeText, fadeContainer);
});


// ========= FRASES ALEATÓRIAS E LOOP ========= //
const phrases = [
  "      ",
  "Challenge the unknown ",
  "Transform ideas ",
  "Designing realities ",
  "Turning coffee into code, and design into emotion ",
  "Create the impossible ",
  "       ",
];

const container = document.getElementById("typing-background");

function createTypingPhrase() {
  const el = document.createElement("span");
  el.classList.add("typing-phrase");

  // posição aleatória na tela
  const x = Math.random() * 80; // %
  const y = Math.random() * 80; // %
  el.style.left = x + "vw";
  el.style.top = y + "vh";

  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  let index = 0;
  let isDeleting = false;

  container.appendChild(el);

  function type() {
    if (!isDeleting) {
      el.textContent = phrase.substring(0, index);
      index++;
      if (index > phrase.length) {
        isDeleting = true;
        setTimeout(type, 2000); // espera antes de apagar
        return;
      }
    } else {
      el.textContent = phrase.substring(0, index);
      index--;
      if (index < 0) {
        el.remove();
        createTypingPhrase(); // cria nova frase em outro local
        return;
      }
    }

    setTimeout(type, isDeleting ? 75 : 100);
  }

  type();
}

// Inicializa frases ao fundo
window.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => createTypingPhrase(), i * 500);
  }
});

const buttons = document.querySelectorAll('.buttons');

  buttons.forEach(button => {
    const toggleBtn = button.querySelector('.button-btn');

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      buttons.forEach(btn => {
        if (btn !== button) btn.classList.remove('open');
      });
      button.classList.toggle('open');
    });
  });

  document.addEventListener('click', () => {
    buttons.forEach(button => button.classList.remove('open'));
  });

const sections = document.querySelectorAll(['.section-1', '.section-2', '.section-3']);

window.addEventListener("scroll", () => {
  for (let el of sections) {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 300) {
      el.classList.add("active");
    }
  }
});