let $ = document
let contextMenu = $.querySelector('.context-menu')
$.body.addEventListener('contextmenu', (event) => {
    event.preventDefault()
    if (contextMenu.style.display === 'none') {
        contextMenu.style.display = 'inline'
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
    } else {
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
    }
})
$.body.addEventListener('click', () => {
    contextMenu.style.display = 'none'
})
$.body.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        contextMenu.style.display = 'none'
    }
})