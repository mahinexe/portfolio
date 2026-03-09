const roles: string[] = [
  "Enthusiast",
  "Nerd",
  "Geek"
];

const contactText = "Open to cybersecurity and student tech initiatives. I am open to discussing ideas.";

type GalleryItem = {
  link?: string;
  image?: string;
  description: string;
};

const galleryItems: GalleryItem[] = [
  {
    link: "https://www.facebook.com/share/18LNp7RSja/",
    image: "https://scontent.fdac149-1.fna.fbcdn.net/v/t39.30808-6/480987276_1265899047806645_1089731747772428946_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFWHQx1OVS8_RGHlh-yBS0yVsrqsasotX5Wyuqxqyi1fpGUN5iM5s6FdytE_EKIUsfmR5HDSNXZtvJ6HYKr0xtL&_nc_ohc=mtmDSgtk1wAQ7kNvwH4d4SV&_nc_oc=AdnMDCVj-Q4s0Nj9hz1TOfCaoi1YJD20nI4R3mvRtSCzVl9Jf12T0AHIhSn5S7owjTU&_nc_zt=23&_nc_ht=scontent.fdac149-1.fna&_nc_gid=oziLnF3u0Y_Ifng47zbaiA&_nc_ss=8&oh=00_AfwTzhbe1LEMmmEsdK2RbM2PCWjQru73nHrpeP7hFzk1zw&oe=69B4409E",
    description: "Volunteers of Southeast University 8th Convocation"
  },
  {
    link: "https://www.facebook.com/share/1FMeEmMBaf/",
    image: "https://scontent.fdac149-1.fna.fbcdn.net/v/t39.30808-6/481091874_1265899854473231_7541037267313152057_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHYcNjH7IueXA1h3Woi-sG-ZnFiPug7DYlmcWI-6DsNiXgciWX500-m-tmjzNXeJ29onkmtsx7B2owzLkdniTVS&_nc_ohc=FECfq_VK858Q7kNvwFSuIlZ&_nc_oc=AdlacocMAJLDf6oDBpu5ZU9CZLcJkhEkSzibX_iN-Z-pyMUQBqrzcsibDq9vqf3-D8s&_nc_zt=23&_nc_ht=scontent.fdac149-1.fna&_nc_gid=5bvoqBgYYQpq6c5KkZTibg&_nc_ss=8&oh=00_Afx7WVy_UWCsJ7EhI5LcsLQ6NOUJ9Jj5l3nAJ-CBAbamWA&oe=69B45762",
    description: "IT Team, Southeast University 8th Convocation"
  },
  {
    link: "https://www.facebook.com/share/18LNp7RSja/",
    image: "https://scontent.fdac149-1.fna.fbcdn.net/v/t39.30808-6/480987276_1265899047806645_1089731747772428946_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFWHQx1OVS8_RGHlh-yBS0yVsrqsasotX5Wyuqxqyi1fpGUN5iM5s6FdytE_EKIUsfmR5HDSNXZtvJ6HYKr0xtL&_nc_ohc=mtmDSgtk1wAQ7kNvwH4d4SV&_nc_oc=AdnMDCVj-Q4s0Nj9hz1TOfCaoi1YJD20nI4R3mvRtSCzVl9Jf12T0AHIhSn5S7owjTU&_nc_zt=23&_nc_ht=scontent.fdac149-1.fna&_nc_gid=3KtepEpniEMkEmxQLw6tNw&_nc_ss=8&oh=00_Afx7mqUgpkJAqxu_vk4PJy8Ub3cXLt4vbJa-2MsfKcRlBQ&oe=69B4409E",
    description: "CSE Dept. Volunteers at Southeast University 8th Convocation"
  },
  {
    link: "https://www.facebook.com/share/17G7ofCQkW/",
    image: "https://scontent.fdac149-1.fna.fbcdn.net/v/t39.30808-6/475498688_1247404522989431_5433438448363076065_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEv60lW0xd7Je_RJJZjaQkGnHFgtzBrJbiccWC3MGsluJBDyfv2VO6CuAQCcvjM44cboAXTpd0BYzki7-oulo5Y&_nc_ohc=zd5o7NceCw4Q7kNvwESziWR&_nc_oc=Adl5a8b1l_32DZgTbonpBNfxx4up6HHg14indm2dtccs902JVIQ55UpaeC4ytjx-I88&_nc_zt=23&_nc_ht=scontent.fdac149-1.fna&_nc_gid=uEX41PCc7F5QFdbVpRwosw&_nc_ss=8&oh=00_AfwnZmVp68LH7lp3aaJ478oVqbQkncj5QyxuFcKsepAqdw&oe=69B45F87",
    description: "Team SEUCC with respected faculties and chairman of CSE Dept. SEU"
  },
  {
    link: "https://www.facebook.com/share/18LNp7RSja/",
    image: "https://scontent.fdac149-1.fna.fbcdn.net/v/t39.30808-6/475783602_1246181886445028_3382176870740642262_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeE_RpCNMzBvlo8dssZefxR49y0Vj9-mfAT3LRWP36Z8BFpve3ypPkQ0xy5BHHmrte0XzByAZH82jWSzqPVg0FwZ&_nc_ohc=7rsqD_xFl_cQ7kNvwEzgB7D&_nc_oc=Adnt95kgQ3GB0PfEhwIA3GxGH60QyaLzRzJSL7QrCnh0m1i3z1EwLmxSEBRYGiprmvE&_nc_zt=23&_nc_ht=scontent.fdac149-1.fna&_nc_gid=K6YYaGAmiubSMD4fiEXNZw&_nc_ss=8&oh=00_AfzYfr_cNTejf0emeflnZrOp_sxr5QIO_2JQsdNi6pm8dA&oe=69B442D8",
    description: "Receiving certificate of Assistant Head of IT Team, SEUCC from honorable Mohammad Ashraful Hoque sir"
  },
  {
    link: "https://www.facebook.com/share/1KjiBi3xwU/",
    image: "https://scontent.fdac149-1.fna.fbcdn.net/v/t39.30808-6/475408771_1246178756445341_4288250807574819753_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF3qSaUYY5odq8CBM7eVkqSKM7CGCjjjwQozsIYKOOPBJuqtxIypVXvAjjaK-7t_5fVhfWyrzaOAlKZWA-7N_em&_nc_ohc=QN2oZJYnOAkQ7kNvwG4xXq4&_nc_oc=AdmIhhSKN5d60GvIlW5TRanIgWLE6dfcaea6L-p6z6CpgbbdaGCL2BrlvSHovL71eCg&_nc_zt=23&_nc_ht=scontent.fdac149-1.fna&_nc_gid=CI-bSVMptmJaI8mt56vjaA&_nc_ss=8&oh=00_Afy2H5xmFJHYOx29rQ9wJO3uHoh9hCCJLjw5D6pF9iP_Pw&oe=69B43DA5",
    description: "Receiving award for best volunteer from honorable Farhad Uz Zaman sir"
  },
  {
    link: "https://www.facebook.com/share/1DxBkxEWKG/",
    image: "https://scontent.fdac149-1.fna.fbcdn.net/v/t39.30808-6/474840240_1242643156798901_4382061234990056332_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEAH3jZfOVdd7W7O5Os3fPF2T2hXdLNyI_ZPaFd0s3Ij8Ui6CO8f42PYQsl0-vEWVOVy_sHdQ895uu3lA2NmSMM&_nc_ohc=6z9O_TNzqfsQ7kNvwFH7LEb&_nc_oc=Adn9Ckb-uwcujQe9qBDUyrxz_JrCcM9e-aB_5jOJa4fxo_c478EKPkb3DJlO5orwHfY&_nc_zt=23&_nc_ht=scontent.fdac149-1.fna&_nc_gid=_Is0L481c-fk-Rgi-V9noQ&_nc_ss=8&oh=00_AfxJx44DcDOtAxMMCKEdNDY5H_Q4qlJXHlEYPZ12FBGkDg&oe=69B460A6",
    description: "Taking interview for SEUCC Membership"
  },
  {
    link: "https://www.facebook.com/share/1DDzgX6Pcc/",
    image: "https://scontent.fdac149-1.fna.fbcdn.net/v/t39.30808-6/486621738_1282986849431198_6070451719861280766_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFtapHpwkZT7DpJ0P2VZw2OWotlWPPy5u1ai2VY8_Lm7Xom44vm5D_JqdfffceGsRcuaeP-XYMr6OYDw-e9tcS1&_nc_ohc=T_EnWbQG3IYQ7kNvwGpk4Qo&_nc_oc=Adm1TJM5MLlRuB2sfzpGzaKkDMhwpc-658EIzAhzn97cRVLpsu5WVsww8qo8LGT1Vog&_nc_zt=23&_nc_ht=scontent.fdac149-1.fna&_nc_gid=YrOr3wyXJQMWzOicB1jd1A&_nc_ss=8&oh=00_AfykRiilpio3EH68AnyNy5x7vdlAugbJT97iALAoVR-q_Q&oe=69B456FC",
    description: "With Honorable Dr. Yousuf Mahbubul Islam sir, VC, Southeast University, for securing 171th position at the Hackfinity Battle. From March 17 to March 20, our team, \"The Unknown.SEU\", from Southeast University, participated in the TryHackMe CTF Hackfinity Battle, an international cybersecurity competition with 4,237 teams and 26,134 players worldwide."
  }
];

const typingTarget = document.getElementById("typed-role");
const contactTypingTarget = document.getElementById("contact-typed");
const galleryGrid = document.getElementById("gallery-grid");
const menuToggle = document.getElementById("menu-toggle") as HTMLButtonElement | null;
const nav = document.getElementById("main-nav");
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".main-nav a"));
const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const sleep = (ms: number): Promise<void> => new Promise((resolve) => {
  window.setTimeout(resolve, ms);
});

const isFacebookLink = (url: string): boolean => /facebook\.com/i.test(url);

const facebookSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.2c0-.87.24-1.46 1.5-1.46h1.6V5.1c-.28-.04-1.23-.1-2.33-.1-2.31 0-3.89 1.41-3.89 4v2H8v3h2.38v8h3.12Z"/></svg>';
const linkSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 1 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.07 7.07l.354-.353a5 5 0 0 0 0-7.07l-1.414-1.415 1.415-1.414zm6.718-6.719a7 7 0 0 1 0 9.9l-1.414-1.414a5 5 0 0 0-7.071-7.071l-.354.353a5 5 0 0 0 0 7.071l1.414 1.415-1.414 1.414-1.415-1.414a7 7 0 0 1 0-9.9l.354-.354a7 7 0 0 1 9.9 0z"/></svg>';

const renderGallery = (): void => {
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

    if (item.image) {
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.description;
      img.loading = "lazy";
      if (hasLink && item.link) {
        const imgLink = document.createElement("a");
        imgLink.href = item.link;
        imgLink.target = "_blank";
        imgLink.rel = "noopener noreferrer";
        imgLink.className = "gallery-preview-imglink";
        imgLink.appendChild(img);
        preview.appendChild(imgLink);
      } else {
        preview.appendChild(img);
      }
    } else if (hasLink && item.link) {
      const anchor = document.createElement("a");
      anchor.href = item.link;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.className = "gallery-preview-link";
      anchor.innerHTML = isFacebookLink(item.link) ? facebookSvg : linkSvg;
      const label = document.createElement("span");
      label.textContent = isFacebookLink(item.link) ? "View on Facebook" : "Open Link";
      anchor.appendChild(label);
      preview.appendChild(anchor);
    } else {
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
  }, { threshold: 0.08, rootMargin: "0px 0px 60px 0px" });

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
  renderGallery();
  setupMenu();
  setupReveal();
  void startRoleTyping();
};

initialize();
