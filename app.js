function getPin(){
    const pin = Math.round(Math.random()*10000)
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    } 
    else{
        return getPin()
    }
}

document.getElementById('generate-pin-btn').addEventListener('click', function() {
    const displayField = document.getElementById('display-pin')
    const pin = getPin()
    displayField.value = pin;
})

document.getElementById('calc-body').addEventListener('click', function(e){
    const displayField = document.getElementById('calc-display')
    const number = e.target.innerText;
    const previousNumber = displayField.value;
    const newNumber = previousNumber + number;
    if(isNaN(number)){
        if(number == 'C'){
            displayField.value = " "
        }
        else if(number == '<'){
            const displayValue = document.getElementById('calc-display').value
            const restDigit = displayValue.slice(0,-1) ;
            // const restDigit = displayValue.substring(0, displayValue.length-1) ;
            displayField.value = restDigit;
        }
    }
    else{
        displayField.value = newNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click', function(){
    const generatePinField = document.getElementById('display-pin')
    const generatePin = generatePinField.value;
    const calcValueField = document.getElementById('calc-display')
    const calcValue = calcValueField.value
    if(generatePin == calcValue){
        generatePinField.value = '';
        calcValueField.value = '' 
        document.getElementById('success-massage').style.display = 'block';
        document.getElementById('failed-massage').style.display = 'none';
        document.getElementById('time-left').innerText = 3
    }
    else{
        generatePinField.value = '';
        calcValueField.value = '' 
        document.getElementById('failed-massage').style.display = 'block';
        document.getElementById('success-massage').style.display = 'none';
        const timeLeft = document.getElementById('time-left')
        const timeLeftValue = timeLeft.innerText
        const updateTimeLeft = timeLeftValue -1;
        timeLeft.innerText = updateTimeLeft;
        if(updateTimeLeft <1){
            document.getElementById('generate-pin-btn').setAttribute('disabled', true)
            alert('Your Mission is Finished. You Failed.. he he.. Please reload to try again')
            document.getElementById('failed-massage').innerText = "all chance Finished"
        }
    }
})