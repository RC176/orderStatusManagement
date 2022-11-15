const creatOrderCard = (orderId) => {
    let orderCardsWrapper = document.getElementById('order-card-wrapper')

    let colDiv = document.createElement('div')
    let cardDiv = document.createElement('div')
    let cardHeader = document.createElement('div')
    let cancelBtn = document.createElement('i')
    let cardBody = document.createElement('div')
    let table = document.createElement('table')
    
    let cardText1 = document.createElement('p')
    let cardText2 = document.createElement('p')
    let cardText3 = document.createElement('p')
    let statusBadge = document.createElement('span')
    let cardFooter = document.createElement('div')

    colDiv.classList = 'col-md-3 order-status-card'
    cardDiv.classList = 'card text-center'
    cardHeader.classList = 'card-header'
    cancelBtn.classList = 'fa-solid fa-xmark cancel-btn'
    cardText1.classList = 'card-title'
    cardText2.classList = 'card-title'
    cardText3.classList = 'card-title'
    statusBadge.classList = 'badge rounded-pill bg-success'
    cardFooter.classList = 'card-footer'

    
    cardHeader.innerHTML = `<span>Order-ID: <b>${orderId}</b></span>`
    cardText1.innerText = 'Medium size pizza - 1 Nos'
    cardText2.innerHTML = 'Bill Amount: <b>20$</b>'
    cardText3.innerText = ''
    statusBadge.innerText = 'Chef recieved order'
    cardFooter.innerText = 'dd/mm/yyyy'

    statusBadge.id = orderId

    cardHeader.appendChild(cancelBtn)
    cardDiv.appendChild(cardHeader)
    cardBody.appendChild(cardText1)
    cardBody.appendChild(cardText2)
    cardBody.appendChild(cardText3)
    cardText3.appendChild(statusBadge)
    cardDiv.appendChild(cardBody)
    cardDiv.appendChild(cardFooter)
    colDiv.appendChild(cardDiv)
    orderCardsWrapper.appendChild(colDiv)

    cancelBtn.addEventListener('click', () => {
        orderCardsWrapper.removeChild(colDiv)
        // colDiv.style.display = 'none'
    })
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