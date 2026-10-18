const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const previewImage = document.getElementById("previewImage");
const imageCaption = document.getElementById("imageCaption");
const closeButton = document.getElementById("closeButton");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const images = [
    {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
        alt: "Green hills beneath a cloudy sky",
        caption: "Green hills"
    },
    {
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
        alt: "Mountain lake surrounded by forest",
        caption: "Mountain lake"
    },
    {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=85",
        alt: "Lake and mountains in the evening light",
        caption: "Evening by the lake"
    },
    {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85",
        alt: "Sunlight falling through a green forest",
        caption: "Forest path"
    },
    {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
        alt: "High mountain peaks",
        caption: "Mountain peaks"
    },
    {
        src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=85",
        alt: "Deer standing in a natural landscape",
        caption: "Wildlife"
    },
    {
        src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85",
        alt: "Open landscape with mountains and sky",
        caption: "Open landscape"
    },
    {
        src: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=85",
        alt: "Tall trees in a forest",
        caption: "Tall trees"
    },
    {
        src:"https://images.unsplash.com/photo-1790288025888-806f0224b124?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        alt:"Morning Window scene",
        caption:"Window"
    },
    {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85",
    alt: "Sunlight through a forest",
    caption: "Forest"
    },
    {
    src: "https://images.unsplash.com/photo-1791862634202-8bcb1b4bfbcd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    alt: "Dog on grass",
    caption: "Dog"
    },
];

let currentIndex = 0;
let lastFocusedElement = null;

function createGallery() {
    images.forEach((image, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "gallery-item";
        button.setAttribute("aria-label", `Open image: ${image.caption}`);

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.loading = "lazy";
        img.decoding = "async";

        button.appendChild(img);
        button.addEventListener("click", () => openPreview(index));
        gallery.appendChild(button);
    });
}
function openPreview(index) {
    currentIndex = index;
    lastFocusedElement = document.activeElement;
    updatePreview();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeButton.focus();
}
function updatePreview() {
    const image = images[currentIndex];
    previewImage.src = image.src;
    previewImage.alt = image.alt;
    imageCaption.textContent = `${image.caption} (${currentIndex + 1} of ${images.length})`;
}
function closePreview() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}
function showPrevious() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updatePreview();
}

function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updatePreview();
}

closeButton.addEventListener("click", closePreview);
previousButton.addEventListener("click", showPrevious);
nextButton.addEventListener("click", showNext);

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closePreview();
    }
});

document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) {
        return;
    }

    if (event.key === "Escape") {
        closePreview();
    } else if (event.key === "ArrowLeft") {
        showPrevious();
    } else if (event.key === "ArrowRight") {
        showNext();
    }
});

createGallery();
