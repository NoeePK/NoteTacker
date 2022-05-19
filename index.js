const createNewNote = (extrait) => {
    const newNote = document.createElement('ul')
    newNote.classList.add('note')

    const newExtrait = document.createElement('li')
    newExtrait.classList.add('extrait')
    newExtrait.innerText = extrait
    newNote.appendChild(newExtrait)
/* Si remis, remettre dans les para entre parenthèses:
    const newBtnSpace = document.createElement('li')
    newBtnSpace.classList.add('buttonViewMore')
    newBtnSpace.innerText = space
    newNote.appendChild(newBtnSpace)
*/

    return newNote
}

const handleSubmit = (event) => {
    event.preventDefault()
    const newExtrait = document.querySelector('#newNote').value
    const newNote = createNewNote(newExtrait)
    document.querySelector('#notes').appendChild(newNote)

    resetForm()
}
