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
    })

}

window.onload = function(){
    closeNewsLetter()
    closeNotification()
}