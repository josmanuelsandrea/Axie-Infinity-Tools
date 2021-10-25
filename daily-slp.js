function Summary(number) {
    let numberBox = document.querySelector(`.number__${number}`);
    numberBox.value = parseInt(numberBox.value) + 1;
}

function Substract(number) {
    let numberBox = document.querySelector(`.number__${number}`);
    if (parseInt(numberBox.value) == 0) alert('No posible.')
    else numberBox.value = parseInt(numberBox.value) - 1;
}

function Done() {
    let answer = confirm('¿Estás seguro que quieres continuar? \n\n Si: Aceptar \n No: Cancelar');

    if (answer) {
        let arrayWithMulti = [3, 6, 9, 12, 15];
        let numberBoxes = document.querySelectorAll('.numberBox');
        let values = [];
        numberBoxes.forEach(item => {
            values.push(item.value);
        });
        let sum = 0;

        for (let i = 0; i < values.length; i++) {
            sum += values[i] * arrayWithMulti[i];
        }
        sum += parseInt(document.querySelector('.numberBoxAditional').value);
        alert(`Has hecho ${sum + 75} SLP el día de hoy! (contando la aventura y la mision diaria (75 SLP))`);
        let todayDate = new Date();
        let date = todayDate.getFullYear()+'-'+(todayDate.getMonth()+1)+'-'+todayDate.getDate();

        let todayData = {
            data: [
                {
                    day: date,
                    productedSlp: sum + 75
                }
            ]
        }
        let findDB = localStorage.getItem('SLPdata');
        if (findDB){
            let DBData = JSON.parse(findDB);
            DBData.data.push(todayData.data[0]);
            localStorage.setItem('SLPdata', JSON.stringify(DBData));
        }else {
            localStorage.setItem('SLPdata', JSON.stringify(todayData));
        }
    }
}

function DeployModal(){
    let modal = document.querySelector('.modal');
    modal.style.display = 'flex';
}

function closeModal(){
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
}