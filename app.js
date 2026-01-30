const translations = {
    en: {
        join_telegram: "Join Telegram",
        subscription: "SUBSCRIPTION",
        feat_aimlock: "AimLock (External)",
        feat_radar: "Web-Radar",
        feat_risk: "Low Ban Risk",
        buy_now: "BUY NOW",
        day: "DAY",
        days: "DAYS",
        year: "YEAR",
        popular: "POPULAR",
        note_fees: "Note: All transaction fees are covered by the buyer",
        recommended: "Recommended (Low Fee): USDT (TON), Solana, USDT (TRC20)",
        security_title: "Security (External)",
        security_desc: "The software only reads memory and simulates mouse movement through system input. This looks like natural player actions, which minimises the risk of being banned.",
        radar_title: "Web Radar",
        radar_desc: "Generates a localhost:5555 link. Open it in your phone's browser, ideal for single-monitor gaming, to see enemies in real time. When launched, a simple radar window opens for those with two monitors.",
        settings_title: "Settings",
        settings_desc: "If the arrows don't work, press Win + R, enter %AppData%\\AimRadar and configure settings.json.",
        insert_key: "The Insert key in the game changes the AimLock button."
    },
    ru: {
        join_telegram: "В Телеграм",
        subscription: "ПОДПИСКА",
        feat_aimlock: "AimLock (Внешний)",
        feat_radar: "Веб-Радар",
        feat_risk: "Низкий Риск Бана",
        buy_now: "КУПИТЬ",
        day: "ДЕНЬ",
        days: "ДНЕЙ",
        year: "ГОД",
        popular: "ПОПУЛЯРНО",
        note_fees: "Примечание: Все комиссии за транзакции оплачивает покупатель",
        recommended: "Рекомендуем (Низкая комиссия): USDT (TON), Solana, USDT (TRC20)",
        security_title: "Безопасность (Внешняя)",
        security_desc: "ПО читает только память и имитирует движение мыши через системный ввод. Это выглядит как действия игрока, сводя к минимуму риск бана.",
        radar_title: "Веб-Радар",
        radar_desc: "Генерирует ссылку localhost:5555. Откройте ее на телефоне — идеально для игры с одним монитором. При запуске открывается окно радара для тех, у кого два монитора.",
        settings_title: "Настройки",
        settings_desc: "Если стрелки не работают, нажмите Win + R, введите %AppData%\\AimRadar и настройте settings.json.",
        insert_key: "Клавиша Insert в игре меняет кнопку AimLock."
    },
    ua: {
        join_telegram: "В Телеграм",
        subscription: "ПІДПИСКА",
        feat_aimlock: "AimLock (Зовнішній)",
        feat_radar: "Веб-Радар",
        feat_risk: "Низький Ризик Бану",
        buy_now: "КУПИТИ",
        day: "ДЕНЬ",
        days: "ДНІВ",
        year: "РІК",
        popular: "ПОПУЛЯРНО",
        note_fees: "Примітка: Всі комісії за транзакції сплачує покупець",
        recommended: "Рекомендуємо (Низька комісія): USDT (TON), Solana, USDT (TRC20)",
        security_title: "Безпека (Зовнішня)",
        security_desc: "ПЗ читає лише пам'ять та імітує рух миші через системне введення. Це виглядає як дії гравця, зводячи до мінімуму ризик бану.",
        radar_title: "Веб-Радар",
        radar_desc: "Генерує посилання localhost:5555. Відкрийте його на телефоні — ідеально для гри з одним монітором. При запуску відкривається вікно радару для тих, у кого два монітори.",
        settings_title: "Налаштування",
        settings_desc: "Якщо стрілки не працюють, натисніть Win + R, введіть %AppData%\\AimRadar та налаштуйте settings.json.",
        insert_key: "Клавіша Insert у грі змінює кнопку AimLock."
    },
    tr: {
        join_telegram: "Telegram'a Katıl",
        subscription: "ABONELİK",
        feat_aimlock: "AimLock (Harici)",
        feat_radar: "Web-Radar",
        feat_risk: "Düşük Ban Riski",
        buy_now: "SATIN AL",
        day: "GÜN",
        days: "GÜN",
        year: "YIL",
        popular: "POPÜLER",
        note_fees: "Not: Tüm işlem ücretleri alıcı tarafından karşılanır",
        recommended: "Önerilen (Düşük Ücret): USDT (TON), Solana, USDT (TRC20)",
        security_title: "Güvenlik (Harici)",
        security_desc: "Yazılım sadece hafızayı okur ve sistem girişi yoluyla fare hareketini simüle eder. Bu, doğal oyuncu hareketleri gibi görünür ve yasaklanma riskini en aza indirir.",
        radar_title: "Web Radar",
        radar_desc: "localhost:5555 bağlantısı oluşturur. Telefonunuzun tarayıcısında açın, tek monitörlü oyunlar için idealdir. Başlatıldığında, iki monitörü olanlar için basit bir radar penceresi açılır.",
        settings_title: "Ayarlar",
        settings_desc: "Oklar çalışmıyorsa, Win + R tuşlarına basın, %AppData%\\AimRadar yazın ve settings.json dosyasını yapılandırın.",
        insert_key: "Oyundaki Insert tuşu AimLock düğmesini değiştirir."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher Logic
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');
    const langOptions = document.querySelectorAll('.lang-menu a');
    const currentLangSpan = langBtn.querySelector('span');

    // Default Language
    let currentLang = 'en';

    // Function to update content
    function updateContent(lang) {
        const t = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = t[key];
                } else {
                    element.innerHTML = t[key];
                }
            }
        });

        // Update Button Text
        const flags = {
            en: '🇬🇧 EN',
            ru: '🇷🇺 RU',
            ua: '🇺🇦 UA',
            tr: '🇹🇷 TR'
        };
        currentLangSpan.innerHTML = flags[lang].split(' ')[1]; // Just text code
        currentLangSpan.previousElementSibling.className = 'fas fa-globe'; // Reset icon if needed

        // Visual indicator in menu (optional)
        langOptions.forEach(opt => {
            if (opt.dataset.lang === lang) {
                opt.style.color = '#fff';
                opt.style.background = 'rgba(255,255,255,0.1)';
            } else {
                opt.style.color = '';
                opt.style.background = '';
            }
        });
    }

    // Event Listeners for Language
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.getAttribute('data-lang');
            currentLang = lang;
            updateContent(lang);
        });
    });

    // Initialize
    updateContent('en');

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation classes
    document.querySelectorAll('.feature-card, .price-card, .payment-info').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Background Particles
    initParticles();
});

function initParticles() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const container = document.getElementById('particles-js');

    if (!container) return;

    container.appendChild(canvas);

    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2;
            this.color = Math.random() > 0.5 ? 'rgba(57, 255, 20, 0.3)' : 'rgba(0, 240, 255, 0.3)';
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        // Draw connections
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 100) {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - dist / 1000})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();
}
