import React, { Component } from 'react' // destructuring so that we no longer need to write React.Component
import ReactDOM from 'react-dom'

let bookList = [
    { "title": "The Sun also Rises", "author": "Ernest Hemingway", "pages": 260 },
    { "title": "White Teeth", "author": "Zade Smith", "pages": 480 },
    { "title": "Cat's Cradle", "author": "Kurt Von", "pages": 304 },
    { "title": "Cat's Cradle II", "author": "Kurt Von", "pages": 302 }
]

// this is a function component
const Book = ({ title, author, pages, freeBookmark }) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>By: {author} </p>
            <p>Pages: {pages} Pages</p>
            <p>Free Bookmark today: {freeBookmark ? 'yes!' : 'no!'}</p>
        </section>
    )
}

// function component can also be created without the curly braces
const Hiring = () => 
    <div>
        <p>Library is now hiring! Check <a href="www.library.com/jobs">Library Jobs</a> for more.</p>
    </div>

const NotHiring = () => 
    <div>
        <p>Library is currently not hiring. Check back later for more info.</p>
    </div>

class Library extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         open: false
    //     }
    //     this.toggleOpenClosed = this.toggleOpenClosed.bind(this) //this will bind the context of the current react 
    //     // component to the toggleOpenClosed function
    //     // if this line is not executed, the 'this' inside the toggleOpenClosed function will return null as it does not have the
    //     // context of the Library Component.
    //     // if we want to avoid writing this, we can use arrow fuction which automatically binds it to the current context
    // }

    state = {
        open: false,
        freeBookmark: false,
        hiring: true
    } // writing this will create a static variable & allow us to get rid of the entire constructor
    // the binding was no longer required since an arrow function is used which automatiacally binds function to context

    toggleOpenClosed = () => {
        // setState is asynchronous so the below may not always work (since its dependent on previous state)
        // this.setState({
        //     open: !this.state.open
        // })

        // since its async, we pass in the previous state and used the data from that state to determine the new
        // state. This will always gurantee that the state is set properly
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        const {books} = this.props
        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring /> /**Conditional rendering */} 
                <h1>The Library is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i) => <Book title={book.title}
                        author={book.author}
                        pages={book.pages}
                        key={i}
                        freeBookmark={this.state.freeBookmark} /*Passing Parent component's state variable to child component*//>
                )}                
            </div>
        )
    }
}

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
    <Library books={bookList}/>,
    document.getElementById("root")
)