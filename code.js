const bookLibrary = document.querySelector('.container-library')
const bookSubmit = document.querySelector('.container-form-submit')
const bookForm = document.querySelector('.container-form')
let bookName
let bookAuthor
let bookPages
let bookRead
let book
const myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book, library) {
  library.push(book)
  displayLibrary(library)
}

function displayBook(book) {
  const bookContainer = document.createElement('div')
  const bookTop = document.createElement('div')
  const bookBottom = document.createElement('div')

  bookContainer.classList.add('book')
  bookTop.classList.add('book-top')
  bookBottom.classList.add('book-bottom')

  for (const attribute in book) {
    let bookAttribute
    switch (attribute) {
      case 'title':
        bookAttribute = document.createElement('p')
        bookAttribute.textContent = book[attribute]
        bookAttribute.classList.add('book-title')
        bookTop.append(bookAttribute)
        break
      case 'author':
        bookAttribute = document.createElement('p')
        bookAttribute.textContent = book[attribute]
        bookAttribute.classList.add('book-author')
        bookTop.append(bookAttribute)
        break
      case 'pages':
        bookAttribute = document.createElement('p')
        bookAttribute.textContent = book[attribute] + ' pages'
        bookAttribute.classList.add('book-pages')
        bookTop.append(bookAttribute)
        break
      case 'read':
        let counter = 0
        bookAttribute = document.createElement('button')
        if (book[attribute]) {
          bookAttribute.textContent = 'Not Read'
          bookAttribute.classList.add('read')
          bookAttribute.addEventListener('click', function () {
            counter++
            if (counter % 2 != 0) {
              bookAttribute.classList.remove('read')
              bookAttribute.classList.add('not-read')
              bookAttribute.textContent = 'Read'
            } else {
              bookAttribute.classList.remove('not-read')
              bookAttribute.classList.add('read')
              bookAttribute.textContent = 'Not Read'
            }
          })
        } else {
          bookAttribute.textContent = 'Read'
          bookAttribute.classList.add('not-read')
          bookAttribute.addEventListener('click', function () {
            counter++
            if (counter % 2 == 0) {
              bookAttribute.classList.remove('read')
              bookAttribute.classList.add('not-read')
              bookAttribute.textContent = 'Read'
            } else {
              bookAttribute.classList.remove('not-read')
              bookAttribute.classList.add('read')
              bookAttribute.textContent = 'Not Read'
            }
          })
        }
        bookAttribute.classList.add('book-read')
        bookBottom.append(bookAttribute)
        break
      default:
        bookAttribute.textContent = 'IDK'
        bookContainer.append(bookAttribute)
        break
    }
  }

  const bookDelete = document.createElement('button')
  bookDelete.textContent = 'Remove'
  bookDelete.addEventListener('click', function () {
    bookContainer.remove()
    myLibrary.splice(myLibrary.indexOf(book), 1)
  })
  bookDelete.classList.add('book-remove')

  bookBottom.append(bookDelete)
  bookContainer.append(bookTop)
  bookContainer.append(bookBottom)
  console.log(bookContainer)
  bookLibrary.append(bookContainer)
}

function displayLibrary(library) {
  bookLibrary.innerHTML = ''
  for (const book in library) {
    displayBook(library[book])
  }
}

addBookToLibrary(
  new Book('Stewie Griffin', 'Stewie Griffin', 78, false),
  myLibrary
)

bookSubmit.addEventListener('click', function () {
  bookFormData = new FormData(bookForm)

  bookName = bookFormData.get('bookName')
  bookAuthor = bookFormData.get('bookAuthor')
  bookPages = Number(bookFormData.get('bookPages'))
  bookRead = bookFormData.get('bookRead') ? false : true
  book = new Book(bookName, bookAuthor, bookPages, bookRead)
  console.log(bookName)
  if (bookName && bookAuthor && bookPages >= 1) {
    addBookToLibrary(book, myLibrary)
  }
})
