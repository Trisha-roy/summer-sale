let total = 0;

function handleClick(target) {
    const itemName = target.childNodes[3].childNodes[3].innerText;
    console.log(itemName)

    //append child
    const listItem = document.getElementById('list-1');
    const li = document.createElement('li');
    li.innerText = itemName;
    listItem.appendChild(li);

    //price section
    const price = target.childNodes[3].childNodes[5].innerText;
    console.log(price)
    total = parseInt(total) + parseInt(price);
    const totalPrice = document.getElementById('totalPrice');
    totalPrice.innerText = total;

    const purchaseButton = document.getElementById('purchase-btn');

    if (total > 0) {
        purchaseButton.removeAttribute('disabled')
    } else {
        purchaseButton.setAttribute('disabled')
    }

    const applyBtn = document.getElementById('apply-btn');
    const applyField = document.getElementById

    if (total > 200) {
        applyBtn.removeAttribute('disabled')
    }
    
}

document.getElementById('apply-btn').addEventListener('click',function(){
    const discount=document.getElementById('discountPrice');
    const grandTotal=document.getElementById('grandTotal');


    const inputField = document.getElementById('input-field').value;

    if(inputField==="SELL200"){
        const getDiscount=(total/100)*20;

        const setDiscount=(total-getDiscount);
        discount.innerText=parseInt(getDiscount).toFixed(2);

        grandTotal.innerText=setDiscount.toFixed(2)

    }
     
    
});
function goHome() {
    document.getElementById('list-1').innerText = '';
    document.getElementById('totalPrice').innerText = '00';
    document.getElementById('grandTotal').innerText = '00';
    document.getElementById('discountPrice').innerText = '00';
    document.getElementById('input-field').value = ''; 
}

