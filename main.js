function closeNotification() {
    const notifPanel = document.getElementById('notification')
    const button = document.getElementById('notif-button')
    
    button.addEventListener("click", () => {
        notifPanel.classList.add('close')
    })
}

window.onload = closeNotification