let Switch = document.querySelector('#switch');
let lightMode = document.querySelector('.light');
    
    Switch.addEventListener('click', ()=> {
        if(Switch.checked == true) {
          lightMode.classList.add('dark-mode');
        } else {
          lightMode.classList.remove('dark-mode');
        }
    })