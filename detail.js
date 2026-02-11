function getDetail() {
    const detailProdact = document.getElementById("detailProdact");
    
    const params = new URLSearchParams(location.search);
    const prodactId = params.get("id");

    if(!prodactId){
        detailProdact.textContent = "ID tidak ditemukan";
        return;
    }

    fetch("./assets/data.json")
    .then(response => response.json())
    .then(data => {
        const item = data.find(row => row.id === prodactId);

        if(!item) {
            detailProdact.textContent = "Prodact tidak ditemukan";
            return;
        }

        detailProdact.innerHTML = `
            <div class="detail-card">
                <div class="detail-hero" style="background-image: url('${item.image}')"></div>
                <div class="detail-body">
                    <a href="index.html" class="back">&#8592; kembali</a>
                    <h1>${item.title}</h1>
                    <p>${item.subtitle}</p>
                    <div id="detailBody"></div>
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
            </div>
        `;

        const detailBody = document.getElementById("detailBody");
        const paragraps = (item.detail_description || "").split(/\n+/);

        paragraps.forEach(text => {
            const trimmed = text.trim();
            const p = document.createElement("p");
            p.textContent = trimmed;
            detailBody.appendChild(p);
        });
    })
}

getDetail();