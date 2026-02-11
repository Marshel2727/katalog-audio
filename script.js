function getData() {
  fetch("./assets/data.json")
    .then(response => response.json())
    .then(items => {
      items.forEach(item => {
        const card = document.createElement("div");
        const productList = document.getElementById("productList");
        const productUrl = `detail.html?id=${encodeURIComponent(item.id)}`;

        card.style.backgroundImage = `url(${item.image})`
        card.className = "product";
        card.innerHTML = `
                <div class="product-text">
                    <h1 class="title">${item.title}</h1>
                    <p class="subtitle">${item.subtitle}</p>

                    <div class="product-stats">

                        <div class="stat">
                            <span class="label">Warna</span>
                            <span class="value">${item.color}</span>
                        </div>
                        <div class="stat">
                            <span class="label">Bobot</span>
                            <span class="value">${item.weight}</span>
                        </div>
                        <div class="stat">
                            <span class="label">Latency</span>
                            <span class="value">${item.latency}</span>
                        </div>
                        <div class="stat">
                            <span class="label">Battery</span>
                            <span class="value">${item.battery}</span>
                        </div>
                        <div class="stat">
                            <span class="label">Harga</span>
                            <span class="value">${item.price}</span>
                        </div>
                        
                    </div>
                </div>
                `;

        const content = card.querySelector(".product-text")

        if (content) {
          content.onclick = () => {
            window.location.href = productUrl;
          }
        }

        productList.appendChild(card)
      });
    })
}

getData();