const form = document.getElementById('Form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const textInput = document.getElementById('textArea')
const errorMessage = document.getElementById('error-message') 

form.addEventListener('submit', (e) => {
    let errors = []

    if(nameInput){
        // If we have a nameInput input then we are in the...
        errors = getInputFormErrors() 
    }

    if(errors.length > 0){
        // If there are any errors
        e.preventDefault()
        errorMessage.innerText = errors.join(". ")
    }
})

function getInputFormErrors(name, email, textArea){
    let errors = []

    if(name === '' || name == null){
        errors.push('Name is required')
        nameInput.parentElement.classList.add('incorrect')
    }

    if(email === '' || email == null){
        errors.push('Email is required')
        emailInput.parentElement.classList.add('incorrect')
    }

    if(textArea === '' || textArea == null){
        errors.push('Message is required')
        textInput.parentElement.classList.add('incorrect')
    }

    return errors;
}  

const allInputs = [nameInput, emailInput, textInput]

allInputs.forEach(input => {
    input.addEventListener('input', () =>{
        if(input.parentElement.classList.contains('incorrect')){
            errorMessage.innerText = ''
        }
    })
})