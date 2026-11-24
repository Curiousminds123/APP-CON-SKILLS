// TeacherAI - JavaScript Principal

document.addEventListener('DOMContentLoaded', function() {
    console.log('TeacherAI Platform iniciada');
    
    // Smooth scroll para los botones
    setupSmoothScroll();
    
    // Animaciones al scroll
    setupScrollAnimations();
    
    // Mobile menu (futuro)
    setupMobileMenu();
});

// Smooth scroll
function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animaciones en scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.resource-card, .agent-card, .feature-item, .step-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Mobile menu (placeholder)
function setupMobileMenu() {
    // Futuro: implementar menú móvil
}

// Funciones de utilidad para las herramientas (expandir después)
const TeacherAI = {
    tools: {
        profesorIAVirtual: '/tools/profesor-ia-virtual',
        gameBuilder: '/tools/game-builder',
        englishCoach: '/tools/english-coach',
        eduPrompt: '/tools/eduprompt',
        abogadoDelDiablo: '/tools/critical-thinking',
        writingCoach: '/tools/writing-coach'
    },
    
    openTool: function(toolName) {
        console.log('Abriendo herramienta:', toolName);
        window.location.href = this.tools[toolName] || '/';
    }
};

// Exportar para uso global
window.TeacherAI = TeacherAI;
