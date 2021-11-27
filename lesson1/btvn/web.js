const API_PRODUCTS =
      "https://60ae0d5e80a61f00173324bc.mockapi.io/products";
    const defaultImg = src = "https://lh3.googleusercontent.com/9t4ddHZRUlpZWJqdzDcMKDu95AN-2mUuZ0NtFwjTZrbxmvutQP0c6uJsQN4H0kHmXPB4NxRnEtSO1_vfATHwBHrrCVkq-3EV9Q=w500-rw"
    async function fetchAllProducts() {
      const response = await fetch(API_PRODUCTS);
      const data = await response.json();
      renderUI(data)
    
    }

    function renderUI(products) {
      const html = products.map(product => {
        const { color, errorDescription, id, image, sku, name } = product;
        return `
          <div class="product" style= "padding:10px; border-radius: 8px; background-color: #fff">
            <img
            style ="width:250px
            src="${image || defaultImg}"
            alt="${name}">
            <div class="card-body">
              <h3><b>Name</b>: ${name}</h3>
              <p><b>Error</b>: ${errorDescription}</p>
              <p><b>SKU</b>: ${sku}</p>
              <p><b>ID</b>: ${id}</p>
              <p><b>Color</b>: ${color || 0}</p>
            </div>
          </div>
         `
      });
      document.getElementById("root").innerHTML = html.join("");
    }
    fetchAllProducts()