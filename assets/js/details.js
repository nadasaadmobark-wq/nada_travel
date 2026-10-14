```js
const params = new URLSearchParams(window.location.search);
const tourId = Number(params.get("id")) || 1;

const tours = {
  1: {
    title: "Africa - Amazing African Safari",
    rating: 5,
    reviews: 1,
    duration: 7,
    guests: 200,
    price: 100,
    images: [
      "../assets/Images/safari.jpg",
      "../assets/Images/yellwo.jpg",
      "../assets/Images/yellwo2.jpg",
      "../assets/Images/yellwo3.jpg",
      "../assets/Images/yellwo4.jpg"
    ]
  },

  2: {
    title: "Dubai – All Stunning Places",
    rating: 5,
    reviews: 1,
    duration: 5,
    guests: 200,
    price: 1200,
    images: [
      "../assets/Images/dubai.jpg",
      "../assets/Images/valeria1.jpg",
      "../assets/Images/valeria2.jpg",
      "../assets/Images/valeria3.jpg",
      "../assets/Images/valeria4.jpg"
    ]
  },

  3: {
    title: "Venice, Rome and Milan – 9 Days",
    rating: 5,
    reviews: 1,
    duration: 9,
    guests: 200,
    price: 3500,
    images: [
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg",
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg",
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg",
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg",
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg"
    ]
  },

  4: {
    title: "Cityscape Chicago 4K",
    rating: 5,
    reviews: 1,
    duration: 4,
    guests: 200,
    price: 3500,
    images: [
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg",
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg",
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg",
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg",
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg"
    ]
  },

  5: {
    title: "5-Day Oahu Tour: Honolulu",
    rating: 5,
    reviews: 1,
    duration: 5,
    guests: 200,
    price: 1500,
    images: [
      "../assets/Images/oahu.jpg",
      "../assets/Images/houcine1.jpg",
      "../assets/Images/houcine2.jpg",
      "../assets/Images/houcine3.jpg",
      "../assets/Images/hanson4.jpg"
    ]
  },

  6: {
    title: "Molokini and Turtle Snorkeling",
    rating: 5,
    reviews: 0,
    duration: 1,
    guests: 200,
    price: 80,
    images: [
      "../assets/Images/florian2.jpg",
      "../assets/Images/florian.jpg",
      "../assets/Images/florian1.jpg",
      "../assets/Images/florian3.jpg",
      "../assets/Images/florian4.jpg"
    ]
  },

  7: {
    title: "Two Moscow Tour of 7 days",
    rating: 5,
    reviews: 0,
    duration: 7,
    guests: 200,
    price: 3500,
    images: [
      "../assets/Images/cordeiro.jpg",
      "../assets/Images/mehmet1.jpg",
      "../assets/Images/mehmet2.jpg",
      "../assets/Images/mehmet3.jpg",
      "../assets/Images/mehmet4.jpg"
    ]
  },

  8: {
    title: "Paris – Eiffel Tower, Notre Dame Cath..",
    rating: 5,
    reviews: 1,
    duration: 3,
    guests: 200,
    price: 800,
    images: [
      "../assets/Images/iStock.jpg",
      "../assets/Images/iStock1.jpg",
      "../assets/Images/iStock2.jpg",
      "../assets/Images/iStock3.jpg",
      "../assets/Images/iStock4.jpg"
    ]
  },

  9: {
    title: "Austria – 6 Days in Vienna, Hallstatt",
    rating: 5,
    reviews: 1,
    duration: 6,
    guests: 200,
    price: 2100,
    images: [
      "../assets/Images/dalibor.jpg",
      "../assets/Images/dalibor1.jpg",
      "../assets/Images/dalibor2.jpg",
      "../assets/Images/dalibor3.jpg",
      "../assets/Images/dalibor4.jpg"
    ]
  },

  10: {
    title: "Greek Island Hopping Adventure",
    rating: 4,
    reviews: 3,
    duration: 8,
    guests: 200,
    price: 2400,
    images: [
      "../assets/Images/brantley.jpg",
      "../assets/Images/brantley1.jpg",
      "../assets/Images/brantley2.jpg",
      "../assets/Images/brantley3.jpg",
      "../assets/Images/brantley4.jpg"
    ]
  },

  11: {
    title: "Majestic Swiss Alps Escape",
    rating: 5,
    reviews: 5,
    duration: 7,
    guests: 200,
    price: 3100,
    images: [
      "../assets/Images/priyanka.jpg",
      "../assets/Images/priyanka1.jpg",
      "../assets/Images/priyanka2.jpg",
      "../assets/Images/priyanka3.jpg",
      "../assets/Images/priyanka4.jpg"
    ]
  },

  12: {
    title: "Tokyo & Kyoto Cultural Discovery",
    rating: 5,
    reviews: 2,
    duration: 10,
    guests: 200,
    price: 2800,
    images: [
      "../assets/Images/oahu.jpg",
      "../assets/Images/schwarz1.jpg",
      "../assets/Images/schwarz2.jpg",
      "../assets/Images/schwarz3.jpg",
      "../assets/Images/schwarz4.jpg"
    ]
  },

  13: {
    title: "Treasures of Ancient Egypt Cruise",
    rating: 4,
    reviews: 4,
    duration: 5,
    guests: 200,
    price: 1400,
    images: [
      "../assets/Images/unsplash5.jpg",
      "../assets/Images/unsplash1.jpg",
      "../assets/Images/unsplash2.jpg",
      "../assets/Images/unsplash3.jpg",
      "../assets/Images/unsplash4.jpg"
    ]
  },

  14: {
    title: "Phuket & Phi Phi Island Getaway",
    rating: 4,
    reviews: 1,
    duration: 4,
    guests: 200,
    price: 950,
    images: [
      "../assets/Images/shutterstock.jpg",
      "../assets/Images/shutterstock1.jpg",
      "../assets/Images/shutterstock2.jpg",
      "../assets/Images/shutterstock3.jpg",
      "../assets/Images/shutterstock4.jpg"
    ]
  },

  15: {
    title: "Canadian Rockies Scenic Rail Tour",
    rating: 5,
    reviews: 6,
    duration: 8,
    guests: 200,
    price: 4100,
    images: [
      "../assets/Images/jerry.jpg",
      "../assets/Images/jerry1.jpg",
      "../assets/Images/jerry2.jpg",
      "../assets/Images/jerry5.jpg",
      "../assets/Images/jerry0.jpg"
    ]
  },

  16: {
    title: "Iceland Northern Lights Expedition",
    rating: 5,
    reviews: 8,
    duration: 6,
    guests: 200,
    price: 2600,
    images: [
      "../assets/Images/samuel.jpg",
      "../assets/Images/samuel3.jpg",
      "../assets/Images/sammy2.jpg",
      "../assets/Images/giusi.jpg",
      "../assets/Images/sammy4.jpg"
    ]
  },

  17: {
    title: "Costa Rica Rainforest & Volcanoes",
    rating: 4,
    reviews: 2,
    duration: 7,
    guests: 200,
    price: 1150,
    images: [
      "../assets/Images/eliana-M.jpg",
      "../assets/Images/eliana1.jpg",
      "../assets/Images/eliana2.jpg",
      "../assets/Images/eliana3.jpg",
      "../assets/Images/eliana4.jpg"
    ]
  },

  18: {
    title: "Morocco Desert Kasbahs & Souks",
    rating: 4,
    reviews: 3,
    duration: 5,
    guests: 200,
    price: 990,
    images: [
      "../assets/Images/nasyr.jpg",
      "../assets/Images/nasyr1.jpg",
      "../assets/Images/nasyr2.jpg",
      "../assets/Images/nasyr3.jpg",
      "../assets/Images/nasyr4.jpg"
    ]
  },

  19: {
    title: "Prague & Budapest Historic Journey",
    rating: 5,
    reviews: 4,
    duration: 6,
    guests: 200,
    price: 1650,
    images: [
      "../assets/Images/raphael.jpg",
      "../assets/Images/raphael2.jpg",
      "../assets/Images/raphael3.jpg",
      "../assets/Images/raphael4.jpg",
      "../assets/Images/raphael1.jpg"
    ]
  },

  20: {
    title: "New York City Highlights & Broadway",
    rating: 5,
    reviews: 9,
    duration: 5,
    guests: 200,
    price: 2200,
    images: [
      "../assets/Images/florian.jpg",
      "../assets/Images/florian1.jpg",
      "../assets/Images/florian2.jpg",
      "../assets/Images/florian3.jpg",
      "../assets/Images/florian4.jpg"
    ]
  },

  21: {
    title: "New Zealand South Island Road Trip",
    rating: 5,
    reviews: 7,
    duration: 9,
    guests: 200,
    price: 3400,
    images: [
      "../assets/Images/shutterstock.jpg",
      "../assets/Images/shutterstock1.jpg",
      "../assets/Images/shutterstock2.jpg",
      "../assets/Images/shutterstock3.jpg",
      "../assets/Images/raghu.jpg"
    ]
  },

  22: {
    title: "Peru Machu Picchu Trekking Adventure",
    rating: 4,
    reviews: 5,
    duration: 8,
    guests: 200,
    price: 1850,
    images: [
      "../assets/Images/daniel1.jpg",
      "../assets/Images/daniel2.jpg",
      "../assets/Images/daniel3.jpg",
      "../assets/Images/daniel4.jpg",
      "../assets/Images/daniel5.jpg"
    ]
  }
};

const tour = tours[tourId] || tours[1];

const titleElement = document.getElementById("tour-title");
const ratingElement = document.querySelector(".rating");
const metaElement = document.querySelector(".tour-meta");
const priceElement = document.querySelector(".price-tag span");
const mainImage = document.getElementById("main-image");
const smallImages = document.querySelectorAll(".sub-images img");

if (titleElement) {
  titleElement.textContent = tour.title;
}

if (ratingElement) {
  ratingElement.innerHTML =
    "★".repeat(tour.rating) +
    ` <span>(${tour.reviews} Review${tour.reviews !== 1 ? "s" : ""})</span>`;
}

if (metaElement) {
  metaElement.innerHTML = `
    <div><i class="fa fa-clock"></i> <span>${tour.duration} Days</span></div>
    <div><i class="fa fa-users"></i> <span>Max Guests: ${tour.guests}</span></div>
  `;
}

if (priceElement) {
  priceElement.textContent = "$" + tour.price.toLocaleString();
}

if (mainImage) {
  mainImage.src = tour.images[0];
  mainImage.style.cursor = "pointer";

  mainImage.addEventListener("click", function () {
    openImagePopup(this.src);
  });
}

smallImages.forEach((img, index) => {
  img.src = tour.images[index + 1] || tour.images[0];
  img.style.cursor = "pointer";

  img.addEventListener("click", function () {
    openImagePopup(this.src);
  });
});

function openImagePopup(imageSrc) {
  const popup = document.createElement("div");

  popup.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.88);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 25px;
    cursor: zoom-out;
  `;

  const popupImage = document.createElement("img");
  popupImage.src = imageSrc;
  popupImage.alt = "Tour Image";

  popupImage.style.cssText = `
    max-width: 95%;
    max-height: 95%;
    object-fit: contain;
    border-radius: 8px;
  `;

  popup.appendChild(popupImage);

  popup.addEventListener("click", function () {
    popup.remove();
  });

  document.body.appendChild(popup);
}
```
