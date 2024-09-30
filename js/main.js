// JavaScript Document

//Scroll and blur
window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var blurValue = Math.min(20, scrollTop / 60); // Adjust blur intensity as needed

  document.querySelector('.home_header').style.filter = 'blur(' + blurValue + 'px)';
});

//Displayt event details
const eventDetailsDiv = document.getElementById('eventDetails');

function displayEvent(id) {
  switch (id) {
    case '1':
      eventDetailsDiv.innerHTML = `<h1>Nature Photography Excursion</h1><br>

	<p>&nbsp&nbspImmerse yourself in the serene beauty of the Aokigahara Forest for a morning of nature photography. This guided excursion will take participants on a picturesque hike through the lush, otherworldly landscape, providing ample opportunities to capture the diverse flora and fauna that call this forest home.<br><br>

	Experienced club members will be on hand to offer technical advice and creative guidance, helping participants to hone their skills in capturing the essence of the natural world. Whether you're interested in landscape, macro, or wildlife photography, this excursion promises to be a truly inspiring and rejuvenating experience.<br><br>

	The trip includes round-trip transportation from the APU campus, as well as refreshments to fuel your creative pursuits. Space is limited, so be sure to reserve your spot early!<br><br>

	Date and Time: June 15, 2024, 8:00 AM - 12:00 PM<br>
	Venue: Kepong FIRM, 1-hour bus ride from APU Campus`;
      break;
    case '2':
      eventDetailsDiv.innerHTML = `<h1>Outdoor Sculpture Garden Installation</h1><br>

	<p>&nbsp&nbspThe Asia Pacific University Art and Recreational Club is proud to announce the creation of an Outdoor Sculpture Garden on campus. This collaborative project will invite students, faculty, and local artists to design and construct large-scale, unique sculptures to be displayed in a serene outdoor setting. The installation will not only enhance the aesthetics of the university but also provide a space for contemplation, inspiration, and community engagement.<br><br>

	The Outdoor Sculpture Garden will be a dynamic and ever-evolving project, with new sculptures being added throughout the event's duration. Artists will work on-site, allowing visitors to witness the creative process and gain insights into the conceptual and technical aspects of their work. Regular guided tours will be offered, where experienced docents will lead groups through the garden, highlighting the individual pieces and their unique narratives.<br><br>

	In addition to the sculptural installations, the event will feature a series of artist talks and workshops. These interactive sessions will give attendees the opportunity to engage directly with the creators, learn about their artistic practices, and explore the materials and techniques used in sculpting. Participants will also have the chance to try their hand at sculpting, under the guidance of the visiting artists, fostering a deeper appreciation for the art form.<br><br>

	To further enrich the experience, the Outdoor Sculpture Garden will host various cultural and educational programs, such as poetry readings, musical performances, and interdisciplinary discussions. These events will celebrate the intersection of art, nature, and the human experience, inviting the community to find inspiration and reflection in the sculptural works.<br><br>

	Throughout the month-long installation, the Asia Pacific University Art and Recreational Club will encourage visitors to explore the garden, interact with the artworks, and share their personal reflections and interpretations. This collaborative, community-driven approach will ensure that the Outdoor Sculpture Garden becomes a beloved and cherished destination on campus.<br><br>

	Start Date and Time: June 1, 2024, 9:00 AM<br>
	End Date and Time: June 30, 2024, 5:00 PM<br>
	Venue: University Grounds.</p>`;
      break;
    case '3':
      eventDetailsDiv.innerHTML = `<h1>Photography Exhibition and Workshop</h1><br>

	<p>The Asia Pacific University Art and Recreational Club is thrilled to host a Photography Exhibition and Workshop. This event will showcase the exceptional work of our student photographers, covering a diverse range of subjects and styles. Visitors will have the opportunity to immerse themselves in the captivating imagery and engage with the artists.<br><br>

	The exhibition will be divided into themed sections, allowing attendees to explore a wide variety of photographic genres, from portraiture and landscape to conceptual and documentary work. Each section will be accompanied by informative panels and interactive displays, providing context and insights into the creative process behind the featured photographs.<br><br>

	In addition to the exhibition, the event will feature hands-on photography workshops led by industry professionals. These workshops will cover a range of topics, including camera operation, lighting techniques, composition principles, and post-processing software. Attendees will have the chance to experiment with different equipment, try out new approaches, and receive feedback from the experienced instructors.<br><br>

	The Photography Exhibition and Workshop will also include a print sale, where visitors can purchase their favorite pieces directly from the student photographers. This initiative will not only support the artists financially but also enable the community to take a piece of the event's magic home with them.<br><br>

	Throughout the five-day event, there will be various opportunities for attendees to engage with the photographers, attend artist talks, and participate in panel discussions. These interactive sessions will provide a deeper understanding of the creative, technical, and conceptual aspects of the art form, fostering a greater appreciation for the medium among the audience.<br><br>

	The Asia Pacific University Art and Recreational Club is confident that the Photography Exhibition and Workshop will be a resounding success, inspiring the community to explore the power of visual storytelling and the artistic potential of the photographic medium.<br><br>

	Start Date and Time: July 10, 2024, 11:00 AM<br>
	End Date and Time: July 14, 2024, 7:00 PM<br>
	Venue: University Cultural Center</p>`;
      break;
    case '4':
      eventDetailsDiv.innerHTML = `<h1>Social Events and Bonding Activities</h1><br><p>Volleyball is not just about the sport itself; it's also about the connections we build and the memories we create. That's why we organize a variety of social events and bonding activities for our club members. From team dinners and movie nights to outdoor excursions and volunteer work, these events allow you to forge lasting friendships and strengthen the club's sense of community.</p>`;
      break;
    case '5':
      eventDetailsDiv.innerHTML = `<h1>On-Campus Demonstrations and Showcases</h1><br><p>To raise awareness about our club and inspire the wider university community, we regularly participate in on-campus demonstrations and showcases. These events provide an opportunity for you to demonstrate your arts and engage with fellow students.</p>`;
      break;
  }
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Auto scroll to bottom of the page
function ScrollBottom() {
  const form = document.getElementById('formBody');
  form.scrollIntoView({
    behavior: "smooth"
  });
}

//Show terms and condition
function showPayment(event) {
  event.preventDefault();
  const payment_form = document.getElementById('paymentBody');
  const form = document.getElementById('formBody');
  form.style.display = 'none';
  payment_form.style.display = 'block';
}

//Open payment.html
function agree(event) {
  event.preventDefault();
  window.location.href = "payment.html";
}

//Carousel on index.html
document.addEventListener('DOMContentLoaded', function () {
  let currentImageIndex = 0;

  //Data to display
  const images = ['img/_MG_0044.jpg', 'img/_MG_0178.jpg', 'img/IMG_0021.jpg'];
  const author = ['Photography Club', 'Photography Club', 'Photography Club'];
  const title = ['The Asia Pacific University Art and Recreational Club is thrilled to host a Photography Exhibition and Workshop. This event will showcase the exceptional work of our student photographers, covering a diverse range of subjects and styles. Visitors will have the opportunity to immerse themselves in the captivating imagery and engage with the artists.', ' The Asia Pacific University Art and Recreational Club is proud to present its Annual Art Showcase, a celebration of the diverse talents and creativity of our student artists. This event will feature a wide range of mediums, including painting, sculpture, photography, and digital art. Each piece will be meticulously curated to provide a visually stunning and thought-provoking experience for our audience.', 'Immerse yourself in the serene beauty of the Aokigahara Forest for a morning of nature photography. This guided excursion will take participants on a picturesque hike through the lush, otherworldly landscape, providing ample opportunities to capture the diverse flora and fauna that call this forest home.'];

  //Read ID from html
  const imageElement = document.getElementById('carousel-image');
  const authorElement = document.getElementById('author-name');
  const titleElement = document.getElementById('title');

  //Default Text
  authorElement.textContent = author[0];
  titleElement.textContent = title[0];
  imageElement.src = images[0];

  //Change data
  function changeImage(step) {
    currentImageIndex += step;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    //Pass data
    imageElement.src = images[currentImageIndex];
    authorElement.textContent = author[currentImageIndex];
    titleElement.textContent = title[currentImageIndex];

  }

  //Function call from button
  document.querySelector('.next').addEventListener('click', function () {
    changeImage(1);
  });

  document.querySelector('.prev').addEventListener('click', function () {
    changeImage(-1);
  });
});

document.addEventListener('DOMContentLoaded', function () {

  //Display images for different category
  const imageContainer = document.querySelector('.gallery-container');

  function clearGrid() {
    // Remove all child elements from the image container
    while (imageContainer.firstChild) {
      imageContainer.removeChild(imageContainer.firstChild);
    }
  }

  // Clear the grid before displaying new images
  function displayImage(images) {
    clearGrid();
    //Display images again
    images.forEach((imgUrl) => {
      const img = document.createElement('img');
      img.src = imgUrl;
      img.alt = 'alt';
      imageContainer.appendChild(img);

      img.addEventListener('click', function () {
        showImageModal(imgUrl);
      })
    });
  }

  //Read image link from img.json
  fetch('img.json')
    .then(response => response.json())
    .then(data => {
      displayImage(data.street);
    });

  const buttons = document.querySelectorAll('.submission_btn');

  // Add click event listeners to each button
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      // Get the category from the button's text content
      const category = button.textContent.toLowerCase();
      fetch('img.json')
        .then(response => response.json())
        .then(data => {
          // Display images based on the selected category
          displayImage(data[category]);
        });
    });
  });
	
	function showImageModal(imageUrl) {
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const closeButton = document.querySelector('.close-button');

  modalImage.src = imageUrl;
  modal.style.display = 'block';

  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
}
});
