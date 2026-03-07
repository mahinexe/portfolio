"use strict";
const roles = [
    "Enthusiast",
    "Nerd",
    "Geek"
];
const contactText = "Open to cybersecurity and student tech initiatives. I am open to discussing ideas.";
const typingTarget = document.getElementById("typed-role");
const contactTypingTarget = document.getElementById("contact-typed");
const totalViewsTarget = document.getElementById("total-views");
const liveViewsTarget = document.getElementById("live-views");
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");
const navLinks = Array.from(document.querySelectorAll(".main-nav a"));
const revealElements = Array.from(document.querySelectorAll(".reveal"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const counterApiBase = "https://api.countapi.xyz";
const counterNamespace = "mahinexe-portfolio";
const totalViewsKey = "total-views";
const liveUsersKey = "live-users";
let hasRegisteredLiveUser = false;
let hasReleasedLiveUser = false;
const sleep = (ms) => new Promise((resolve) => {
    window.setTimeout(resolve, ms);
});
const setCounterText = (target, value) => {
    if (!target) {
        return;
    }
    target.textContent = value === null ? "--" : String(Math.max(0, Math.round(value)));
};
const readCounterValue = async (path) => {
    try {
        const response = await fetch(`${counterApiBase}${path}`, { cache: "no-store" });
        if (!response.ok) {
            return null;
        }
        const data = await response.json();
        if (typeof data.value !== "number") {
            return null;
        }
        return data.value;
    }
    catch {
        return null;
    }
};
const updateTotalViews = async () => {
    if (!totalViewsTarget) {
        return;
    }
    const value = await readCounterValue(`/hit/${counterNamespace}/${totalViewsKey}`);
    setCounterText(totalViewsTarget, value);
};
const refreshLiveUsers = async () => {
    if (!liveViewsTarget) {
        return;
    }
    const value = await readCounterValue(`/get/${counterNamespace}/${liveUsersKey}`);
    setCounterText(liveViewsTarget, value);
};
const registerLiveUser = async () => {
    if (!liveViewsTarget || hasRegisteredLiveUser) {
        return;
    }
    const value = await readCounterValue(`/update/${counterNamespace}/${liveUsersKey}?amount=1`);
    if (value !== null) {
        hasRegisteredLiveUser = true;
    }
    setCounterText(liveViewsTarget, value);
};
const releaseLiveUser = () => {
    if (!hasRegisteredLiveUser || hasReleasedLiveUser) {
        return;
    }
    hasReleasedLiveUser = true;
    void fetch(`${counterApiBase}/update/${counterNamespace}/${liveUsersKey}?amount=-1`, {
        method: "GET",
        cache: "no-store",
        keepalive: true
    });
};
const setupVisitorStats = () => {
    if (!totalViewsTarget && !liveViewsTarget) {
        return;
    }
    void updateTotalViews();
    void registerLiveUser();
    if (liveViewsTarget) {
        window.setInterval(() => {
            void refreshLiveUsers();
        }, 15000);
    }
    window.addEventListener("pagehide", releaseLiveUser);
    window.addEventListener("beforeunload", releaseLiveUser);
};
const setupMenu = () => {
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
const setupReveal = () => {
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
            const target = entry.target;
            target.classList.add("visible");
            if (target.classList.contains("contact-terminal")) {
                void startContactTyping();
            }
            observer.unobserve(target);
        });
    }, { threshold: 0.22, rootMargin: "0px 0px -20px 0px" });
    revealElements.forEach((element) => observer.observe(element));
};
const startRoleTyping = async () => {
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
const startContactTyping = async () => {
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
const initialize = () => {
    setupMenu();
    setupReveal();
    setupVisitorStats();
    void startRoleTyping();
};
initialize();
