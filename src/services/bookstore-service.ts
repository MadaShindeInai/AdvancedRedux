interface Book {
  id: number;
  author: string;
  title: string;
}

class BookstoreService {
  public getBooks(): Array<Book> {
    return [
      { id: 1, title: 'Republic of Thiefs', author: 'Scott Linch' },
      { id: 2, title: 'Mazes of Eho', author: 'Maks Frai' },
      { id: 3, title: 'Simple magic things', author: 'Maks Frai' },
    ];
  }
}
export default BookstoreService; 