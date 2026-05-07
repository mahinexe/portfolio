"use strict";
const roles = [
    "Enthusiast",
    "Nerd",
    "Geek"
];
const contactText = "Open to cybersecurity and student tech initiatives. I am open to discussing ideas.";
const galleryItems = [
    {
        link: "https://www.facebook.com/share/1AoEhkAh69/",
        image: "./img/gallery-1.jpg",
        description: "Volunteers of Southeast University 8th Convocation"
    },
    {
        link: "https://www.facebook.com/share/1FMeEmMBaf/",
        image: "./img/gallery-2.jpg",
        description: "IT Team, Southeast University 8th Convocation"
    },
    {
        link: "https://www.facebook.com/share/18LNp7RSja/",
        image: "./img/gallery-3.jpg",
        description: "CSE Dept. Volunteers at Southeast University 8th Convocation"
    },
    {
        link: "https://www.facebook.com/share/17G7ofCQkW/",
        image: "./img/gallery-4.jpg",
        description: "Team SEUCC with respected faculties and chairman of CSE Dept. SEU"
    },
    {
        link: "https://www.facebook.com/share/18LNp7RSja/",
        image: "./img/gallery-5.jpg",
        description: "Receiving certificate of Assistant Head of IT Team, SEUCC from honorable Mohammad Ashraful Hoque sir"
    },
    {
        link: "https://www.facebook.com/share/1KjiBi3xwU/",
        image: "./img/gallery-6.jpg",
        description: "Receiving award for best volunteer from honorable Farhad Uz Zaman sir"
    },
    {
        link: "https://www.facebook.com/share/1DxBkxEWKG/",
        image: "./img/gallery-7.jpg",
        description: "Taking interview for SEUCC Membership"
    },
    {
        link: "https://www.facebook.com/share/1DDzgX6Pcc/",
        image: "./img/gallery-8.jpg",
        description: "With Honorable Dr. Yousuf Mahbubul Islam sir, VC, Southeast University, for securing 171th position at the Hackfinity Battle. From March 17 to March 20, our team, \"The Unknown.SEU\", from Southeast University, participated in the TryHackMe CTF Hackfinity Battle, an international cybersecurity competition with 4,237 teams and 26,134 players worldwide."
    }
];
const typingTarget = document.getElementById("typed-role");
const contactTypingTarget = document.getElementById("contact-typed");
const galleryGrid = document.getElementById("gallery-grid");
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");
const navLinks = Array.from(document.querySelectorAll(".main-nav a"));
const revealElements = Array.from(document.querySelectorAll(".reveal"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const sleep = (ms) => new Promise((resolve) => {
    window.setTimeout(resolve, ms);
});
const isFacebookLink = (url) => /facebook\.com/i.test(url);
const isAllowedUrl = (url) => {
    try {
        // Accept both absolute URLs and local relative paths.
        const parsed = new URL(url, window.location.href);
        return parsed.protocol === "https:" || parsed.protocol === "http:";
    }
    catch {
        return false;
    }
};
const createSvgIcon = (pathD) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathD);
    svg.appendChild(path);
    return svg;
};
const facebookIconPath = "M13.5 22v-8h2.7l.4-3h-3.1V9.2c0-.87.24-1.46 1.5-1.46h1.6V5.1c-.28-.04-1.23-.1-2.33-.1-2.31 0-3.89 1.41-3.89 4v2H8v3h2.38v8h3.12Z";
const linkIconPath = "M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 1 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.07 7.07l.354-.353a5 5 0 0 0 0-7.07l-1.414-1.415 1.415-1.414zm6.718-6.719a7 7 0 0 1 0 9.9l-1.414-1.414a5 5 0 0 0-7.071-7.071l-.354.353a5 5 0 0 0 0 7.071l1.414 1.415-1.414 1.414-1.415-1.414a7 7 0 0 1 0-9.9l.354-.354a7 7 0 0 1 9.9 0z";
const renderGallery = () => {
    if (!galleryGrid) {
        return;
    }
    galleryGrid.textContent = "";
    galleryItems.forEach((item) => {
        const hasLink = Boolean(item.link && item.link.trim().length > 0);
        const card = document.createElement("article");
        card.className = "gallery-card";
        const preview = document.createElement("div");
        preview.className = "gallery-preview";
        if (item.image && isAllowedUrl(item.image)) {
            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.description;
            img.loading = "lazy";
            if (hasLink && item.link && isAllowedUrl(item.link)) {
                const imgLink = document.createElement("a");
                imgLink.href = item.link;
                imgLink.target = "_blank";
                imgLink.rel = "noopener noreferrer";
                imgLink.className = "gallery-preview-imglink";
                imgLink.appendChild(img);
                preview.appendChild(imgLink);
            }
            else {
                preview.appendChild(img);
            }
        }
        else if (hasLink && item.link && isAllowedUrl(item.link)) {
            const anchor = document.createElement("a");
            anchor.href = item.link;
            anchor.target = "_blank";
            anchor.rel = "noopener noreferrer";
            anchor.className = "gallery-preview-link";
            anchor.appendChild(createSvgIcon(isFacebookLink(item.link) ? facebookIconPath : linkIconPath));
            const label = document.createElement("span");
            label.textContent = isFacebookLink(item.link) ? "View on Facebook" : "Open Link";
            anchor.appendChild(label);
            preview.appendChild(anchor);
        }
        else {
            preview.classList.add("gallery-preview-empty");
            preview.textContent = "No link available";
        }
        card.appendChild(preview);
        const content = document.createElement("div");
        content.className = "gallery-content";
        const desc = document.createElement("p");
        const prompt = document.createElement("span");
        prompt.className = "gc-prompt";
        prompt.textContent = "$ echo ";
        const str = document.createElement("span");
        str.className = "gc-string";
        str.textContent = `"${item.description}"`;
        desc.appendChild(prompt);
        desc.appendChild(str);
        content.appendChild(desc);
        card.appendChild(content);
        galleryGrid.appendChild(card);
    });
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
    }, { threshold: 0.08, rootMargin: "0px 0px 60px 0px" });
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
    renderGallery();
    setupMenu();
    setupReveal();
    void startRoleTyping();
};
initialize();
