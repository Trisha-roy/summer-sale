document.getElementById('card-1').addEventListener('click',function(){
    const name=document.getElementById('card-name-1');
    const nameValue=name.innerText;
    console.log(nameValue);
 
    //append child
    const card=document.getElementById('list-1')
    const li=document.createElement('li')
    li.innerText=nameValue;
    card.appendChild(li);

    const price=document.getElementById('price-1');
    const priceValue=price.innerText;
    console.log(priceValue);

    const cardPrice=document.getElementById('totalPrice')
    cardPrice.innerText=priceValue;
    
})
// document.getElementById('card-2').addEventListener('click',function(){
//     const name_1=document.getElementById('card-name-2');
//     const name_1Value=name_1.innerText;
//     console.log(name_1Value);

//     const card_1=document.getElementById('product-list')
//     card_1.innerText=name_1Value;

//     const price_1=document.getElementById('price-2');
//     const priceValue_1=price_1.innerText;
//     console.log(priceValue_1);

//     const cardPrice_1=document.getElementById('product-list-1')
//     cardPrice_1.innerText=priceValue_1;



    
// })

//card-2
document.getElementById('card-2').addEventListener('click',function(){
    const name=document.getElementById('card-name-2');
    const nameValue=name.innerText;
    console.log(nameValue);
 
    //append child
    const card=document.getElementById('list-1')
    const li=document.createElement('li')
    li.innerText=nameValue;
    card.appendChild(li);

    const price2=document.getElementById('price-2');
    const priceValue2=price2.innerText;
    console.log(priceValue2);

    const cardPrice2=document.getElementById('totalPrice')
    cardPrice2.innerText=priceValue2;
    
})
console.log(price2)
