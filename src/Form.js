import React, {useState} from 'react'

function Form(postData) {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    
    const send = (e) => {
        e.preventDefault();
        if(title === '' || author ==='') {
            alert('one of your fields is empty')
            return;
        }
        postData({title, author})
    }

    return (
        <form onSubmit={send}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <input type="submit" value='Add' />
        </form>
    )
}

export default Form
