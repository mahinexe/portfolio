const roles: string[] = [
  "Enthusiast",
  "Nerd",
  "Geek"
];

const contactText = "Open to cybersecurity and student tech initiatives. I am open to discussing ideas.";

const typingTarget = document.getElementById("typed-role");
const contactTypingTarget = document.getElementById("contact-typed");
const menuToggle = document.getElementById("menu-toggle") as HTMLButtonElement | null;
const nav = document.getElementById("main-nav");
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".main-nav a"));
const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const sleep = (ms: number): Promise<void> => new Promise((resolve) => {
  window.setTimeout(resolve, ms);
});

const setupMenu = (): void => {
  if (!menuToggle || !nav) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    const nextState = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", nextState);
    menuToggle.setAttribute("aria-expanded", String(nextState));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
};

const setupReveal = (): void => {
  if (revealElements.length === 0) {
    return;
  }

  if (prefersReducedMotion) {
    revealElements.forEach((element) => element.classList.add("visible"));
    if (contactTypingTarget) {
      contactTypingTarget.textContent = contactText;
    }
    return;
  }

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 55, 260)}ms`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const target = entry.target as HTMLElement;
      target.classList.add("visible");
      
      if (target.classList.contains("contact-terminal")) {
        void startContactTyping();
      }
      
      observer.unobserve(target);
    });
  }, { threshold: 0.22, rootMargin: "0px 0px -20px 0px" });

  revealElements.forEach((element) => observer.observe(element));
};

const startRoleTyping = async (): Promise<void> => {
  if (!typingTarget) {
    return;
  }

  if (prefersReducedMotion) {
    typingTarget.textContent = roles[0];
    return;
  }

  let roleIndex = 0;

  while (true) {
    const current = roles[roleIndex];

    for (let i = 1; i <= current.length; i += 1) {
      typingTarget.textContent = current.slice(0, i);
      await sleep(36 + Math.random() * 30);
    }

    await sleep(1200);

    for (let i = current.length; i >= 0; i -= 1) {
      typingTarget.textContent = current.slice(0, i);
      await sleep(20);
    }

    await sleep(300);
    roleIndex = (roleIndex + 1) % roles.length;
  }
};

const startContactTyping = async (): Promise<void> => {
  if (!contactTypingTarget) {
    return;
  }

  if (prefersReducedMotion) {
    contactTypingTarget.textContent = contactText;
    return;
  }

  await sleep(400);

  for (let i = 1; i <= contactText.length; i += 1) {
    contactTypingTarget.textContent = contactText.slice(0, i);
    await sleep(28 + Math.random() * 20);
  }
};

const initialize = (): void => {
  setupMenu();
  setupReveal();
  void startRoleTyping();
};

initialize();
