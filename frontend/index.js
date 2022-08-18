const btn_add = document.querySelector('#btn-add');
const time_input = document.getElementsByName('time')[0];
const tr = document.querySelectorAll('tr');
const input_checkbox = document.querySelectorAll('input[type=checkbox]');
const input_text = document.querySelector('input[type=text]');
const detail_content = document.querySelectorAll('.detail-content');

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

btn_add.addEventListener('click', (e) => {
    let time = new Date()
    time_input.value = time.toLocaleDateString() + ' ' + time.toLocaleTimeString();
    if (input_text.value == '') {
        alert('Please enter a title');
        e.stopPropagation();
    } else {
        alert('Add successfully');
    }
})