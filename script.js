// Початковий масив бібліотеки
let library = [
    {
        title: "1984",
        author: "Джордж Орвелл",
        year: 1949,
        genre: "Дистопія",
        available: true
    },
    {
        title: "Гаррі Поттер і філософський камінь",
        author: "Дж. К. Ролінг",
        year: 1997,
        genre: "Фентезі",
        available: false
    },
    {
        title: "Володар перснів",
        author: "Дж. Р. Р. Толкін",
        year: 1954,
        genre: "Фентезі",
        available: true
    },
    {
        title: "Код да Вінчі",
        author: "Ден Браун",
        year: 2003,
        genre: "Детектив",
        available: true
    },
    {
        title: "Маленький принц",
        author: "Антуан де Сент-Екзюпері",
        year: 1943,
        genre: "Філософія",
        available: false
    }
];

// Функція додавання книги
function addBook(library, newBook) {
    library.push(newBook);
    console.log(`Книга "${newBook.title}" додана до бібліотеки.`);
}

// Функція видалення книги за назвою
function removeBook(library, title) {
    const index = library.findIndex(book => book.title === title);

    if (index !== -1) {
        library.splice(index, 1);
        console.log(`Книга "${title}" видалена.`);
    } else {
        console.log(`Книга "${title}" не знайдена.`);
    }
}

// Функція пошуку книг за автором
function findBooksByAuthor(library, author) {
    const books = library.filter(book => book.author === author);

    if (books.length === 0) {
        console.log(`Книг автора "${author}" не знайдено.`);
        return;
    }

    console.log(`Книги автора "${author}":`);

    books.forEach(book => {
        console.log(
            `- ${book.title} (${book.year}, ${book.genre}, ${
                book.available ? "Видана" : "Доступна"
            })`
        );
    });
}

// Функція підрахунку кількості книг
function getTotalBooks(library) {
    console.log(`Загальна кількість книг: ${library.length}`);
    return library.length;
}

// Функція зміни статусу книги
function toggleAvailability(library, title) {
    const book = library.find(book => book.title === title);

    if (book) {
        book.available = !book.available;

        console.log(
            `Статус книги "${title}" змінено на: ${
                book.available ? "доступна" : "видана"
            }.`
        );
    } else {
        console.log(`Книга "${title}" не знайдена.`);
    }
}

// Виведення всіх книг
function showAllBooks(library) {
    console.log("Список книг у бібліотеці:");

    library.forEach(book => {
        console.log(
            `${book.title} — ${book.author}, ${book.year}, ${book.genre}, ${
                book.available ? "доступна" : "видана"
            }`
        );
    });
}


// Демонстрація роботи програми

console.log("ПОЧАТКОВИЙ СПИСОК");
showAllBooks(library);

console.log("\n1. Додавання нової книги");

const newBook = {
    title: "Шерлок Холмс",
    author: "Артур Конан Дойл",
    year: 1887,
    genre: "Детектив",
    available: true
};

addBook(library, newBook);

console.log("\n2. Пошук книги за автором");

findBooksByAuthor(library, "Дж. К. Ролінг");

console.log("\n3. Підрахунок кількості книг");

getTotalBooks(library);

console.log("\n4. Зміна статусу книги");

toggleAvailability(library, "Гаррі Поттер і філософський камінь");

console.log("\n5. Видалення книги");

removeBook(library, "1984");

console.log("\n6. Спроба видалити неіснуючу книгу");

removeBook(library, "Аліса в Країні див");

console.log("\n7. Кінцевий список книг");

showAllBooks(library);

console.log("\n8. Кінцева кількість книг");

getTotalBooks(library);