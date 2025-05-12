import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const key = "feedback-form-state";

const savedData = JSON.parse(localStorage.getItem(key)) || {};
if(savedData.email){ form.elements.email.value=savedData.email}
if (savedData.message) {form.elements.message.value = savedData.message}

form.addEventListener('input', throttle(onInput, 500))


function onInput(evt) {
    const {name,value} = evt.target;
const currentData = JSON.parse(localStorage.getItem(key))||{};

currentData[name]=value;
localStorage.setItem(key,JSON.stringify(currentData))
}

form.addEventListener('submit', onSubmit)

function onSubmit(evt) {
    evt.preventDefault()

    const data = {
        email : form.elements.email.value,
        message: form.elements.message.value
    }

    console.log('Delivered:', data);
    localStorage.removeItem(key)
    form.reset()
    
}







