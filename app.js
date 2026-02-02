// Navigation Active State
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');

    // Smooth scroll + active state
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Update active nav on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Initialize Charts
    initPostingChart();
    initPillarsChart();
    initContentCostChart();
    initAdSpendChart();
    initBudgetChart();
});

// Posting Frequency Chart
function initPostingChart() {
    const ctx = document.getElementById('postingChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['MaxGen', 'Evolve', 'Pure Ganic', 'Dr. M. Mahmoud', 'Muscle Add', 'Keep Going', 'Elements'],
            datasets: [
                {
                    label: 'Facebook',
                    data: [10, 10, 5, 10, 10, 4, 2],
                    backgroundColor: '#4267B2'
                },
                {
                    label: 'Instagram',
                    data: [10, 10, 5, 10, 10, 4, 2],
                    backgroundColor: '#E1306C'
                },
                {
                    label: 'TikTok',
                    data: [5, 10, 2, 10, 10, 1, 0],
                    backgroundColor: '#00f2ea'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#8b949e' }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#8b949e' },
                    grid: { color: '#30363d' }
                },
                y: {
                    ticks: { color: '#8b949e' },
                    grid: { color: '#30363d' },
                    title: {
                        display: true,
                        text: 'Posts/Week',
                        color: '#8b949e'
                    }
                }
            }
        }
    });
}

// Content Pillars Chart
function initPillarsChart() {
    const ctx = document.getElementById('pillarsChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Educational', 'Promotional', 'Lifestyle/UGC', 'Entertainment'],
            datasets: [
                {
                    label: 'MaxGen',
                    data: [40, 40, 20, 0],
                    borderColor: '#ffd700',
                    backgroundColor: 'rgba(255, 215, 0, 0.2)'
                },
                {
                    label: 'Dr. M. Mahmoud',
                    data: [70, 20, 10, 0],
                    borderColor: '#58a6ff',
                    backgroundColor: 'rgba(88, 166, 255, 0.2)'
                },
                {
                    label: 'Muscle Add',
                    data: [10, 30, 40, 20],
                    borderColor: '#f85149',
                    backgroundColor: 'rgba(248, 81, 73, 0.2)'
                },
                {
                    label: 'Evolve',
                    data: [10, 50, 40, 0],
                    borderColor: '#a371f7',
                    backgroundColor: 'rgba(163, 113, 247, 0.2)'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#8b949e' }
                }
            },
            scales: {
                r: {
                    angleLines: { color: '#30363d' },
                    grid: { color: '#30363d' },
                    pointLabels: { color: '#8b949e' },
                    ticks: { display: false }
                }
            }
        }
    });
}

// Content Cost Chart
function initContentCostChart() {
    const ctx = document.getElementById('contentCostChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['MaxGen', 'Evolve', 'Pure Ganic', 'Dr. M. Mahmoud', 'Muscle Add', 'Keep Going', 'Elements'],
            datasets: [{
                label: 'Content Marketing Cost (EGP)',
                data: [17500, 30000, 10000, 6500, 50000, 12500, 3500],
                backgroundColor: [
                    '#ffd700',
                    '#a371f7',
                    '#3fb950',
                    '#58a6ff',
                    '#f85149',
                    '#00f2ea',
                    '#8b949e'
                ],
                borderRadius: 6
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.parsed.x.toLocaleString() + ' EGP';
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#8b949e',
                        callback: function (value) {
                            return value.toLocaleString();
                        }
                    },
                    grid: { color: '#30363d' }
                },
                y: {
                    ticks: { color: '#8b949e' },
                    grid: { display: false }
                }
            }
        }
    });
}

// Ad Spend Chart
function initAdSpendChart() {
    const ctx = document.getElementById('adSpendChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['MaxGen', 'Evolve', 'Pure Ganic', 'Dr. M. Mahmoud', 'Muscle Add', 'Keep Going', 'Elements'],
            datasets: [{
                label: 'Paid Ads Cost (EGP)',
                data: [9000, 65000, 45000, 40000, 180000, 25000, 10000],
                backgroundColor: [
                    '#ffd700',
                    '#a371f7',
                    '#3fb950',
                    '#58a6ff',
                    '#f85149',
                    '#00f2ea',
                    '#8b949e'
                ],
                borderRadius: 6
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.parsed.x.toLocaleString() + ' EGP';
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#8b949e',
                        callback: function (value) {
                            return value.toLocaleString();
                        }
                    },
                    grid: { color: '#30363d' }
                },
                y: {
                    ticks: { color: '#8b949e' },
                    grid: { display: false }
                }
            }
        }
    });
}

// Budget Chart (Total)
function initBudgetChart() {
    const ctx = document.getElementById('budgetChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['MaxGen', 'Evolve', 'Pure Ganic', 'Dr. M. Mahmoud', 'Muscle Add', 'Keep Going', 'Elements'],
            datasets: [
                {
                    label: 'Content Marketing',
                    data: [17500, 30000, 10000, 6500, 50000, 12500, 3500],
                    backgroundColor: '#ffd700',
                    borderRadius: 6
                },
                {
                    label: 'Paid Ads',
                    data: [9000, 65000, 45000, 40000, 180000, 25000, 10000],
                    backgroundColor: '#58a6ff',
                    borderRadius: 6
                }
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#8b949e' }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.dataset.label + ': ' + context.parsed.x.toLocaleString() + ' EGP';
                        }
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: '#8b949e',
                        callback: function (value) {
                            return value.toLocaleString() + ' EGP';
                        }
                    },
                    grid: { color: '#30363d' }
                },
                y: {
                    stacked: true,
                    ticks: { color: '#8b949e' },
                    grid: { display: false }
                }
            }
        }
    });
}
