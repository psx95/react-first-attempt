import React from 'react'
// this is a function component
export const Book = ({ title = "No Title", author = "N/A", pages = "N/A", freeBookmark = false}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>By: {author} </p>
            <p>Pages: {pages} Pages</p>
            <p>Free Bookmark today: {freeBookmark ? 'yes!' : 'no!'}</p>
        </section>
    )
}