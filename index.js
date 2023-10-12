
  // JavaScript to toggle the "Found" form visibility
  document.getElementById("openFoundForm").addEventListener("click", function () {
      document.getElementById("foundForm").style.display = "block";
      document.getElementById("lostForm").style.display = "none"; // Hide the "Lost" form
  
  });
  //for cancel button
  document.getElementById("cancelFoundForm").addEventListener("click", function () {
        document.getElementById("foundForm").style.display = "none"; // Hide the "Found" form
  });

  // JavaScript to handle form submission (you can add AJAX or use a server endpoint for this)
  document.getElementById("foundPetForm").addEventListener("submit", function (e) {
      e.preventDefault();

      // Get the input values from the form
  const foundPetName = document.getElementById('foundPetName').value;
  const foundPetDescription = document.getElementById('foundPetDescription').value;

  // Create a HTML structure for the found item and update the placeholder
  const foundItemHTML = `
    <div class="col-md-6">
      <div class="card">
        <img src="path_to_found_image.jpg" class="card-img-top" alt="${foundPetName}">
        <div class="card-body">
          <h5 class="card-title">${foundPetName}</h5>
          <p class="card-text">${foundPetDescription}</p>
        </div>
      </div>
    </div>
  `;

  // Update the "Found Items Placeholder" with the new found item
  document.getElementById('foundItemsPlaceholder').innerHTML = foundItemHTML;

  // Reset the form
  document.getElementById('foundPetForm').reset();
});

      // Add code to handle form submission, including file upload and sending location
      // You can use JavaScript and a server-side script to process the form data
      // For example, you can use the FormData API for file upload and fetch() or XMLHttpRequest to send the data to the server.

       // JavaScript to toggle the "Lost" form visibility
        document.getElementById("openLostForm").addEventListener("click", function () {
         document.getElementById("lostForm").style.display = "block";
         document.getElementById("foundForm").style.display = "none"; // Hide the "Found" form
    
        });
        //for cancel button
        document.getElementById("cancelLostForm").addEventListener("click", function () {
        document.getElementById("lostForm").style.display = "none"; // Hide the "Lost" form
        });

        // JavaScript to handle form submission (you can add AJAX or use a server endpoint for this)
       document.getElementById("lostPetForm").addEventListener("submit", function (e) {
         e.preventDefault();

          // Get the input values from the form
  const petName = document.getElementById('petName').value;
  const petDescription = document.getElementById('petDescription').value;

  // Create a HTML structure for the lost item and update the placeholder
  const lostItemHTML = `
    <div class="col-md-6">
      <div class="card">
        <img src="path_to_lost_image.jpg" class="card-img-top" alt="${petName}">
        <div class="card-body">
          <h5 class="card-title">${petName}</h5>
          <p class="card-text">${petDescription}</p>
        </div>
      </div>
    </div>
  `;

  // Update the "Lost Items Placeholder" with the new lost item
  document.getElementById('lostItemsPlaceholder').innerHTML = lostItemHTML;

  // Reset the form
  document.getElementById('lostPetForm').reset();

         // Add code to handle form submission, including file upload and sending location
         // You can use JavaScript and a server-side script to process the form data
         // For example, you can use the FormData API for file upload and fetch() or XMLHttpRequest to send the data to the server.
        });
// JavaScript code to get and update current location
document.getElementById("getLostLocation").addEventListener("click", function() {
  if ("geolocation" in navigator) {
     navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const locationInput = document.getElementById("location");
        locationInput.value = `Latitude: ${latitude}, Longitude: ${longitude}`;
     }, function(error) {
        console.error("Error getting location:", error);
     });
  } else {
     alert("Geolocation is not available in your browser.");
  }
});

document.getElementById("getFoundLocation").addEventListener("click", function() {
  if ("geolocation" in navigator) {
     navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const locationInput = document.getElementById("foundLocation");
        locationInput.value = `Latitude: ${latitude}, Longitude: ${longitude}`;
     }, function(error) {
        console.error("Error getting location:", error);
     });
  } else {
     alert("Geolocation is not available in your browser.");
  }
});
// Add this code in your index.js

// Get a reference to the "Lost" form
const lostPetForm = document.getElementById('lostPetForm');

// Get a reference to the container where submitted data will be displayed
const recentLostAndFoundContainer = document.getElementById('recentLostAndFoundContainer');

// Listen for the "Lost" form submission
lostPetForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from actually submitting and refreshing the page

    // Gather form data
    const petName = document.getElementById('petName').value;
    const petDescription = document.getElementById('petDescription').value;
    const location = document.getElementById('location').value;

    // Create HTML elements to display the submitted data
    const newItem = document.createElement('div');
    newItem.className = 'carousel-item';
    newItem.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Lost Pet: ${petName}</h5>
                        <p class="card-text">Description: ${petDescription}</p>
                        <p class="card-text">Location: ${location}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Append the new item to the container
    recentLostAndFoundContainer.appendChild(newItem);

    // Clear the form fields
    lostPetForm.reset();
});
// Get a reference to the "Found" form
const foundPetForm = document.getElementById('foundPetForm');

// Listen for the "Found" form submission
foundPetForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from actually submitting and refreshing the page

    // Gather form data
    const foundPetName = document.getElementById('foundPetName').value;
    const foundPetDescription = document.getElementById('foundPetDescription').value;
    const foundLocation = document.getElementById('foundLocation').value;

    // Create HTML elements to display the submitted data
    const newItem = document.createElement('div');
    newItem.className = 'carousel-item';
    newItem.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Found Pet: ${foundPetName}</h5>
                        <p class="card-text">Description: ${foundPetDescription}</p>
                        <p class="card-text">Location: ${foundLocation}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Append the new item to the container
    recentLostAndFoundContainer.appendChild(newItem);

    // Clear the form fields
    foundPetForm.reset();
});

