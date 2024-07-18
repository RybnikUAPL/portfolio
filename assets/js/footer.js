// footer.js

document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
            <section class="footer">
                <ul>
                    <li class="service-item">
                        <div class="service-content-box">
                            <p class="footer-item-text">
                                Copyright &copy 2024 Soloviov Anatolii. All rights reserved
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        `;

  const footerLocations = [
    "footer-location-1",
    "footer-location-2",
    "footer-location-3",
    "footer-location-4",

  ];

  footerLocations.forEach((locationId) => {
    const targetElement = document.getElementById(locationId);
    if (targetElement) {
      targetElement.insertAdjacentHTML("beforeend", footerHTML);
    }
  });
});
