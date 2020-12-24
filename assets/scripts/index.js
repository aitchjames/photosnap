class MobileMenu {
    constructor() {
        this.navButton = document.querySelector('.nav-menu-toggle')
        this.navMenu = document.querySelector('.nav')
        this.events()
    }

    events() {
        this.navButton.addEventListener('click', () => {
            this.toggleMenu()
        })
    }

    toggleMenu() {
        this.navButton.classList.toggle('nav-menu-closed')
        this.navButton.classList.toggle('nav-menu-open')
        this.navMenu.classList.toggle('active')
    }
}

new MobileMenu()