const products = [
    {
      id: 1,
      imgSrc: 'assets/img/product1.jpg',
      title: 'Nike Shoes1',
      price: '$79.5',
    },
    {
      id: 2,
      imgSrc: 'assets/img/product2.jpg',
      title: 'Nike Shoes2',
      price: '$79.5',
    },
    {
      id: 3,
      imgSrc: 'assets/img/product3.jpg',
      title: 'Nike Shoes3',
      price: '$79.5',
    },
    {
      id: 4,
      imgSrc: 'assets/img/product4.jpg',
      title: 'Nike Shoes4',
      price: '$79.5',
    },
    {
      id: 5,
      imgSrc: 'assets/img/product5.jpg',
      title: 'Nike Shoes5',
      price: '$79.5',
    },
    {
      id: 6,
      imgSrc: 'assets/img/product6.jpg',
      title: 'Nike Shoes6',
      price: '$79.5',
    },
    {
      id: 7,
      imgSrc: 'assets/img/product7.jpg',
      title: 'Nike Shoes7',
      price: '$79.5',
    },
    {
      id: 8,
      imgSrc: 'assets/img/product8.jpg',
      title: 'Nike Shoes8',
      price: '$79.5',
    },
  ];
  


//  open & close cart
const cartIcon = document.querySelector("#cart-icon");
cartIcon.addEventListener("click", () => {
    cart.classList.add("active");
});

const closeCart = document.querySelector("#cart-close");
closeCart.addEventListener("click", () => {
    cart.classList.remove("active");

});



// add and bost your products 
const shopContent = document.querySelector(".shop-content");

document.addEventListener('DOMContentLoaded', function () {

     products.forEach(product => {
        const productElement = document.createElement('div');
       
        productElement.innerHTML = `
        <div class="product-box">
        <img src="${product.imgSrc}" alt="${product.title}" class="product-img">
        <h2 class="product-title">${product.title}</h2>
        <span class="product-price">${product.price}</span>
        <i class=' bx bx-shopping-bag add-cart'></i>

     </div>
        `;
        shopContent.appendChild(productElement);
    });


     
});







const cart = document.querySelector(".cart");
 

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

    // console.log(cartQuantity_inputs);
    // Add item to cart
    let addCart_btns = document.querySelectorAll(".add-cart");
    addCart_btns.forEach(btn => {
        btn.addEventListener("click", handle_addCartItem)
    })

var buy_btn=document.querySelector(".btn-buy")
buy_btn.addEventListener("click",handle_buyOrder)




}
// ============handle_event function=========

let itemAdded=[]
function handle_addCartItem() {
    let product = this.parentElement;

}
function handle_addCartItem() {
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgsrc = product.querySelector(".product-img").src;
    // console.log(title, price, imgsrc);
    let newToAdd = { title, price, imgsrc };
    //handle item is as exited 
    // handle item is already exist
    // handle item is already exist
    if (itemAdded.find((el) => el.title == newToAdd.title)) {

        alert("This Item Is Already Exist!");
        return;

    } 
    else {

        itemAdded.push(newToAdd);

    }


    // Add product to cart                           imgsrc
    let cartBoxElement = CartBoxComponent(title, price, imgsrc);
    let newNode = document.createElement('div');

    newNode.innerHTML = cartBoxElement;
    const cartcontent = cart.querySelector(".cart-content");
    cartcontent.appendChild(newNode);
    update()
}







 
function handle_remoeCartItem() {
    this.parentElement.remove();
    // ظظظ ؟؟
    itemAdded =itemAdded.filter(
    (el) => el.title !=
    this.parentElement.querySelector(".cart-product-title").innerHTML
    )
    update()
}

function handle_changeItemQuantity() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    this.value = Math.floor(this.value); // to keep it integer
    update();
}

function handle_buyOrder( ) {
    console.log("fdf");
    if (itemAdded.length<=0) {
        // alert("no order ")
       // Create an "li" node:
const node = document.createElement("li");

// Create a text node:
const textnode = document.createTextNode("yor card is empty");

 node.appendChild(textnode);

       const dog= document.querySelector('.total').appendChild(node);//.appendChild="<h1>dddd</h1>"
       console.log(dog);
 


       
        //????
        return;
    }
    var cartcontent=cart.querySelector(".cart-content")
    console.log(cartcontent);
    cartcontent.innerHTML=" handle_buyOrder";
    alert("you orderd succesefuly ")
    itemAdded
update();
}



// ==    == UPDATE & RERENDER FUNCTIONS

function updateTotal() {
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price");

    let total = 0;
    cartBoxes.forEach((cartBox) => {
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("$", ""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
        console.log(total);
    });

    //keep 2 digits after the decimal point  12,22222 >> 12,12
    total = total.toFixed(2)
    if (total == 0) {

        // ram >>>> pay now must be <a> or botton
        totalElement.innerHTML = "$" + total + " pay now";
    } else {
        totalElement.innerHTML = "$" + total;

    }


}

//  html Commponant 
// let cartBoxElement = CartBoxComponent(title,price,imgSrc)

function CartBoxComponent(title, price, imgSrc) {
    return '<div class="cart-content"> <div class="cart-box">' +
        '<img src="' + imgSrc + '" alt="" class="cart-img"> <div class="detail-box">'
        + ' <div class="cart-product-title">' + title + '</div>'
        + '   <div class="cart-price">' + price + '</div>'
        + '<input type="number" value="1" class="cart-quantity">'
        + '</div><!-- REMOVE CART --><i class="bx bxs-trash-alt cart-remove"></i></div></div>';

}

