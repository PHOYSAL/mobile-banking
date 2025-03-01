function getInputFieldValue(id){
    const inputValue=Number(document.getElementById(id).value);
    return inputValue;
}

function getTextFieldValue(id){
    const balanceText=Number(document.getElementById(id).innerText);
    return balanceText
}

function showFeature(id){
    document.getElementById("add-money-form").classList.add('hidden')
    document.getElementById("cash-out-form").classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}