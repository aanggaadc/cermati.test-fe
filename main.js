function closeNotification() {
    const notifPanel = document.getElementById('notification')
    const button = document.getElementById('notif-button')
    
    button.addEventListener("click", () => {
        notifPanel.classList.add('close')
    })
}

function showNewsLetter() {
    const newsPanel = document.getElementById('newsletter')

    function scrollShow() {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);

        if (scrollPercentRounded >= 33.33) {
            newsPanel.classList.add('show')
        } 
    };

    window.addEventListener("scroll", scrollShow);
}

function closeNewsLetter() {
    const newsPanel = document.getElementById('newsletter')
    const closeButton = document.getElementById('newsletter-close')

    closeButton.addEventListener('click', () => {
        newsPanel.classList.remove('show')
        newsPanel.style.visibility = "hidden"    
        window.sessionStorage.setItem('status', 'true')
        setTimeout(() => {
            window.sessionStorage.removeItem('status')
        }, 600000)
    })
}

function cekStatus() {
    const newsPanel = document.getElementById('newsletter')
    const status = window.sessionStorage.getItem('status')
    if (!status) {
        newsPanel.style.removeProperty('visibility')       
      } 
}

window.onload = function(){
    cekStatus()
    showNewsLetter()
    closeNewsLetter()
    closeNotification()
}