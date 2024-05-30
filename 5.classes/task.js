class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100; // Состояние по умолчанию
      this.type = null; // Тип пока не определен
    }
  
    fix() {
      this.state *= 1.5;
    }
  
    setState(newState) {
      if (newState < 0) {
        this.state = 0;
      } else if (newState > 100) {
        this.state = 100;
      } else {
        this.state = newState;
      }
    }
  
    get state() {
      return this.state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = 'magazine';
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = 'book';
    }
  }
  
  class NovelBook extends Book {
    constructor(author, title, releaseYear, pagesCount) {
      super(author, title, releaseYear, pagesCount);
      this.type = 'novel';
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, title, releaseYear, pagesCount) {
      super(author, title, releaseYear, pagesCount);
      this.type = 'fantastic';
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, title, releaseYear, pagesCount) {
      super(author, title, releaseYear, pagesCount);
      this.type = 'detective';
    }
  }
  
  // Примеры использования
  const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  );
  
  console.log(sherlock.releaseDate); //2019
  console.log(sherlock.state); //2019
  console.log(sherlock.state); //100
  sherlock.fix();
  console.log(sherlock.state); //100
  
  const fantasticBook = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(fantasticBook.author); //"Аркадий и Борис Стругацкие"
  fantasticBook.state = 10;
  console.log(fantasticBook.state); //10
  fantasticBook.fix();
  console.log(fantasticBook.state);