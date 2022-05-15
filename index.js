const createNewNote = (extrait, space) => {
    const newNote = document.createElement('ul')
    newNote.classList.add('note')

    const newExtrait = document.createElement('li')
    newExtrait.classList.add('extrait')
    newExtrait.innerText = extrait
    newNote.appendChild(newExtrait)

    const newBtnSpace = document.createElement('li')
    newBtnSpace.classList.add('buttonViewMore')
    newBtnSpace.innerText = space
    newNote.appendChild(newBtnSpace)


    return newNote
}

const handleSubmit = (event) => {
    event.preventDefault()
    const newExtrait = document.querySelector('#newNote').value
    const newNote = createNewNote(newExtrait)
    document.querySelector('#notes').appendChild(newNote)

    resetForm()
}

const createNewButton = () => {
    
    const viewMoreBtn = document.createElement('button')
    viewMoreBtn.classList.add('viewMore')
    viewMoreBtn.innerText = button
    viewMoreBtn.type = "button"
    viewMoreBtn.name = 'viewMore'
    newBtnSpace.appendChild(viewMoreBtn)

    return viewMoreBtn
}

function viewMoreBtn(event) {
    event.preventDefault()
    document.querySelectorAll('buttonViewMore').appendChild(viewMoreBtn)

    resetForm()

}