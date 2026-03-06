document.addEventListener('DOMContentLoaded', function() {
            const slider = document.getElementById('videoSlider');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');

            if (slider && prevBtn && nextBtn) {
                // Scroll amount gets dynamically calculated based on one card's width + gap
                const scrollAmount = 350;

                prevBtn.addEventListener('click', () => {
                    if (slider.scrollLeft <= 0) {
                        // Loop to the end if at the start
                        slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
                    } else {
                        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                    }
                });

                nextBtn.addEventListener('click', () => {
                    // Using Math.ceil and an offset to elegantly handle sub-pixel fractional values
                    if (Math.ceil(slider.scrollLeft + slider.clientWidth) >= slider.scrollWidth - 1) {
                        // Loop to the start if at the end
                        slider.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                    }
                });
            }
        });
