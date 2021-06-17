AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 220,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});

window.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('[data-modal]')
    const modalOpenBtn = document.querySelector('[data-openModal]')
    const submitBtn = modal.querySelector('[data-send]')

    modalOpenBtn.addEventListener('click', () => {
        modal.classList.add('active')
    })

    modal.addEventListener('click', e => {
        if (e.target.classList.contains('m-close') || e.target.classList.contains('modal')) {
            modal.classList.remove('active')
        }
    })

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        modal.querySelector('.modal-form').style.display = 'none'
        modal.querySelector('.modal-success').style.display = 'flex'
        setTimeout(() => {
            modal.classList.remove('active')
            modal.querySelector('.modal-form').style.display = ''
            modal.querySelector('.modal-success').style.display = 'none'
        },3000)
    })
})