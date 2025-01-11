const h1 = document.querySelector('h1')
const firstP = document.querySelector('p')

h1.addEventListener('click',()=>{
firstP.innerHTML ='A pleasant place for you and your family.'
firstP.style.color ='violet'
firstP.style.fontSize = '2rem'
h1.style.display ='none'
})

