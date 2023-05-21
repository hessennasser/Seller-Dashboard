//toggle sidebar
document.getElementById("menu-toggle").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("wrapper").classList.toggle("toggled");
});

// toggle subMenu
const productsBtn = document.querySelector(".productsBtn");
const subMenu = document.querySelector('.sub-menu');

productsBtn.addEventListener('click', () => {
    subMenu.classList.toggle('hidden');
});

// control deferent tabs
// overview tab
const overviewBtn = document.querySelector(".overviewBtn");
const overviewTab = document.querySelector("#overview");

overviewBtn.addEventListener("click", () => {
    overviewTab.hidden = false;
    addTab.hidden = true;
    allProductsTab.hidden = true;
    updateProducts.hidden = true;
    deleteProducts.hidden = true;

})

// allProducts tab
const allProductsBtn = document.querySelector("#allProductsBtn");
const allProductsTab = document.querySelector("#allProducts");

allProductsBtn.addEventListener("click", () => {
    allProductsTab.hidden = false;
    overviewTab.hidden = true;
    addTab.hidden = true;
    updateProducts.hidden = true;
    deleteProducts.hidden = true;
})

// add products tab
const addBtn = document.querySelector("#addBtn");
const addTab = document.querySelector("#add-widget");

addBtn.addEventListener("click", () => {
    addTab.hidden = false;
    overviewTab.hidden = true;
    allProductsTab.hidden = true;
    updateProducts.hidden = true;
    deleteProducts.hidden = true;
})

// Update products tab
const updateProductsBtn = document.querySelector("#updateProductsBtn");
const updateProducts = document.querySelector("#updateProducts");

updateProductsBtn.addEventListener("click", () => {
    updateProducts.hidden = false;
    overviewTab.hidden = true;
    allProductsTab.hidden = true;
    addTab.hidden = true;
    deleteProducts.hidden = true;
})

// Delete products tab
const deleteProductsBtn = document.querySelector("#deleteProductsBtn");
const deleteProducts = document.querySelector("#deleteProducts");

deleteProductsBtn.addEventListener("click", () => {
    deleteProducts.hidden = false;
    overviewTab.hidden = true;
    allProductsTab.hidden = true;
    addTab.hidden = true;
    updateProducts.hidden = true;
})


overviewBtn.click()