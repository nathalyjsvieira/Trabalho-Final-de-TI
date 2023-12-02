/*====================== EMAIL js ======================*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')
 
const sendEmail = (e) => {
    e.preventDefault()
 
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_vyfkm9w','template_7mhk2k7','#contact-form','rYD8AFmOTveBsY0r_')
        .then(() => {
            //Show sent message
            contactMessage.textContent = 'Mensagem enviada com sucesso!'
 
            // Remove message after five seconds
            setTimeout (() => {
                contactMessage.textContent = ''
            }, 5000)
 
            // C;ear input fields
            contactForm.reset()
 
        }, () => {
            // Show error message
            contactMessage.textContent = 'Mensagem náo enviada (service error)'
        })
}   
 
contactForm.addEventListener('submit', sendEmail)
