console.log(products)
let filteredProducts = [...products]
console.log(filteredProducts)

const productsContainer = document.querySelector(".not-sidebar")
const searchForm = document.querySelector(".input-form")
const searchInput = document.querySelector(".search-input")

searchForm.addEventListener("keyup", () => {
    let searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm)
    filteredProducts = products.filter(product => {
        return product.title.includes(searchTerm)
    })
    displayProuducts()
})

//loop and display each prouduct

function displayProuducts() {
    productsContainer.innerHTML = filteredProducts.map(product => {
      return  `<article class="prouduct">
                    <img class="border" src="${product.image}" alt=""/>
                    <footer>
                        <p class="product-name">${product.title}</p>
                        <p class="product-price">${product.price}</p>
                    </footer>
                </article>`
    }).join("")
}


displayProuducts()