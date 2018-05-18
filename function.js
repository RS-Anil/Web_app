$(function(){

    $.ajax({
        url:"scripts/pizza.json",
        type:"get",
        success:function(res){
           console.log(res);
           addItem(res);
        }
    })

    function addItem(res){
        $.each( res, function( key, value ) {
            alert( key + ": " + res[key].oldprice);
                var pizzaDetails = `<div class="col-md-4">
                <figure class="card card-product">
                    <div class="img-wrap"><img src=${res[key].imgsrc}></div>
                    <figcaption class="info-wrap">
                            <h4 class="title">${res[key].title}</h4>
                            <p class="desc">${res[key].desc}</p>
                            <div class="rating-wrap">
                                <div class="label-rating">${res[key].rating}</div>
                                <div class="label-order">${res[key].order} </div>
                            </div>
                    </figcaption>
                    <div class="bottom-wrap">
                        <a href="" id=${key} class="btn btn-sm btn-primary float-right">Order Now</a>	
                        <div class="price-wrap h5">
                            <span class="price-new">${res[key].price}</span><del class="price-old">${res[key].oldprice}</del>
                        </div> 
                    </div>
                </figure>
                </div>`
                $('.row').append(pizzaDetails)
          });        
    }    
})