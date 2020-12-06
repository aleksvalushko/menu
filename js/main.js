const input = document.querySelector('.input'),
    btn = document.querySelector('.button'),
    wrapper = document.querySelector('.wrapper'),
    form = document.querySelector('.wrapper form');

input.addEventListener('input', () => {
    btn.disabled = input.value === '';
    form.style.border = '2px solid white';
});

btn.addEventListener('click', (event) => {
    event.preventDefault();
    if(!input.value) {
        form.style.border = '2px solid red';
        form.style.paddingRight= '2px';
        modalWin('Введите номер!');
    } else {
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${input.value}&lon=50&appid=f4cac63c1c37398ab9151f7d93014510`;
        fetch(api, {
            method: 'POST',
            body: input.value
        })
        .then(response => {
            if(response.status === 200) {
                modalWin('Сообщение отправлено!');
                input.value = '';
            } else {
                modalWin('Введите номер от 0 до 90!');
            }
            
        })
        .catch(error => modalWin(`Ошибка! ${error}`))
    }
});

function modalWin(text) {
    let content = `
    <div class='modal'>
        <span>${text}</span>
        <div><button class='modal-button'>OK</button></div>
    </div>
    `;
    wrapper.insertAdjacentHTML('afterend', content);
    let modal = document.querySelector('.modal');
    modal.style.top = '-30%';
    setTimeout(() => {
        modal.style.top = '50%';
        modal.style.marginTop = '-100px';
        modal.style.transition = 'all 1s ease';
        wrapper.style.background = 'black';
        wrapper.style.opacity = '.7';
        wrapper.style.transition = 'all 1s ease-in';
    }, 100)
    let modalButton = document.querySelector('.modal-button');
    modalButton.addEventListener('click', () => {
        modal.style.top = '-30%';
        wrapper.style.background = 'gray';
        wrapper.style.opacity = '1';
        wrapper.style.transition = 'all 1s ease-in';
        setTimeout(() => {
            modal.remove(modal);
        }, 1000)
    });
}