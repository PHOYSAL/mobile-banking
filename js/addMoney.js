document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();

    const addMoney=getInputFieldValue('add-money-input');
    const pinNumber=getInputFieldValue('add-money-pin-number');
    

    if(pinNumber===12345){
        const balance=getTextFieldValue('balance')
        const newBalance=balance+addMoney;
        document.getElementById('balance').innerText=newBalance;
    }
    else{
        alert('Please try again');
    }
})