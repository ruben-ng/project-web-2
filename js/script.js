const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


    document.addEventListener('DOMContentLoaded', function () {
        const trigger = document.getElementById('popup_trigger');
        const container = document.getElementById('popup_container');

        trigger.addEventListener('click', function () {
            // Toggle visibility by adding/removing the 'hidden' class
            container.classList.toggle('hidden');
        });

        // Optional: Click outside the popup to close it
        document.addEventListener('click', function (event) {
            if (!trigger.contains(event.target) && !container.contains(event.target)) {
                container.classList.add('hidden');
            }
        });
    });

