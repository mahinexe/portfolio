const numberFormat = new Intl.NumberFormat("en-US");
const dateFormat = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
});
const relativeFormat = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
const formatNumber = (value) => {
    if (value === null || value === undefined || Number.isNaN(value)) {
        return "N/A";
    }
    return numberFormat.format(value);
};
const formatDate = (value) => {
    if (!value) {
        return "Unknown";
    }
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
        return value;
    }
    return dateFormat.format(parsed);
};
const timeAgo = (value) => {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
        return value;
    }
    const diffMinutes = Math.round((parsed.getTime() - Date.now()) / 60000);
    const absMinutes = Math.abs(diffMinutes);
    if (absMinutes < 60) {
        return relativeFormat.format(diffMinutes, "minute");
    }
    const diffHours = Math.round(diffMinutes / 60);
    if (Math.abs(diffHours) < 24) {
        return relativeFormat.format(diffHours, "hour");
    }
    const diffDays = Math.round(diffHours / 24);
    return relativeFormat.format(diffDays, "day");
};
const getThemeColor = (color) => color ?? "#18d4bf";
const createCard = (title, subtitle, className) => {
    const card = document.createElement("article");
    card.className = `github-card ${className}`.trim();
    const header = document.createElement("div");
    header.className = "github-card-header";
    const textWrap = document.createElement("div");
    const cardTitle = document.createElement("h3");
    cardTitle.className = "github-card-title";
    cardTitle.textContent = title;
    const cardSubtitle = document.createElement("p");
    cardSubtitle.className = "github-card-subtitle";
    cardSubtitle.textContent = subtitle;
    textWrap.append(cardTitle, cardSubtitle);
    header.append(textWrap);
    card.append(header);
    return card;
};
const createMetaItem = (label, value) => {
    const item = document.createElement("div");
    item.className = "github-meta-item";
    const metaLabel = document.createElement("span");
    metaLabel.className = "github-meta-label";
    metaLabel.textContent = label;
    const metaValue = document.createElement("span");
    metaValue.className = "github-meta-value";
    metaValue.textContent = value;
    item.append(metaLabel, metaValue);
    return item;
};
const createMiniStat = (label) => {
    const stat = document.createElement("div");
    stat.className = "github-mini-stat";
    const statLabel = document.createElement("span");
    statLabel.className = "github-mini-label";
    statLabel.textContent = label;
    const statValue = document.createElement("span");
    statValue.className = "github-mini-value";
    statValue.textContent = "0";
    stat.append(statLabel, statValue);
    return { stat, value: statValue };
};
const animateNumber = (element, target, duration = 900) => {
    const start = performance.now();
    const initial = 0;
    const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = formatNumber(Math.round(initial + (target - initial) * eased));
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};
const createRepoCard = (repo) => {
    const card = document.createElement("article");
    card.className = "github-repo-card";
    const head = document.createElement("div");
    head.className = "github-repo-head";
    const info = document.createElement("div");
    const title = document.createElement("h4");
    title.className = "github-repo-name";
    const link = document.createElement("a");
    link.href = repo.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = repo.name;
    title.appendChild(link);
    const description = document.createElement("p");
    description.className = "github-repo-desc";
    description.textContent = repo.description || "No description available.";
    info.append(title, description);
    const meta = document.createElement("div");
    meta.className = "github-repo-meta-grid";
    meta.append(createMetaItem("Stars", formatNumber(repo.stars)), createMetaItem("Forks", formatNumber(repo.forks)), createMetaItem("Language", repo.language ?? "Unknown"), createMetaItem("Updated", formatDate(repo.updatedAt)));
    const tagRow = document.createElement("div");
    tagRow.className = "github-tag-row";
    const tags = repo.topics.length > 0 ? repo.topics.slice(0, 4) : [];
    tags.forEach((topic) => {
        const tag = document.createElement("span");
        tag.className = "github-tag";
        tag.textContent = topic;
        tagRow.appendChild(tag);
    });
    const license = document.createElement("span");
    license.className = "github-tag";
    license.textContent = repo.license ? repo.license : "No license";
    tagRow.appendChild(license);
    const buttonRow = document.createElement("div");
    buttonRow.className = "github-button-row";
    const openButton = document.createElement("a");
    openButton.className = "github-link";
    openButton.href = repo.url;
    openButton.target = "_blank";
    openButton.rel = "noopener noreferrer";
    openButton.textContent = "Open in GitHub";
    buttonRow.appendChild(openButton);
    card.append(head, info, meta, tagRow, buttonRow);
    return card;
};
const createActivityCard = (item) => {
    const card = document.createElement("article");
    card.className = "github-activity-item";
    const meta = document.createElement("div");
    meta.className = "github-activity-time";
    meta.textContent = `${item.type} · ${timeAgo(item.time)}`;
    const title = document.createElement("p");
    title.className = "github-activity-title";
    title.textContent = item.title;
    const details = document.createElement("p");
    details.className = "github-card-subtitle";
    details.textContent = `${item.repo} · ${item.details}`;
    const link = document.createElement("a");
    link.className = "github-link";
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "View activity";
    card.append(meta, title, details, link);
    return card;
};
const renderEmptyState = (container, message) => {
    container.replaceChildren();
    const state = document.createElement("div");
    state.className = "github-empty-state";
    state.textContent = message;
    container.appendChild(state);
    container.removeAttribute("aria-busy");
};
export const renderGithubError = (container, message) => {
    container.replaceChildren();
    const state = document.createElement("div");
    state.className = "github-error-state";
    state.textContent = message;
    container.appendChild(state);
    container.removeAttribute("aria-busy");
};
export const renderGithubDashboard = (container, data) => {
    container.replaceChildren();
    if (!data.repositories.length && !data.languages.length && !data.recentActivity.length) {
        renderEmptyState(container, "GitHub data unavailable right now. Try again later.");
        return;
    }
    const grid = document.createElement("div");
    grid.className = "github-grid";
    const profileCard = createCard("Profile", "Live GitHub identity and profile metadata.", "github-profile-card");
    const profileTop = document.createElement("div");
    profileTop.className = "github-profile-top";
    const avatar = document.createElement("img");
    avatar.className = "github-avatar";
    avatar.src = data.profile.avatarUrl;
    avatar.alt = `${data.profile.login} avatar`;
    avatar.loading = "lazy";
    const profileText = document.createElement("div");
    const profileName = document.createElement("h3");
    profileName.className = "github-name";
    profileName.textContent = data.profile.name || data.profile.login;
    const profileHandle = document.createElement("p");
    profileHandle.className = "github-handle";
    profileHandle.textContent = `@${data.profile.login}`;
    profileText.append(profileName, profileHandle);
    profileTop.append(avatar, profileText);
    const bio = document.createElement("p");
    bio.className = "github-bio";
    bio.textContent = data.profile.bio || "No public bio available.";
    const meta = document.createElement("div");
    meta.className = "github-meta";
    meta.append(createMetaItem("Followers", formatNumber(data.profile.followers)), createMetaItem("Following", formatNumber(data.profile.following)), createMetaItem("Public Repos", formatNumber(data.profile.publicRepos)), createMetaItem("Joined", formatDate(data.profile.joinedAt)));
    const fineprint = document.createElement("p");
    fineprint.className = "github-fineprint";
    fineprint.textContent = data.profile.location || data.profile.websiteUrl || "GitHub profile data updated live.";
    profileCard.append(profileTop, bio, meta, fineprint);
    const statsCard = createCard("Repository Statistics", "Aggregated signal across public repositories.", "github-stats-card is-emphasized");
    const miniGrid = document.createElement("div");
    miniGrid.className = "github-mini-grid";
    const starsStat = createMiniStat("Total Stars");
    const forksStat = createMiniStat("Total Forks");
    const repoStat = createMiniStat("Public Repos");
    const commitStat = createMiniStat("Commits");
    animateNumber(starsStat.value, data.profile.totalStars);
    animateNumber(forksStat.value, data.profile.totalForks);
    animateNumber(repoStat.value, data.profile.publicRepos);
    commitStat.value.textContent = formatNumber(data.profile.totalCommits);
    miniGrid.append(starsStat.stat, forksStat.stat, repoStat.stat, commitStat.stat);
    const progressStack = document.createElement("div");
    progressStack.className = "github-progress-stack";
    const progressItems = [
        ["Pull Requests", data.profile.pullRequests],
        ["Issues", data.profile.issues],
        ["Current Streak", data.contribution.currentStreak],
        ["Best Streak", data.contribution.bestStreak]
    ];
    const progressValues = progressItems.map(([, value]) => value ?? 0);
    const progressMax = Math.max(...progressValues, 1);
    progressItems.forEach(([label, value], index) => {
        const row = document.createElement("div");
        row.className = "github-progress-item";
        const head = document.createElement("div");
        head.className = "github-progress-head";
        const name = document.createElement("span");
        name.textContent = label;
        const number = document.createElement("span");
        number.textContent = formatNumber(value);
        head.append(name, number);
        const bar = document.createElement("div");
        bar.className = "github-progress-bar";
        const fill = document.createElement("span");
        fill.style.setProperty("--width", `${(((value ?? 0) / progressMax) * 100).toFixed(2)}%`);
        fill.style.transitionDelay = `${index * 90}ms`;
        bar.appendChild(fill);
        row.append(head, bar);
        progressStack.appendChild(row);
    });
    statsCard.append(miniGrid, progressStack);
    const contribCard = createCard("Contribution Calendar", `${formatNumber(data.contribution.totalContributions)} contributions in the last year.`, "github-contrib-card is-emphasized");
    const contribTop = document.createElement("div");
    contribTop.className = "github-contrib-top";
    const contribTitle = document.createElement("h3");
    contribTitle.className = "github-contrib-title";
    contribTitle.textContent = "Heatmap";
    const contribFine = document.createElement("span");
    contribFine.className = "github-fineprint";
    contribFine.textContent = `Last updated ${timeAgo(data.generatedAt)}`;
    contribTop.append(contribTitle, contribFine);
    const heatmapWrap = document.createElement("div");
    heatmapWrap.className = "github-heatmap-wrap";
    const heatmap = document.createElement("div");
    heatmap.className = "github-heatmap";
    data.contribution.days.forEach((day, index) => {
        const cell = document.createElement("button");
        cell.type = "button";
        cell.className = "github-heatmap-cell is-live";
        cell.dataset.level = String(day.level);
        cell.title = `${day.date} · ${formatNumber(day.count)} contributions`;
        cell.setAttribute("aria-label", `${day.date} with ${formatNumber(day.count)} contributions`);
        cell.style.setProperty("--delay", `${index * 5}ms`);
        heatmap.appendChild(cell);
    });
    heatmapWrap.appendChild(heatmap);
    contribCard.append(contribTop, heatmapWrap);
    const languageCard = createCard("Top Languages", "Most used languages across public repositories.", "github-language-card");
    const languageList = document.createElement("div");
    languageList.className = "github-language-list";
    if (data.languages.length > 0) {
        data.languages.slice(0, 7).forEach((language, index) => {
            const item = document.createElement("div");
            item.className = "github-language-item";
            const head = document.createElement("div");
            head.className = "github-language-head";
            const name = document.createElement("span");
            name.className = "github-language-name";
            const dot = document.createElement("span");
            dot.className = "github-language-dot";
            dot.style.background = getThemeColor(language.color);
            const label = document.createElement("span");
            label.textContent = language.name;
            name.append(dot, label);
            const percent = document.createElement("span");
            percent.className = "github-language-meta";
            percent.textContent = `${language.percentage.toFixed(1)}%`;
            head.append(name, percent);
            const bar = document.createElement("div");
            bar.className = "github-progress-bar";
            const fill = document.createElement("span");
            fill.style.setProperty("--width", `${language.percentage.toFixed(2)}%`);
            fill.style.background = `linear-gradient(90deg, ${getThemeColor(language.color)}, #7cf7ea)`;
            fill.style.transitionDelay = `${index * 80}ms`;
            bar.appendChild(fill);
            item.append(head, bar);
            languageList.appendChild(item);
        });
    }
    else {
        languageList.appendChild(renderFallbackMessage("No language data available yet."));
    }
    languageCard.appendChild(languageList);
    const repoCard = createCard("Pinned and Featured Repositories", "High-signal repositories pulled from GitHub.", "github-repos-card");
    const repoGrid = document.createElement("div");
    repoGrid.className = "github-repo-grid";
    const repositories = data.pinnedRepositories.length > 0 ? data.pinnedRepositories : data.featuredRepositories;
    if (repositories.length > 0) {
        repositories.slice(0, 6).forEach((repo) => repoGrid.appendChild(createRepoCard(repo)));
    }
    else {
        repoGrid.appendChild(renderFallbackMessage("No public repositories found."));
    }
    repoCard.appendChild(repoGrid);
    const activityCard = createCard("Recent Activity", "Latest public events and repository movement.", "github-activity-card");
    const activityList = document.createElement("div");
    activityList.className = "github-activity-list";
    if (data.recentActivity.length > 0) {
        data.recentActivity.slice(0, 6).forEach((item) => activityList.appendChild(createActivityCard(item)));
    }
    else {
        activityList.appendChild(renderFallbackMessage("No recent public activity returned by GitHub."));
    }
    activityCard.appendChild(activityList);
    grid.append(profileCard, statsCard, contribCard, languageCard, repoCard, activityCard);
    container.appendChild(grid);
    container.removeAttribute("aria-busy");
};
const renderFallbackMessage = (message) => {
    const empty = document.createElement("div");
    empty.className = "github-empty-state";
    empty.textContent = message;
    return empty;
};
