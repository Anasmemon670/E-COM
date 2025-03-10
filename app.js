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
      { id: 1, color: "Silver", price: 35000, quantity: 5 },
      { id: 2, color: "red", price: 25000, quantity: 1 },
      { id: 3, color: "black", price: 75000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Suffyain",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Kamran",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ayan",
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
        user: "Rashid",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Rayyan",
        rating: 3.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
    ],
  },
];

// EXERCISE NO 01;

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

// EXERCISE NO 02;

function ShowAllProductsTitle() {
  let AllProductName = document.getElementById("listproductsTitle");

  if (products.length === 0) {
    AllProductName.innerHTML = "<p>No Found Products</p>";
    return;
  }

  let listAllProducts = '<h3><strong>All Product Title</strong></h3>';

  for (let i = 0; i < products.length; i++) {
    listAllProducts += `<p> ${i + 1}) ${products[i].title}</p>`;
  }

  listAllProducts += `</p>`;
  AllProductName.innerHTML = listAllProducts;

}

// /--------------------------------------------------------------------------------------------------------------------/ 

// EXERCISE NO 03;

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

// EXERCISE NO 04;


function getTotalQuantity() {
  let productId = 101;
  let resultElement = document.getElementById("listproductsQuantity");

  let product = products.find(p => p.id === productId);

  if (!product) {
    resultElement.innerHTML = "<span style='color: red;'>Product Not Found</span>";
    return;
  }

  let totalQuantity = product.variations.reduce((sum, variation) => sum + variation.quantity, 0);

  resultElement.innerHTML = `<h3><strong>Total Quantity: ${totalQuantity}</strong></h3>`;
}

// /--------------------------------------------------------------------------------------------------------------------/

// EXERCISE NO 05;

function findLowStockProducts() {
  let StockElement = document.getElementById("listproductsStock");

  let LowStockProducts = products
  .filter(product => product.variations.some(variation => variation.quantity < 2))
  .map(product => `${product.title}: ${product.variations.filter(variation => variation.quantity < 2).map(variation => variation.quantity).join(", ")}`)

  if (LowStockProducts.length === 0) {
    StockElement.innerHTML = "<h3 style='color: red;'>Product Not Found.</h3>";
    return;
  }

  StockElement.innerHTML = `<h3>Low Stock Products:</h3> <p>${LowStockProducts.join("<br>")}</p>`;
}

// /--------------------------------------------------------------------------------------------------------------------/

// EXERCISE NO 06;
  
function HighestRatedProduct(){
  let Result = document.getElementById("listproductHighestRated");

  if (products.length === 0) {
    resultElement.innerHTML = "<p style='color: red;'>No products available.</p>";
    return;
};

  let HighRateProduct = products.map(products => {
    let TotalRating = products.reviews.reduce((sum , review) => sum + review.rating , 0);
    let AvgRating = TotalRating / products.reviews.length

    return {
      title: products.title,
      AvgRating: AvgRating
    };
  });

  let HighestRating = HighRateProduct.reduce((max , product) => 
  product.AvgRating > max.AvgRating ? products: max
);

Result.innerHTML = `<h3 style="color: green;">Highest Rated Product: ${HighestRating.title} (${HighestRating.AvgRating.toFixed(1)}⭐)</h3>`;


}; 

// /--------------------------------------------------------------------------------------------------------------------/

// EXERCISE NO 07;

function FindActiveReviews() {
  let inputreviews = document.getElementById("ProductReviews").value;
  let ReviewsResult = document.getElementById("getActiveReviews");

  let productID = parseInt(inputreviews);

  let ApprovedReviews = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productID) {
      for (let j = 0; j < products[i].reviews.length; j++) {
        if (products[i].reviews[j].status) {
          ApprovedReviews.push(products[i].reviews[j]);
        };
      };
    };
  };

  if (ApprovedReviews.length === 0) {
    ReviewsResult.innerHTML = "<p style = 'color: darkred;'>No approved reviews found for this product.</p>";
    return;
  }

  let TotalReviews = "<h2>Approved Reviews</h2>";
  for (let k = 0; k < ApprovedReviews.length; k++) {
    TotalReviews += `
      <div class="review">
        <p><strong>User:</strong> ${ApprovedReviews[k].user}</p>
        <p><strong>Rating:</strong> ${ApprovedReviews[k].rating}</p>
        <p><strong>Comment:</strong> ${ApprovedReviews[k].comments}</p>
        <p><strong>Status:</strong> ${ApprovedReviews[k].status}</p>
      </div>
    `;
  };
  ReviewsResult.innerHTML = TotalReviews;
}

// /--------------------------------------------------------------------------------------------------------------------/

// EXERCISE NO 08;

function FindMostExpensiveProducts() {
  let ExpensiveProduct = document.getElementById("ExpensiveProduct").value;
  let ExpensiveProductResult = document.getElementById("getExpensiveProducts");

  let productID = parseInt(ExpensiveProduct);

  let MostExpensivePrice = 0;
  let MostExpensiveVariation = null;
  let MostExpensiveProduct = null;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productID) {
      for (let j = 0; j < products[i].variations.length; j++) {
        if (products[i].variations[j].price > MostExpensivePrice) {
          MostExpensivePrice = products[i].variations[j].price;
          MostExpensiveVariation = products[i].variations[j];
          MostExpensiveProduct = products[i];
        };
      };
    };
  };

  if (MostExpensiveVariation) {
    ExpensiveProductResult.innerHTML = `
      <h2>Most Expensive Product.</h2>
      <div class="product">
        <p><strong>Product:</strong> ${MostExpensiveProduct.title}</p>
        <p><strong>Color:</strong> ${MostExpensiveVariation.color}</p>
        <p><strong>Price:</strong> $${MostExpensiveVariation.price}</p>
      </div>
    `;
  } else {
    ExpensiveProductResult.innerHTML = "<p style='color: red;'>No expensive product found.</p>";
  }
} 

// /--------------------------------------------------------------------------------------------------------------------/

// EXERCISE NO 09;

function CalculateTotalStockQuantity(){
  let TotalProduct = document.getElementById("TotalProduct").value;
  let StockResult = document.getElementById("getTotalStockProducts");

  let productID = parseInt(TotalProduct); 

  let TotalValueOfStockProduct = 0;

  for(let i = 0; i < products.length; i++){
    if(products[i].id === productID){
      for(let j = 0; j < products[i].variations.length; j++){
        TotalValueOfStockProduct += products[i].variations[j].price * products[i].variations[j].quantity;
      };
    };
  };

  if(TotalValueOfStockProduct){
  StockResult.innerHTML = `<p><strong>Total Stock Value: ${TotalValueOfStockProduct}</strong></p>`;
} else{
  StockResult.innerHTML = "<p style='color: red;'>No Stock product are Available.</p>";
};
}



