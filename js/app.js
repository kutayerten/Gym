// SHOW MENU

const NavMenu = document.getElementById('nav-menu'),
      navToggle= document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        NavMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        NavMenu.classList.remove('show-menu')
    })
}

// Remove Menu mobile 
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav-link we remove and we show them
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Change Background Header
const scrollHeader = () => {
const header = document.getElementById('header')
this.scrollY >= 50 ? header.classList.add('bg-header')
                   : header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)



// Calculate

const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) => {
    e.preventDefault()
    //check if the fields have a value
    if(calculateCm.value === '' || calculateKg.value === ''){
        // add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
        //show message
        calculateMessage.textContent= 'Fill in the Height and Weight '
    //remove message three seconds
    setTimeout(() =>{
        calculateMessage.textContent = ' '
    }, 3000)
    }
    else {
        const cm =calculateCm.value / 100,
              kg = calculateKg.value,
              bmi= Math.round(kg / (cm*cm))

              //show your health status
              if(bmi < 18.5){
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent= `Your BMI is ${bmi} and you are skinny 🤷‍♀️`
              }
              else if(bmi<25) {
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent= `Your BMI is ${bmi} and you are healthy 👍`
              }
              else{
                calculateMessage.classList.add('color-red')
                calculateMessage.textContent= `Your BMI is ${bmi} and you are overweight 😢`
              }

              //clear input
              calculateCm.value= ''
              calculateKg.value= ''

              setTimeout(() =>{
                calculateMessage.textContent = ''
              }, 4000)

    }
}

calculateForm.addEventListener('submit',calculateBmi)


const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)


// Scroll Reveal Animation

const sr = ScrollReveal ({
    origin: 'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home-data ,.footer-container , .footer-group`)
sr.reveal(`.home-img`,{delay:700, origin:'bottom'})
sr.reveal(`.logos img , .program-card , .pricing-card`,{interval:100})
sr.reveal(`.choose-img , .calculate-content`,{origin:'left'})
sr.reveal(`.choose-content ,.calculate-img`,{origin:'right'})