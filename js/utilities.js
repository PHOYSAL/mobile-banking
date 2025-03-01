function getInputFieldValue(id){
    const inputValue=Number(document.getElementById(id).value);
    return inputValue;
}

function getTextFieldValue(id){
    const balanceText=Number(document.getElementById(id).innerText);
    return balanceText
}