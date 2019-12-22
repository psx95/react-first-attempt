import React, { Component } from 'react'
import PropTypes from 'prop-types' // helpful in debugging
import { Book } from './Book'
import { Hiring } from './Hiring' 
import { NotHiring } from './NotHiring'

class Library extends Component {
    // The constructor is called before the component is mounted. Local state code should usually be initialized here
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

    // this will be used if for some reason actual props are not sent or are null
    static defaultProps = {
        // the props should be the same. Meaning since props is supposed to have a field named books, it must have that
        books: [            
            { "title": "Tahoe Tales", "author": "Charles Whitley", "pages": 1000 }  
        ]
    }

    state = {
        open: false,
        freeBookmark: false,
        hiring: true,
        loading: false,
        data: []
    } // writing this will create a static variable & allow us to get rid of the entire constructor
    // the binding was no longer required since an arrow function is used which automatiacally binds function to context

    // To look at all lifecycle methods, visit http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    /**
     * This lifecycle method is called whenever the component is mounted. This means the component is now loaded 
     * to the DOM. This is a good place to start fetching some data from the APIs
     */
    componentDidMount() {
        this.setState({ loading: true })        
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({ data: data, loading: false }))        
    }

    /**
     * This lifecycle method is called whenever the component is updated. This method will be called whenever the state 
     * or the props of the app changes. In the current code, this will be called whenever the change button is clicked.
     */
    componentDidUpdate() {
        console.log("Library Component Just updated")
    }

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

    /**
     * Render is the required method of the React component lifecycly. Therefore this method must be implemented.
     * Component lifecycle methods are only available with the class syntax. So they are unavailable when using the
     * function syntax. 
     * IMPORTANT: Whenever the props or state of the app changes, render will be called.
     */
    render() {
        const {books} = this.props
        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring /> /**Conditional rendering */} 
                
                <h1>The Library is {this.state.open ? 'open' : 'closed'}</h1>
                
                {this.state.loading ?
                    <div>loading...</div>
                    : <div>
                        <h3>Library Products of the Week !</h3>
                        {this.state.data.map(
                            product => {
                                return (
                                    <div key={product.id}>
                                        <h4>{product.name}</h4>
                                        <img alt={product.name} src={product.image} height={100} />
                                    </div>
                                )
                            }
                        )}                        
                    </div>}
                
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

// Prop types allow us to specify expected types of the props, this helps in proper messages being thrown when 
// a type mismatch happens making it easier to debug
Library.propTypes = {
    books: PropTypes.array
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

export default Library