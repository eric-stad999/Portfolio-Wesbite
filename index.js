document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach((slider) => {
        const slides = slider.querySelectorAll(".slide");
        let slideIndex = 0;

        if (slides.length > 0) {
            slides[slideIndex].classList.add("displaySlide");
        }

        const prevBtn = slider.querySelector(".prev");
        const nextBtn = slider.querySelector(".next");

        const showSlide = (index) => {
            if (index >= slides.length) slideIndex = 0;
            if (index < 0) slideIndex = slides.length - 1;
            slides.forEach((slide) => slide.classList.remove("displaySlide"));
            slides[slideIndex].classList.add("displaySlide");
        };

        prevBtn.addEventListener("click", () => {
            slideIndex--;
            showSlide(slideIndex);
        });

        nextBtn.addEventListener("click", () => {
            slideIndex++;
            showSlide(slideIndex);
        });
    });
});