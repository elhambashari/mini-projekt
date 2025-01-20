const h1 = document.querySelector('h1')
const firstP = document.querySelector('p')
const regBtn = document.querySelector('#register');
const logBtn = document.querySelector('#login');


logBtn.addEventListener('click', () => {
    
    const loginBox = document.createElement('div');
    loginBox.style.position = 'absolute';
    loginBox.style.top = '50%';
    loginBox.style.left = '50%';
    loginBox.style.transform = 'translate(-50%, -50%)';
    loginBox.style.padding = '20px';
    loginBox.style.backgroundColor = '#fff';
    loginBox.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    loginBox.style.borderRadius = '10px';
    loginBox.style.zIndex = '1000';

    
    loginBox.innerHTML = `
        <h3>Log In</h3>
        <label for="username">Name:</label>
        <input type="text" id="username" placeholder="Enter your name" style="display:block; margin-bottom:10px; width:100%;">
        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" style="display:block; margin-bottom:20px; width:100%;">
        <button id="login-submit" style="margin-right: 10px;">Submit</button>
        <button id="login-close">Cancel</button>
        <p id="login-message" style="color: red; margin-top: 10px;"></p>
    `;

    
    document.body.appendChild(loginBox);

    
    document.querySelector('#login-close').addEventListener('click', () => {
        loginBox.remove();
    });

    
    document.querySelector('#login-submit').addEventListener('click', () => {
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        const loginMessage = document.querySelector('#login-message');

        if (username && password) {
            loginMessage.style.color = 'green';
            loginMessage.textContent = `Welcome back, ${username}!`;
            setTimeout(() => loginBox.remove(), 6000); 
        } else {
            loginMessage.style.color = 'red';
            loginMessage.textContent = 'Please fill in both fields.';
        }
    });
});


regBtn.addEventListener('click', () => {
    
    const formBox = document.createElement('div');
    formBox.style.position = 'absolute';
    formBox.style.top = '50%';
    formBox.style.left = '50%';
    formBox.style.transform = 'translate(-50%, -50%)';
    formBox.style.padding = '20px';
    formBox.style.backgroundColor = '#fff';
    formBox.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    formBox.style.borderRadius = '10px';
    formBox.style.zIndex = '1000';

    
    formBox.innerHTML = `
        <h3>Register</h3>
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" style="display:block; margin-bottom:10px; width:100%;">
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" style="display:block; margin-bottom:10px; width:100%;">
        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" style="display:block; margin-bottom:20px; width:100%;">
        <button id="submit" style="margin-right: 10px;">Submit</button>
        <button id="close">Cancel</button>
        <p id="message" style="color: red; margin-top: 10px;"></p>
    `;

    
    document.body.appendChild(formBox);

    
    document.querySelector('#close').addEventListener('click', () => {
        formBox.remove();
    });

    
    document.querySelector('#submit').addEventListener('click', () => {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const message = document.querySelector('#message');

        if (name && email && password) {
            message.style.color = 'green';
            message.textContent = `Registration Successful! Welcome, ${name}!`;
            setTimeout(() => formBox.remove(), 10000);
        } else {
            message.style.color = 'red';
            message.textContent = 'Please fill in all fields.';
        }
    });
});







h1.addEventListener('click',()=>{
firstP.innerHTML ='A pleasant place for you and your family.'
firstP.style.color ='violet'
firstP.style.fontSize = '2rem'
h1.style.display ='none'
})



const ctrlBtn = document.querySelector('.btn')
const sidebar = document.querySelector('.sidebar')
const ul = document.querySelector('.ul')

ctrlBtn.addEventListener('click' ,() =>{
	sidebar.classList.toggle('show')
	ctrlBtn.classList.toggle('open')

})



const items = ['Butiks', 'Restaurang', 'Services', 'Car park', 'Blog','Gym'];


items.forEach((item) => {
    const li = document.createElement('li'); 
    li.textContent = item; 
    ul.appendChild(li); 
});





