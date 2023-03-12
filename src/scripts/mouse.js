const cursor = document.querySelector('.cursor')

window.addEventListener('mousemove', event => {
    cursor.style.top = event.pageY + 'px'
    cursor .style.left = event.pageX + 'px'
})