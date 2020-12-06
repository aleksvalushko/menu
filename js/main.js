const input = document.querySelector('.input'),
    btn = document.querySelector('.button'),
    wrapper = document.querySelector('.wrapper');

input.addEventListener('input', () => {
    btn.disabled = input.value === '';
    wrapper.style.border = '2px solid white';
});

btn.addEventListener('click', (event) => {
    event.preventDefault();
    if(!input.value) {
        wrapper.style.border = '2px solid red';
        alert('Введите номер!');
    } else {
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${input.value}&lon=50&appid=f4cac63c1c37398ab9151f7d93014510`;
        fetch(api, {
            method: 'POST',
            body: input.value
        })
        .then(response => {
            if(response.status === 200) {
                alert('Сообщение отправлено!');
                input.value = '';
            } else {
                alert('Введите номер от 0 до 90!');
            }
            
        })
        .catch(error => alert('Error: ', error));
    }
});