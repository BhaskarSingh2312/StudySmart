


document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('.fa-eye, .fa-eye-slash')    
      .forEach( el => {
        el.addEventListener('click', event =>{        
          const trigger = event.target;        
          trigger.classList.toggle('fa-eye');
          trigger.classList.toggle('fa-eye-slash');
          
          const input = trigger.parentNode.querySelector('input');         
          if (input.getAttribute('type') == 'password')
            input.setAttribute('type', 'text');
          else
            input.setAttribute('type', 'password');    
        });
      });
  });