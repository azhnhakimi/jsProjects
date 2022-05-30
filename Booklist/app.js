// Book class: creates a book

class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class: handle UI tasks

class UI{
    // with static u can use the method without creating an instance
    static displayBooks(){

        const books = Store.getBooks();

        books.forEach(book => UI.addBooksToList(book))
    }  

    static addBooksToList(book){
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el){
        el.parentElement.parentElement.remove();
    }

    // <div class='alert alert-danger'>message</div>
    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        //vanishing
        setTimeout(() => {
            div.remove()
        },1000)
    }
    
    
    static clearFields(){
        document.querySelector('#title').value = ''
        document.querySelector('#author').value = ''
        document.querySelector('#isbn').value = ''
    }
}

// Store Class: handles storage

class Store {

    static getBooks(){
        let books;
        if (localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        })

        localStorage.setItem('books', JSON.stringify(books));
    }
}


// Event: display books

document.addEventListener('DOMContentLoaded', UI.displayBooks())

// Event: add a book

document.querySelector('#book-form').addEventListener('submit', (e) => { 
    // Prevent actual submit 
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

;

    //validate
    if (title === '' || author === '' || isbn === '' ){
        UI.showAlert('Please fill in all fields!', 'danger');
    }else{
        // Instantiate a new book
        const book = new Book(title, author, isbn);

        // Add books to list
        UI.addBooksToList(book);

        Store.addBook(book);

        // Show success message
        UI.showAlert('Book successfully added!', 'success')
        
        // Clear fields
        UI.clearFields();
    }
    
    

})

// Event: remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    
    UI.deleteBook(e.target);

    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show success message
    UI.showAlert('Book successfully removed!','success')
})
