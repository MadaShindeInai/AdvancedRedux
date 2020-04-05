// import { Book } from '../interfaces'

class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Republic of Thiefs',
      author: 'Scott Linch',
      price: 32,
      coverImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Republic_of_Thieves_by_Scott_Lynch_Cover.jpg/220px-Republic_of_Thieves_by_Scott_Lynch_Cover.jpg'
    },
    {
      id: 2,
      title: 'Mazes of Eho',
      author: 'Maks Frai',
      price: 329,
      coverImage: 'https://s5-goods.ozstatic.by/2000/399/464/10/10464399_0.jpg'
    },
    {
      id: 3,
      title: 'Simple magic things',
      author: 'Maks Frai',
      price: 41,
      coverImage: 'http://loveread.ec/img/photo_books/16540.jpg'
    },
  ];
  public getBooks() {
    return new Promise((res, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.1) {
          reject(new Error('Something bad happend'));
        } else {
          res(this.data);
        }
      }, 1000);
    })
  }
}
export default BookstoreService; 