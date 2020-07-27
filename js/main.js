const filterInput = document.querySelector('#filterInput')
const productGroupUL = document.querySelector('#productGroup')
const productName = document.querySelector('#productName')
const productPrice = document.querySelector('#productPrice')
const btnSubmit = document.querySelector('#btnSubmit')


const productData = [
    {
        id : 0,
        name : 'Micro phone',
        price : 30
    },
    {
        id : 1,
        name : 'Head phone',
        price : 50
    },
    {
        id : 2,
        name : 'Mouse',
        price : 30
    }
]


function getData(productElement){
    //let li = ''
    productData.forEach(product => {
        li = document.createElement('li')
        li.className = 'list-group-item'
        li.id = `product-${product.id}`
        li.innerHTML = `<strong>${product.name}</strong><span>-$${product.price}</span>
        <span class="float-right text-danger">X</span>`
    productGroupUL.appendChild(li)
})
}

getData(productData)

btnSubmit.addEventListener('click', event =>{
     const name = productName.value
     const price = productPrice.value

     if(name === '' || price === '' || !(!isNaN(parseFloat(price)) && isNaN(isFinite(price)))){
         alert('product name and price must necessary. price also must be valid')
     }
     console.log(name, price)  //testing purpose
})