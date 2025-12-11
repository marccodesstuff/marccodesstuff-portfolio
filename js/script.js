/**
 * VIBRANT BENTO PORTFOLIO
 * Interaction Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Initialize Card Animations
    initScrollAnimations();

    // Initialize Tilt Effect
    initTiltEffect();

    // Initialize functional cards
    initFunctionalCards();

    // Initialize GitHub Stats
    initGitHubStats();
});

/**
 * Animate cards as they scroll into view
 */
function initScrollAnimations() {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach((card, index) => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transitionDelay = `${index * 0.05}s`;

        observer.observe(card);
    });
}

/**
 * 3D Tilt Effect for cards
 */
function initTiltEffect() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Limit tilt amount
            const tiltX = (y - centerY) / centerY * 5;
            const tiltY = (centerX - x) / centerX * 5;

            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

/**
 * Initialize functional interactions
 */
function initFunctionalCards() {
    // Email Copy Functionality
    const emailCard = document.getElementById('copyEmailCard');
    if (emailCard) {
        emailCard.addEventListener('click', () => {
            const email = 'contact@marcvelasquez.dev';
            navigator.clipboard.writeText(email).then(() => {
                const statusSpan = document.getElementById('emailStatus');
                const originalText = statusSpan.textContent;

                statusSpan.textContent = 'Copied!';
                statusSpan.style.color = 'var(--color-green)';

                setTimeout(() => {
                    statusSpan.textContent = originalText;
                    statusSpan.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }
}

/**
 * Fetch GitHub Stats
 */
async function initGitHubStats() {
    const username = 'marccodesstuff'; // Using the username from the chart URL
    const reposEl = document.getElementById('gh-repos');
    const followersEl = document.getElementById('gh-followers');

    if (!reposEl || !followersEl) return;

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('GitHub API Error');

        const data = await response.json();

        // Animate numbers
        animateValue(reposEl, 0, data.public_repos, 2000);
        animateValue(followersEl, 0, data.followers, 2000);

    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        reposEl.textContent = '25+';
        followersEl.textContent = '50+';
    }
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

/**
 * Project Modal Interactions
 */
function openProjectsModal() {
    const modal = document.getElementById('projectsModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling background
    }
}

function closeProjectsModal(event) {
    const modal = document.getElementById('projectsModal');
    if (modal) {
        // If triggered by event (click outside), check if target is overlay
        if (event && event.target !== modal && !event.target.classList.contains('modal-close') && !event.target.closest('.modal-close')) {
            return;
        }

        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('projectsModal');
        if (modal && modal.classList.contains('active')) {
            closeProjectsModal();
        }
    }
});
