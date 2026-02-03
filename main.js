// Always start with a1.jpg, then randomize the rest
const allImages = [
  'img/export/img_0.png',
  'img/export/img_1.png',
  'img/export/img_2.png',
  'img/export/img_3.png',
  'img/export/img_4.png',
  'img/export/img_5.png',
  'img/export/img_6.png',
  'img/export/img_7.png',
  'img/export/img_8.png',
  'img/export/img_9.png',
  'img/export/img_10.png',
  'img/export/img_11.png',
  'img/export/img_12.png',
  'img/export/img_13.png',
  'img/export/img_14.png',
  'img/export/img_15.png',
  'img/export/img_16.png',
  'img/export/img_17.png',
  'img/export/img_18.png',
  'img/export/img_19.png',
  'img/export/img_20.png',
  'img/export/img_21.png',
  'img/export/img_22.png',
  'img/export/img_23.png',
  'img/export/img_24.png',
  'img/export/img_25.png',
  'img/export/img_26.png',
  'img/export/img_27.png',
  'img/export/img_28.png',
  'img/export/img_29.png',
  'img/export/img_30.png',
  'img/export/img_31.png',
  'img/export/img_32.png',
  'img/export/img_33.png',
  'img/export/img_34.png',
  'img/export/img_35.png',
  'img/export/img_36.png',
  'img/export/img_37.png',
  'img/export/img_38.png',
  'img/export/img_39.png',
  'img/export/img_40.png',
  'img/export/img_41.png',
  'img/export/img_42.png',
  'img/export/img_43.png',
  'img/export/img_44.png',
  'img/export/img_45.png',
  'img/export/img_46.png',
  'img/export/img_47.png',
  'img/export/img_48.png',
  'img/export/img_49.png',
  'img/export/img_50.png',
  'img/export/img_51.png',
  'img/export/img_52.png',
  'img/export/img_53.png',
  'img/export/img_54.png',
  'img/export/img_55.png',
  'img/export/img_56.png',
  'img/export/img_57.png',
  'img/export/img_58.png',
  'img/export/img_59.png',
  'img/export/img_60.png',
  'img/export/img_61.png',
  'img/export/img_62.png',
  'img/export/img_63.png',
  'img/export/img_64.png',
  'img/export/img_65.png',
  'img/export/img_66.png',
  'img/export/img_67.png',
  'img/export/img_68.png',
  'img/export/img_69.png',
  'img/export/img_70.png',
  'img/export/img_71.png',
  'img/export/img_72.png',
  'img/export/img_73.png',
  'img/export/img_74.png',
  'img/export/img_75.png',
  'img/export/img_76.png',
  'img/export/img_77.png',
  'img/export/img_78.png',
  'img/export/img_79.png',
  'img/export/img_80.png',
  'img/export/img_81.png',
  'img/export/img_82.png',
  'img/export/img_83.png',
  'img/export/img_84.png',
  'img/export/img_85.png',
  'img/export/img_86.png',
  'img/export/img_87.png',
  'img/export/img_88.png',
  'img/export/img_89.png',
  'img/export/img_90.png',
  'img/export/img_91.png',
  'img/export/img_93.png',
  'img/export/img_94.png',
  'img/export/img_95.png',
  'img/export/img_96.png',
  'img/export/img_98.png',
  'img/export/img_99.png',
  'img/export/img_100.png'
];

// Shuffle the rest
allImages.sort(() => Math.random() - 0.5);

// Final ordered list: a1 first, rest randomized
const images = ['img/export/img_61.png', ...allImages];

let currentIndex = 0;
let autoChangeInterval;

// Function to show next image
function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('galleryImage').src = images[currentIndex];
}

// Function to show previous image
function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('galleryImage').src = images[currentIndex];
}

// Function to start automatic image change (always clears previous)
function startAutoChange() {
  clearInterval(autoChangeInterval);
  autoChangeInterval = setInterval(showNextImage, 6000); // 6 seconds
}

// Add event listener for click on the image
document.querySelector('.image_gallery_click').addEventListener('click', function(event) {

  const screenWidth = window.innerWidth;
  const clickX = event.clientX;

  if (clickX < screenWidth / 2) {
    // Clicked on the left side
    showPreviousImage();
    // console.log("previous image");
  } else {
    // Clicked on the right side
    showNextImage();
    // console.log("next image");
  }

  // Reset the auto-change timer when user clicks
  clearInterval(autoChangeInterval);
  startAutoChange();
  // console.log("timer reset");
});

document.querySelector('.image_gallery_click').addEventListener('mousemove', function(event) {
  const screenWidth = window.innerWidth;
  const clickX = event.clientX;

  if (clickX < screenWidth / 2) {
    this.style.cursor = 'w-resize';
  } else {
    this.style.cursor = 'e-resize';
  }
});


// Function to toggle grid view
function toggleGridView() {
  const gridView = document.getElementById('gridView');
  const imageGallery = document.querySelector('.image_gallery_click');
  const galleryLinks = document.querySelectorAll('#galleryLink, #galleryLink2');

  if (gridView.style.display === 'none' || gridView.style.display === '') {
    // Populate the grid view with images
    gridView.innerHTML = ''; // Clear any existing images
    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = src.split('/').pop().split('.')[0];
      gridView.appendChild(img);
    });

    gridView.style.display = 'grid';
    imageGallery.style.display = 'none';

    // Scroll to grid view
    gridView.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Update link text
    galleryLinks.forEach(link => link.textContent = 'Slideshow');

    // Stop automatic image change when in grid view
    clearInterval(autoChangeInterval);
  } else {
    gridView.style.display = 'none';
    imageGallery.style.display = 'flex';

    // Update link text
    galleryLinks.forEach(link => link.textContent = 'Gallery');

    // Restart automatic image change when in slideshow view
    startAutoChange();
  }
}

// Add event listeners for the gallery links
const galleryLinks = document.querySelectorAll('#galleryLink, #galleryLink2');
galleryLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    toggleGridView();
  });
});

// Start the automatic image change when the page loads
startAutoChange();
