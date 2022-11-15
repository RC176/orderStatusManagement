const executeOrder = () => {
    let orderId = document.getElementById('order-id-input').value
    document.getElementById('order-id-input').value = ' '
    creatOrderCard(orderId)

    document.getElementById(orderId).innerText = 'Order placed!'
    
        chefRecieved(orderId)
        .then(firstLayerAdded)
        .then(secondLayerAdded)
        .then(oreganoAddedAndPacked)
        .then(pizzaBaked)
        .then(pizzaSauceAdded)
        .then(packageRecievedAtCounter)
        .then(() => document.getElementById.innerText = 'Ready to deliver')
        .catch((err) => console.log(err))
}



// <div class="card text-center">
// <div class="card-header">
//     <span><b>Order-ID: RC202112349</b></span>
//     <i class="fa-solid fa-xmark"></i>
// </div>
// <div class="card-body">
//     <p class="card-title">Medium size pizza - 1 Nos</p>
//     <p class="card-title">Bill Amount: <b>20$</b></p>
//     <p class="card-title">
//         <span class="badge rounded-pill bg-success"> Chef recieved order</span>
//     </p>
// </div>
// <div class="card-footer">
//     20-08-2022 10:00 AM
// </div>
// </div>
// </div> 