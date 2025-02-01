const body = document.querySelector('body')
const myLibrary = []

function Book(title, author, pages, year) {
  this.title = title
  this.author = author
  this.pages = pages
  this.year = year
}

function addBookToLibrary(book, library) {
  library.push(book)
}

function displayBook(book) {
  const bookContainer = document.createElement('div')
  for (const attribute in book) {
    const bookAttribute = document.createElement('p')
    console.log(attribute)
    switch (attribute) {
      case 'title':
        bookAttribute.textContent = book[attribute]
        break
      case 'author':
        bookAttribute.textContent = book[attribute]
        break
      case 'pages':
        bookAttribute.textContent = book[attribute] + ' pages'
        break
      case 'year':
        bookAttribute.textContent = 'Published ' + book[attribute]
        break
      default:
        bookAttribute.textContent = 'IDK'
        break
    }

    bookContainer.append(bookAttribute)
  }
  body.append(bookContainer)
}

function displayLibrary(library) {
  for (const book in library) {
    console.table(library[book])
    displayBook(library[book])
  }
}

displayLibrary(myLibrary)
