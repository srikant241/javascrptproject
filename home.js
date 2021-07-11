$(document).ready(function(){
  $('.slider-img').slick({
      dots: true,
      infinite: true,
      autoplay:true,
      autoplaySpeed:1500,
      arrows:false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
  });
  var clothingSection= $(".clothing-section")
  var accessoriesSection= $(".Accessories-section")

  function createClothingProducts(data){
      var mainProduct= $("<div>").addClass("individual-clothing").attr("id",data.id)
      var productLink=$("<a>").attr("href", ("./details.html?p="+ data.id)).addClass("link")
      var productPic= $("<img>").addClass("product-pic").attr("src",data.preview)
      var productTitle= $("<h3>").addClass("product-title").html(data.name)
      var productBrand= $("<p>").addClass("product-brand").html(data.brand)
      var productPrice=$("<p>").addClass("product-price").html("Rs " + data.price)
      productLink.append(productPic,productTitle,productBrand,productPrice)
      mainProduct.append(productLink)
      clothingSection.append(mainProduct)
  }

  function createAccessoriesProducts(data){
      var MainProductAnother= $("<div>").addClass("individual-accessories").attr("id",data.id)
      var productLinkAnother=$("<a>").attr("href", ("./details.html?p="+ data.id)).addClass("link")
      var productPicAnother= $("<img>").addClass("product-pic").attr("src",data.preview)
      var productTitleAnother= $("<h3>").addClass("product-title").html(data.name)
      var productBrandAnother= $("<p>").addClass("product-brand").html(data.brand)
      var productPriceAnother=$("<p>").addClass("product-price").html("Rs " + data.price)
      productLinkAnother.append(productPicAnother,productTitleAnother,productBrandAnother,productPriceAnother)
      MainProductAnother.append(productLinkAnother)
      accessoriesSection.append(MainProductAnother)
  }

  $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(response){
      console.log(response)
      for(var i=0; i<response.length/2; i++){
          createClothingProducts(response[i])
      }
      for(var i=5; i<response.length; i++){
          createAccessoriesProducts(response[i])
      }
  })
  // $("#side-bar-icon").click(function(){
  //     $(".sidebar-content").css("transform", "translateX(0%)")
  // })







  // var cartCount=parseInt($(".cart-count").html())
  // $(".btn-cart").click(function(){
  //     $(".cart-count").html( ++cartCount)
  // })
  // var cartIcon= $("#cart-icon")
  // cartIcon.click(function(){
  //    location.assign("./checkout.html")
  // })







}) 