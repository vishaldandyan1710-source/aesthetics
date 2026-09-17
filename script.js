
// =====================================================
// MAISON ROYALE — MAKEOVER STUDIO
// MAIN JAVASCRIPT
// =====================================================

"use strict";


// =====================================================
// CONFIGURATION
// =====================================================

const CONFIG = {

  studioName: "Maison Royale",

  // Replace this with the actual studio WhatsApp number.
  // Use the country code without + or spaces.
  whatsappNumber: "919876543210",

  // Replace with the real email address.
  email: "hello@example.com",

  // Replace with your actual location.
  location: "123 Luxury Avenue, Chandigarh, India"

};


// =====================================================
// IMAGE COLLECTION
// =====================================================

const images = {

  hero: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&auto=format&fit=crop&q=85",

  about: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1000&auto=format&fit=crop&q=85",

  editorial: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=1200&auto=format&fit=crop&q=85",

  services: {

    makeup: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1000&auto=format&fit=crop&q=85",

    hair: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1000&auto=format&fit=crop&q=85",

    bridal: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&auto=format&fit=crop&q=85",

    skin: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&auto=format&fit=crop&q=85"

  },

  gallery: [

    {
      src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=1200&auto=format&fit=crop&q=85",
      title: "The Beauty Edit",
      category: "Makeup"
    },

    {
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&auto=format&fit=crop&q=85",
      title: "Soft Radiance",
      category: "Beauty"
    },

    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=85",
      title: "Bridal Grace",
      category: "Bridal"
    },

    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&auto=format&fit=crop&q=85",
      title: "The Hair Atelier",
      category: "Hair"
    },

    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&auto=format&fit=crop&q=85",
      title: "Skin Rituals",
      category: "Skincare"
    },

    {
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1200&auto=format&fit=crop&q=85",
      title: "The Finishing Touch",
      category: "Beauty"
    },

    {
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&auto=format&fit=crop&q=85",
      title: "Modern Elegance",
      category: "Makeup"
    },

    {
      src: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=1200&auto=format&fit=crop&q=85",
      title: "Royal Details",
      category: "Editorial"
    },

    {
      src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&auto=format&fit=crop&q=85",
      title: "Beauty in Bloom",
      category: "Beauty"
    }

  ]

};


// =====================================================
// DOM REFERENCES
// =====================================================

const app = document.getElementById("app");

const siteHeader = document.getElementById("siteHeader");

const menuToggle = document.getElementById("menuToggle");

const mobileMenu = document.getElementById("mobileMenu");

const mobileClose = document.getElementById("mobileClose");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxCaption = document.getElementById("lightboxCaption");

const lightboxClose = document.getElementById("lightboxClose");

const lightboxPrev = document.getElementById("lightboxPrev");

const lightboxNext = document.getElementById("lightboxNext");

const toast = document.getElementById("toast");

const footerYear = document.getElementById("footerYear");


// =====================================================
// PAGE DATA
// =====================================================

const serviceData = [

  {
    number: "01",
    title: "Makeup",
    image: images.services.makeup,
    description:
      "Refined makeup artistry designed to enhance your natural features while celebrating your individuality.",
    items: [
      ["Signature Makeup", "By consultation"],
      ["Soft Glam", "By consultation"],
      ["Editorial Makeup", "By consultation"],
      ["Event Makeup", "By consultation"]
    ]
  },

  {
    number: "02",
    title: "Hair Atelier",
    image: images.services.hair,
    description:
      "Thoughtfully crafted hair styling, cuts and finishing details that complete your signature look.",
    items: [
      ["Hair Styling", "By consultation"],
      ["Signature Blowout", "By consultation"],
      ["Haircut & Finish", "By consultation"],
      ["Event Styling", "By consultation"]
    ]
  },

  {
    number: "03",
    title: "Bridal",
    image: images.services.bridal,
    description:
      "A considered bridal beauty experience created for meaningful occasions and unforgettable moments.",
    items: [
      ["Bridal Makeup", "By consultation"],
      ["Bridal Hair", "By consultation"],
      ["Pre-Bridal Rituals", "By consultation"],
      ["Bridal Consultation", "By appointment"]
    ]
  },

  {
    number: "04",
    title: "Skin Rituals",
    image: images.services.skin,
    description:
      "A calming approach to skincare with thoughtfully selected beauty rituals and professional consultation.",
    items: [
      ["Glow Facial", "By consultation"],
      ["Skin Consultation", "By appointment"],
      ["Hydration Ritual", "By consultation"],
      ["Pre-Event Skincare", "By consultation"]
    ]
  }

];


// =====================================================
// PAGE HELPERS
// =====================================================

function pageHero(label, title, description) {

  return `

    <section class="inner-hero">

      <div class="container inner-hero-content fade-in">

        <div class="section-label">
          ${label}
        </div>

        <h1 class="section-title">
          ${title}
        </h1>

        <p>
          ${description}
        </p>

      </div>

    </section>

  `;

}


function button(label, href, style = "btn-primary") {

  return `

    <a href="${href}" class="btn ${style}">
      ${label}
      <span>↗</span>
    </a>

  `;

}


function imageWithAlt(src, alt, className = "") {

  return `

    <img
      src="${src}"
      alt="${alt}"
      class="${className}"
      loading="lazy"
      decoding="async"
    >

  `;

}


// =====================================================
// HOME PAGE
// =====================================================

function renderHome() {

  return `

    <!-- HERO -->

    <section class="hero">

      <div class="hero-layout">

        <div class="hero-content fade-in">

          <div class="hero-kicker">
            AN ELEVATED BEAUTY EXPERIENCE
          </div>

          <h1 class="hero-title">
            Beauty,<br>
            <span class="italic">beautifully</span><br>
            considered.
          </h1>

          <div class="hero-script">
            With grace.
          </div>

          <p class="hero-description">
            An intimate makeover studio where artistry,
            elegance and individuality come together
            to create your most beautiful expression.
          </p>

          <div class="hero-actions">

            ${button("Discover Our World", "#services")}

            ${button("View Gallery", "#gallery", "btn-outline")}

          </div>

          <div class="hero-side-note">
            MAKEOVER STUDIO · EST. 2026
          </div>

        </div>

        <div class="hero-visual fade-in">

          <div class="hero-image-frame">

            ${imageWithAlt(images.hero, "Elegant beauty editorial portrait", "hero-image")}

            <div class="hero-frame-decoration"></div>

          </div>

          <div class="hero-badge">
            <span>
              BEAUTY<br>
              WITH<br>
              INTENTION
            </span>
          </div>

        </div>

      </div>

      <div class="hero-bottom">

        <span>CHANDIGARH · INDIA</span>

        <div class="scroll-indicator">
          SCROLL TO EXPLORE
          <span></span>
        </div>

        <span>01 — 05</span>

      </div>

    </section>


    <!-- MARQUEE -->

    <div class="marquee">

      <div class="marquee-track">

        ${Array(2).fill(`
          <div class="marquee-item">
            Artistry
          </div>

          <div class="marquee-item">
            Elegance
          </div>

          <div class="marquee-item">
            Beauty
          </div>

          <div class="marquee-item">
            Dignity
          </div>
        `).join("")}

      </div>

    </div>


    <!-- INTRODUCTION -->

    <section class="page-section intro-section">

      <div class="container intro-grid">

        <div class="intro-visual reveal">

          <div class="intro-image-wrap">

            ${imageWithAlt(images.about, "Elegant woman in a soft beauty editorial", "intro-image")}

            <div class="intro-image-caption">
              Your beauty,<br>
              your signature.
            </div>

          </div>

        </div>

        <div class="intro-content reveal">

          <div class="section-label">
            THE MAISON ROYALE PHILOSOPHY
          </div>

          <h2 class="section-title">
            Not just a<br>
            makeover.<br>
            <em>A feeling.</em>
          </h2>

          <p class="section-description">
            At Maison Royale, we believe beauty is not about
            changing who you are. It is about revealing
            the confidence, grace and individuality
            that already belong to you.
          </p>

          <p class="section-description">
            Every detail is considered. Every appointment
            is personal. Every look is created with intention.
          </p>

          ${button("Our Story", "#contact", "btn-outline")}

          <div class="signature">

            <span class="signature-name">
              With love,
            </span>

            <span class="signature-role">
              The Maison Royale Team
            </span>

          </div>

        </div>

      </div>

    </section>


    <!-- FEATURED SERVICES -->

    <section class="page-section services-section">

      <div class="container">

        <div class="services-heading reveal">

          <div>

            <div class="section-label">
              THE ART OF BEAUTY
            </div>

            <h2 class="section-title">
              Beauty rituals<br>
              <em>made personal.</em>
            </h2>

          </div>

          <p class="section-description">
            From signature makeup to thoughtful
            bridal artistry, explore services
            curated around your vision.
          </p>

        </div>

        <div class="service-grid">

          ${serviceData.map((service, index) => `

            <article class="service-card reveal">

              <div class="service-number">
                <span>${service.number}</span>
                <span>✦</span>
              </div>

              <div class="service-icon">
                ${["M", "H", "B", "S"][index]}
              </div>

              <h3>${service.title}</h3>

              <p>
                ${service.description}
              </p>

              <a href="#services" class="service-link">
                Discover ↗
              </a>

            </article>

          `).join("")}

        </div>

      </div>

    </section>


    <!-- EDITORIAL -->

    <section class="editorial-section">

      <div class="container editorial-layout">

        <div class="editorial-content reveal">

          <div class="section-label">
            THE SIGNATURE EXPERIENCE
          </div>

          <h2 class="section-title">
            Elegance is<br>
            always in style.
          </h2>

          <p class="section-description">
            A luxurious setting, personal attention
            and beauty artistry that respects
            the person behind every look.
          </p>

          ${button("Explore Our Services", "#services", "btn-outline")}

        </div>

        <div class="editorial-visual reveal">

          ${imageWithAlt(images.editorial, "Elegant beauty editorial image", "editorial-image")}

        </div>

      </div>

    </section>


    <!-- CTA -->

    ${renderCTA()}

  `;

}


// =====================================================
// GALLERY PAGE
// =====================================================

function renderGallery() {

  return `

    ${pageHero(
      "OUR WORK",
      "A gallery of grace.",
      "Explore our visual world of beauty, artistry and thoughtful transformations."
    )}

    <section class="page-section gallery-section">

      <div class="container">

        <div class="gallery-heading reveal">

          <div>

            <div class="section-label">
              THE VISUAL JOURNAL
            </div>

            <h2 class="section-title">
              Beauty in<br>
              <em>every detail.</em>
            </h2>

          </div>

          <p class="section-description">
            An evolving collection of our beauty
            stories, curated with intention.
          </p>

        </div>

        <div class="gallery-grid">

          ${images.gallery.map((image, index) => `

            <div
              class="gallery-item reveal ${index % 4 === 0 ? "tall" : ""}"
              data-gallery-index="${index}"
              tabindex="0"
              role="button"
              aria-label="Open ${image.title} image"
            >

              ${imageWithAlt(image.src, image.title)}

              <div class="gallery-overlay">

                <span>${image.category}</span>

                <strong>${image.title}</strong>

              </div>

            </div>

          `).join("")}

        </div>

      </div>

    </section>

    ${renderCTA()}

  `;

}


// =====================================================
// SERVICES PAGE
// =====================================================

function renderServices() {

  return `

    ${pageHero(
      "OUR SERVICES",
      "The beauty atelier.",
      "A considered collection of makeup, hair, bridal and skincare experiences."
    )}

    <section class="page-section service-page-section">

      <div class="container">

        ${serviceData.map((service, index) => `

          <article class="service-detail reveal">

            <div class="service-detail-visual">

              ${imageWithAlt(service.image, service.title)}

            </div>

            <div class="service-detail-content">

              <div class="service-detail-number">
                ${service.number}
              </div>

              <h2>${service.title}</h2>

              <p>
                ${service.description}
              </p>

              <ul class="service-list">

                ${service.items.map(item => `

                  <li>
                    ${item[0]}
                    <span>${item[1]}</span>
                  </li>

                `).join("")}

              </ul>

              ${button("Enquire Now", "#enquiry", "btn-outline")}

            </div>

          </article>

        `).join("")}

      </div>

    </section>

    ${renderCTA()}

  `;

}


// =====================================================
// ENQUIRY PAGE
// =====================================================

function renderEnquiry() {

  return `

    ${pageHero(
      "YOUR BEAUTY JOURNEY",
      "Let's create<br>something beautiful.",
      "Tell us about your vision and let us curate an experience that feels uniquely yours."
    )}

    <section class="page-section form-section">

      <div class="container form-layout">

        <div class="form-info reveal">

          <div class="section-label">
            PERSONAL CONSULTATION
          </div>

          <h2 class="section-title">
            Your moment<br>
            <em>begins here.</em>
          </h2>

          <p>
            Whether you are preparing for your special day,
            celebrating a milestone or simply making time
            for yourself, we would love to hear from you.
          </p>

          <div class="form-note">

            <span>✦</span>

            <p>
              Every enquiry is reviewed personally.
              Our team will contact you to discuss
              your requirements and availability.
            </p>

          </div>

        </div>

        <form class="luxury-form reveal" id="enquiryForm">

          <div class="form-row">

            <div class="form-group">

              <label for="name">Your Name *</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                required
              >

            </div>

            <div class="form-group">

              <label for="phone">Phone Number *</label>

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your phone number"
                required
              >

            </div>

          </div>

          <div class="form-group">

            <label for="email">Email Address</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
            >

          </div>

          <div class="form-group">

            <label for="service">Service *</label>

            <select id="service" name="service" required>

              <option value="">Choose your experience</option>

              <option value="Makeup">Makeup</option>

              <option value="Hair Atelier">Hair Atelier</option>

              <option value="Bridal">Bridal</option>

              <option value="Skin Rituals">Skin Rituals</option>

              <option value="Personal Consultation">Personal Consultation</option>

            </select>

          </div>

          <div class="form-row">

            <div class="form-group">

              <label for="date">Preferred Date</label>

              <input
                type="date"
                id="date"
                name="date"
              >

            </div>

            <div class="form-group">

              <label for="occasion">Occasion</label>

              <input
                type="text"
                id="occasion"
                name="occasion"
                placeholder="Wedding, event..."
              >

            </div>

          </div>

          <div class="form-group">

            <label for="message">Tell Us More</label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your vision..."
            ></textarea>

          </div>

          <button type="submit" class="btn btn-primary form-submit">
            Send Enquiry <span>↗</span>
          </button>

          <p class="form-disclaimer">
            Your details are used to respond to your enquiry.
          </p>

        </form>

      </div>

    </section>

  `;

}


// =====================================================
// CONTACT PAGE
// =====================================================

function renderContact() {

  return `

    ${pageHero(
      "COME VISIT US",
      "Your beauty<br>destination.",
      "We look forward to welcoming you into the Maison Royale experience."
    )}

    <section class="page-section contact-section">

      <div class="container contact-layout">

        <div class="contact-details reveal">

          <div class="section-label">
            CONTACT MAISON ROYALE
          </div>

          <h2 class="section-title" style="margin-top:25px;">
            Let us<br>
            <em>connect.</em>
          </h2>

          <div class="contact-item">

            <h3>Visit Us</h3>

            <p>
              123 Luxury Avenue<br>
              Chandigarh, India
            </p>

          </div>

          <div class="contact-item">

            <h3>Reach Out</h3>

            <p>
              <a href="tel:+919876543210">
                +91 98765 43210
              </a>
              <br>

              <a href="mailto:hello@example.com">
                hello@example.com
              </a>
            </p>

          </div>

          <div class="contact-item">

            <h3>Studio Hours</h3>

            <p>
              Monday — Saturday<br>
              10:00 AM — 7:00 PM
            </p>

          </div>

          ${button("Book An Appointment", "#enquiry")}

        </div>

        <div class="contact-map reveal">

          <div class="contact-map-inner">

            <div class="section-label" style="justify-content:center;">
              OUR STUDIO
            </div>

            <h2 class="section-title">
              A place for<br>
              <em>yourself.</em>
            </h2>

            <p>
              A warm, considered environment
              for your beauty rituals.
            </p>

            <div style="margin-top:30px;">

              ${button("Get Directions", "https://www.google.com/maps/search/?api=1&query=Chandigarh+India", "btn-outline")}

            </div>

          </div>

        </div>

      </div>

    </section>

    ${renderCTA()}

  `;

}


// =====================================================
// SHARED CTA
// =====================================================

function renderCTA() {

  return `

    <section class="cta-section">

      <div class="container">

        <div class="cta-box reveal">

          <div class="section-label" style="justify-content:center;">
            YOUR NEXT CHAPTER
          </div>

          <h2 class="section-title">
            Beauty awaits<br>
            <em>you.</em>
          </h2>

          <p>
            Take a moment for yourself.
            Let us create something beautiful together.
          </p>

          ${button("Begin Your Enquiry", "#enquiry")}

        </div>

      </div>

    </section>

  `;

}


// =====================================================
// ROUTING
// =====================================================

const validPages = [
  "home",
  "gallery",
  "services",
  "enquiry",
  "contact"
];


function getCurrentPage() {

  const hash = window.location.hash.replace("#", "").toLowerCase();

  return validPages.includes(hash) ? hash : "home";

}


function renderPage() {

  const page = getCurrentPage();

  closeMobileMenu();

  closeLightbox();

  switch (page) {

    case "gallery":
      app.innerHTML = renderGallery();
      break;

    case "services":
      app.innerHTML = renderServices();
      break;

    case "enquiry":
      app.innerHTML = renderEnquiry();
      break;

    case "contact":
      app.innerHTML = renderContact();
      break;

    default:
      app.innerHTML = renderHome();

  }

  updateNavigation(page);

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });

  initializePageFeatures();

}


function updateNavigation(page) {

  document.querySelectorAll("[data-page-link]").forEach(link => {

    link.classList.toggle(
      "active",
      link.dataset.pageLink === page
    );

  });

}


// =====================================================
// MOBILE MENU
// =====================================================

function openMobileMenu() {

  mobileMenu.classList.add("open");

  document.body.classList.add("menu-open");

  menuToggle.setAttribute("aria-expanded", "true");

}


function closeMobileMenu() {

  mobileMenu.classList.remove("open");

  document.body.classList.remove("menu-open");

  menuToggle.setAttribute("aria-expanded", "false");

}


menuToggle.addEventListener("click", () => {

  const isOpen = mobileMenu.classList.contains("open");

  if (isOpen) {

    closeMobileMenu();

  } else {

    openMobileMenu();

  }

});


mobileClose.addEventListener("click", closeMobileMenu);


// =====================================================
// HEADER SCROLL
// =====================================================

function handleHeaderScroll() {

  siteHeader.classList.toggle(
    "scrolled",
    window.scrollY > 35
  );

}

window.addEventListener("scroll", handleHeaderScroll, {
  passive: true
});


// =====================================================
// SCROLL REVEAL
// =====================================================

function initializeRevealAnimations() {

  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {

    elements.forEach(element => {
      element.classList.add("visible");
    });

    return;

  }

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observerInstance.unobserve(entry.target);

        }

      });

    },
    {
      threshold: .08
    }
  );

  elements.forEach(element => {
    observer.observe(element);
  });

}


// =====================================================
// GALLERY LIGHTBOX
// =====================================================

let currentGalleryIndex = 0;


function openLightbox(index) {

  const item = images.gallery[index];

  if (!item) return;

  currentGalleryIndex = index;

  lightboxImage.src = item.src;

  lightboxImage.alt = item.title;

  lightboxCaption.textContent =
    `${item.title} · ${item.category}`;

  lightbox.classList.add("open");

  lightbox.setAttribute("aria-hidden", "false");

  document.body.classList.add("menu-open");

}


function closeLightbox() {

  lightbox.classList.remove("open");

  lightbox.setAttribute("aria-hidden", "true");

  document.body.classList.remove("menu-open");

}


function changeGalleryImage(direction) {

  currentGalleryIndex += direction;

  if (currentGalleryIndex < 0) {

    currentGalleryIndex = images.gallery.length - 1;

  }

  if (currentGalleryIndex >= images.gallery.length) {

    currentGalleryIndex = 0;

  }

  openLightbox(currentGalleryIndex);

}


function initializeGallery() {

  const galleryItems = document.querySelectorAll(
    "[data-gallery-index]"
  );

  galleryItems.forEach(item => {

    const index = Number(item.dataset.galleryIndex);

    item.addEventListener("click", () => {
      openLightbox(index);
    });

    item.addEventListener("keydown", event => {

      if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();

        openLightbox(index);

      }

    });

  });

}


lightboxClose.addEventListener("click", closeLightbox);

lightboxPrev.addEventListener("click", () => {
  changeGalleryImage(-1);
});

lightboxNext.addEventListener("click", () => {
  changeGalleryImage(1);
});


// =====================================================
// KEYBOARD CONTROLS
// =====================================================

document.addEventListener("keydown", event => {

  if (!lightbox.classList.contains("open")) return;

  if (event.key === "Escape") {

    closeLightbox();

  }

  if (event.key === "ArrowLeft") {

    changeGalleryImage(-1);

  }

  if (event.key === "ArrowRight") {

    changeGalleryImage(1);

  }

});


// =====================================================
// ENQUIRY FORM
// =====================================================

function initializeEnquiryForm() {

  const form = document.getElementById("enquiryForm");

  if (!form) return;

  const dateInput = document.getElementById("date");

  if (dateInput) {

    const today = new Date().toISOString().split("T")[0];

    dateInput.min = today;

  }

  form.addEventListener("submit", event => {

    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.get("name").trim();

    const phone = formData.get("phone").trim();

    const email = formData.get("email").trim();

    const service = formData.get("service");

    const date = formData.get("date") || "Flexible";

    const occasion = formData.get("occasion").trim();

    const message = formData.get("message").trim();

    if (!name || !phone || !service) {

      showToast("Please complete the required fields.");

      return;

    }

    const whatsappMessage = `

Hello Maison Royale,

I would like to enquire about a beauty appointment.

Name: ${name}

Phone: ${phone}

Email: ${email || "Not provided"}

Service: ${service}

Preferred Date: ${date}

Occasion: ${occasion || "Not specified"}

Message: ${message || "No additional message"}

I look forward to hearing from you.

    `.trim();

    const whatsappURL =
      `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    showToast("Your enquiry is ready to send on WhatsApp.");

  });

}


// =====================================================
// TOAST
// =====================================================

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 3500);

}


// =====================================================
// PAGE INITIALIZATION
// =====================================================

function initializePageFeatures() {

  initializeRevealAnimations();

  initializeGallery();

  initializeEnquiryForm();

}


// =====================================================
// NAVIGATION EVENT
// =====================================================

window.addEventListener("hashchange", renderPage);


// =====================================================
// START APPLICATION
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

  footerYear.textContent = new Date().getFullYear();

  handleHeaderScroll();

  setTimeout(() => {

    document.getElementById("pageLoader").classList.add("loaded");

  }, 900);

  renderPage();

});

