const pizzaSauceAdded = (orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Pizza & Sauce Added'
            resolve(orderId)
        }, 33000)
    })
}

const pizzaBaked = (orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText ='Pizza baked!'
            resolve(orderId)
        }, 29000)
    })
}

const firstLayerAdded = (orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText ='First layer of cheeze added'
            resolve(orderId)
        }, 8000)
    })
}

const secondLayerAdded = (orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText ='Second layer of cheeze added'
            resolve(orderId)
        }, 14000)
    })
}

const oreganoAddedAndPacked = (orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText ='Oregano was added and packed'
            resolve(orderId)
        }, 19000)
    })
}

const chefRecieved = (orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText ='Chef recieved the order'
            resolve(orderId)
        }, 3000)
    })
}

const packageRecievedAtCounter = (orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText ='Package recieved at the counter'
            resolve(orderId)
        }, 36000)
    })
}