const h1 = document.querySelector('h1');
const pclass = document.querySelector('.pclass');
const pid = document.getElementById('pid');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2')
const btnid = document.querySelector('#btnid');
const formid = document.querySelector('#formid')

const pempty = document.getElementById('empty')

formid.addEventListener('mouseover', mouseForm);

function clickBtn(a) {
    a.preventDefault();
    const sum = input1.value + input2.value;
    pempty.innerText = sum;
    
    
}

function mouseForm(w) {
    //w.preventDefault();

    alert('Hackerman');
}