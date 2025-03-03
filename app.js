var products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    variations: [
      { id: 1, color: "black", price: 55000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 3.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
    ],
  },
];

// EXERCISE NO 01

function FindProductByID(ProductID) {
  for(let i = 0; i < products.length; i++){
    if(products[i].id === ProductID){
      return products[i];
    }
  }
  return null;
}

alert("This Product ID Are Available:-\n ID: 101 , 102 , 103");

function SearchProducts() {
  let InputID = document.getElementById("ProductInput").value;
  let ProductDetails = document.getElementById("result");

  let productID = parseInt(InputID);



  if (isNaN(productID)) {
    ProductDetails.innerHTML = `<p style="color: red;">Please Enter a Valid ID.</p>`;
    return;
  }

  let product = FindProductByID(productID);

  if (product) {
    let variationsList = "";
    if (product.variations.length > 0) variationsList += `<br>${product.variations[0].color} - Rs. ${product.variations[0].price} (Stock: ${product.variations[0].quantity})`;
    if (product.variations.length > 1) variationsList += `, <br>${product.variations[1].color} - Rs. ${product.variations[1].price} (Stock: ${product.variations[1].quantity})`;
    if (product.variations.length > 2) variationsList += `, <br>${product.variations[2].color} - Rs. ${product.variations[2].price} (Stock: ${product.variations[2].quantity})`;

    let reviewsList = "";
    if (product.reviews.length > 0) reviewsList += `<br>${product.reviews[0].user} (${product.reviews[0].rating}👍): ${product.reviews[0].title}`;
    if (product.reviews.length > 1) reviewsList += `<br>${product.reviews[1].user} (${product.reviews[1].rating}👍): ${product.reviews[1].title}`;
    if (product.reviews.length > 2) reviewsList += `<br>${product.reviews[2].user} (${product.reviews[2].rating}👍): ${product.reviews[2].title}`;

    ProductDetails.innerHTML = `
      <h2><strong>Product Found</strong></h2>
      <p><strong>ID:</strong> ${product.id}</p>
      <p><strong>Title:</strong> ${product.title}</p>
      <p><strong>Variations:</strong> ${variationsList}</p>
      <p><strong>Reviews:</strong> ${reviewsList}</p>
    `;
  } else {
    ProductDetails.innerHTML = `<p style="color: red;">Product not Found.</p>`;
  }
}

// /--------------------------------------------------------------------------------------------------------------------/ 

// EXERCISE NO 02

function ShowAllProducts() {
  let AllProductName = document.getElementById("listproductsTitle");

  if (products.length === 0) {
    AllProductName.innerHTML = "<p>No Found Products</p>";
    return;
  }

  let listAllProducts = '<h3><strong>All Product Title</strong></h3>';

  for (let i = 0; i < products.length; i++) {
    listAllProducts += `<p>${products[i].title}</p>`;
  }

  listAllProducts += `</p>`;
  AllProductName.innerHTML = listAllProducts;

}

// /--------------------------------------------------------------------------------------------------------------------/ 

// EXERCISE NO 03

function ShowAllProductsColor() {
  let AllProductColor = document.getElementById("listproductsColor");

  if (products.length === 0) {
    AllProductColor.innerHTML = '<p>Product Not Found</p>';
    return;
  }

  let ListColor = '<h3><strong>All Product Colors</strong></h3>';
  for (let i = 0; i < products.length; i++) {
    ListColor += `<p><strong>Product ${i + 1} Colors:</strong></p>`;
    for (let j = 0; j < products[i].variations.length; j++) {
      ListColor += `<p>${products[i].variations[j].color}</p>`;
    }
  }

  AllProductColor.innerHTML = ListColor;
}

// /--------------------------------------------------------------------------------------------------------------------/ 

