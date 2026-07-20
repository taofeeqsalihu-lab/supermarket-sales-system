function addProduct() {
  fetch('/api/products/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: "Milk", category: "Dairy", price: 2.5, quantity_in_stock: 100 })
  })
  .then(res => res.json())
  .then(data => console.log("Product added:", data));
}

function recordSale() {
  fetch('/api/sales/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product: 1, quantity_sold: 2, total_price: 5.0 })
  })
  .then(res => res.json())
  .then(data => console.log("Sale recorded:", data));
}

