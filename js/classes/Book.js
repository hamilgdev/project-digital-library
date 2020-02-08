export default class Book {

  constructor (namebook, numberpages, yearbook, coverpage, author){
    this.namebook = namebook
    this. numberpages = numberpages
    this.yearbook = yearbook
    this.coverpage = coverpage
    this.author = author
  }

  getNameBook(){
    return this.namebook
  }
  
  getNumberPages(){
    return this.numberpages
  }

  getyearbook(){
    return this.yearbook
  }

  getCoverPage(){
    return this.coverpage
  }

  getAuthor(){
    return this.author
  }

  setNameBook(namebook){
    this.namebook = namebook
  }

  setNumberPages(numberpages){
    this.numberpages = numberpages
  }

  setyearbook(yearbook){
    this.yearbook = yearbook
  }

  setCoverPage(coverpage){
    this.coverpage = coverpage
  }

  setAuthor(author){
    this.author = author
  }

}