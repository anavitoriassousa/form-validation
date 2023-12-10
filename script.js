const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }
  
  const isValidCPF = (cpf) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regex.test(String(cpf).toLowerCase())
  }
  
  const form = document.querySelector('form')
  const message = document.querySelector('.thanks')
  const inputName = document.querySelector('input[name="name"]')
  const inputEmail = document.querySelector('input[name="email"]')
  const inputCpf = document.querySelector('input[name="cpf"]')
  

  let isValidForm = false

  const resetInput = (elemen) => {
    elemen.classList.remove('invalid')
    elemen.nextElementSibling.classList.add('error-hidden')
  }


  const invalidateElemen = (elemen) => {
    elemen.classList.add('invalid')
      elemen.nextElementSibling.classList.remove('error-hidden')
      isValidForm = false
  }

  const validateInput = () => {
    isValidForm = true
    if(!inputName.value){
      invalidateElemen(inputName)
    }

    if(!isValidEmail(inputEmail.value)){
      invalidateElemen(inputEmail)
    }

    if(!isValidCPF(inputCpf.value)){
      invalidateElemen(inputCpf)
    }
  }


  form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateInput()

    if (isValidForm) {
      //POST - Backend
      form.remove()
      message.classList.remove('error-hidden')
    }

  })

  inputName.addEventListener("input", () =>{
    resetInput(inputName)
  })

  inputEmail.addEventListener("input", () =>{
    resetInput(inputEmail)
  })

  inputCpf.addEventListener("input", () =>{
    resetInput(inputCpf)
  })
 
  