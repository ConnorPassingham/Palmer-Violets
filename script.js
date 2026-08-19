document.addEventListener('DOMContentLoaded', () => {

    /* ========================================
       PALMER VIOLETS PLAYER STATISTICS
       UPDATE PLAYER DATA HERE
    ======================================== */
    const players = [
        {
            name: "Connor Passingham", image: "connorpassingham-player.png",
            seasons: {
                "2024/25": { apps: 20, goals: 17, motm: 2 },
                "2025/26": { apps: 13, goals: 12, motm: 3 }
            },
            allTime: { apps: 33, goals: 29, motm: 5 }
        },
        {
            name: "Jamison Lawrence", image: "jamisonlawrence-player.png",
            seasons: {
                "2024/25": { apps: 20, goals: 14, motm: 2 },
                "2025/26": { apps: 12, goals: 12, motm: 1 }
            },
            allTime: { apps: 32, goals: 26, motm: 3 }
        },
        {
            name: "William Healey", image: "williamhealey-player.png",
            seasons: {
                "2024/25": { apps: 19, goals: 2, motm: 1 },
                "2025/26": { apps: 13, goals: 1, motm: 1 }
            },
            allTime: { apps: 32, goals: 3, motm: 2 }
        },
        {
            name: "Max Boundy", image: "maxboundy-player.png",
            seasons: {
                "2024/25": { apps: 18, goals: 7, motm: 1 },
                "2025/26": { apps: 13, goals: 2, motm: 0 }
            },
            allTime: { apps: 31, goals: 9, motm: 1 }
        },
        {
            name: "Oliver Graham", image: "olivergraham-player.png",
            seasons: {
                "2024/25": { apps: 18, goals: 4, motm: 0 },
                "2025/26": { apps: 13, goals: 2, motm: 0 }
            },
            allTime: { apps: 31, goals: 6, motm: 0 }
        },
        {
            name: "Joy Alinese", image: "joyalinese-player.png",
            seasons: {
                "2024/25": { apps: 20, goals: 13, motm: 1 },
                "2025/26": { apps: 0, goals: 0, motm: 0 }
            },
            allTime: { apps: 20, goals: 13, motm: 1 }
        },
        {
            name: "Noah Smith", image: "noahsmith-player.png",
            seasons: {
                "2024/25": { apps: 18, goals: 2, motm: 0 },
                "2025/26": { apps: 1, goals: 0, motm: 0 }
            },
            allTime: { apps: 19, goals: 2, motm: 0 }
        },
        {
            name: "Jesse Attwood", image: "jesseattwood-player.png",
            seasons: {
                "2024/25": { apps: 7, goals: 0, motm: 0 },
                "2025/26": { apps: 10, goals: 1, motm: 2 }
            },
            allTime: { apps: 17, goals: 1, motm: 2 }
        },
        {
            name: "Will Turner", image: "willturner-player.png",
            seasons: {
                "2024/25": { apps: 10, goals: 3, motm: 0 },
                "2025/26": { apps: 6, goals: 0, motm: 0 }
            },
            allTime: { apps: 16, goals: 3, motm: 0 }
        },
        {
            name: "David Kim", image: "davidkim-player.png",
            seasons: {
                "2024/25": { apps: 16, goals: 5, motm: 0 },
                "2025/26": { apps: 0, goals: 0, motm: 0 }
            },
            allTime: { apps: 16, goals: 5, motm: 0 }
        },
        {
            name: "Connagh Webb", image: "connaghwebb-player.png",
            seasons: {
                "2024/25": { apps: 0, goals: 0, motm: 0 },
                "2025/26": { apps: 14, goals: 11, motm: 0 }
            },
            allTime: { apps: 14, goals: 11, motm: 0 }
        },
        {
            name: "Fabiano Jesus-Garcia", image: "fabianojesusgarcia-player.png",
            seasons: {
                "2024/25": { apps: 0, goals: 0, motm: 0 },
                "2025/26": { apps: 13, goals: 7, motm: 2 }
            },
            allTime: { apps: 13, goals: 7, motm: 2 }
        },
        {
            name: "Cayden Steffener", image: "caydensteffener-player.png",
            seasons: {
                "2024/25": { apps: 0, goals: 0, motm: 0 },
                "2025/26": { apps: 12, goals: 19, motm: 3 }
            },
            allTime: { apps: 12, goals: 19, motm: 3 }
        },
        {
            name: "Deja Pareta", image: "dejapareta-player.png",
            seasons: {
                "2024/25": { apps: 11, goals: 1, motm: 1 },
                "2025/26": { apps: 0, goals: 0, motm: 0 }
            },
            allTime: { apps: 11, goals: 1, motm: 1 }
        },
        {
            name: "Benson Emmett", image: "bensonemmett-player.png",
            seasons: {
                "2024/25": { apps: 7, goals: 2, motm: 0 },
                "2025/26": { apps: 0, goals: 0, motm: 0 }
            },
            allTime: { apps: 7, goals: 2, motm: 0 }
        },
        {
            name: "Blake Boundy", image: "blakeboundy-player.png",
            seasons: {
                "2024/25": { apps: 2, goals: 0, motm: 1 },
                "2025/26": { apps: 3, goals: 1, motm: 0 }
            },
            allTime: { apps: 5, goals: 1, motm: 1 }
        },
        {
            name: "Cleo Carmichael", image: "cleocarmichael-player.png",
            seasons: {
                "2024/25": { apps: 4, goals: 0, motm: 0 },
                "2025/26": { apps: 0, goals: 0, motm: 0 }
            },
            allTime: { apps: 4, goals: 0, motm: 0 }
        },
        {
            name: "Connor Sheehan", image: "connorsheehan-player.png",
            seasons: {
                "2024/25": { apps: 4, goals: 5, motm: 1 },
                "2025/26": { apps: 0, goals: 0, motm: 0 }
            },
            allTime: { apps: 4, goals: 5, motm: 1 }
        },
        {
            name: "Taj Oliver", image: "tajoliver-player.png",
            seasons: {
                "2024/25": { apps: 0, goals: 0, motm: 0 },
                "2025/26": { apps: 4, goals: 0, motm: 1 }
            },
            allTime: { apps: 4, goals: 0, motm: 1 }
        },
        {
            name: "Eva Pollock", image: "evapollock-player.png",
            seasons: {
                "2024/25": { apps: 2, goals: 0, motm: 0 },
                "2025/26": { apps: 0, goals: 0, motm: 0 }
            },
            allTime: { apps: 2, goals: 0, motm: 0 }
        },
        {
            name: "Micah Gibson", image: "micahgibson-player.png",
            seasons: {
                "2024/25": { apps: 0, goals: 0, motm: 0 },
                "2025/26": { apps: 2, goals: 0, motm: 0 }
            },
            allTime: { apps: 2, goals: 0, motm: 0 }
        },
        {
            name: "Luke O'Malley", image: "lukeomalley-player.png",
            seasons: {
                "2024/25": { apps: 0, goals: 0, motm: 0 },
                "2025/26": { apps: 2, goals: 2, motm: 1 }
            },
            allTime: { apps: 2, goals: 2, motm: 1 }
        },
        {
            name: "Adam Atkinson", image: "adamatkinson-player.png",
            seasons: {
                "2024/25": { apps: 0, goals: 0, motm: 0 },
                "2025/26": { apps: 1, goals: 0, motm: 0 }
            },
            allTime: { apps: 1, goals: 0, motm: 0 }
        },
        {
            name: "Tom Barnett", image: "tombarnett-player.png",
            seasons: {
                "2024/25": { apps: 0, goals: 0, motm: 0 },
                "2025/26": { apps: 1, goals: 0, motm: 0 }
            },
            allTime: { apps: 1, goals: 0, motm: 0 }
        }
    ];

    /* ========================================
       PALMER VIOLETS TEAM STATISTICS
       UPDATE SEASON DATA HERE
    ======================================== */
    const teamStats = {
        "2024/25": { played: 20, wins: 14, draws: 0, losses: 6, goalsFor: 76, goalsAgainst: 33, winRate: "70.0%", gd: "+43" },
        "2025/26": { played: 14, wins: 11, draws: 0, losses: 3, goalsFor: 70, goalsAgainst: 14, winRate: "78.6%", gd: "+56" },
        allTime:   { played: 34, wins: 25, draws: 0, losses: 9, goalsFor: 146, goalsAgainst: 47, winRate: "73.5%", gd: "+99" }
    };


    /* ====================
       UTILITIES & HELPERS
    ==================== */
    // Generate initials for the graceful fallback
    const getInitials = (name) => {
        const parts = name.split(' ');
        if (parts.length >= 2) return parts[0][0] + parts[1][0];
        return parts[0][0];
    };

    // Get specific season stats or allTime for a player safely
    const getPlayerStats = (player, season) => {
        if (season === 'allTime') return player.allTime;
        return player.seasons[season] || { apps: 0, goals: 0, motm: 0 };
    };


    /* ====================
       RENDER PLAYERS GRID
    ==================== */
    const playersGrid = document.getElementById('players-grid');
    const playerModal = document.getElementById('player-modal');
    const modalClose = document.getElementById('modal-close');
    
    function renderPlayers(season) {
        playersGrid.innerHTML = '';
        
        // Filter players who have at least 1 appearance in this season
        const activePlayers = players.filter(p => getPlayerStats(p, season).apps > 0);
        
        // Sort active players (most apps first for display flow)
        activePlayers.sort((a, b) => getPlayerStats(b, season).apps - getPlayerStats(a, season).apps);

        activePlayers.forEach((player, index) => {
            const stats = getPlayerStats(player, season);
            const initials = getInitials(player.name);
            
            const card = document.createElement('div');
            card.className = 'player-card';
            card.style.animationDelay = `${index * 0.05}s`; // Staggered reveal effect
            
            card.innerHTML = `
                <div class="player-image-container">
                    <img src="${player.image}" alt="${player.name}" class="player-image" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="fallback-avatar" style="display: none;">${initials}</div>
                </div>
                <div class="player-info">
                    <h3 class="player-name">${player.name}</h3>
                    <div class="player-stats-mini">
                        <div><strong>${stats.apps}</strong><span>Apps</span></div>
                        <div><strong>${stats.goals}</strong><span>Goals</span></div>
                        <div><strong>${stats.motm}</strong><span>MOTM</span></div>
                    </div>
                </div>
            `;
            
            // Add Modal Trigger
            card.addEventListener('click', () => openPlayerModal(player));
            playersGrid.appendChild(card);
        });
    }

    // Modal Logic
    function openPlayerModal(player) {
        document.getElementById('modal-name').innerText = player.name;
        document.getElementById('modal-image-container').innerHTML = `
            <img src="${player.image}" alt="${player.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="fallback-avatar" style="display: none; font-size:3rem; opacity:0.5;">${getInitials(player.name)}</div>
        `;
        
        const tbody = document.getElementById('modal-table-body');
        tbody.innerHTML = `
            <tr>
                <td class="season-col">2024/25</td>
                <td>${player.seasons["2024/25"].apps}</td>
                <td>${player.seasons["2024/25"].goals}</td>
                <td>${player.seasons["2024/25"].motm}</td>
            </tr>
            <tr>
                <td class="season-col">2025/26</td>
                <td>${player.seasons["2025/26"].apps}</td>
                <td>${player.seasons["2025/26"].goals}</td>
                <td>${player.seasons["2025/26"].motm}</td>
            </tr>
            <tr>
                <td class="season-col">All-Time</td>
                <td>${player.allTime.apps}</td>
                <td>${player.allTime.goals}</td>
                <td>${player.allTime.motm}</td>
            </tr>
        `;
        
        playerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    modalClose.addEventListener('click', closePlayerModal);
    playerModal.addEventListener('click', (e) => {
        if(e.target === playerModal) closePlayerModal();
    });
    window.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') closePlayerModal();
    });

    function closePlayerModal() {
        playerModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }


    /* ====================
       RENDER STATISTICS
    ==================== */
    const teamStatsGrid = document.getElementById('team-stats-grid');
    const motmNote = document.getElementById('motm-note');

    function renderStatistics(season) {
        const stats = teamStats[season];
        teamStatsGrid.innerHTML = `
            <div class="stat-card"><h3>${stats.played}</h3><p>Games</p></div>
            <div class="stat-card"><h3>${stats.wins}</h3><p>Wins</p></div>
            <div class="stat-card"><h3>${stats.draws}</h3><p>Draws</p></div>
            <div class="stat-card"><h3>${stats.losses}</h3><p>Losses</p></div>
            <div class="stat-card"><h3>${stats.goalsFor}</h3><p>Goals For</p></div>
            <div class="stat-card"><h3>${stats.goalsAgainst}</h3><p>Goals Against</p></div>
            <div class="stat-card"><h3>${stats.gd}</h3><p>Goal Diff</p></div>
            <div class="stat-card"><h3>${stats.winRate}</h3><p>Win Rate</p></div>
        `;

        // Toggle MOTM Note visibility
        if (season === '2024/25' || season === 'allTime') {
            motmNote.style.display = 'block';
        } else {
            motmNote.style.display = 'none';
        }
        
        renderLeaderboards(season);
    }

    /* ====================
       RENDER LEADERBOARDS
    ==================== */
    const lbGoals = document.getElementById('lb-goals');
    const lbApps = document.getElementById('lb-apps');
    const lbMotm = document.getElementById('lb-motm');

    function createLeaderboardHTML(playerList, metric) {
        let html = '';
        playerList.forEach((p, index) => {
            const stats = p.stats;
            const rankClass = index === 0 ? 'first-place' : '';
            const initials = getInitials(p.name);
            html += `
                <li class="${rankClass}">
                    <div class="lb-player">
                        <span class="lb-rank">${index + 1}</span>
                        <div class="lb-avatar">
                            <img src="${p.image}" alt="" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <span class="fallback" style="display:none;">${initials}</span>
                        </div>
                        <span class="lb-name">${p.name}</span>
                    </div>
                    <span class="lb-stat">${stats[metric]}</span>
                </li>
            `;
        });
        return html;
    }

    function renderLeaderboards(season) {
        // Map players to include only relevant season stats to make sorting easier
        const seasonPlayers = players.map(p => ({
            name: p.name,
            image: p.image,
            stats: getPlayerStats(p, season)
        }));

        // Sort Data
        const topScorers = [...seasonPlayers]
            .filter(p => p.stats.goals > 0)
            .sort((a, b) => b.stats.goals - a.stats.goals || b.stats.apps - a.stats.apps);
            
        const topApps = [...seasonPlayers]
            .filter(p => p.stats.apps > 0)
            .sort((a, b) => b.stats.apps - a.stats.apps || b.stats.goals - a.stats.goals);
            
        const topMotm = [...seasonPlayers]
            .filter(p => p.stats.motm > 0)
            .sort((a, b) => b.stats.motm - a.stats.motm || b.stats.apps - a.stats.apps);

        lbGoals.innerHTML = createLeaderboardHTML(topScorers, 'goals');
        lbApps.innerHTML = createLeaderboardHTML(topApps, 'apps');
        lbMotm.innerHTML = createLeaderboardHTML(topMotm, 'motm');
    }

    /* ====================
       RENDER RECORD HOLDERS
    ==================== */
    function renderRecordHolders() {
        const rhGrid = document.getElementById('record-holders-grid');
        
        // Find top players safely for All-Time (Hardcoded to match user instruction for Connor Passingham, but generated dynamically to ensure accuracy)
        const topScorer = [...players].sort((a,b) => b.allTime.goals - a.allTime.goals)[0];
        const topApps = [...players].sort((a,b) => b.allTime.apps - a.allTime.apps)[0];
        const topMotm = [...players].sort((a,b) => b.allTime.motm - a.allTime.motm)[0];

        function makeRHCard(title, player, statValue, statLabel) {
            return `
                <div class="record-holder-card">
                    <span class="record-holder-title">${title}</span>
                    <div class="rh-image-container">
                        <img src="${player.image}" alt="${player.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="rh-fallback" style="display:none;">${getInitials(player.name)}</div>
                    </div>
                    <h4 class="record-holder-name">${player.name}</h4>
                    <span class="record-holder-stat">${statValue} ${statLabel}</span>
                </div>
            `;
        }

        rhGrid.innerHTML = 
            makeRHCard("All-Time Top Scorer", topScorer, topScorer.allTime.goals, "Goals") +
            makeRHCard("Most Appearances", topApps, topApps.allTime.apps, "Apps") +
            makeRHCard("Most MOTM", topMotm, topMotm.allTime.motm, "MOTM");
    }

    
    /* ====================
       FILTER BUTTON LOGIC
    ==================== */
    function setupFilters(containerId, renderCallback) {
        const container = document.getElementById(containerId);
        if(!container) return;
        const buttons = container.querySelectorAll('.filter-btn');
        
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const season = btn.getAttribute('data-season');
                renderCallback(season);
            });
        });
    }

    // Initialize Everything
    renderPlayers('allTime');
    renderStatistics('allTime');
    renderRecordHolders();
    
    setupFilters('player-season-filters', renderPlayers);
    setupFilters('stats-season-filters', renderStatistics);


    /* ====================
       NAVIGATION & UX
    ==================== */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        navbar.classList.toggle('menu-open');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            navbar.classList.remove('menu-open');
        });
    });

    // Active Highlight
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 150)) current = section.getAttribute('id');
        });
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) item.classList.add('active');
        });
    });

    /* ====================
       NEXT MATCH COUNTDOWN
    ==================== */
    const nextMatchDate = new Date('2024-08-23T18:30:00').getTime();
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = nextMatchDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minsEl = document.getElementById('mins');

        if(daysEl && hoursEl && minsEl) {
            daysEl.innerText = days < 10 ? '0' + days : days;
            hoursEl.innerText = hours < 10 ? '0' + hours : hours;
            minsEl.innerText = minutes < 10 ? '0' + minutes : minutes;
        }

        if (distance < 0) {
            clearInterval(timer);
            if(daysEl) daysEl.innerText = "00";
            if(hoursEl) hoursEl.innerText = "00";
            if(minsEl) minsEl.innerText = "00";
        }
    }, 1000);

    /* ====================
       SCROLL REVEAL ANIMATIONS
    ==================== */
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
        });
    }, revealOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));

    /* ====================
       CONTACT FORM SUBMISSION
    ==================== */
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            contactForm.classList.add('hidden');
            formSuccess.classList.remove('hidden');
        });
    }
});
