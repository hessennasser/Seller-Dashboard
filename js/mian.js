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


// function handleImageUpload(event) {
//     const imagePreviewContainer = document.getElementById('imagePreviewContainer');

//     const files = event.target.files;
//     for (let i = 0; i < files.length; i++) {
//         const file = files[i];
//         const reader = new FileReader();

//         reader.onload = function (event) {
//             const imgDiv = document.createElement('div');
//             imgDiv.classList.add('border', 'p-2', "flex", "flex-col", "gap-4", "items-center");

//             const img = document.createElement('img');
//             img.classList.add('projectImgPreview', 'mx-auto', 'text-gray-300');
//             img.src = event.target.result;

//             const removeButton = document.createElement('button');
//             removeButton.classList.add('red-btn', "p-1");
//             removeButton.innerHTML = '<span class="mdi mdi-delete-outline text-2xl"></span>';
//             removeButton.addEventListener('click', function () {
//                 imgDiv.remove();
//             });

//             imgDiv.appendChild(img);
//             imgDiv.appendChild(removeButton);

//             // Check if the image already exists in the container
//             const existingImages = imagePreviewContainer.getElementsByTagName('img');
//             let isDuplicate = false;
//             for (let j = 0; j < existingImages.length; j++) {
//                 if (existingImages[j].getAttribute('data-file-name') === file.name) {
//                     isDuplicate = true;
//                     break;
//                 }
//             }

//             if (!isDuplicate) {
//                 img.setAttribute('data-file-name', file.name); // Set the data-file-name attribute
//                 imagePreviewContainer.appendChild(imgDiv);
//             }
//         };

//         reader.readAsDataURL(file);
//     }
// }

// check product stock number 
// Add new product
const productStockInput = document.getElementById("productStock");
const availableRadio = document.querySelector('input[value="available"]');
const outOfStockRadio = document.querySelector('input[value="out-of-stock"]');

productStockInput.addEventListener("input", (event) => {
    if (event.target.value == 0) {
        outOfStockRadio.checked = true;
    } else {
        availableRadio.checked = true;
    }
});

outOfStockRadio.addEventListener("input", () => {
    productStockInput.value = 0;
});

// Update product
const updateProductStockInput = document.querySelector("#Update-product-modal #productStock");
const updateAvailableRadio = document.querySelector('#Update-product-modal input[value="available"]');
const updateOutOfStockRadio = document.querySelector('#Update-product-modal input[value="out-of-stock"]');

updateProductStockInput.addEventListener("input", (event) => {
    if (event.target.value == 0) {
        updateOutOfStockRadio.checked = true;
    } else {
        updateAvailableRadio.checked = true;
    }
});

updateOutOfStockRadio.addEventListener("input", () => {
    updateProductStockInput.value = 0;
});
