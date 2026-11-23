
/* =========================================
   PRINCE ABUU BAKAR ZANZIBAR TOURS
   Main JavaScript
========================================= */

/* WhatsApp contact */
const WHATSAPP_NUMBERS = ["255772548855", "255772075448"];

/* =========================================
   TOURS DATA
========================================= */

const tours = [

    {
        id: 1,
        name: "Transfer Go & Back",
        category: "transport",
        categoryName: "Airport & Hotel Transfers",
        duration: "Flexible",
        description: "Reliable airport, hotel and destination transfers with convenient pickup and drop-off arrangements."
    },

    {
        id: 2,
        name: "Zanzibar Excursion",
        category: "culture",
        categoryName: "Island Experience",
        duration: "Half or Full Day",
        description: "Discover the beauty of Zanzibar through exciting excursions, scenic locations and island experiences."
    },

    {
        id: 3,
        name: "Mnemba Island Dolphin & Snorkeling",
        category: "ocean",
        categoryName: "Ocean Adventure",
        duration: "Half Day",
        description: "Explore Mnemba waters, enjoy snorkeling and experience the beautiful marine life around the island."
    },

    {
        id: 4,
        name: "Spice Farm Tour",
        category: "culture",
        categoryName: "Spice Experience",
        duration: "Half Day",
        description: "Discover Zanzibar's spice heritage, tropical plants, fresh spices and unique local flavors."
    },

    {
        id: 5,
        name: "Jozani Forest & Red Colobus Monkeys",
        category: "culture",
        categoryName: "Nature & Wildlife",
        duration: "Half Day",
        description: "Explore Jozani Forest, discover the natural beauty of Zanzibar and see the rare red colobus monkeys."
    },

    {
        id: 6,
        name: "Prison Island",
        category: "ocean",
        categoryName: "Island Tour",
        duration: "Half Day",
        description: "Take a boat trip to Prison Island, explore its history and enjoy views of the surrounding Indian Ocean."
    },

    {
        id: 7,
        name: "Stone Town Tour",
        category: "culture",
        categoryName: "History & Culture",
        duration: "2–3 Hours",
        description: "Discover historic streets, local markets, architecture and the rich cultural heritage of Stone Town."
    },

    {
        id: 8,
        name: "Local Village Experience",
        category: "culture",
        categoryName: "Local Experience",
        duration: "Half Day",
        description: "Experience village life, meet local people and learn about Zanzibar traditions and daily life."
    },

    {
        id: 9,
        name: "Cooking School",
        category: "culture",
        categoryName: "Swahili Food Experience",
        duration: "Half Day",
        description: "Learn to prepare delicious traditional Swahili dishes and explore Zanzibar's food culture."
    },

    {
        id: 10,
        name: "Jet Ski Adventure",
        category: "adventure",
        categoryName: "Water Adventure",
        duration: "Flexible",
        description: "Enjoy an exciting jet ski adventure across Zanzibar's beautiful turquoise waters."
    },

    {
        id: 11,
        name: "Quad Riding",
        category: "adventure",
        categoryName: "Land Adventure",
        duration: "Flexible",
        description: "Explore rural landscapes, countryside and local surroundings with an exciting quad ride."
    },

    {
        id: 12,
        name: "Horse Riding",
        category: "adventure",
        categoryName: "Horse Experience",
        duration: "Flexible",
        description: "Enjoy a memorable horse riding experience around beautiful beaches and scenic locations."
    },

    {
        id: 13,
        name: "Mtende Beach",
        category: "beaches",
        categoryName: "Beach Experience",
        duration: "Half or Full Day",
        description: "Explore Mtende Beach, a beautiful coastal destination with unique scenery and peaceful ocean views."
    },

    {
        id: 14,
        name: "Paje Beach",
        category: "beaches",
        categoryName: "Beach Experience",
        duration: "Flexible",
        description: "Relax on white sandy beaches, enjoy the ocean and discover the vibrant atmosphere of Paje."
    },

    {
        id: 15,
        name: "The Rock Restaurant",
        category: "beaches",
        categoryName: "Dining Experience",
        duration: "Flexible",
        description: "Visit the famous ocean restaurant and enjoy a special dining experience surrounded by the sea."
    },

    {
        id: 18,
        name: "Mikumi National Park",
        category: "safari",
        categoryName: "Wildlife Safari",
        duration: "1 Day or More",
        description: "Discover Mikumi National Park and experience wildlife, nature and an exciting safari journey."
    },

    {
        id: 19,
        name: "Nakupenda Beach",
        category: "ocean",
        categoryName: "Sandbank Experience",
        duration: "Half or Full Day",
        description: "Escape to Nakupenda sandbank, enjoy turquoise water, swimming, snorkeling and relaxation."
    },

    {
        id: 20,
        name: "Kendwa Beach",
        category: "beaches",
        categoryName: "Beach Experience",
        duration: "Flexible",
        description: "Relax on Kendwa's white sandy beach and enjoy swimming and the beautiful northern coastline."
    },

    {
        id: 21,
        name: "Safari Blue",
        category: "ocean",
        categoryName: "Ocean Adventure",
        duration: "Full Day",
        description: "Enjoy a full-day ocean excursion with sailing, snorkeling, sandbanks and beautiful sea views."
    },

    {
        id: 22,
        name: "Starfish Tour",
        category: "ocean",
        categoryName: "Marine Experience",
        duration: "Half Day",
        description: "Discover Zanzibar's marine beauty and enjoy an experience around the beautiful starfish waters."
    },

    {
        id: 23,
        name: "One Night Two Days Package",
        category: "safari",
        categoryName: "Multi-Day Package",
        duration: "2 Days / 1 Night",
        description: "Enjoy a memorable two-day travel package with overnight accommodation arrangements and adventures."
    }

];

const tourPhotoDetails = {
    1: [
        { src: "assets/images/ston town1.jpeg", alt: "Stone Town's historic cathedral and surrounding streets" },
        { src: "assets/images/ston town4.jpeg", alt: "Memorial statues in a palm-lined courtyard in Stone Town" }
    ],
    2: [
        { src: "assets/images/mtende beach1.jpeg", alt: "White sand and coastal cliffs at Mtende Beach" },
        { src: "assets/images/nakupenda1.jpeg", alt: "A sandbank surrounded by clear turquoise water" }
    ],
    3: [
        { src: "assets/images/mnemb island3.jpeg", alt: "Dolphins swimming in clear water near Mnemba Island" },
        { src: "assets/images/mnemb island8.jpeg", alt: "Dolphins surfacing in the water near Mnemba Island" }
    ],
    4: [
        { src: "assets/images/spaic farm2.jpeg", alt: "Baskets of spices and fresh produce at a Zanzibar farm" },
        { src: "assets/images/spaic farm4.jpeg", alt: "A visitor preparing food at a local Zanzibar farm" }
    ],
    5: [
        { src: "assets/images/jozani1.jpeg", alt: "A red colobus monkey in Jozani Forest" },
        { src: "assets/images/jozani2.jpeg", alt: "A red colobus monkey resting in a Jozani tree" }
    ],
    6: [
        { src: "assets/images/safari bluu1.jpeg", alt: "A boat approaching The Rock Restaurant in Zanzibar" },
        { src: "assets/images/safari bluu 2.jpeg", alt: "Swimmers in clear water beside a rocky Zanzibar coastline" }
    ],
    7: [
        { src: "assets/images/ston town1.jpeg", alt: "Stone Town's historic cathedral beneath a blue sky" },
        { src: "assets/images/ston town2.jpeg", alt: "A palm-lined walkway in Stone Town" }
    ],
    8: [
        { src: "assets/images/spaic farm3.jpeg", alt: "Fresh spices, plants and produce at a Zanzibar farm" },
        { src: "assets/images/spaic farm5.jpeg", alt: "Flatbread and curry prepared for a Swahili meal" }
    ],
    9: [
        { src: "assets/images/spaic farm4.jpeg", alt: "A woman preparing flatbread at a Zanzibar cooking lesson" },
        { src: "assets/images/spaic farm1.jpeg", alt: "A Swahili-style meal served at a local Zanzibar farm" }
    ],
    10: [
        { src: "assets/images/safari bluu.jpeg", alt: "Visitors swimming in clear water beside a rocky Zanzibar coast" },
        { src: "assets/images/safari bluu 3.jpeg", alt: "A dhow anchored in a clear-water Zanzibar lagoon" }
    ],
    11: [
        { src: "assets/images/jozani3.jpeg", alt: "Visitors walking along a forest trail in Jozani" }
    ],
    12: [
        { src: "assets/images/kendwa beach1.jpeg", alt: "Sunset views over Kendwa Beach with dhows offshore" },
        { src: "assets/images/mtende beach3.jpeg", alt: "A quiet stretch of Zanzibar coastline" }
    ],
    13: [
        { src: "assets/images/mtende beach1.jpeg", alt: "White sand and coastal cliffs at Mtende Beach" },
        { src: "assets/images/mtende beach3.jpeg", alt: "A secluded cove at Mtende Beach" }
    ],
    14: [
        { src: "assets/images/mtende beach1.jpeg", alt: "A tropical beach on Zanzibar's southern coast" },
        { src: "assets/images/mtende beach3.jpeg", alt: "A secluded Zanzibar cove at low tide" }
    ],
    15: [
        { src: "assets/images/rock michamvi1.jpeg", alt: "The Rock Restaurant standing above the ocean at Michamvi" },
        { src: "assets/images/rock michamvi 3.jpeg", alt: "The Rock Restaurant on its rocky island at high tide" }
    ],
    16: [
        { src: "assets/images/mikumi1.jpeg", alt: "An elephant in the open landscape of Tanzania" },
        { src: "assets/images/mikumi2.jpeg", alt: "Lions resting in a tree in Tanzania's safari country" }
    ],
    17: [
        { src: "assets/images/nakupenda1.jpeg", alt: "A sandbank surrounded by Zanzibar's turquoise sea" },
        { src: "assets/images/ston town2.jpeg", alt: "Historic architecture in Stone Town, Zanzibar" }
    ],
    18: [
        { src: "assets/images/mikumi1.jpeg", alt: "An elephant in the open landscape of Mikumi" },
        { src: "assets/images/mikumi2.jpeg", alt: "Lions resting in a tree in Tanzania's safari country" }
    ],
    19: [
        { src: "assets/images/nakupenda1.jpeg", alt: "The Nakupenda sandbank and its clear shallow water" },
        { src: "assets/images/nakupenda2.jpeg", alt: "An aerial view of Nakupenda sandbank at low tide" }
    ],
    20: [
        { src: "assets/images/kendwa beach1.jpeg", alt: "Kendwa Beach's white sand and turquoise water" },
        { src: "assets/images/kendwa beach2.jpeg", alt: "A sailboat passing Zanzibar's rocky shoreline" }
    ],
    21: [
        { src: "assets/images/safari bluu 3.jpeg", alt: "A dhow anchored in a clear-water Zanzibar lagoon" },
        { src: "assets/images/safari bluu 4.jpeg", alt: "Boats and swimmers along a Zanzibar beach" }
    ],
    22: [
        { src: "assets/images/mnemba island2.jpeg", alt: "A red starfish held above clear water near Mnemba Island" }
    ],
    23: [
        { src: "assets/images/mikumi1.jpeg", alt: "An elephant in Tanzania's open safari landscape" },
        { src: "assets/images/safari bluu1.jpeg", alt: "A boat approaching The Rock Restaurant in Zanzibar" }
    ]
};

const galleryPhotoSets = [
    {
        caption: "Jozani Forest, Zanzibar",
        alt: "Jozani Forest trails and red colobus monkeys, Zanzibar",
        files: Array.from({ length: 7 }, (_, index) => `jozani${index + 1}.jpeg`)
    },
    {
        caption: "Kendwa Beach, Zanzibar",
        alt: "Kendwa Beach and its Indian Ocean coastline, Zanzibar",
        files: ["kendwa beach1.jpeg", "kendwa beach2.jpeg"]
    },
    {
        caption: "Mikumi National Park, Tanzania",
        alt: "Wildlife and open landscapes in Mikumi National Park, Tanzania",
        files: Array.from({ length: 9 }, (_, index) => `mikumi${index + 1}.jpeg`)
    },
    {
        caption: "Mnemba Island, Zanzibar",
        alt: "Mnemba Island, its lagoon and surrounding marine scenery",
        files: [
            "mnemb island3.jpeg", "mnemb island6.jpeg",
            "mnemb island8.jpeg", "mnemb island9.jpeg", "mnemb island10.jpeg",
            "mnemba island 4.jpeg", "mnemba island 5.jpeg", "mnemba island2.jpeg"
        ]
    },
    {
        caption: "Mtende Beach, Zanzibar",
        alt: "Mtende Beach and the southern Zanzibar coastline",
        files: [
            "mtende beach 6.jpeg", "mtende beach1.jpeg", "mtende beach3.jpeg",
            "mtende beach4.jpeg", "mtende beach5.jpeg", "mtende bech2.jpeg"
        ]
    },
    {
        caption: "Nakupenda Sandbank, Zanzibar",
        alt: "Nakupenda Sandbank and the surrounding Indian Ocean",
        files: Array.from({ length: 3 }, (_, index) => `nakupenda${index + 1}.jpeg`)
    },
    {
        caption: "Michamvi, Zanzibar",
        alt: "The Rock Restaurant and Michamvi coastline, Zanzibar",
        files: [
            "rock michamvi1.jpeg", "rock michamvi2.jpeg", "rock michamvi 3.jpeg",
            "rock michamvi 4.jpeg", "rock michamvi5.jpeg", "rock michamvi6.jpeg"
        ]
    },
    {
        caption: "Safari Blue, Zanzibar",
        alt: "Safari Blue boats, beaches and clear-water lagoon, Zanzibar",
        files: [
            "safari bluu.jpeg", "safari bluu1.jpeg", "safari bluu 2.jpeg",
            "safari bluu 3.jpeg", "safari bluu 4.jpeg"
        ]
    },
    {
        caption: "Salam Cave, Kizimkazi",
        alt: "Salam Cave and marine life in Kizimkazi, Zanzibar",
        files: [
            "salam cave kizimkaz6.jpeg", "salam cave kizimkazi1.jpeg",
            "salam cave kizimkazi2.jpeg", "salam cave kizimkazi3.jpeg",
            "salam cave kizimkazi4.jpeg", "salam cave kizimkazi5.jpeg",
            "salam cave kizimkazi7.jpeg"
        ]
    },
    {
        caption: "Zanzibar Spice Farm",
        alt: "Spice plants, produce and local cooking at a Zanzibar farm",
        files: Array.from({ length: 8 }, (_, index) => `spaic farm${index + 1}.jpeg`)
    },
    {
        caption: "Zanzibar Cuisine",
        alt: "A colorful Swahili meal served in Zanzibar",
        files: ["mnemb island1.jpeg"]
    },
    {
        caption: "Stone Town, Zanzibar",
        alt: "Historic Stone Town architecture, streets and landmarks, Zanzibar",
        files: [
            "ston town 7.jpeg", "ston town 9.jpeg", "ston town 10.jpeg",
            "ston town 11.jpeg", "ston town1.jpeg", "ston town2.jpeg",
            "ston town3.jpeg", "ston town4.jpeg", "ston town5.jpeg",
            "ston town6.jpeg", "ston town12.jpeg", "ston town13.jpeg"
        ]
    }
];

const tourPhotoDetailsBySource = new Map(
    Object.values(tourPhotoDetails).flat().map(photo => [photo.src, photo.alt])
);
const galleryPhotos = galleryPhotoSets.flatMap(set => set.files.map((file, index) => {
    const src = `assets/images/${file}`;
    const alt = tourPhotoDetailsBySource.get(src) || `${set.alt}, photo ${index + 1}`;
    return {
        src,
        alt,
        caption: set.caption
    };
}));

const photosWithPrefixes = prefixes => galleryPhotos.filter(photo => {
    const filename = photo.src.slice(photo.src.lastIndexOf("/") + 1).toLowerCase();
    return prefixes.some(prefix => filename.startsWith(prefix));
});
const photoGroups = {
    jozani: photosWithPrefixes(["jozani"]),
    kendwa: photosWithPrefixes(["kendwa beach"]),
    mikumi: photosWithPrefixes(["mikumi"]),
    mnemba: photosWithPrefixes(["mnemb island", "mnemba island"]),
    mtende: photosWithPrefixes(["mtende beach", "mtende bech"]),
    nakupenda: photosWithPrefixes(["nakupenda"]),
    michamvi: photosWithPrefixes(["rock michamvi"]),
    safariBlue: photosWithPrefixes(["safari bluu"]),
    salamCave: photosWithPrefixes(["salam cave"]),
    spiceFarm: photosWithPrefixes(["spaic farm"]),
    zanzibarCuisine: photosWithPrefixes(["mnemb island1"]),
    stoneTown: photosWithPrefixes(["ston town"])
};
const beachPhotos = [...photoGroups.mtende, ...photoGroups.kendwa];
const rotatePhotos = (photos, startIndex) => [
    ...photos.slice(startIndex),
    ...photos.slice(0, startIndex)
];
const mnembaPhotos = photoGroups.mnemba.filter(photo =>
    !photo.src.endsWith("/mnemb island1.jpeg")
    && !photo.src.endsWith("/mnemba island2.jpeg")
);
const spiceFarmPhotos = [
    ...photoGroups.spiceFarm.slice(1, 3),
    photoGroups.spiceFarm[5]
];
const localVillagePhotos = photoGroups.spiceFarm.slice(6);
const cookingPhotos = [
    ...photoGroups.zanzibarCuisine,
    photoGroups.spiceFarm[0],
    ...photoGroups.spiceFarm.slice(3, 5)
];
const stoneTownTransferPhotos = photoGroups.stoneTown.slice(0, 4);
const prisonIslandPhotos = photoGroups.stoneTown.slice(4, 8);
const stoneTownTourPhotos = photoGroups.stoneTown.slice(8);
const jozaniPhotos = photoGroups.jozani.slice(0, 4);
const quadPhotos = photoGroups.jozani.slice(4);
const safariBluePhotos = photoGroups.safariBlue.slice(0, 3);
const jetSkiPhotos = photoGroups.safariBlue.slice(3);
const mikumiPhotos = photoGroups.mikumi.slice(0, 5);
const overnightSafariPhotos = photoGroups.mikumi.slice(5);
const zanzibarTourPhotos = [
    ...photoGroups.salamCave,
    ...galleryPhotos.filter(photo =>
        !photo.src.includes("/mikumi")
        && !photoGroups.salamCave.includes(photo)
    )
];
const tourPhotos = {
    1: stoneTownTransferPhotos,
    2: zanzibarTourPhotos,
    3: mnembaPhotos,
    4: spiceFarmPhotos,
    5: jozaniPhotos,
    6: prisonIslandPhotos,
    7: stoneTownTourPhotos,
    8: localVillagePhotos,
    9: cookingPhotos,
    10: jetSkiPhotos,
    11: quadPhotos,
    12: rotatePhotos(beachPhotos, 1),
    13: photoGroups.mtende,
    14: rotatePhotos(beachPhotos, 4),
    15: photoGroups.michamvi,
    18: mikumiPhotos,
    19: photoGroups.nakupenda,
    20: photoGroups.kendwa,
    21: safariBluePhotos,
    22: photoGroups.mnemba.filter(photo => photo.src.endsWith("/mnemba island2.jpeg")),
    23: overnightSafariPhotos
};

const featuredGalleryPhotoSources = [
    "assets/images/mtende beach1.jpeg",
    "assets/images/mnemb island8.jpeg",
    "assets/images/nakupenda1.jpeg",
    "assets/images/kendwa beach1.jpeg",
    "assets/images/ston town1.jpeg",
    "assets/images/mikumi1.jpeg"
];
const featuredGalleryPhotos = featuredGalleryPhotoSources.map(src => {
    const photo = galleryPhotos.find(item => item.src === src);
    if (!photo) throw new Error(`Featured gallery photo is missing: ${src}`);
    return photo;
});
const remainingGalleryPhotos = galleryPhotos.filter(photo => !featuredGalleryPhotos.includes(photo));
const destinationPhotoSets = [
    {
        featuredSrc: "assets/images/kendwa beach1.jpeg",
        captions: [
            "Kendwa Beach, Zanzibar",
            "Mtende Beach, Zanzibar",
            "Nakupenda Sandbank, Zanzibar",
            "Michamvi, Zanzibar",
            "Safari Blue, Zanzibar"
        ]
    },
    {
        featuredSrc: "assets/images/ston town1.jpeg",
        captions: [
            "Stone Town, Zanzibar",
            "Zanzibar Spice Farm",
            "Zanzibar Cuisine",
            "Jozani Forest, Zanzibar"
        ]
    },
    {
        featuredSrc: "assets/images/mnemb island3.jpeg",
        captions: [
            "Mnemba Island, Zanzibar",
            "Mikumi National Park, Tanzania",
            "Salam Cave, Kizimkazi"
        ]
    }
].map(({ featuredSrc, captions }) => {
    const featuredPhoto = galleryPhotos.find(photo => photo.src === featuredSrc);
    if (!featuredPhoto) throw new Error(`Featured destination photo is missing: ${featuredSrc}`);

    return [
        featuredPhoto,
        ...captions.flatMap(caption => galleryPhotos.filter(photo =>
            photo.caption === caption && photo.src !== featuredSrc
        ))
    ];
});


/* =========================================
   SELECT ELEMENTS
========================================= */

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const tourGrid = document.getElementById("tourGrid");
const destinationGrid = document.querySelector(".destination-grid");
const galleryGrid = document.getElementById("photoGallery");
const extraGalleryGrid = document.getElementById("extraPhotoGallery");
const galleryToggle = document.getElementById("galleryToggle");
const tourFilters = document.getElementById("tourFilters");
const tourSelect = document.getElementById("tourSelect");
const bookingForm = document.getElementById("bookingForm");
const heroPhotos = [
    "assets/images/mtende beach1.jpeg",
    "assets/images/mnemb island8.jpeg",
    "assets/images/nakupenda1.jpeg",
    "assets/images/kendwa beach1.jpeg",
    "assets/images/safari bluu1.jpeg"
];
let heroPhotoTimer;
let destinationPhotoTimer;
let galleryExpanded = currentPage === "destinations.html" || currentPage === "gallery.html";
let heroTypingTimer;


/* =========================================
   LUCIDE ICONS
========================================= */

function createIcons() {

    if (window.lucide) {
        window.lucide.createIcons();
    }

}

function initializeDestinationSlideshows() {
    if (!destinationGrid) return;

    destinationGrid.querySelectorAll(".destination-card").forEach(card => {
        const destinationIndex = Number(card.dataset.destinationIndex);
        const photos = destinationPhotoSets[destinationIndex];
        const activeImage = card.querySelector(".destination-photo.is-active");
        const nextImage = card.querySelector(".destination-photo:not(.is-active)");
        const caption = card.querySelector(".destination-photo-caption");

        if (!photos || photos.length < 2 || !activeImage || !nextImage || !caption) {
            console.error(`Destination slideshow is incomplete for card ${destinationIndex}.`);
            return;
        }

        activeImage.src = photos[0].src;
        activeImage.alt = photos[0].alt;
        activeImage.dataset.photoIndex = "0";
        activeImage.setAttribute("aria-hidden", "false");
        nextImage.src = photos[1].src;
        nextImage.alt = "";
        nextImage.dataset.photoIndex = "1";
        nextImage.setAttribute("aria-hidden", "true");
        caption.textContent = photos[0].caption;
        card.dataset.requestedPhotoIndex = "0";
    });
}

function changeDestinationPhoto(card) {
    const destinationIndex = Number(card.dataset.destinationIndex);
    const photos = destinationPhotoSets[destinationIndex];
    const activeImage = card.querySelector(".destination-photo.is-active");
    const nextImage = card.querySelector(".destination-photo:not(.is-active)");
    const caption = card.querySelector(".destination-photo-caption");
    if (!photos || !activeImage || !nextImage || !caption) return;

    const currentIndex = Number(card.dataset.requestedPhotoIndex ?? activeImage.dataset.photoIndex);
    const nextIndex = (currentIndex + 1) % photos.length;
    const nextPhoto = photos[nextIndex];
    const requestId = Number(card.dataset.photoRequest || 0) + 1;
    card.dataset.requestedPhotoIndex = String(nextIndex);
    card.dataset.photoRequest = String(requestId);

    const activateNextImage = () => {
        if (!card.isConnected || card.dataset.photoRequest !== String(requestId)) return;

        nextImage.src = nextPhoto.src;
        nextImage.alt = nextPhoto.alt;
        nextImage.dataset.photoIndex = String(nextIndex);
        nextImage.setAttribute("aria-hidden", "false");
        caption.textContent = nextPhoto.caption;
        activeImage.alt = "";
        activeImage.setAttribute("aria-hidden", "true");
        activeImage.classList.remove("is-active");
        nextImage.classList.add("is-active");
    };

    if (nextImage.getAttribute("src") === nextPhoto.src && nextImage.complete && nextImage.naturalWidth > 0) {
        activateNextImage();
        return;
    }

    const preload = new Image();
    preload.onload = activateNextImage;
    preload.onerror = () => console.error(`Unable to load destination photo: ${nextPhoto.src}`);
    preload.src = nextPhoto.src;
}

function startDestinationPhotoMotion() {
    window.clearInterval(destinationPhotoTimer);

    if (!destinationGrid || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    destinationPhotoTimer = window.setInterval(() => {
        destinationGrid.querySelectorAll(".destination-card").forEach((card, index) => {
            window.setTimeout(() => changeDestinationPhoto(card), index * 160);
        });
    }, 4500);
}

function renderPhotoGallery() {
    if (!galleryGrid) return;

    const renderPhotos = photos => photos.map(photo => `
        <figure class="gallery-item" role="listitem">
            ${currentPage === "destinations.html" ? `<a href="booking.html" class="gallery-photo-link" aria-label="${translationsUi("bookNow")}: ${photo.caption}">` : ""}
            <img
                src="${photo.src}"
                alt="${photo.alt}"
                loading="lazy"
                decoding="async"
            >
            ${currentPage === "destinations.html" ? "</a>" : ""}
            <figcaption class="gallery-caption">${photo.caption}</figcaption>
        </figure>
    `).join("");

    galleryGrid.innerHTML = renderPhotos(featuredGalleryPhotos);
    if (extraGalleryGrid) {
        extraGalleryGrid.innerHTML = galleryExpanded ? renderPhotos(remainingGalleryPhotos) : "";
        extraGalleryGrid.hidden = !galleryExpanded;
    }
    updateGalleryToggle();
}

function updateGalleryToggle() {
    if (!galleryToggle) return;

    const hideToggle = remainingGalleryPhotos.length === 0
        || galleryExpanded && (currentPage === "destinations.html" || currentPage === "gallery.html");
    galleryToggle.hidden = hideToggle;
    if (galleryToggle.parentElement) galleryToggle.parentElement.hidden = hideToggle;
    galleryToggle.textContent = translationsUi(galleryExpanded ? "showFewerImages" : "seeAllImages");
    galleryToggle.setAttribute("aria-expanded", String(galleryExpanded));
}

function startHeroPhotoMotion() {
    window.clearInterval(heroPhotoTimer);

    const heroBackground = document.querySelector(".hero-bg");
    if (!heroBackground || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let nextPhotoIndex = 1;
    heroPhotoTimer = window.setInterval(() => {
        const activeImage = heroBackground.querySelector(".hero-photo.is-active");
        const nextImage = heroBackground.querySelector(".hero-photo:not(.is-active)");
        if (!activeImage || !nextImage) return;

        const nextPhoto = heroPhotos[nextPhotoIndex];
        const activateNextPhoto = () => {
            if (!heroBackground.isConnected) return;

            nextImage.src = nextPhoto;
            activeImage.classList.remove("is-active");
            nextImage.classList.add("is-active");
            nextPhotoIndex = (nextPhotoIndex + 1) % heroPhotos.length;
        };

        if (nextImage.getAttribute("src") === nextPhoto && nextImage.complete && nextImage.naturalWidth > 0) {
            activateNextPhoto();
            return;
        }

        const preload = new Image();
        preload.onload = activateNextPhoto;
        preload.onerror = () => console.error(`Unable to load hero photo: ${nextPhoto}`);
        preload.src = nextPhoto;
    }, 6500);
}

function startHeroTyping() {
    window.clearTimeout(heroTypingTimer);

    const heading = document.querySelector(".hero h1");
    if (!heading) return;

    const titleParts = Array.from(heading.querySelectorAll('[data-i18n^="heroTitle"]'));
    if (titleParts.length === 0) return;

    const fullTexts = titleParts.map(part => part.dataset.typingText || part.textContent);
    heading.setAttribute("aria-label", fullTexts.join(" "));
    titleParts.forEach(part => {
        part.classList.remove("typing-active");
        part.textContent = "";
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        titleParts.forEach((part, index) => {
            part.textContent = fullTexts[index];
        });
        return;
    }

    let partIndex = 0;
    let characterIndex = 0;
    titleParts[partIndex].classList.add("typing-active");

    const typeNextCharacter = () => {
        const currentPart = titleParts[partIndex];
        if (characterIndex >= fullTexts[partIndex].length) {
            currentPart.classList.remove("typing-active");
            partIndex += 1;
            characterIndex = 0;

            if (partIndex >= titleParts.length) {
                titleParts[titleParts.length - 1].classList.add("typing-active");
                return;
            }

            titleParts[partIndex].classList.add("typing-active");
        }

        titleParts[partIndex].textContent += fullTexts[partIndex].charAt(characterIndex);
        characterIndex += 1;
        heroTypingTimer = window.setTimeout(typeNextCharacter, 55);
    };

    heroTypingTimer = window.setTimeout(typeNextCharacter, 180);
}

if (galleryToggle) {
    galleryToggle.addEventListener("click", () => {
        galleryExpanded = !galleryExpanded;
        renderPhotoGallery();
    });
}


/* =========================================
   RENDER TOURS
========================================= */

function translationsUi(key) {
    const language = document.documentElement.lang || "en";
    const dictionary = (window.zanzibarTranslations && window.zanzibarTranslations[language]);
    return dictionary && dictionary[key] ? dictionary[key] : ({
        tourPrice: "Tour price",
        requestQuote: "Request Quote",
        bookNow: "Book Now",
        noTours: "No tours available in this category.",
        seeAllImages: "See all images",
        showFewerImages: "Show fewer images",
        previousTourPhoto: "Previous photo",
        nextTourPhoto: "Next photo"
    }[key] || "");
}

let tourPhotoTimer;

function changeTourCardPhoto(card, direction) {
    const photos = tourPhotos[card.dataset.tourId];
    const activeImage = card.querySelector(".tour-photo.is-active");
    const nextImage = card.querySelector(".tour-photo:not(.is-active)");
    if (!photos || photos.length < 2 || !activeImage || !nextImage) return;

    const currentIndex = Number(card.dataset.requestedPhotoIndex ?? activeImage.dataset.photoIndex);
    const nextIndex = (currentIndex + direction + photos.length) % photos.length;
    const nextPhoto = photos[nextIndex];
    const requestId = Number(card.dataset.photoRequest || 0) + 1;
    card.dataset.requestedPhotoIndex = String(nextIndex);
    card.dataset.photoRequest = String(requestId);

    const activateNextImage = () => {
        if (!card.isConnected || card.dataset.photoRequest !== String(requestId)) return;

        nextImage.src = nextPhoto.src;
        nextImage.alt = nextPhoto.alt;
        nextImage.dataset.photoIndex = String(nextIndex);
        nextImage.setAttribute("aria-hidden", "false");
        const caption = card.querySelector(".tour-photo-caption");
        if (caption) caption.textContent = nextPhoto.caption;
        activeImage.alt = "";
        activeImage.setAttribute("aria-hidden", "true");
        activeImage.classList.remove("is-active");
        nextImage.classList.add("is-active");
    };

    if (nextImage.getAttribute("src") === nextPhoto.src && nextImage.complete && nextImage.naturalWidth > 0) {
        activateNextImage();
        return;
    }

    const preload = new Image();
    preload.onload = activateNextImage;
    preload.onerror = () => console.error(`Unable to load tour photo: ${nextPhoto.src}`);
    preload.src = nextPhoto.src;
}

function startTourPhotoMotion() {
    window.clearInterval(tourPhotoTimer);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    tourPhotoTimer = window.setInterval(() => {
        tourGrid.querySelectorAll(".tour-card").forEach((card, index) => {
            window.setTimeout(() => changeTourCardPhoto(card, 1), index * 140);
        });
    }, 8500);
}

function translateTourText(text, language) {
    if (language === "en") return text;

    const replacements = {
        fr: {
            "Tour":"Circuit","Excursion":"Excursion","Island":"Île","Dolphin":"Dauphin","Snorkeling":"Plongée avec masque",
            "Spice":"Épices","Forest":"Forêt","Beach":"Plage","Stone Town":"Ville de pierre","Village":"Village",
            "Cooking":"Cuisine","Adventure":"Aventure","Horse":"Cheval","Safari":"Safari","Tanzania":"Tanzanie",
            "Explore":"Explorez","Discover":"Découvrez","Experience":"Expérience","Enjoy":"Profitez","Beautiful":"Magnifique",
            "Day":"Jour","Full":"Complet","Half":"Demi","Flexible":"Flexible","Tour":"Circuit","Price":"Prix"
        },
        es: {
            "Tour":"Tour","Excursion":"Excursión","Island":"Isla","Dolphin":"Delfín","Snorkeling":"Esnórquel",
            "Spice":"Especias","Forest":"Bosque","Beach":"Playa","Stone Town":"Ciudad de Piedra","Village":"Pueblo",
            "Cooking":"Cocina","Adventure":"Aventura","Horse":"Caballo","Safari":"Safari","Tanzania":"Tanzania",
            "Explore":"Explora","Discover":"Descubre","Experience":"Experiencia","Enjoy":"Disfruta","Beautiful":"Hermoso",
            "Day":"Día","Full":"Completo","Half":"Medio","Flexible":"Flexible","Tour":"Tour","Price":"Precio"
        },
        de: {
            "Tour":"Tour","Excursion":"Ausflug","Island":"Insel","Dolphin":"Delfin","Snorkeling":"Schnorcheln",
            "Spice":"Gewürz","Forest":"Wald","Beach":"Strand","Stone Town":"Stone Town","Village":"Dorf",
            "Cooking":"Kochen","Adventure":"Abenteuer","Horse":"Pferd","Safari":"Safari","Tanzania":"Tansania",
            "Explore":"Entdecken Sie","Discover":"Entdecken Sie","Experience":"Erlebnis","Enjoy":"Genießen Sie","Beautiful":"Wunderschön",
            "Day":"Tag","Full":"Ganzer","Half":"Halber","Flexible":"Flexibel","Tour":"Tour","Price":"Preis"
        },
        it: {
            "Tour":"Tour","Excursion":"Escursione","Island":"Isola","Dolphin":"Delfino","Snorkeling":"Snorkeling",
            "Spice":"Spezie","Forest":"Foresta","Beach":"Spiaggia","Stone Town":"Stone Town","Village":"Villaggio",
            "Cooking":"Cucina","Adventure":"Avventura","Horse":"Cavallo","Safari":"Safari","Tanzania":"Tanzania",
            "Explore":"Esplora","Discover":"Scopri","Experience":"Esperienza","Enjoy":"Goditi","Beautiful":"Bellissimo",
            "Day":"Giorno","Full":"Intero","Half":"Mezzo","Flexible":"Flessibile","Tour":"Tour","Price":"Prezzo"
        }
    };

    let translated = text;
    Object.entries(replacements[language] || {}).forEach(([source, target]) => {
        translated = translated.replace(new RegExp(source, "gi"), target);
    });
    return translated;
}

function renderTours(filter = "all") {

    if (!tourGrid) return;

    const filteredTours = filter === "all"
        ? tours
        : tours.filter(tour => tour.category === filter);

    if (filteredTours.length === 0) {
        window.clearInterval(tourPhotoTimer);

        tourGrid.innerHTML = `
            <div class="no-tours">
                <p>${translationsUi("noTours")}</p>
            </div>
        `;

        return;
    }

    tourGrid.innerHTML = filteredTours.map(tour => {
        const photos = tourPhotos[tour.id];
        const firstPhoto = photos[0];
        const secondPhoto = photos[1];
        const translatedTour = (window.tourTextTranslations || {})[document.documentElement.lang]?.[tour.id - 1];
        const translatedName = translatedTour
            ? translatedTour[0]
            : translateTourText(tour.name, document.documentElement.lang);
        const translatedDescription = translatedTour
            ? translatedTour[1]
            : translateTourText(tour.description, document.documentElement.lang);
        return `

        <article class="tour-card" data-tour-id="${tour.id}">

            <div class="tour-image">

                <img
                    src="${firstPhoto.src}"
                    alt="${firstPhoto.alt}"
                    class="tour-photo is-active"
                    loading="lazy"
                    decoding="async"
                    data-photo-index="0"
                    aria-hidden="false"
                >

                ${secondPhoto ? `
                    <img
                        src="${secondPhoto.src}"
                        alt=""
                        class="tour-photo"
                        loading="lazy"
                        decoding="async"
                        data-photo-index="1"
                        aria-hidden="true"
                    >
                ` : ""}

                ${photos.length > 1 ? `
                    <button
                        class="tour-photo-control tour-photo-previous"
                        type="button"
                        data-photo-step="-1"
                        aria-label="${translationsUi("previousTourPhoto")}"
                    >
                        <i data-lucide="chevron-left"></i>
                    </button>
                    <button
                        class="tour-photo-control tour-photo-next"
                        type="button"
                        data-photo-step="1"
                        aria-label="${translationsUi("nextTourPhoto")}"
                    >
                        <i data-lucide="chevron-right"></i>
                    </button>
                ` : ""}

                <span class="tour-photo-caption">${firstPhoto.caption}</span>

                <span class="tour-category">
                    ${(window.tourCategoryTranslations
                        && window.tourCategoryTranslations[document.documentElement.lang]
                        && window.tourCategoryTranslations[document.documentElement.lang][tour.category])
                        ? window.tourCategoryTranslations[document.documentElement.lang][tour.category]
                        : tour.categoryName}
                </span>

            </div>

            <div class="tour-content">

                <h3>${translatedName}</h3>

                <p>${translatedDescription}</p>

                <div class="tour-meta">

                    <i data-lucide="clock"></i>
                    <span>${translateTourText(tour.duration, document.documentElement.lang)}</span>

                    <span>•</span>

                    <i data-lucide="map-pin"></i>
                    <span>${document.documentElement.lang === "en" ? "Zanzibar" : "Zanzibar"}</span>

                </div>

                <div class="tour-footer">

                    <div class="tour-price">

                        <small>${translationsUi("tourPrice")}</small>
                        <strong>${translationsUi("requestQuote")}</strong>

                    </div>

                    <a
                        href="booking.html?tour=${encodeURIComponent(tour.name)}"
                        class="tour-book"
                        data-tour="${tour.id}"
                    >
                        ${translationsUi("bookNow")}
                        <i data-lucide="arrow-up-right"></i>
                    </a>

                </div>

            </div>

        </article>

    `;
    }).join("");

    createIcons();
    startTourPhotoMotion();

}


/* =========================================
   TOUR FILTERING
========================================= */

if (tourFilters) {

    tourFilters.addEventListener("click", function(event) {

        const button = event.target.closest(".filter-btn");

        if (!button) return;

        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        renderTours(button.dataset.filter);

    });

}


/* =========================================
   POPULATE BOOKING SELECT
========================================= */

function populateTourSelect() {

    if (!tourSelect) return;
    tourSelect.querySelectorAll("option:not([value=''])").forEach(option => option.remove());

    tours.forEach(tour => {

        const option = document.createElement("option");

        option.value = tour.name;
        const translatedTour = (window.tourTextTranslations || {})[document.documentElement.lang]?.[tour.id - 1];
        option.textContent = translatedTour
            ? translatedTour[0]
            : translateTourText(tour.name, document.documentElement.lang);

        tourSelect.appendChild(option);

    });

    const requestedTour = new URLSearchParams(window.location.search).get("tour");
    if (requestedTour && tours.some(tour => tour.name === requestedTour)) {
        tourSelect.value = requestedTour;
    }

}

populateTourSelect();


/* =========================================
   BOOK TOUR FROM CARD
========================================= */

if (tourGrid) {

    tourGrid.addEventListener("click", function(event) {

        const photoButton = event.target.closest("[data-photo-step]");
        if (photoButton) {
            const card = photoButton.closest(".tour-card");
            if (card) {
                changeTourCardPhoto(card, Number(photoButton.dataset.photoStep));
                startTourPhotoMotion();
            }
            return;
        }

        const bookButton = event.target.closest("[data-tour]");

        if (!bookButton) return;

        const tourId = Number(bookButton.dataset.tour);

        const selectedTour = tours.find(tour => tour.id === tourId);

        if (selectedTour && tourSelect) {

            tourSelect.value = selectedTour.name;

        }

    });

}


/* =========================================
   BOOKING FORM
========================================= */

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();

        const email = document.getElementById("email").value.trim();

        const selectedTour = document.getElementById("tourSelect").value;

        const guests = document.getElementById("guests").value;

        const travelDate = document.getElementById("travelDate").value;

        const hotelLocation = document.getElementById("hotelLocation").value.trim();

        const message = document.getElementById("message").value.trim();


        if (!fullName || !selectedTour || !guests || !travelDate) {

            alert("Please complete all required fields.");

            return;

        }


        const formattedDate = new Date(travelDate + "T00:00:00")
            .toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric"
            });


        const bookingMessage = `Hello Prince Abuu Bakar! 👋

I would like to inquire about booking a tour.

BOOKING DETAILS

Full Name: ${fullName}
Email: ${email || "Not provided"}
Tour: ${selectedTour}
Guests: ${guests}
Preferred Date: ${formattedDate}
Hotel/Pickup Location: ${hotelLocation || "Not provided"}

Additional Information:
${message || "No additional information"}

Please provide availability and the tour price.

Thank you!`;


        WHATSAPP_NUMBERS.forEach(number => {
            const whatsappURL =
                `https://wa.me/${number}?text=${encodeURIComponent(bookingMessage)}`;
            window.open(whatsappURL, "_blank", "noopener");
        });

    });

}


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function() {

        const isOpen = navMenu.classList.toggle("show");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.innerHTML = isOpen
            ? '<i data-lucide="x"></i>'
            : '<i data-lucide="menu"></i>';

        createIcons();

    });


    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function() {

            navMenu.classList.remove("show");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML = '<i data-lucide="menu"></i>';

            createIcons();

        });

    });

}


/* =========================================
   FAQ
========================================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    if (!question) return;

    question.addEventListener("click", function() {

        const isActive = item.classList.contains("active");

        faqItems.forEach(faq => {
            faq.classList.remove("active");
        });

        if (!isActive) {
            item.classList.add("active");
        }

    });

});


/* =========================================
   TRAVEL DATE - NO PAST DATES
========================================= */

const travelDateInput = document.getElementById("travelDate");

if (travelDateInput) {

    const today = new Date();

    const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    travelDateInput.min = localDate;

}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =========================================
   INITIALIZE
========================================= */

renderPhotoGallery();
initializeDestinationSlideshows();
startDestinationPhotoMotion();
renderTours("all");
startHeroPhotoMotion();

createIcons();

/* =========================================
   ENHANCED UI INTERACTIONS
========================================= */

const revealTargets = document.querySelectorAll(
    ".section-heading, .intro-grid, .destination-card, .tour-card, " +
    ".why-grid, .experience-content, .gallery-item, .booking-grid, " +
    ".faq-grid, .feature-card, .contact-cta"
);

revealTargets.forEach((element, index) => {
    element.classList.add("reveal");
    if (index % 3 === 1) element.classList.add("reveal-delay-1");
    if (index % 3 === 2) element.classList.add("reveal-delay-2");
});

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: "0px 0px -40px" });

revealTargets.forEach(target => revealObserver.observe(target));

const header = document.querySelector(".header");

function updateHeaderState() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();

let hasScrolledAwayFromTop = window.scrollY > 0;
window.addEventListener("scroll", () => {
    const isAtTop = window.scrollY <= 0;
    if (isAtTop && hasScrolledAwayFromTop) startHeroTyping();
    hasScrolledAwayFromTop = !isAtTop;
}, { passive: true });

const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
    const updateBackToTopVisibility = () => {
        backToTopButton.hidden = window.scrollY < 320;
    };

    window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
    backToTopButton.addEventListener("click", () => {
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth";
        window.scrollTo({ top: 0, behavior });
    });
    updateBackToTopVisibility();
}

window.addEventListener("resize", () => {
    if (window.scrollX !== 0) window.scrollTo(0, window.scrollY);
}, { passive: true });

document.querySelectorAll(".nav-menu > a:not(.btn)").forEach(link => {
    const isCurrentPage = link.getAttribute("href") === currentPage;
    link.classList.toggle("active", isCurrentPage);
    if (isCurrentPage) link.setAttribute("aria-current", "page");
});

document.querySelectorAll(".nav-book").forEach(link => {
    const isCurrentPage = currentPage === "booking.html";
    link.classList.toggle("is-current-page", isCurrentPage);
    if (isCurrentPage) link.setAttribute("aria-current", "page");
});

document.querySelectorAll("img").forEach(image => {
    image.addEventListener("error", () => {
        if (image.classList.contains("site-logo")) {
            image.style.opacity = "0";
        }
    });
});

/* =========================================
   LANGUAGE SWITCHER
========================================= */

const translations = {
    en: {
        seeAllImages: "See all images", showFewerImages: "Show fewer images",
        previousTourPhoto: "Previous photo", nextTourPhoto: "Next photo"
    },
    sw: {
        navHome: "Nyumbani", navDestinations: "Maeneo", navTours: "Ziara", navAbout: "Kutuhusu", navGallery: "Picha",
        heroBadge: "MWONGOZAJI WETU WA VIJIJI VYA ZANZIBAR", heroTitle1: "Gundua uzuri wa", heroTitle2: "Zanzibar.",
        heroDescription: "Gundua fukwe nzuri, tamaduni ya kisiwa, safari za kusisimua na kumbukumbu zitakazodumu maisha yote.",
        exploreTours: "Tazama Ziara Zetu", planTrip: "Panga Safari Yako", beautifulBeaches: "Fukwe Zenye Uzuri", localExperiences: "Mazingira ya Kitaalamu", memorableAdventures: "Safari za Kumbukumbu",
        exploreWithLocal: "CHUNGUA KWA MWONGOZAJI WA KIANCHI", experienceZanzibar: "Pata Uzoefu wa Zanzibar", beyondOrdinary: "Zaidi ya Kawaida",
        introText1: "Zanzibar ni zaidi ya kivutio; ni mchanganyiko wa maji ya samawati, fukwe nyeupe, historia tajiri, watu wenye urafiki na uzoefu usiosahaulika.",
        introText2: "Chunguza kisiwa na Prince Abuu Bakar na ugundue hazina zake zilizofichika, urithi wa kitamaduni, safari za baharini na maeneo ya kupendeza.",
        discoverExperiences: "Gundua Mambo Tuliyoyatayarisha", exploreIsland: "CHUNGUA KISIWA", beautifulPlaces: "Maeneo Mazuri,", unforgettableMemories: "Kumbukumbu Zisizosahaulika",
        destinationIntro: "Kuanzia mitaa ya kihistoria hadi fukwe za kitropiki, gundua uzuri unaofanya Zanzibar kuwa maalumu.",
        ourExperiences: "MAZOEA YETU", exploreOur: "Chunguza", toursActivities: "Ziara na Shughuli",
        tourIntro: "Chagua adventure yako na upate uzuri, tamaduni na msisimko wa Zanzibar na Tanzania.",
        filterAll: "Mazingira Yote", filterOcean: "Safari za Baharini", filterCulture: "Tamaduni na Asili", filterAdventure: "Safari", filterBeaches: "Fukwe", filterSafari: "Mwendo wa Mwili", filterTransfers: "Usafiri",
        planExperience: "PANGA MAZOEA YAKO", bookYour: "Panga", zanzibarAdventure: "Safari Yako ya Zanzibar",
        bookingIntro: "Tuambie uzoefu wako wa ndoto. Tuma ombi lako moja kwa moja kwa WhatsApp nasi tutakusaidia kupanga safari yako.",
        bookingRequest: "OMBI LA KUHUSI ZIARA", planYourTrip: "Panga Safari Yako", bookingFormIntro: "Jaza maelezo hapa chini ili kuanza ombi lako.",
        fullName: "Jina Kamili *", emailAddress: "Barua Pepe", selectTour: "Chagua Ziara Yako *", chooseExperience: "Chagua uzoefu wako",
        numberGuests: "Idadi ya Wageni *", preferredDate: "Tarehe Inayopendelewa *", hotelLocation: "Hoteli / Mahali pa Kuchukua",
        additionalInfo: "Maelezo ya Ziada", sendBooking: "Tuma Ombi la Safari kwa WhatsApp",
        needHelp: "UNAHITAJI MSADA?", frequently: "Maswali", askedQuestions: "Yanayoulizwa Mara Kwa Mara", faqIntro: "Pata majibu ya maswali ya kawaida kuhusu kupanga safari yako Zanzibar.", askWhatsApp: "Tuulize kwa WhatsApp",
        tourPrice: "Bei ya ziara", requestQuote: "Omba Bei", bookNow: "Hifadhi Sasa", noTours: "Hakuna ziara zinazopatikana katika kundi hili.",
        seeAllImages: "Tazama picha zote", showFewerImages: "Onyesha picha chache",
        previousTourPhoto: "Picha iliyotangulia", nextTourPhoto: "Picha inayofuata"
    },
    fr: {
        navHome: "Accueil", navDestinations: "Destinations", navTours: "Circuits", navAbout: "À propos", navGallery: "Galerie",
        heroBadge: "VOTRE GUIDE LOCAL À ZANZIBAR", heroTitle1: "Découvrez la magie de", heroTitle2: "Zanzibar.",
        heroDescription: "Explorez de belles plages, découvrez la culture insulaire, vivez des aventures inoubliables et créez des souvenirs pour toujours.",
        exploreTours: "Explorer nos circuits", planTrip: "Planifier votre voyage", beautifulBeaches: "Belles plages", localExperiences: "Expériences locales", memorableAdventures: "Aventures mémorables",
        exploreWithLocal: "EXPLOREZ AVEC UN LOCAL", experienceZanzibar: "Découvrez Zanzibar", beyondOrdinary: "Au-delà de l'ordinaire",
        introText1: "Zanzibar est plus qu'une destination : eaux turquoise, plages de sable blanc, riche histoire, habitants chaleureux et expériences inoubliables.",
        introText2: "Explorez l'île avec Prince Abuu Bakar et découvrez ses trésors cachés, son patrimoine culturel, ses aventures marines et ses sites splendides.",
        discoverExperiences: "Découvrez nos expériences", exploreIsland: "EXPLOREZ L'ÎLE", beautifulPlaces: "Beaux endroits,", unforgettableMemories: "Souvenirs inoubliables",
        destinationIntro: "Des ruelles historiques aux plages tropicales, découvrez la beauté qui rend Zanzibar unique.",
        ourExperiences: "NOS EXPÉRIENCES", exploreOur: "Découvrez nos", toursActivities: "Circuits et activités",
        tourIntro: "Choisissez votre aventure et découvrez la beauté, la culture et les sensations de Zanzibar et de la Tanzanie.",
        filterAll: "Toutes les expériences", filterOcean: "Aventures marines", filterCulture: "Culture et nature", filterAdventure: "Aventures", filterBeaches: "Plages", filterSafari: "Safari", filterTransfers: "Transferts",
        planExperience: "PLANIFIER VOTRE EXPÉRIENCE", bookYour: "Réservez", zanzibarAdventure: "Votre aventure à Zanzibar",
        bookingIntro: "Parlez-nous de votre expérience idéale. Envoyez votre demande sur WhatsApp et nous vous aiderons à organiser votre voyage.",
        bookingRequest: "DEMANDE DE RÉSERVATION", planYourTrip: "Planifiez votre voyage", bookingFormIntro: "Complétez les informations ci-dessous pour commencer votre réservation.",
        fullName: "Nom complet *", emailAddress: "Adresse e-mail", selectTour: "Choisissez votre circuit *", chooseExperience: "Choisissez votre expérience",
        numberGuests: "Nombre de participants *", preferredDate: "Date souhaitée *", hotelLocation: "Hôtel / lieu de prise en charge",
        additionalInfo: "Informations supplémentaires", sendBooking: "Envoyer la demande via WhatsApp",
        needHelp: "BESOIN D'AIDE ?", frequently: "Questions", askedQuestions: "Fréquemment posées", faqIntro: "Trouvez les réponses aux questions fréquentes sur la réservation de vos expériences à Zanzibar.", askWhatsApp: "Demandez-nous sur WhatsApp",
        tourPrice: "Prix du circuit", requestQuote: "Demander un devis", bookNow: "Réserver", noTours: "Aucun circuit disponible dans cette catégorie.",
        seeAllImages: "Voir toutes les images", showFewerImages: "Afficher moins d’images",
        previousTourPhoto: "Photo précédente", nextTourPhoto: "Photo suivante"
    },
    es: {
        navHome: "Inicio", navDestinations: "Destinos", navTours: "Tours", navAbout: "Nosotros", navGallery: "Galería",
        heroBadge: "TU GUÍA LOCAL DE ZANZÍBAR", heroTitle1: "Descubre la magia de", heroTitle2: "Zanzíbar.",
        heroDescription: "Explora hermosas playas, descubre la cultura isleña, vive aventuras inolvidables y crea recuerdos para toda la vida.",
        exploreTours: "Explorar nuestros tours", planTrip: "Planifica tu viaje", beautifulBeaches: "Hermosas playas", localExperiences: "Experiencias locales", memorableAdventures: "Aventuras inolvidables",
        exploreWithLocal: "EXPLORA CON UN LOCAL", experienceZanzibar: "Vive Zanzíbar", beyondOrdinary: "Más allá de lo común",
        introText1: "Zanzíbar es más que un destino: aguas turquesas, playas de arena blanca, historia fascinante, gente cálida y experiencias inolvidables.",
        introText2: "Explora la isla con Prince Abuu Bakar y descubre tesoros ocultos, patrimonio cultural, aventuras marinas y lugares extraordinarios.",
        discoverExperiences: "Descubre nuestras experiencias", exploreIsland: "EXPLORA LA ISLA", beautifulPlaces: "Lugares hermosos,", unforgettableMemories: "Recuerdos inolvidables",
        destinationIntro: "Desde calles históricas hasta playas tropicales, descubre la belleza que hace especial a Zanzíbar.",
        ourExperiences: "NUESTRAS EXPERIENCIAS", exploreOur: "Explora nuestros", toursActivities: "Tours y actividades",
        tourIntro: "Elige tu aventura y vive la belleza, cultura y emoción de Zanzíbar y Tanzania.",
        filterAll: "Todas las experiencias", filterOcean: "Aventuras marinas", filterCulture: "Cultura y naturaleza", filterAdventure: "Aventuras", filterBeaches: "Playas", filterSafari: "Safari", filterTransfers: "Traslados",
        planExperience: "PLANEA TU EXPERIENCIA", bookYour: "Reserva", zanzibarAdventure: "tu aventura en Zanzíbar",
        bookingIntro: "Cuéntanos tu experiencia soñada. Envía tu solicitud por WhatsApp y te ayudaremos a planificar tu viaje.",
        bookingRequest: "SOLICITUD DE RESERVA", planYourTrip: "Planifica tu viaje", bookingFormIntro: "Completa los datos siguientes para comenzar tu reserva.",
        fullName: "Nombre completo *", emailAddress: "Correo electrónico", selectTour: "Selecciona tu tour *", chooseExperience: "Elige tu experiencia",
        numberGuests: "Número de huéspedes *", preferredDate: "Fecha preferida *", hotelLocation: "Hotel / lugar de recogida",
        additionalInfo: "Información adicional", sendBooking: "Enviar solicitud por WhatsApp",
        needHelp: "¿NECESITAS AYUDA?", frequently: "Preguntas", askedQuestions: "frecuentes", faqIntro: "Encuentra respuestas a las preguntas frecuentes sobre la reserva de experiencias en Zanzíbar.", askWhatsApp: "Pregúntanos por WhatsApp",
        tourPrice: "Precio del tour", requestQuote: "Solicitar precio", bookNow: "Reservar", noTours: "No hay tours disponibles en esta categoría.",
        seeAllImages: "Ver todas las imágenes", showFewerImages: "Mostrar menos imágenes",
        previousTourPhoto: "Foto anterior", nextTourPhoto: "Siguiente foto"
    },
    de: {
        navHome: "Start", navDestinations: "Reiseziele", navTours: "Touren", navAbout: "Über uns", navGallery: "Galerie",
        heroBadge: "IHR LOKALER FÜHRER AUF SANSIBAR", heroTitle1: "Entdecken Sie die Magie von", heroTitle2: "Sansibar.",
        heroDescription: "Entdecken Sie schöne Strände, Inselkultur und unvergessliche Abenteuer für Erinnerungen fürs Leben.",
        exploreTours: "Unsere Touren entdecken", planTrip: "Ihre Reise planen", beautifulBeaches: "Wunderschöne Strände", localExperiences: "Lokale Erlebnisse", memorableAdventures: "Unvergessliche Abenteuer",
        exploreWithLocal: "MIT EINEM EINHEIMISCHEN ENTDECKEN", experienceZanzibar: "Erleben Sie Sansibar", beyondOrdinary: "Jenseits des Gewöhnlichen",
        introText1: "Sansibar ist mehr als ein Reiseziel: türkisfarbenes Wasser, weiße Strände, reiche Geschichte, freundliche Menschen und unvergessliche Erlebnisse.",
        introText2: "Entdecken Sie die Insel mit Prince Abuu Bakar und erleben Sie verborgene Schätze, Kultur, Meerabenteuer und beeindruckende Orte.",
        discoverExperiences: "Unsere Erlebnisse entdecken", exploreIsland: "ENTDECKEN SIE DIE INSEL", beautifulPlaces: "Wunderschöne Orte,", unforgettableMemories: "Unvergessliche Erinnerungen",
        destinationIntro: "Von historischen Straßen bis zu tropischen Stränden: entdecken Sie die Schönheit Sansibars.",
        ourExperiences: "UNSERE ERLEBNISSE", exploreOur: "Entdecken Sie unsere", toursActivities: "Touren und Aktivitäten",
        tourIntro: "Wählen Sie Ihr Abenteuer und erleben Sie die Schönheit, Kultur und Spannung von Sansibar und Tansania.",
        filterAll: "Alle Erlebnisse", filterOcean: "Meerabenteuer", filterCulture: "Kultur und Natur", filterAdventure: "Abenteuer", filterBeaches: "Strände", filterSafari: "Safari", filterTransfers: "Transfers",
        planExperience: "IHR ERLEBNIS PLANEN", bookYour: "Buchen Sie", zanzibarAdventure: "Ihr Sansibar-Abenteuer",
        bookingIntro: "Erzählen Sie uns von Ihrem Traum-Erlebnis. Senden Sie Ihre Anfrage direkt über WhatsApp und wir planen Ihre Reise.",
        bookingRequest: "TOUR-BUCHUNGSANFRAGE", planYourTrip: "Ihre Reise planen", bookingFormIntro: "Füllen Sie die Angaben aus, um Ihre Buchungsanfrage zu starten.",
        fullName: "Vollständiger Name *", emailAddress: "E-Mail-Adresse", selectTour: "Tour auswählen *", chooseExperience: "Erlebnis auswählen",
        numberGuests: "Anzahl der Gäste *", preferredDate: "Wunschtermin *", hotelLocation: "Hotel / Abholort",
        additionalInfo: "Zusätzliche Informationen", sendBooking: "Buchungsanfrage per WhatsApp senden",
        needHelp: "BENÖTIGEN SIE HILFE?", frequently: "Häufig", askedQuestions: "gestellte Fragen", faqIntro: "Finden Sie Antworten auf häufige Fragen zur Buchung Ihrer Sansibar-Erlebnisse.", askWhatsApp: "Fragen Sie uns auf WhatsApp",
        tourPrice: "Tourpreis", requestQuote: "Angebot anfordern", bookNow: "Jetzt buchen", noTours: "In dieser Kategorie sind keine Touren verfügbar.",
        seeAllImages: "Alle Bilder ansehen", showFewerImages: "Weniger Bilder anzeigen",
        previousTourPhoto: "Vorheriges Foto", nextTourPhoto: "Nächstes Foto"
    },
    it: {
        navHome: "Home", navDestinations: "Destinazioni", navTours: "Tour", navAbout: "Chi siamo", navGallery: "Galleria",
        heroBadge: "LA TUA GUIDA LOCALE A ZANZIBAR", heroTitle1: "Scopri la magia di", heroTitle2: "Zanzibar.",
        heroDescription: "Esplora splendide spiagge, scopri la cultura dell'isola, vivi avventure indimenticabili e crea ricordi duraturi.",
        exploreTours: "Esplora i nostri tour", planTrip: "Pianifica il tuo viaggio", beautifulBeaches: "Spiagge magnifiche", localExperiences: "Esperienze locali", memorableAdventures: "Avventure indimenticabili",
        exploreWithLocal: "ESPLORA CON UNA GUIDA LOCALE", experienceZanzibar: "Vivi Zanzibar", beyondOrdinary: "Oltre l'ordinario",
        introText1: "Zanzibar è più di una destinazione: acque turchesi, spiagge bianche, storia affascinante, gente calorosa ed esperienze indimenticabili.",
        introText2: "Esplora l'isola con Prince Abuu Bakar e scopri tesori nascosti, patrimonio culturale, avventure marine e luoghi straordinari.",
        discoverExperiences: "Scopri le nostre esperienze", exploreIsland: "ESPLORA L'ISOLA", beautifulPlaces: "Luoghi meravigliosi,", unforgettableMemories: "Ricordi indimenticabili",
        destinationIntro: "Dalle vie storiche alle spiagge tropicali, scopri la bellezza che rende Zanzibar speciale.",
        ourExperiences: "LE NOSTRE ESPERIENZE", exploreOur: "Esplora i nostri", toursActivities: "Tour e attività",
        tourIntro: "Scegli la tua avventura e vivi la bellezza, la cultura e l'emozione di Zanzibar e della Tanzania.",
        filterAll: "Tutte le esperienze", filterOcean: "Avventure marine", filterCulture: "Cultura e natura", filterAdventure: "Avventure", filterBeaches: "Spiagge", filterSafari: "Safari", filterTransfers: "Trasferimenti",
        planExperience: "PIANIFICA LA TUA ESPERIENZA", bookYour: "Prenota", zanzibarAdventure: "la tua avventura a Zanzibar",
        bookingIntro: "Raccontaci la tua esperienza dei sogni. Invia la richiesta su WhatsApp e ti aiuteremo a organizzare il viaggio.",
        bookingRequest: "RICHIESTA DI PRENOTAZIONE", planYourTrip: "Pianifica il tuo viaggio", bookingFormIntro: "Completa i dettagli qui sotto per iniziare la prenotazione.",
        fullName: "Nome completo *", emailAddress: "Indirizzo email", selectTour: "Seleziona il tour *", chooseExperience: "Scegli la tua esperienza",
        numberGuests: "Numero di ospiti *", preferredDate: "Data preferita *", hotelLocation: "Hotel / luogo di prelievo",
        additionalInfo: "Informazioni aggiuntive", sendBooking: "Invia richiesta via WhatsApp",
        needHelp: "SERVE AIUTO?", frequently: "Domande", askedQuestions: "frequenti", faqIntro: "Trova le risposte alle domande più comuni sulla prenotazione delle esperienze a Zanzibar.", askWhatsApp: "Chiedici su WhatsApp",
        tourPrice: "Prezzo del tour", requestQuote: "Richiedi preventivo", bookNow: "Prenota ora", noTours: "Nessun tour disponibile in questa categoria.",
        seeAllImages: "Vedi tutte le immagini", showFewerImages: "Mostra meno immagini",
        previousTourPhoto: "Foto precedente", nextTourPhoto: "Foto successiva"
    }
};

const languageSelect = document.getElementById("languageSelect");
window.zanzibarTranslations = translations;

window.tourCategoryTranslations = {
    sw: { transport: "Usafiri na Uhamisho", culture: "Tamaduni na Asili", ocean: "Safari za Baharini", adventure: "Safari ya Kusisimua", beaches: "Fukwe", safari: "Safari ya Mwitu" },
    fr: { transport: "Transport", culture: "Culture et nature", ocean: "Aventure marine", adventure: "Aventure", beaches: "Plages", safari: "Safari" },
    de: { transport: "Transfer", culture: "Kultur und Natur", ocean: "Meerabenteuer", adventure: "Abenteuer", beaches: "Strände", safari: "Safari" },
    it: { transport: "Trasferimenti", culture: "Cultura e natura", ocean: "Avventura marina", adventure: "Avventure", beaches: "Spiagge", safari: "Safari" },
    es: { transport: "Traslados", culture: "Cultura y naturaleza", ocean: "Aventura marina", adventure: "Aventuras", beaches: "Playas", safari: "Safari" }
};

window.tourTextTranslations = {
    sw: [
        ["Usafiri wa Kuingia na Kurudi","Usafiri wa kuaminika wa uwanja wa ndege, hoteli na maeneo kwa mpangilio rahisi wa kuchukua na kuacha."],
        ["Ziara ya Zanzibar","Gundua uzuri wa Zanzibar kupitia ziara za kuvutia, maeneo ya mandhari na uzoefu wa kisiwa."],
        ["Mnemba Dolphin na Kuteleza majini","Chunguza maji ya Mnemba, furahia snorkeling na utofauti wa baharini unaozunguka kisiwa."],
        ["Ziara ya Shamba la Viungo","Gundua urithi wa viungo vya Zanzibar, mimea ya kitropiki na ladha za kipekee."],
        ["Msitu wa Jozani na Nyani wa Red Colobus","Chunguza Msitu wa Jozani na umuoni nyani adimu wa red colobus."],
        ["Kisiwa cha Prison","Panda mashua hadi Kisiwa cha Prison, gundua historia na toa kwa turtles wakubwa."],
        ["Ziara ya Mji wa Mawe","Gundua mitaa ya kihistoria, masoko, usanifu na urithi wa Stone Town."],
        ["Uzoefu wa Kijiji cha Kienyeji","Furahia maisha ya kijijini, kutana na wenyeji na kujifunza tamaduni za Zanzibar."],
        ["Shule ya Kupika","Jifunze kuandaa chakula cha kitamaduni cha Kiswahili na ladha za Zanzibar."],
        ["Safari ya Jet Ski","Furahia safari ya kusisimua ya jet ski katika maji ya samawati ya Zanzibar."],
        ["Safari ya Quad","Chunguza mazingira ya vijijini na vituo vya ndani kwa safari ya quad."],
        ["Kupanda Farasi","Furahia kupanda farasi kwenye fukwe na mandhari nzuri."],
        ["Ufukwe wa Mtende","Gundua Ufukwe wa Mtende na mazingira ya kipekee na bahari tulivu."],
        ["Ufukwe wa Paje","Tulia kwenye mchanga mweupe, furahia bahari na hali ya furaha ya Paje."],
        ["Chakula cha The Rock","Tembelea mkahawa maarufu baharini na upate uzoefu wa chakula wa kipekee."],
        ["Safari ya Tanzania","Pata uzoefu wa wanyamapori wa Tanzania, mandhari na safari zisizosahaulika."],
        ["Safari za Siku Moja","Chunguza maeneo ya kuvutia na safari ya siku nzima ya tukio na utulivu."],
        ["Hifadhi ya Mikumi","Gundua Hifadhi ya Mikumi na wanyamapori, asili na safari ya kusisimua."],
        ["Ufukwe wa Nakupenda","Toka kwenye mchanga wa Nakupenda, furahia maji ya samawati na snorkeling."],
        ["Ufukwe wa Kendwa","Tulia kwenye ufukwe wa Kendwa na ufurahie kuogelea pwani ya kaskazini."],
        ["Safari Blue","Furahia safari kamili ya baharini kwa meli, snorkeling na fukwe za mchanga."],
        ["Ziara ya Starfish","Gundua uzuri wa baharini wa Zanzibar na uzoefu wa starfish."],
        ["Kifurushi cha Usiku Mmoja na Siku Mbili","Furahia kifurushi cha siku mbili na malazi na vivutio."]
    ]
};

const websiteTranslations = {
    sw: {
        welcomeZanzibar:"Karibu Zanzibar", beachEscapes:"LIKIZO YA UFUKWE", paradiseBeaches:"Fukwe za Paradiso",
        cultureHistory:"TAMADUNI NA HISTORIA", stoneTown:"Mji wa Mawe", oceanAdventures:"MATUKIO YA BAHARINI", marineExperiences:"Uzoefu wa Baharini",
        customTripIntro:"Unatafuta safari maalumu au uzoefu uliobinafsishwa?", customTour:"Panga Ziara Yako Maalumu",
        whyTravel:"KWANINI UTUSAFIRI NASI", yourJourney:"Safari Yako.", yourExperience:"Uzoefu Wako.",
        whyIntro:"Tunataka upate uzoefu wa Zanzibar kwa maana. Gundua kisiwa, uzuri wake na furahia safari yako kwa mwongozo wa wenyeji.",
        localKnowledge:"Maarifa ya Kienyeji", localKnowledgeText:"Chunguza kisiwa kwa maarifa ya maeneo ya wenyeji.",
        flexibleTrips:"Safari Zinazobadilika", flexibleTripsText:"Panga uzoefu kulingana na ratiba yako.",
        personalExperience:"Uzoefu wa Kibinafsi", personalExperienceText:"Furahia uzoefu unaofaa kwako, familia au kikundi chako.",
        customPackages:"Vifurushi Maalumu", customPackagesText:"Omba bei ya ziara kulingana na mapendeleo yako.",
        discoverZanzibar:"Gundua Zanzibar", exploreEnjoy:"Chunguza. Pata Uzoefu. Furahia.",
        nextAdventure:"SHUGHULI YAKO IJAYO INANZIA HAPA", letZanzibarTake:"Zanzibar Ikuchukue", breathAway:"Uzuri Usioelezeka",
        bannerText:"Kuanzia matukio ya baharini na fukwe za kitropiki hadi magunduzi ya kitamaduni na safari za mwituni.",
        bookExperience:"Hifadhi Uzoefu Wako", islandMoments:"MATUKIO YA KISIWA", discover:"Gundua", galleryIntro:"Maeneo mazuri, mandhari ya bahari na uzoefu wa kumbukumbu.",
        whatsapp:"WhatsApp", location:"Mahali", instagram:"Instagram", selectGuests:"Chagua wageni", guest1:"Mtu 1", guest2:"Watu 2", guest3:"Watu 3", guest4:"Watu 4", guest5:"Watu 5", guest6:"Watu 6–10", guest10:"Zaidi ya watu 10",
        formNote:"Hakuna malipo yanayohitajika kutuma ombi.", faqQ1:"Ninawezaje kuhifadhi ziara?", faqA1:"Chagua ziara unayopenda, jaza fomu ya kuhifadhi na utume ombi lako kupitia WhatsApp. Tutajibu kwa upatikanaji na maelezo.",
        faqQ2:"Je, bei za ziara zimewekwa?", faqA2:"Bei zinaweza kutegemea shughuli iliyochaguliwa, idadi ya wageni, usafiri na maelezo ya kifurushi. Wasiliana nasi kwa bei.",
        faqQ3:"Naweza kubinafsisha safari yangu?", faqA3:"Ndiyo. Unaweza kuomba ratiba ya kibinafsi kulingana na tarehe, mapendeleo, shughuli na muda wako.",
        faqQ4:"Je, mtoaji wa usafiri wa ndege anapatikana?", faqA4:"Ndiyo. Kukusanya kwenye uwanja wa ndege, usafiri wa hoteli na mipango ya usafiri inaweza kuombwa.",
        faqQ5:"Naweza kuhifadhi safari za mwitu Tanzania?", faqA5:"Ndiyo. Unaweza kuuliza safari za Tanzania, ikiwa ni pamoja na Hifadhi ya Mikumi na maeneo mengine.",
        ctaTag:"UZOEFU WA ZANZIBAR WAKO UNASUBIRI", readyExplore:"Uko Tayari Kugundua", paradise:"Paradiso?", ctaText:"Tukusaidie kutengeneza safari isiyosahaulika ya Zanzibar. Adventure yako ijayo ni ujumbe mmoja tu.",
        startPlanning:"Anza Kupanga kwa WhatsApp", footerText:"Gundua Zanzibar kwa uzoefu wa kienyeji, maeneo mazuri na matukio yasiyosahaulika.",
        quickLinks:"Viungo vya Haraka", ourTours:"Ziara Zetu", booking:"Uhifadhi", popularTours:"Ziara Maarufu", contactUs:"Wasiliana Nasi",
        mnembaIsland:"Kisiwa cha Mnemba", safariBlue:"Safari Blue", spiceFarm:"Shamba la Viungo", jozaniForest:"Msitu wa Jozani"
    },
    fr: {
        welcomeZanzibar:"Bienvenue à Zanzibar", beachEscapes:"ÉVASIONS BALNÉAIRES", paradiseBeaches:"Plages paradisiaques",
        cultureHistory:"CULTURE ET HISTOIRE", stoneTown:"Ville de pierre", oceanAdventures:"AVENTURES MARINES", marineExperiences:"Expériences marines",
        customTripIntro:"Vous cherchez un voyage spécial ou une expérience sur mesure ?", customTour:"Planifier mon circuit sur mesure",
        whyTravel:"POURQUOI VOYAGER AVEC NOUS", yourJourney:"Votre voyage.", yourExperience:"Votre expérience.",
        whyIntro:"Nous voulons que vous viviez Zanzibar pleinement. Découvrez l'île, sa beauté et profitez du voyage avec un guide local.",
        localKnowledge:"Connaissance locale", localKnowledgeText:"Explorez l'île grâce aux connaissances locales.",
        flexibleTrips:"Voyages flexibles", flexibleTripsText:"Planifiez selon votre emploi du temps.",
        personalExperience:"Expérience personnalisée", personalExperienceText:"Profitez d'une expérience adaptée à vous, votre famille ou votre groupe.",
        customPackages:"Forfaits sur mesure", customPackagesText:"Demandez un devis selon vos préférences.",
        discoverZanzibar:"Découvrez Zanzibar", exploreEnjoy:"Explorer. Découvrir. Profiter.",
        nextAdventure:"VOTRE PROCHAINE AVENTURE COMMENCE ICI", letZanzibarTake:"Laissez Zanzibar vous", breathAway:"Couper le souffle",
        bannerText:"Des aventures marines aux plages tropicales, découvrez les cultures et les safaris inoubliables.",
        bookExperience:"Réserver votre expérience", islandMoments:"MOMENTS INSULAIRES", discover:"Découvrez", galleryIntro:"Beaux sites, vues sur l'océan et expériences mémorables.",
        whatsapp:"WhatsApp", location:"Emplacement", instagram:"Instagram", selectGuests:"Sélectionner les participants", guest1:"1 personne", guest2:"2 personnes", guest3:"3 personnes", guest4:"4 personnes", guest5:"5 personnes", guest6:"6–10 personnes", guest10:"Plus de 10",
        formNote:"Aucun paiement n'est requis pour envoyer une demande.", faqQ1:"Comment réserver un circuit ?", faqA1:"Choisissez votre circuit, complétez le formulaire et envoyez la demande via WhatsApp. Nous répondrons avec les disponibilités.",
        faqQ2:"Les prix des circuits sont-ils fixes ?", faqA2:"Les prix peuvent varier selon l'activité, les participants, le transport et le forfait. Contactez-nous pour un devis.",
        faqQ3:"Puis-je personnaliser mon voyage ?", faqA3:"Oui. Demandez un itinéraire personnalisé selon vos dates, intérêts, activités et disponibilité.",
        faqQ4:"Proposez-vous des transferts depuis l'aéroport ?", faqA4:"Oui. Nous organisons les prises en charge à l'aéroport, les transferts hôtel et les transports.",
        faqQ5:"Puis-je réserver un safari en Tanzanie ?", faqA5:"Oui. Renseignez-vous sur les safaris en Tanzanie, notamment au parc Mikumi.",
        ctaTag:"VOTRE EXPÉRIENCE À ZANZIBAR VOUS ATTEND", readyExplore:"Prêt à explorer", paradise:"le paradis ?", ctaText:"Créons ensemble un voyage inoubliable à Zanzibar. Votre prochaine aventure est à un message.",
        startPlanning:"Commencer sur WhatsApp", footerText:"Découvrez Zanzibar avec des expériences locales, de beaux lieux et des aventures inoubliables.",
        quickLinks:"Liens rapides", ourTours:"Nos circuits", booking:"Réservation", popularTours:"Circuits populaires", contactUs:"Nous contacter",
        mnembaIsland:"Île de Mnemba", safariBlue:"Safari Blue", spiceFarm:"Ferme aux épices", jozaniForest:"Forêt de Jozani"
    },
    es: {
        welcomeZanzibar:"Bienvenido a Zanzíbar", beachEscapes:"ESCAPADAS A PLAYAS", paradiseBeaches:"Playas paradisíacas",
        cultureHistory:"CULTURA E HISTORIA", stoneTown:"Ciudad de Piedra", oceanAdventures:"AVENTURAS MARINAS", marineExperiences:"Experiencias marinas",
        customTripIntro:"¿Buscas un viaje especial o una experiencia personalizada?", customTour:"Planifica tu tour personalizado",
        whyTravel:"POR QUÉ VIAJAR CON NOSOTROS", yourJourney:"Tu viaje.", yourExperience:"Tu experiencia.",
        whyIntro:"Queremos que vivas Zanzíbar de manera significativa. Descubre la isla, su belleza y disfruta con guía local.",
        localKnowledge:"Conocimiento local", localKnowledgeText:"Explora la isla con conocimiento local.",
        flexibleTrips:"Viajes flexibles", flexibleTripsText:"Planifica según tu horario.",
        personalExperience:"Experiencia personal", personalExperienceText:"Disfruta una experiencia para ti, tu familia o grupo.",
        customPackages:"Paquetes personalizados", customPackagesText:"Solicita un presupuesto según tus preferencias.",
        discoverZanzibar:"Descubre Zanzíbar", exploreEnjoy:"Explora. Vive. Disfruta.",
        nextAdventure:"TU PRÓXIMA AVENTURA COMIENZA AQUÍ", letZanzibarTake:"Deja que Zanzíbar", breathAway:"te deje sin aliento",
        bannerText:"Desde aventuras marinas y playas tropicales hasta cultura y safaris inolvidables.",
        bookExperience:"Reserva tu experiencia", islandMoments:"MOMENTOS DE LA ISLA", discover:"Descubre", galleryIntro:"Hermosos destinos, vistas al océano y experiencias memorables.",
        whatsapp:"WhatsApp", location:"Ubicación", instagram:"Instagram", selectGuests:"Selecciona huéspedes", guest1:"1 persona", guest2:"2 personas", guest3:"3 personas", guest4:"4 personas", guest5:"5 personas", guest6:"6–10 personas", guest10:"Más de 10",
        formNote:"No se requiere pago para enviar una consulta.", faqQ1:"¿Cómo puedo reservar un tour?", faqA1:"Selecciona tu tour, completa el formulario y envía la solicitud por WhatsApp. Responderemos con disponibilidad y detalles.",
        faqQ2:"¿Los precios de los tours son fijos?", faqA2:"Los precios pueden depender de la actividad, huéspedes, transporte y paquete. Contáctanos para una cotización.",
        faqQ3:"¿Puedo personalizar mi viaje?", faqA3:"Sí. Puedes solicitar un itinerario personalizado según fechas, intereses, actividades y tiempo disponible.",
        faqQ4:"¿Ofrecen traslados al aeropuerto?", faqA4:"Sí. Puedes solicitar recogida en aeropuerto, traslados al hotel y transporte.",
        faqQ5:"¿Puedo reservar safaris en Tanzania?", faqA5:"Sí. Puedes consultar safaris en Tanzania, incluido el parque nacional Mikumi.",
        ctaTag:"TU EXPERIENCIA EN ZANZÍBAR TE ESPERA", readyExplore:"Listo para explorar", paradise:"¿el paraíso?", ctaText:"Te ayudaremos a crear un viaje inolvidable a Zanzíbar. Tu próxima aventura está a un mensaje.",
        startPlanning:"Empezar por WhatsApp", footerText:"Descubre Zanzíbar con experiencias locales, destinos hermosos y aventuras inolvidables.",
        quickLinks:"Enlaces rápidos", ourTours:"Nuestros tours", booking:"Reserva", popularTours:"Tours populares", contactUs:"Contáctanos",
        mnembaIsland:"Isla Mnemba", safariBlue:"Safari Blue", spiceFarm:"Granja de especias", jozaniForest:"Bosque Jozani"
    },
    de: {
        welcomeZanzibar:"Willkommen auf Sansibar", beachEscapes:"STRANDAUSFLÜGE", paradiseBeaches:"Paradiesische Strände",
        cultureHistory:"KULTUR UND GESCHICHTE", stoneTown:"Stone Town", oceanAdventures:"MEERESABENTEUER", marineExperiences:"Meeresspürnisse",
        customTripIntro:"Suchen Sie eine besondere oder individuelle Reise?", customTour:"Individuelle Tour planen",
        whyTravel:"WARUM MIT UNS REISEN", yourJourney:"Ihre Reise.", yourExperience:"Ihr Erlebnis.",
        whyIntro:"Wir möchten Ihnen Sansibar auf besondere Weise näherbringen. Entdecken Sie die Insel und genießen Sie Ihre Reise mit lokaler Führung.",
        localKnowledge:"Lokales Wissen", localKnowledgeText:"Entdecken Sie die Insel mit lokaler Ortskenntnis.",
        flexibleTrips:"Flexible Reisen", flexibleTripsText:"Planen Sie Erlebnisse nach Ihrem Zeitplan.",
        personalExperience:"Persönliches Erlebnis", personalExperienceText:"Genießen Sie Erlebnisse für Sie, Familie oder Gruppe.",
        customPackages:"Individuelle Pakete", customPackagesText:"Fordern Sie ein Angebot nach Ihren Wünschen an.",
        discoverZanzibar:"Entdecken Sie Sansibar", exploreEnjoy:"Entdecken. Erleben. Genießen.",
        nextAdventure:"IHRE NÄCHSTE AVENTURA BEGINNT HIER", letZanzibarTake:"Lassen Sie Sansibar", breathAway:"Ihnen den Atem rauben",
        bannerText:"Von Meerabenteuern und tropischen Stränden bis zu Kulturentdeckungen und unvergesslichen Safaris.",
        bookExperience:"Erlebnis buchen", islandMoments:"INSEL-MOMENTE", discover:"Entdecken Sie", galleryIntro:"Wunderschöne Ziele, Meerblicke und unvergessliche Erlebnisse.",
        whatsapp:"WhatsApp", location:"Ort", instagram:"Instagram", selectGuests:"Gäste auswählen", guest1:"1 Person", guest2:"2 Personen", guest3:"3 Personen", guest4:"4 Personen", guest5:"5 Personen", guest6:"6–10 Personen", guest10:"Mehr als 10",
        formNote:"Für eine Anfrage ist keine Zahlung erforderlich.", faqQ1:"Wie buche ich eine Tour?", faqA1:"Wählen Sie eine Tour, füllen Sie das Formular aus und senden Sie die Anfrage über WhatsApp. Wir antworten mit Verfügbarkeit und Details.",
        faqQ2:"Sind die Tourpreise fest?", faqA2:"Die Preise hängen von Aktivität, Gästezahl, Transport und Paket ab. Kontaktieren Sie uns für ein Angebot.",
        faqQ3:"Kann ich meine Reise individuell gestalten?", faqA3:"Ja. Sie können eine persönliche Route nach Reisedaten, Interessen, Aktivitäten und Zeit erstellen lassen.",
        faqQ4:"Bieten Sie Flughafentransfers an?", faqA4:"Ja. Flughafentransfers, Hoteltransfers und Transport arrangieren wir gerne.",
        faqQ5:"Kann ich Safari-Reisen in Tansania buchen?", faqA5:"Ja. Fragen Sie nach Safaris in Tansania, einschließlich des Mikumi-Nationalparks.",
        ctaTag:"IHR SANSIBAR-ERLEBNIS ERWARTET SIE", readyExplore:"Bereit zum Entdecken", paradise:"das Paradies?", ctaText:"Wir helfen Ihnen bei einer unvergesslichen Sansibar-Reise. Ihre nächste Abenteueranfrage ist nur eine Nachricht entfernt.",
        startPlanning:"Planung auf WhatsApp", footerText:"Entdecken Sie Sansibar mit lokalen Erlebnissen, schönen Zielen und unvergesslichen Abenteuern.",
        quickLinks:"Schnelllinks", ourTours:"Unsere Touren", booking:"Buchung", popularTours:"Beliebte Touren", contactUs:"Kontakt",
        mnembaIsland:"Mnemba-Insel", safariBlue:"Safari Blue", spiceFarm:"Gewürzfarm", jozaniForest:"Jozani-Wald"
    },
    it: {
        welcomeZanzibar:"Benvenuti a Zanzibar", beachEscapes:"ESCURSIONI IN SPIAGGIA", paradiseBeaches:"Spiagge paradisiache",
        cultureHistory:"CULTURA E STORIA", stoneTown:"Stone Town", oceanAdventures:"AVVENTURE MARINE", marineExperiences:"Esperienze marine",
        customTripIntro:"Cerchi un viaggio speciale o un'esperienza su misura?", customTour:"Pianifica il tuo tour personalizzato",
        whyTravel:"PERCHÉ VIAGGIARE CON NOI", yourJourney:"Il tuo viaggio.", yourExperience:"La tua esperienza.",
        whyIntro:"Vogliamo farti vivere Zanzibar in modo autentico. Scopri l'isola, la sua bellezza e goditi il viaggio con una guida locale.",
        localKnowledge:"Conoscenza locale", localKnowledgeText:"Esplora l'isola con guide locali.",
        flexibleTrips:"Viaggi flessibili", flexibleTripsText:"Pianifica le esperienze in base al tuo programma.",
        personalExperience:"Esperienza personale", personalExperienceText:"Goditi esperienze adatte a te, famiglia o gruppo.",
        customPackages:"Pacchetti personalizzati", customPackagesText:"Richiedi un preventivo in base alle tue preferenze.",
        discoverZanzibar:"Scopri Zanzibar", exploreEnjoy:"Esplora. Vivi. Goditi.",
        nextAdventure:"LA TUA PROSSIMA AVVENTURA INIZIA QUI", letZanzibarTake:"Lascia che Zanzibar", breathAway:"ti tolga il fiato",
        bannerText:"Da avventure marine e spiagge tropicali a scoperte culturali e safari indimenticabili.",
        bookExperience:"Prenota la tua esperienza", islandMoments:"MOMENTI DELL'ISOLA", discover:"Scopri", galleryIntro:"Destinazioni belle, viste sull'oceano ed esperienze memorabili.",
        whatsapp:"WhatsApp", location:"Posizione", instagram:"Instagram", selectGuests:"Seleziona ospiti", guest1:"1 persona", guest2:"2 persone", guest3:"3 persone", guest4:"4 persone", guest5:"5 persone", guest6:"6–10 persone", guest10:"Più di 10",
        formNote:"Non è richiesto alcun pagamento per inviare una richiesta.", faqQ1:"Come posso prenotare un tour?", faqA1:"Seleziona il tour, completa il modulo e invia la richiesta via WhatsApp. Risponderemo con disponibilità e dettagli.",
        faqQ2:"I prezzi dei tour sono fissi?", faqA2:"I prezzi possono dipendere dall'attività, ospiti, trasporto e pacchetto. Contattaci per un preventivo.",
        faqQ3:"Posso personalizzare il viaggio?", faqA3:"Sì. Puoi richiedere un itinerario personalizzato in base a date, interessi, attività e tempo.",
        faqQ4:"Offrite trasferimenti dall'aeroporto?", faqA4:"Sì. È possibile richiedere prelievo in aeroporto, trasferimenti in hotel e trasporti.",
        faqQ5:"Posso prenotare safari in Tanzania?", faqA5:"Sì. Puoi richiedere safari in Tanzania, incluso il Parco Nazionale di Mikumi.",
        ctaTag:"LA TUA ESPERIENZA A ZANZIBAR TI ASPETTA", readyExplore:"Pronto a esplorare", paradise:"il paradiso?", ctaText:"Ti aiutiamo a creare un viaggio indimenticabile a Zanzibar. La tua prossima avventura è a un messaggio.",
        startPlanning:"Inizia su WhatsApp", footerText:"Scopri Zanzibar con esperienze locali, destinazioni bellissime e avventure indimenticabili.",
        quickLinks:"Link rapidi", ourTours:"I nostri tour", booking:"Prenotazione", popularTours:"Tour popolari", contactUs:"Contattaci",
        mnembaIsland:"Isola di Mnemba", safariBlue:"Safari Blue", spiceFarm:"Piantagione di spezie", jozaniForest:"Foresta Jozani"
    }
};

function applyLanguage(language) {
    const selected = translations[language] ? language : "en";
    document.documentElement.lang = selected;

    const documentTitles = {
        en: "Prince Abuu Bakar | Zanzibar Tours & Excursions",
        sw: "Prince Abuu Bakar | Ziara na Matembezi ya Zanzibar",
        fr: "Prince Abuu Bakar | Circuits et excursions à Zanzibar",
        de: "Prince Abuu Bakar | Sansibar-Touren und Ausflüge",
        it: "Prince Abuu Bakar | Tour ed escursioni a Zanzibar",
        es: "Prince Abuu Bakar | Tours y excursiones por Zanzíbar"
    };
    const pageTitleNames = {
        "index.html": "Zanzibar Tours & Excursions",
        "destinations.html": "Zanzibar Destinations",
        "tours.html": "Zanzibar Tours & Activities",
        "about.html": "About Your Local Guide",
        "gallery.html": "Zanzibar Photo Gallery",
        "booking.html": "Book Your Zanzibar Tour"
    };
    document.title = selected === "en" && pageTitleNames[currentPage]
        ? `Prince Abuu Bakar | ${pageTitleNames[currentPage]}`
        : documentTitles[selected];
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        if (!metaDescription.dataset.defaultDescription) {
            metaDescription.dataset.defaultDescription = metaDescription.content;
        }
        metaDescription.content = {
            sw: "Gundua Zanzibar na Prince Abuu Bakar. Ziara za Mnemba, Safari Blue, Mji wa Mawe, mashamba ya viungo, fukwe na safari za mwituni.",
            fr: "Découvrez Zanzibar avec Prince Abuu Bakar. Île de Mnemba, Safari Blue, Stone Town, fermes aux épices, plages et safaris.",
            de: "Entdecken Sie Sansibar mit Prince Abuu Bakar: Mnemba, Safari Blue, Stone Town, Gewürzplantagen, Strände und Safaris.",
            it: "Scopri Zanzibar con Prince Abuu Bakar: Mnemba, Safari Blue, Stone Town, piantagioni di spezie, spiagge e safari.",
            es: "Descubre Zanzíbar con Prince Abuu Bakar: Mnemba, Safari Blue, Stone Town, granjas de especias, playas y safaris.",
            en: metaDescription.dataset.defaultDescription
        }[selected];
    }

    if (selected !== "en" && websiteTranslations[selected]) {
        Object.assign(translations[selected], websiteTranslations[selected]);
    }

    const extraTranslations = {
        sw: {discoverMore:"GUNDUA ZAIDI", footerTagline:"Gundua. Chunguza. Pata Uzoefu.", rightsReserved:"Haki zote zimehifadhiwa.", openInMaps:"Fungua kwenye Ramani ya Google"},
        fr: {discoverMore:"EN SAVOIR PLUS", footerTagline:"Découvrir. Explorer. Vivre.", rightsReserved:"Tous droits réservés.", openInMaps:"Ouvrir dans Google Maps"},
        es: {discoverMore:"DESCUBRE MÁS", footerTagline:"Descubre. Explora. Vive.", rightsReserved:"Todos los derechos reservados.", openInMaps:"Abrir en Google Maps"},
        de: {discoverMore:"MEHR ENTDECKEN", footerTagline:"Entdecken. Erkunden. Erleben.", rightsReserved:"Alle Rechte vorbehalten.", openInMaps:"In Google Maps öffnen"},
        it: {discoverMore:"SCOPRI DI PIÙ", footerTagline:"Scopri. Esplora. Vivi.", rightsReserved:"Tutti i diritti riservati.", openInMaps:"Apri in Google Maps"}
    };
    if (selected !== "en" && extraTranslations[selected]) {
        Object.assign(translations[selected], extraTranslations[selected]);
    }

    const placeholderSets = {
        sw: { fullName: "Jina lako kamili", email: "wewe@example.com", hotelLocation: "Jina au eneo la hoteli", message: "Tueleze mipango yako, maombi maalumu au shughuli unazopenda..." },
        fr: { fullName: "Votre nom complet", email: "vous@example.com", hotelLocation: "Nom ou lieu de l'hôtel", message: "Parlez-nous de vos projets, demandes spéciales ou activités préférées..." },
        es: { fullName: "Tu nombre completo", email: "tu@example.com", hotelLocation: "Nombre del hotel o lugar", message: "Cuéntanos tus planes, solicitudes especiales o actividades preferidas..." },
        de: { fullName: "Ihr vollständiger Name", email: "sie@example.com", hotelLocation: "Hotelname oder Abholort", message: "Erzählen Sie uns von Ihren Plänen, besonderen Wünschen oder Aktivitäten..." },
        it: { fullName: "Il tuo nome completo", email: "tu@example.com", hotelLocation: "Nome o luogo dell'hotel", message: "Raccontaci i tuoi programmi, richieste speciali o attività preferite..." }
    };

    const placeholders = placeholderSets[selected];
    ["fullName", "email", "hotelLocation", "message"].forEach(id => {
        const input = document.getElementById(id);
        if (input && placeholders) input.placeholder = placeholders[id];
    });

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (key.startsWith("heroTitle")) {
            const titleText = selected === "en"
                ? element.dataset.defaultText
                : translations[selected][key];
            if (titleText) element.dataset.typingText = titleText;
        }

        if (selected === "en") {
            if (element.dataset.defaultText) element.textContent = element.dataset.defaultText;
        } else if (translations[selected][key]) {
            element.textContent = translations[selected][key];
        }
    });

    updateGalleryToggle();
    startHeroTyping();

    if (languageSelect) languageSelect.value = selected;
    localStorage.setItem("zanzibar-language", selected);

    if (typeof renderTours === "function") {
        const activeFilter = document.querySelector(".filter-btn.active");
        renderTours(activeFilter ? activeFilter.dataset.filter : "all");
    }
    if (typeof populateTourSelect === "function") populateTourSelect();
    createIcons();
}

document.queryAll = document.queryAll || ((selector) => document.querySelectorAll(selector));
document.querySelectorAll("[data-i18n]").forEach(element => {
    element.dataset.defaultText = element.textContent.trim();
});

if (languageSelect) {
    languageSelect.addEventListener("change", event => applyLanguage(event.target.value));
}

applyLanguage(localStorage.getItem("zanzibar-language") || "en");
