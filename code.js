const bookLibrary = document.querySelector('.container-library')
const myLibrary = []

function Book(title, author, pages, year, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.year = year
  this.read = read
}

function addBookToLibrary(book, library) {
  library.push(book)
}

function displayBook(book) {
  const bookContainer = document.createElement('div')
  bookContainer.classList.add('book')
  for (const attribute in book) {
    let bookAttribute
    switch (attribute) {
      case 'title':
        bookAttribute = document.createElement('p')
        bookAttribute.textContent = 'dogs'
        bookAttribute.classList.add('book-title')
        bookContainer.append(bookAttribute)
        break
      case 'author':
        bookAttribute = document.createElement('p')
        bookAttribute.textContent = book[attribute]
        bookAttribute.classList.add('book-author')
        bookContainer.append(bookAttribute)
        break
      case 'pages':
        bookAttribute = document.createElement('p')
        bookAttribute.textContent = book[attribute] + ' pages'
        bookAttribute.classList.add('book-pages')
        bookContainer.append(bookAttribute)
        break
      case 'year':
        bookAttribute = document.createElement('p')
        bookAttribute.textContent = 'Published ' + book[attribute]
        bookAttribute.classList.add('book-year')
        bookContainer.append(bookAttribute)
        break
      case 'read':
        bookAttribute = document.createElement('button')
        if (book[attribute]) {
          bookAttribute.textContent = 'Read'
          bookAttribute.classList.add('read')
        } else {
          bookAttribute.textContent = 'Not Read'
          bookAttribute.classList.add('not-read')
        }
        bookAttribute.classList.add('book-read')
        bookContainer.append(bookAttribute)
        break
      default:
        bookAttribute.textContent = 'IDK'
        bookContainer.append(bookAttribute)
        break
    }
    bookLibrary.append(bookContainer)
  }

  const bookDelete = document.createElement('button')
  bookDelete.textContent = 'Remove'
  bookDelete.addEventListener('click', function () {
    bookContainer.remove()
  })
  bookDelete.classList.add('book-remove')

  bookContainer.append(bookDelete)
  bookLibrary.append(bookContainer)
}

function displayLibrary(library) {
  for (const book in library) {
    console.table(library)
    displayBook(library[book])
  }
}

addBookToLibrary(
  new Book('Stewie Griffin', 'Stewie Griffin', 78, 1932, true),
  myLibrary
)

console.table(myLibrary)

displayLibrary(myLibrary)
