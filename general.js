$(document).ready(function(){
    var productList= window.localStorage.getItem("product-list")
    productList=productList===null? []:JSON.parse(window.localStorage.getItem("product-list"))

    for(var i=0; i<productList.length;i++){
        var productCount=0;
        for(var i=0;i<productList.length;i++){
            productCount=productCount+ productList[i].count
        }
        $(".cart-count").html(productCount)
    }
    $("#cart-icon").click(function(){
        location.assign("./checkout.html")
    })
    $("#side-bar-icon").click(function(){
        $(".sidebar-content").css("transform", "translateX(0%)")
        $("#cross-sidebar").click(function(){
            $(".sidebar-content").css("transform", "translateX(-100%)")
        })
    })
}) 