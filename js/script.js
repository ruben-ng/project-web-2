// Initialization for ES Users
import {
  Carousel,
  initTWE,
} from "tw-elements";

initTWE({ Carousel });
    
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

