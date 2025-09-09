fetch("PRODUCTS.md")
  .then(response => response.text())
  .then(text => {
    document.getElementById("product-list").innerHTML = marked.parse(text);
  })
  .catch(err => {
    document.getElementById("product-list").innerHTML = "⚠️ Could not load Products.";
    console.error(err);
  });