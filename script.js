const h1 = document.querySelector('h1')
const firstP = document.querySelector('p')






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



const regBtn = document.querySelector('#register')
const logBtn = document.querySelector('#login')

regBtn.addEventListener('click' ,() =>{
	
})


