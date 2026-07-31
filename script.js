async function getExtensions() {
  const res = await fetch("./extensions.json");
  const data = await res.json();
  data.map((item) => renderCard(item));
}
async function getApps() {
  const res = await fetch("./apps.json");
  const data = await res.json();
  data.map((item) => renderCard(item));
}
(() => {
  getExtensions();
  getApps();
})();

function renderCard(item) {
  const id = item.id;
  const name = item.name;
  const tagline = item.tagline;
  const description = item.description;
  const price = item.price;
  const logo = item.logo;
  const storeUrl = item.storeUrl;
  const privacyPolicyUrl = item.privacyPolicyUrl;
  const author = item.author;
  const authorWebsite = item.authorWebsite;
  const category = item.category;
  const features = item.features;
  const type = item.type;

  const isApp = type === "app";

  const card = `<div class="product-card" id="product-${isApp ? "app" : "extensions"}-${id}">

          ${
            isApp
              ? `<div class="product-card-header">
             <span class="product-badge product-badge-android">
                 <i class="fa-brands fa-android"></i> Android App
               </span>
             </div>`
              : `<div class="product-card-header">
                  <span class="product-badge">
                  <i class="fa-brands fa-chrome"></i> Extension</span>
                </div>`
          }
                <h3 style="display:flex; align-items: center;">
                 <img src="${logo}" alt="${name} Logo" class="ext-logos" width="24px" height="24px" style="margin-right: 10px;" />
                  <a href="${storeUrl}" target="_blank" rel="noopener">${name}</a>
                  <span style="font-size: 10px; margin-left:10px;">${category}</span>
                  <span style="font-size: 10px; margin-left:10px;">${price}</span>
                </h3>
                <p>${tagline}</p>
                <div class="product-publisher">
                  <a href="${authorWebsite}" target="_blank" rel="noopener">${author}</a>
                </div>
                <p>
                  <strong>${name}</strong> ${description}
                </p>
                <ul>
                   ${features.map((item) => `<li>${item}</li>`).join("")}
                </ul>
                <a href="${storeUrl}" class="btn" target="_blank" rel="noopener" id="btn-dark-theme"><i class="fa-brands ${isApp ? "fa-google-play" : "fa-chrome"}"></i> ${isApp ? "Get on Play Store" : "Add to Browser"}</a>
                 <a href="${privacyPolicyUrl}" class="btn" target="_blank" rel="noopener" id="btn-dark-theme" style="background-color: #232323;" ></i>Privacy Policy</a>
              </div>`;

  let extSec = document.getElementById("extensions");
  let appSec = document.getElementById("apps");

  if (isApp) {
    appSec.innerHTML += card;
  } else {
    extSec.innerHTML += card;
  }
}
