import Comment from "../components/Comment.jsx"; 
const comment = {

    author: {
        name: "Bob Dole",
        avatarUrl: ""

    },

    text: "make sure to update the avatarUrl before changing this to something funny",
    date: new Date()

}; 

function App() {

    return (
        <div>
            <Comment {...comment} />
        </div>
    ); 
}

export default App; 