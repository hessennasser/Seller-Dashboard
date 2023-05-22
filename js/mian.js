//toggle sidebar
document.getElementById("menu-toggle").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("wrapper").classList.toggle("toggled");
});


const productionDateInput = document.getElementById('productionDate');
const expiryDateInput = document.getElementById('expiryDate');

// Add an event listener to the expiry date input
expiryDateInput.addEventListener('change', function () {
    if (productionDateInput.value === expiryDateInput.value) {
        expiryDateInput.value = "";
        alert('Production Date and Expiry Date are the same!');
    }
});
const updateProductionDateInput = document.getElementById('updateProductionDate');
const updateExpiryDateInput = document.getElementById('updateExpiryDate');

// Add an event listener to the expiry date input
updateExpiryDateInput.addEventListener('change', function () {
    if (updateProductionDateInput.value === updateExpiryDateInput.value) {
        updateExpiryDateInput.value = "";
        alert('Production Date and Expiry Date are the same!');
    }
});

// preventDefault to forms

document.querySelector("#addForm").addEventListener("submit", (e) => e.preventDefault());
document.querySelector("#updateForm").addEventListener("submit", (e) => e.preventDefault());
