import Book from "./classes/Book.js"

const formPanel = document.getElementById('form-panel'),
      sectionBooks = document.getElementById('section-books')

const newBook = (book) => {
  const createBook = document.createElement('article')
  if(createBook){
    createBook.classList.add('article-book')
    createBook.innerHTML = `
      <figure class="cover-page">
        <img src="${book.getCoverPage()}" alt="${book.getNameBook()}">
      </figure>
      <div class="content-data">
        <h2 class="title-book">${book.getNameBook()}</h2>
        <div class="information-book">
          <span class="pages-book">${book.getNumberPages()} páginas</span>
          <span class="year-book">${book.getyearbook()}</span>
        </div>
        <hr class="separator-book" />
        <h3 class="author-book">${book.getAuthor()}</h3>
      </div>
    `
    if(sectionBooks){
      sectionBooks.classList.add('section-books')
      sectionBooks.appendChild(createBook)
    }
  }
}


if(formPanel){
  formPanel.addEventListener('submit', e => {
    e.preventDefault()
    let confirmBook = confirm('Add new book to collection?')
    if(confirmBook){
      const target = e.target,
          createNewBook = new Book(target.nameBook.value, target.pageBook.value, target.yearBook.value, target.coverPage.value, target.nameAuthor.value)
      newBook(createNewBook)
      clearInput()
    }else{
      alert('verify for a new modification')
    }
  })
}

const clearInput = () => {
  const nameBook = document.getElementById('name-book'),
        pageBook = document.getElementById('page-book'),
        yearBook = document.getElementById('year-book'),
        coverPage = document.getElementById('cover-page'),
        nameAuthor = document.getElementById('name-author')

        nameBook.value = ''
        pageBook.value = ''
        yearBook.value = ''
        coverPage.value = ''
        nameAuthor.value = ''
}