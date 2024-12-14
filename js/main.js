let category_nav_list = document.querySelector(".category_nav_list");
function open_categ_list(){
    category_nav_list.classList.toggle("active")
};

let cart=document.querySelector(".cart");
function open_close_cart(){
  cart.classList.toggle("active");
}
let nav_links=document.querySelector('.nav_links')
function open_menu(){
  nav_links.classList.toggle("active")
}

fetch('products.json')
.then(response => response.json())
.then(data =>{
  
  const addToCArtButtons=document.querySelectorAll(".btn_add_card");
  addToCArtButtons.forEach(button=>{
    button.addEventListener("click",(event)=>{
      const productId=event.target.getAttribute('data-id');
      const selectProduct=data.find(product => product.id==productId);

      adddToCart(selectProduct);
      const allMatchingButton=document.querySelectorAll(`.btn_add_card[data-id="${productId}"]`);
      allMatchingButton.forEach(btn=>{
        btn.classList.add("active");
        btn.innerHTML=`
        <i class="fa-solid fa-cart-shopping"></i> item in cart
        `
      })
    })
  })
})

function adddToCart(product){
  let cart =JSON.parse(localStorage.getItem('cart'))|| [];
  cart.push({... product,quantity:1});
  localStorage.setItem('cart',JSON.stringify(cart));
  updateCart();
}

function updateCart(){
  const cartItemscontainer=document.getElementById("cart_items");
  let cart =JSON.parse(localStorage.getItem('cart'))|| [];

  var total_price=0;
  var total_count=0;
  cartItemscontainer.innerHTML=``;
  cart.forEach((item,index)=>{

    let total_price_item=item.price*item.quantity;
    total_price+=total_price_item;
    total_count+=item.quantity;
    cartItemscontainer.innerHTML+=`
    <div class="item_cart">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart">$${total_price_item}</p>
                    <div class="quantity_control">
                        <button class="decrease_quantity" data-index=${index}>-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase_quantity" data-index=${index}>+</button>
                    </div>
                </div>
                <button class="delete_item" data-inex="${index}"><i class="fa-solid fa-trash-can"></i></button>

            </div>
    `
  })

  const price_cart_total=document.querySelector('.price_cart_total');
  const count_item_cart=document.querySelector('.Count_item_cart');
  const count_item_header=document.querySelector('.count_item_header');
  price_cart_total.innerHTML=`$${total_price}`
  count_item_cart.innerHTML=total_count;
  count_item_header.innerHTML=total_count;


  

  const increaseButtons=document.querySelectorAll('.increase_quantity');
  const decreaseButtons=document.querySelectorAll('.decrease_quantity');
  increaseButtons.forEach(btn=>{
    btn.addEventListener("click",(event)=>{
      const itemIndex=event.target.getAttribute("data-index");
      increaseQuantity(itemIndex);
    })
  })

   decreaseButtons.forEach(btn=>{
    btn.addEventListener("click",(event)=>{
      const itemIndex=event.target.getAttribute("data-index");
      console.log(itemIndex)
      decreaseQuantity(itemIndex);
    })
  })




  const deleteButton=document.querySelectorAll('.delete_item');
  deleteButton.forEach(btn=>
    btn.addEventListener("click",(event)=>{
      const itemIndex=event.target.closest('button').getAttribute('data-inex');
      removeFromCart(itemIndex);
    
    })
  )
}


function increaseQuantity(index){
  let cart =JSON.parse(localStorage.getItem('cart'))|| [];
  cart[index].quantity+=1;
  localStorage.setItem('cart',JSON.stringify(cart))
  updateCart();

}
function decreaseQuantity(index){
  let cart =JSON.parse(localStorage.getItem('cart'))|| [];
  if(cart[index].quantity>1){
  cart[index].quantity-=1;
  localStorage.setItem('cart',JSON.stringify(cart))
  updateCart();
  }
  

}

function  removeFromCart(index){
  let cart =JSON.parse(localStorage.getItem('cart'))|| [];
  const removeProduct=cart.splice(index,1)[0];
  localStorage.setItem('cart',JSON.stringify(cart));
  updateCart();
  updateButtonState(removeProduct.id);
}
  function updateButtonState(productId) {
    const allMatchingButton=document.querySelectorAll(`.btn_add_card[data-id="${productId}"]`);
    allMatchingButton.forEach(btn=>{
        btn.classList.remove("active");
        btn.innerHTML=`
        <i class="fa-solid fa-cart-shopping"></i> add to cart
        `
      })  

    }
    

updateCart();