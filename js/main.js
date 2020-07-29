const filterInput = document.querySelector('#filterInput')
const productGroupUL = document.querySelector('#productGroup')
const msg = document.querySelector('#msg')
const productName = document.querySelector('#productName')
const productPrice = document.querySelector('#productPrice')
const btnSubmit = document.querySelector('#btnSubmit')


let productData = [
    /*
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
    }*/
]


function getData(productElement){
    //let li = ''
        if(productData.length > 0){
            msg.innerHTML = ''
        productData.forEach(({id, name, price}) => {
            li = document.createElement('li')
            li.className = 'list-group-item'
            li.id = `product-${id}`
            li.innerHTML = `<strong>${name}</strong><span>-$${price}</span>
            <span class="float-right text-danger delete" >X</span>`
        productGroupUL.appendChild(li)
    })
    }
    else{
        getMessage('No Data in List......')
    }
}

getData(productData)

//submit product

btnSubmit.addEventListener('click', event =>{
    //event.preventDefault()
     const name = productName.value
     const price = productPrice.value
     let id
     if(productData.length === 0){
         id = 0
     }
     else{
         id = productData[productData.length-1].id + 1
     }

     if(name === '' || price === '' || !(!isNaN(parseFloat(price)) && isFinite(price))){
         alert('product name and price must necessary. price also must be valid')
     }
     else{
         productData.push({
             id,
             name ,
             price
         });
         productGroupUL.innerHTML = ''
         productName.value =''
         productPrice.value =''
        getData(productData)
     }
})

// Remove product 
productGroupUL.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete')){

        //removing data form UI
       // event.target.parentElement.remove()  or
       const target = event.target.parentElement
       event.target.parentElement.parentElement.removeChild(target)

       // removing data form store
        const id = parseInt(target.id.split('-')[1])
        
      let result = productData.filter((product) => {
            return product.id !== id
       })

       productData = result
       if(result.length === 0) getMessage('Product List Empty....')

    }

    
    
})


// filter product
filterInput.addEventListener('keyup',(event)=> {
    const text = event.target.value.toLowerCase();
    let itemLength =  ''
    document.querySelectorAll('.list-group-item').
    forEach(item => {
        const getproductName = item.firstElementChild.textContent.toLowerCase()
        if(getproductName.indexOf(text) === -1){
            item.style.display = 'none'
        }
        else{
            item.style.display = 'block'
            ++itemLength
        }
        
    });
    (itemLength>0)?getMessage(''):getMessage('No item Found')
})


function getMessage(message){
    msg.innerHTML = message
}