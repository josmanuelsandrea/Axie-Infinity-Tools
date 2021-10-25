let dailyData = localStorage.getItem('SLPdata');
if (dailyData){
    dailyData = JSON.parse(dailyData);
    let containerTable = document.querySelector('.container');
    dailyData.data.reverse();
    dailyData.data.forEach(element => {
        containerTable.innerHTML += `
        <div class="container__table">
            <div class="date">${element.day}</div>
            <div class="slp">${element.productedSlp} SLP</div>
        </div>
        `
    });
}else {
    let containerTable = document.querySelector('.container');
    containerTable.innerHTML = '<div class="noDBfind">Ningun dato por ahora</div>'
}