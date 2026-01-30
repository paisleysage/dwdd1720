const saveBtn = document.querySelector('#saveProfile');

saveBtn.addEventListener('click', () => {
let fn = document.querySelector('input[name="first"]');
localStorage.setItem('wellness-first',fn.value);
let ln = document.querySelector('input[name="last"]');
localStorage.setItem('wellness-last',ln.value);
let select = document.querySelector('#physical');
let ev = select.options [select.selectedIndex].value;
localStorage.setItem('wellness-emoji', ev)
let et = select.options [select.selectedIndex].text;
localStorage.setItem('wellness-text', et)
})


const deleteBtn = document.querySelector('#delProfile')
deleteBtn.addEventListener('click' , () => {
localStorage.removeItem('wellness-first')
localStorage.removeItem('wellness-last')
localStorage.removeItem('wellness-text')
localStorage.removeItem('wellness-emoji')
location.reload();
})


document.querySelector('#first').textContent = localStorage.getItem('wellness-first')
document.querySelector('#last').textContent = localStorage.getItem('wellness-last')
document.querySelector('#emotion').textContent = localStorage.getItem('wellness-text')
document.querySelector('#emoji').src = localStorage.getItem('wellness-emoji')