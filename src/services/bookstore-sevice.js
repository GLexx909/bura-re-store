// Отвечает за получения данных о книгах.
// В реальном приложении работал бы с БД, а в нашем будет работать с заранее подготовленными данными.

export default class BookstoreService {

  getBooks() {
    return [
      { id: 1,
        title: 'Production-ready Microservices',
        author: 'Susan J. Fowler' },
      { id: 2,
        title: 'Release It!',
        author: 'Michael T. Nygard' }
    ];
  }
}
