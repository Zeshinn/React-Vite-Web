import React, {useState} from 'react';

function MyComponent(){
    const [name, setName] = useState("Guest");
    const [comment, setComment] = useState("")
    let comments = (name, comment) => {

    }
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function addComment(){

    }

    return(
        <>
            <div>
                <input className="nameInput" placeholder="Enter your name..." type="text" value={name} onChange={handleNameChange}/>
                <br />
                <input classname="commentInput" placeholder="Enter your comment..." type="text" value={comment} onChange={handleCommentChange}/>
                <button onClick={addComment}>Comment</button>
            </div>
            <div>
                {comments}
            </div>
        </>
    );
}
export default MyComponent;