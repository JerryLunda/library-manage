class Book{

    constructor(title, full_page){
        this.title = title;
        this.full_page = full_page;
        this.page = 1;
    }

    nextPage(){
        this.page+=1;
    }

    close(){
        this.page = 1;
    }



}

const b = new Book("Seigneur des anneaux", 200);
console.log(b.page);
b.nextPage();
console.log(b.page);
b.close();
console.log(b.page);

// const l = new Library();
// l.addBook(b);
// l.addBooks([
//     new Book("Ready player One", 100),
//     new Book("Oui-Oui", 10),
//     new Book("sillage", 10)
// ]);