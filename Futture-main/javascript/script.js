document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slides = document.querySelectorAll('.carousel-slide');
    
    let currentSlide = 0;
    const slideCount = slides.length;

    function updateCarousel() {
        // Usar translateX para slides lado a lado
        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function showSlide(index) {
        // Remover classe active de todos os slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Adicionar classe active ao slide atual
        slides[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        currentSlide++;
        if (currentSlide >= slideCount) {
            currentSlide = 0;
        }
        updateCarousel();
        showSlide(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slideCount - 1;
        }
        updateCarousel();
        showSlide(currentSlide);
    });

    // Inicializa o primeiro slide
    showSlide(0);

    // Auto-advance slides
    setInterval(() => {
        currentSlide++;
        if (currentSlide >= slideCount) {
            currentSlide = 0;
        }
        updateCarousel();
        showSlide(currentSlide);
    }, 5000);
});


document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.plans-slides-container');
    const slides = document.querySelectorAll('.plans-slide');
    const prevBtn = document.querySelector('.plans-prev-btn');
    const nextBtn = document.querySelector('.plans-next-btn');

    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        // Remove active de todos os slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Adiciona active ao slide atual
        slides[index].classList.add('active');
        
        // Move o container
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        currentSlide++;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        showSlide(currentSlide);
    });

    // Inicializa o primeiro slide
    showSlide(0);

    // Removido o setInterval para que não troque automaticamente
});