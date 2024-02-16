document.addEventListener("DOMContentLoaded", function () {
  fetch("https://products-api-2ttf.onrender.com/api/products")
    .then((response) => response.json())
    .then((data) => {
      displayResults(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

function search() {
  var searchInput = document.getElementById("searchInput").value;
  var searchResults = document.getElementById("searchResults");

  fetch("https://products-api-2ttf.onrender.com/api/products")
    .then((response) => response.json())
    .then((data) => {
      // Filter the data based on the search input
      var filteredData = data.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      // Display the search results
      displayResults(filteredData);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function displayResults(results) {
  var searchResults = document.getElementById("searchResults");
  // Clear previous results
  searchResults.innerHTML = "";
  // Display each result
  results.forEach((product) => {
    var productContainer = document.createElement("div");
    productContainer.classList.add("result-bg");

    var titleElement = document.createElement("h2");
    titleElement.textContent = product.title;
    titleElement.classList.add("heading");
    productContainer.appendChild(titleElement);

    var imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.classList.add("image-bg");
    // Assuming the image URL is provided in the 'image' property of the product object
    imageElement.alt = product.title; // Providing alt text for accessibility
    productContainer.appendChild(imageElement);

    searchResults.appendChild(productContainer);
  });
}
