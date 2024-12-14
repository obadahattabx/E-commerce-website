fetch('products.json')
.then(response => response.json())
.then(data=>{
    let cart =JSON.parse(localStorage.getItem('cart'))|| [];
    const swiper_item_sale=document.getElementById("swiper_item_sale");
    const swiper_electronics=document.getElementById("swiper_electronics");
    const swiper_appliances=document.getElementById("swiper_appliances");
    const swiper_mobiles=document.getElementById("swiper_mobiles");
    data.forEach(product => {
         const isInCart =cart.some(cartItem=>cartItem.id== product.id);
        if(product.old_price){
           
            let percent_disc=Math.floor((product.old_price-product.price)/product.old_price *100);
            swiper_item_sale.innerHTML+=`
                <div class="swiper-slide product">
                    <span class="sale-present">%${percent_disc}</span>
                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            

                        </div>
                        <p class="name_product"> <a href="#">${product.name}</a></p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old_price">$${product.old_price}</p>
                        </div>
                        <div class="icons">
                            <span class="btn_add_card ${isInCart?'active':''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart?'Item in cart':'add to cart'}
                            </span>
                            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                        </div>
                </div>
            
            
            `
        }
        if(product.catetory==='electronics'){
            let old_price_parg=product.old_price? `<p class="old_price">$${product.old_price}</p>`:"";
            let percent_disc=Math.floor((product.old_price-product.price)/product.old_price *100);
            let sale_perc=product.old_price ?`<span class="sale-present">%${percent_disc}</span>`:"";
            swiper_electronics.innerHTML +=`
            <div class="swiper-slide product">
                        ${sale_perc}
                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            

                        </div>
                        <p class="name_product"> <a href="#">${product.name}</a></p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_parg}
                        </div>
                        <div class="icons">
                            <span class="btn_add_card ${isInCart?'active':''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart?'Item in cart':'add to cart'}
                            </span>
                            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                        </div>
                </div>
            `
        }
        if(product.catetory==='appliances'){
            let old_price_parg=product.old_price? `<p class="old_price">$${product.old_price}</p>`:"";
            let percent_disc=Math.floor((product.old_price-product.price)/product.old_price *100);
            let sale_perc=product.old_price ?`<span class="sale-present">%${percent_disc}</span>`:"";
            swiper_appliances.innerHTML +=`
            <div class="swiper-slide product">
                        ${sale_perc}
                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            

                        </div>
                        <p class="name_product"> <a href="#">${product.name}</a></p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_parg}
                        </div>
                        <div class="icons">
                            <span class="btn_add_card ${isInCart?'active':''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart?'Item in cart':'add to cart'}
                            </span>
                            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                        </div>
                </div>
            `
        }
        if(product.catetory==='mobiles'){
            let old_price_parg=product.old_price? `<p class="old_price">$${product.old_price}</p>`:"";
            let percent_disc=Math.floor((product.old_price-product.price)/product.old_price *100);
            let sale_perc=product.old_price ?`<span class="sale-present">%${percent_disc}</span>`:"";
            swiper_mobiles.innerHTML +=`
            <div class="swiper-slide product">
                        ${sale_perc}
                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            

                        </div>
                        <p class="name_product"> <a href="#">${product.name}</a></p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_parg}
                        </div>
                        <div class="icons">
                            <span class="btn_add_card ${isInCart?'active':''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart?'Item in cart':'add to cart'}
                            </span>
                            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                        </div>
                </div>
            `
        }
    });

});