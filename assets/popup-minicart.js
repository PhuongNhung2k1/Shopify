$('#AddToCart').on('click', function(event){
event.preventDefault();
//let quantity = //selector to get your quantity;
//let variant_id = //some data attribute you set the variant id to -- this is also complicated if you have more than 1 variant;

jQuery.post('/cart/add.js', {
  items: [
    {
      quantity: quantity,
      id: variant_id
    }
  ]
});

})

Shopify.onCartUpdate = function(cart) {
    alert('There are now ' + cart.item_count + ' items in the cart.');
  };  