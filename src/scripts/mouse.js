const cursor = document.querySelector('.cursor')

window.addEventListener('mousemove', event => {
    cursor.style.top = event.pageY + 'px'
    cursor .style.left = event.pageX + 'px'
})

window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})

window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})