function addToHistory(td1, td2, td3, td4, td5){
    let table = document.querySelector('.container__history table tbody');

    let data = `<tr class="history__round">
        <td>${td1}</td>
        <td>${td2} <i class="fas fa-bolt"></i></td>
        <td>${td3} <i class="fas fa-plus"></i></td>
        <td>-${td4}</td>
        <td>${td5} <i class="fas fa-ban"></i></td>
    </tr>`

    table.innerHTML += data;
}



function Earn(){
    let label = document.querySelector('.earn__label__number');
    let value = parseInt(label.innerText);
    label.innerText = `${value + 1}`;
    document.querySelector('.earn__label__sign').innerText = '+';
}

function Spend(){
    let label = document.querySelector('.spend__label__number');
    let value = parseInt(label.innerText);
    label.innerText = `${value + 1}`;
    document.querySelector('.spend__label__sign').innerText = '-';
}

function Stole(){
    let label = document.querySelector('.stole__label__number');
    let value = parseInt(label.innerText);
    label.innerText = `${value + 1}`;
    document.querySelector('.stole__label__sign').innerText = '+';
}

function Done(){
    let earnN = parseInt(document.querySelector('.earn__label__number').innerText);
    let spendN = parseInt(document.querySelector('.spend__label__number').innerText);
    let stoleN = parseInt(document.querySelector('.stole__label__number').innerText);
    let actualEnergy = document.querySelector('.counter__number');
    let roundCounter = document.querySelector('.roundCounter__number');

    addToHistory(
        roundCounter.innerText,
        actualEnergy.innerText,
        earnN,
        spendN,
        stoleN
    )

    actualEnergy.innerText = ((parseInt(actualEnergy.innerText) - spendN) - stoleN) + earnN + 2;

    if (parseInt(actualEnergy.innerText) < 0) actualEnergy.innerText = 2;
    if (parseInt(actualEnergy.innerText) > 10) actualEnergy.innerText = 10;

    document.querySelector('.earn__label__number').innerText = 0;
    document.querySelector('.earn__label__sign').innerText = '';
    document.querySelector('.spend__label__number').innerText = 0;
    document.querySelector('.spend__label__sign').innerText = '';
    document.querySelector('.stole__label__number').innerText = 0;
    document.querySelector('.stole__label__sign').innerText = '';
    roundCounter.innerText = parseInt(roundCounter.innerText) + 1; 


}

function Substract(type){
    let label = document.querySelector(`.${type}__label__number`);
    if (parseInt(label.innerText) == 0) alert('El numero está en cero');
    else label.innerText = parseInt(label.innerText) - 1;
}

function Reset(){
    let actualEnergy = document.querySelector('.counter__number');
    let roundCounter = document.querySelector('.roundCounter__number');

    roundCounter.innerText = 1; 
    actualEnergy.innerText = 3;

    document.querySelector('.earn__label__number').innerText = 0;
    document.querySelector('.earn__label__sign').innerText = '';
    document.querySelector('.spend__label__number').innerText = 0;
    document.querySelector('.spend__label__sign').innerText = '';
    document.querySelector('.stole__label__number').innerText = 0;
    document.querySelector('.stole__label__sign').innerText = '';

    document.querySelectorAll('.history__round').forEach(item=>{
        item.remove();
    });
}

let checkbox = document.getElementById('activateCheckbox');

checkbox.addEventListener('change', (e)=>{
    let labelButton = document.querySelectorAll('.label__button');
    if (e.target.checked) {
        labelButton.forEach(item=>{
            item.style.display = 'inline-block'
        });
    }else {
        labelButton.forEach(item=>{
            item.style.display = 'none'
        });
    }
});

function alterateEnergy(operation){
    let actualEnergy = document.querySelector('.counter__number');
    if (operation == 'sum'){
        actualEnergy.innerText = parseInt(actualEnergy.innerText) + 1;
    }
    else {
        actualEnergy.innerText = parseInt(actualEnergy.innerText) - 1;
    }
}

function closeAModal(){
    let closureButtons = document.querySelectorAll('.modal__close');
    closureButtons.forEach(item =>{
        item.addEventListener('click', (e)=>{
            let target = e.target.getAttribute('close-modal');
            document.getElementById(target).style.display = 'none';
        });
    });
}

closeAModal()