let total=0;

function handleClick(target){
    const itemName=target.parentNode.childNodes[5].childNodes[3].childNodes[3].innerText;

    //append child
    const listItem=document.getElementById('list-1');
    const li=document.createElement('li');
    li.innerText=itemName;
    listItem.appendChild(li);

    //price section
    const price=target.parentNode.childNodes[5].childNodes[3].childNodes[5].innerText.split(" ")[0];
    console.log(price)
    total=parseInt(total)+parseInt(price);
    const totalPrice=document.getElementById('totalPrice');
    totalPrice.innerText=total;

    const purchaseButton=document.getElementById('purchase-btn');

    if(total>0){
        purchaseButton.removeAttribute('disabled')
    }else{
        purchaseButton.setAttribute('disabled')
    }

    const applyBtn=document.getElementById('apply-btn');
    const applyField=document.getElementById
    
    if(total>200){
        applyBtn.removeAttribute('disabled')
    }else{
        applyBtn.setAttribute('disabled')
    }
    //input field=
    const inputField=document.getElementById('input-field');
    const input=inputField.value;
    console.log(input)
}
