
const form = document.querySelector(".feedback-form");

form.addEventListener("input", saveInput);
form.addEventListener('submit', onSubmitForm);
document.addEventListener('DOMContentLoaded', renderForm);

const LS_KEY = 'feedback-form-state';
let userData = {};

function saveInput(event) {
    
    userData[event.target.name] = event.target.value.trim();
    const savingData = JSON.stringify(userData);
    localStorage.setItem(LS_KEY, savingData);
    console.log(userData);
    
}

function renderForm() {
    
    const loadFromLocalStorage = load(LS_KEY); 
    
    if (!loadFromLocalStorage) { 
      return;
    }
    
    const formElements = form.elements;
    
    for (const key in loadFromLocalStorage) {
      if (loadFromLocalStorage.hasOwnProperty(key)) { 
        formElements[key].value = loadFromLocalStorage[key]; 
        
        if (loadFromLocalStorage[key]) { 
          userData[key] = loadFromLocalStorage[key]; 
        }
      }
    }
  }

  function onSubmitForm(event) {
    
    event.preventDefault();
    const {
      elements: { email, message },
    } = event.currentTarget;
    
    if (email.value === '' || message.value === '') {
      return alert('fill all fields');
    }
    
    console.log(userData);
    
    localStorage.removeItem(LS_KEY);
    event.currentTarget.reset();
    
    userData = {};
  }
  function load(key) {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  }
