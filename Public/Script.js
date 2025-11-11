// كود الجافاسكربت للتفاعلات
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // إضافة تأثيرات للكروت
    const adCards = document.querySelectorAll('.ad-card');
    
    adCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // تحديث الإحصائيات بشكل ديناميكي
    function updateStats() {
        const stats = document.querySelectorAll('.stat-item h3');
        
        stats.forEach(stat => {
            const target = parseInt(stat.textContent.replace('$', '').replace(',', ''));
            let current = 0;
            const increment = target / 100;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                if (stat.textContent.includes('$')) {
                    stat.textContent = Math.floor(current).toLocaleString() + '$';
                } else {
                    stat.textContent = Math.floor(current).toLocaleString();
                }
            }, 20);
        });
    }

    // تشغيل تحديث الإحصائيات عند الوصول للقسم
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateStats();
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(document.querySelector('.stats'));

    // إدارة إعلانات أدسنس
    function loadAds() {
        // إعادة تحميل الإعلانات كل 30 دقيقة
        setInterval(() => {
            if (window.adsbygoogle) {
                (adsbygoogle = window.adsbygoogle || []).push({});
            }
        }, 1800000); // 30 دقيقة
    }

    loadAds();
});
