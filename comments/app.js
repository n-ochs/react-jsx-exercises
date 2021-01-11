let ProfilePic = () => {
    return <img src="https://neverwintervault.org/sites/neverwintervault.org/files/project/27523/images/greiratpose.jpg" width="320px" height="180px"/>
}

let CommentBody = () => {
    return <h1>
        @Greirat
    </h1>
}

let Comment = () => {
    return <div>
        <ProfilePic />
        <CommentBody />
    </div>
}

let Comments = () => {
    return <div>
        <ProfilePic />
        <CommentBody />
        <Comment />
    </div>


}

ReactDOM.render(<Comments />, document.getElementById('root'))