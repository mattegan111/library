let myLibrary = []

let demoBookOne = new Book("Harry Potter 1", "J.K Rowling", "329", "Yes")
let demoBookTwo = new Book("Harry Potter 2", "J.K Rowling", "499", "No")
myLibrary.push(demoBookOne, demoBookTwo)

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.index = myLibrary.length
}

function addBookToLibrary() {
    let title = prompt("Book Title: ", "")
    let author = prompt("Author: ", "")
    let pages = prompt("Pages: ", "")
    let read = prompt("Read?: ", "")

    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
    populateCatalog();
}

function deleteBookFromLibrary(index) {
    alert(`delete div${index}`)
    myLibrary.splice(index)
    populateCatalog()
}

let addBook = document.getElementById("addBook");
addBook.addEventListener("click", () => {
    addBookToLibrary()
})

function populateCatalog() {
    const catalog = document.getElementById("catalog")
    catalog.innerHTML = "";
    
    myLibrary.forEach(element => {
        let bookThumb = document.createElement(`div`)
        bookThumb.id = `div${element.index}`
        bookThumb.classList.add("bookThumb")
        bookThumb.className = "bookThumb"
        bookThumb.innerHTML = (
            `<p>Title: ${element.title}</p>
             <p>Author: ${element.author}</p>
             <p>Pages: ${element.pages}</p>
             <p>Read: ${element.read}</p>
             <p>Index: ${myLibrary.indexOf(element)}</p>
             <button class="myButton" id="deleteBook${myLibrary.indexOf(element)}">Delete</button>
             <button class="myButton" id="readBook${myLibrary.indexOf(element)}">Read/Unread</button>`)

        catalog.appendChild(bookThumb)

        let deleteBook = document.getElementById(`deleteBook${myLibrary.indexOf(element)}`)
        deleteBook.addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(element),1)
            populateCatalog()
        })

        let readBook = document.getElementById(`readBook${myLibrary.indexOf(element)}`)
        readBook.addEventListener("click", () => {
            if(element.read == "Yes") {
                element.read = "No"
            }
            else if(element.read == "No") {
                element.read = "Yes"
            }
            populateCatalog()
        })
    })
}

populateCatalog()