const btn_add = document.querySelector('#btn-add');
const time_input = document.getElementsByName('time')[0];
const tr = document.querySelectorAll('tr');
const input_checkbox = document.querySelectorAll('input[type=checkbox]');
const input_text = document.querySelector('input[type=text]');
const datetime = document.querySelector('input[type=datetime-local]');
const detail_content = document.querySelectorAll('.detail-content');
const list_container = document.querySelector('.list-container');

for (let i = 0; i < input_checkbox.length; i++) {
    input_checkbox[i].addEventListener('click', (e) => {
        if (e.target.checked) {
            detail_content[i].style.display = 'block';
            e.target.parentElement.parentElement.classList.add('bg-warning');
        } else {
            detail_content[i].style.display = 'none';
            e.target.parentElement.parentElement.classList.remove('bg-warning');
        }
    })
}

for (let i = 0; i < detail_content.length; i++) {
    detail_content[i].addEventListener('click', (e) => {
        detail_content[i].style.display = 'none';
        input_checkbox[i].checked = false;
        input_checkbox[i].parentElement.parentElement.classList.remove('bg-warning');
    })
}

btn_add.addEventListener('click', (e) => {
    let time = new Date()
    time_input.value = `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`;
    if (input_text.value == '') {
        alert('Please enter a title');
        e.stopPropagation();
    } else {
        alert('Add task successfully')
    }
})