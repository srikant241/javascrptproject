$(document).ready(function(){
    var searchParams= new URLSearchParams(window.location.search)
    var productId=(searchParams.get("p"))
    console.log(productId)
    var currentObj=null
    var imageWrapper=$(".image-wrapper") 
    $.get(("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+ productId), function(responseOne){
        currentObj=responseOne
        var previewImage=$(".preview-img").attr("src",responseOne.preview)
        var productDetailsHeading=$(".product-details-heading").html(responseOne.name)
        var productDetailsBrand=$(".product-details-brand").html(responseOne.brand)
        var productDetailsPrice=$("#price").html(responseOne.price)
        var productAllDetails=$(".product-all-details").html(responseOne.description)
        for(var i=0; i<responseOne.photos.length; i++){
            createSmallImages(responseOne.photos[i],i)
        }

    })
    function createSmallImages(link,i){
        var smallImages=$("<img>").addClass("small-images").attr("src",link)
        if(i==0){
            smallImages.addClass("active-card")
        }
        smallImages.click(function(){
            $(".image-wrapper img").removeClass("active-card")
            smallImages.addClass("active-card")
            $(".preview-img").attr("src",link)

        })
        imageWrapper.append(smallImages)
    }

    $(".btn-cart").click(function(){
        var productList= window.localStorage.getItem("product-list")
        productList=productList===null? []:JSON.parse(window.localStorage.getItem("product-list"))
        // var productList = window.localStorage.getItem('product-list');
        // productList = productList === null || productList === '' ? [] : productList;
        // productList = productList.length > 0 ? JSON.parse(productList) : [];

        var foundAt= -1;
        for(var i=0; i<productList.length ; i++){
            if(parseInt(productList[i].id)==parseInt(currentObj.id)){
                foundAt=i;
            }
        }
        if(foundAt > -1){
            productList[foundAt].count=productList[foundAt].count+1
            window.localStorage.setItem("product-list", JSON.stringify(productList))
        }else{
            currentObj.count=1;
            productList.push(currentObj)
            window.localStorage.setItem("product-list", JSON.stringify(productList))
        }
        var productCount=0;
        for(var i=0;i<productList.length;i++){
            productCount=productCount+ productList[i].count
        }
        $(".cart-count").html(productCount)
    })

}) 