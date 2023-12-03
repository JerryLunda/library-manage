class Book{

    constructor(title, size){
        this.title = title;
        this.size = size;
        this.page = 1;
    }

    nextPage(){
        this.page+=1;
    }

    close(){
        this.page = 1;
    }



}


class Library{

    constructor(){
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
    }

    addBooks(books){
        books.forEach(book => {
            this.books.push(book);
        });
    }

    findBooksByLetter(search_letter){
        const filter_result = [];

        this.books.forEach(book => {

            if (book.title.includes(search_letter)) {
                filter_result.push(book)
            }
        });


        return filter_result
    }



}


const b = new Book("Seigneur des anneaux", 200);
console.log(b.page);
b.nextPage();
console.log(b.page);
b.close();
console.log(b.page);

const l = new Library();
l.addBook(b);
l.addBooks([
    new Book("Ready player One", 100),
    new Book("Oui-Oui", 10),
    new Book("sillage", 10)
]);

console.log(l.findBooksByLetter('s'));