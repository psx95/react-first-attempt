import React from 'react' // destructuring so that we no longer need to write React.Component
import ReactDOM from 'react-dom'
import Library from './Library'
import FavouriteColorForm from './FavouriteColorForm'

let bookList = [
    { "title": "The Sun also Rises", "author": "Ernest Hemingway", "pages": 260 },
    { "title": "White Teeth", "author": "Zade Smith", "pages": 480 },
    { "title": "Cat's Cradle", "author": "Kurt Von", "pages": 304 },
    { "title": "Cat's Cradle II", "author": "Kurt Von", "pages": 302 }
]

// takes in a list of books
// map is a JSX feature that loops over an array
// const Library = ({ books }) => {
//     return (
//         <div>            
//             {books.map(
//                 (book, i) => <Book title={book.title} author={book.author} pages={book.pages} key={i}/>
//             )}
//         </div>
//     )
// }

ReactDOM.render(
    <div>
        <Library  books={bookList}/>
        <FavouriteColorForm />
    </div>, 
    document.getElementById("root")
)