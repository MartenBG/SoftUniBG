function solve() {
   let button = document.getElementById('send');

   let input = document.getElementById('chat_input');

   let message = document.getElementById('chat_messages');

   button.addEventListener('click', (e) => {

      if ((input.value).length > 0) {
         let newElement = document.createElement('div');
         newElement.innerHTML = input.value;
         newElement.classList.add('message', 'my-message');
         message.appendChild(newElement);
         input.value = '';
      }

   });

}


