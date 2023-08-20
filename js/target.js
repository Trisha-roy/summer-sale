document.getElementById('card-1').addEventListener('click',function(){
    const name=document.getElementById('card-name-1');
    const nameValue=name.innerText;
    console.log(nameValue);

    const card=document.getElementById('product-list')
    card.innerText=nameValue

    
})
