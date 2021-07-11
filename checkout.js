$(document).ready(function(){
    // <div class="added-card">
    //     <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"/>
    //     <div>
    //     <h2>Men Navy Blue Solid Sweatshirt</h2>
    //     <p>x2</p>
    //     <p>
    //        <span>Amount: Rs</span>
    //        <span>5198</span> 
    //     </p>
    //     </div>
    // </div>

    function createNewCard(data){
        var addedCard= $("<div>").addClass("added-card")
        var orderImage=$("<img>").attr("src",data.preview).addClass("checkout-img")
        var orderDetails=$("<div>")
        var orderTitle=$("<h2>").html(data.name).addClass("checkout-title")
        var orderQuantity=$("<p>").html("x" + data.count).addClass("checkout-para")
        var orderAmountWrapper=$("<p>").addClass("checkout-para")
        var orderAmount= $("<span>").html("Amount: Rs ")
        var orderPrice=$("<span>").html(parseFloat(data.count)*parseFloat(data.price))
        orderAmountWrapper.append(orderAmount,orderPrice)
        orderDetails.append(orderTitle,orderQuantity,orderAmountWrapper)
        addedCard.append(orderImage,orderDetails)
        $("#card-wrapper").append(addedCard)
    }
    var productList= window.localStorage.getItem("product-list")
    productList=productList===null? []:JSON.parse(window.localStorage.getItem("product-list"))

    var theTotalAmount=0
    for(var i=0; i<productList.length; i++){
        createNewCard(productList[i])

        var totalCartAmount=(parseFloat(productList[i].count)*parseFloat(productList[i].price))
        theTotalAmount=theTotalAmount+totalCartAmount
    }
    var totalItemCount= $("#total-item-count").html(productList.length)
    var totalAmount= $("#total-amount").html(theTotalAmount)

    var btnOrder=$("#btn-order")
    btnOrder.click(function(){
        // var orderArr=[]
        // for(var i=0; i<productList.length; i++){
        //     var orderObj={
        //         "id": productList[i].id,
        //         "preview": productList[i].preview,
        //         "name": productList[i].name,
        //         "brand": productList[i].brand,
        //         "price": productList[i].price
        //     }
        //     orderArr.push(orderObj)
        // }

        // var orderToSend={
        //     order:orderArr,
        //     amount:totalAmount
        // }
        // $.post("https://5d76bf96515d1a0014085cf9.mockapi.io/order",orderToSend,function(){
            alert("Order Placed Succesfully")
            localStorage.clear("product-list")
            location.assign("./confirmationPage.html")

        // })

    })
}) 