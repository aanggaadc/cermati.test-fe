function closeNotification() {
    const notifPanel = document.getElementById('notification')
    const button = document.getElementById('notif-button')
    
    button.addEventListener("click", () => {
        notifPanel.classList.add('close')
    })
}

function closeNewsLetter() {
    const newsPanel = document.getElementById('newsletter')
    const closeButton = document.getElementById('newsletter-close')

    closeButton.addEventListener('click', () => {
        newsPanel.classList.add('close')
        window.sessionStorage.setItem('status', 'true')
        setTimeout(() => {
            window.sessionStorage.removeItem('status')
        }, 600000)
    })

}

function cekStatus() {
    const newsPanel = document.getElementById('newsletter')
    const status = !window.sessionStorage.getItem('status')
    if (status) {
        newsPanel.style.removeProperty('visibility')       
      } 
}

window.onload = function(){
    cekStatus()
    closeNewsLetter()
    closeNotification()
}