document.getElementById('btn-cash-out')
.addEventListener('click',function(event){
    event.preventDefault();

    const cashOut=getInputFieldValue('cash-out-input');
    const pinNumber=getInputFieldValue('cash-out-pin-number');
    

    if(pinNumber===12345){
        const balance=getTextFieldValue('balance')
        const newBalance=balance-cashOut;
        document.getElementById('balance').innerText=newBalance;
    }
    else{
        alert('Please try again');
    }

})