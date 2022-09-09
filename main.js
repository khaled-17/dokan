//  opeen & close cart
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
    cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cart.classList.remove("active");

});
// Start when the document is ready
if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', start);
} else {

    start();
}

// ===== ==     ===== START ====
function start() {
    addEvents();
}


// ================UPDATE & RERENDER
function update() {
    addEvents();
    updateTotal();
}

//========== ADD EVENTS ====

function addEvents() {
    // Remove items from cart
    let cartRemove_btns = document.querySelectorAll(".cart-remove");
    // console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn) => {
        btn.addEventListener("click", handle_remoeCartItem)
    });

// Change item quantity
let cartQuantity_inputs = document.querySelectorAll('.cart-quantity');
cartQuantity_inputs.forEach(input => {
input.addEventListener("change", handle_changeItemQuantity);
console.log(input.addEventListener("change", handle_changeItemQuantity));

})

console.log(cartQuantity_inputs);
console.log(cartQuantity_inputs);








}
// ============handle_event function=========
function handle_remoeCartItem() {
    this.parentElement.remove();
    update()
}

function handle_changeItemQuantity() {
    if (isNaN(this.value)||this.value<1) {
    this.value = 1;
    }
    this.value = Math.floor(this.value); // to keep it integer
    update(); I
    }
// ==    == UPDATE & RERENDER FUNCTIONS

function updateTotal() {
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price") ;

    let total = 0;
    cartBoxes.forEach((cartBox) => {
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("$", ""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
        console.log(total);
    });

//keep 2 digits after the decimal point  12,22222 >> 12,12
    total=total.toFixed(2) 
if (total==0) {

// ram >>>> pay now must be <a> or botton
    totalElement.innerHTML = "$"+ total+ " pay now";
} else {
    totalElement.innerHTML = "$"+ total;

}


    // totalElement.innerHTML = "$"+ total;
} 