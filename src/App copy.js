import './App.css';

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className='Comment'>
            <UserInfo user={props.author}></UserInfo>
            <div className='Comment-text'>
                {props.text}
            </div>
            <div className='Comment-date'>
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function UserInfo(props) {
    return (
        <div className='UserInfo'>
            <Avatar user={props.user}></Avatar>
            <div className='UserInfo-name'>
                {props.user.name}
            </div>
        </div>
    );
}

function Avatar(props) {
    return (<img className='Avatar' src={props.user.avatarUrl} alt={props.user.name} />)
}

function App() {
    const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
            name: 'Hello Kitty',
            avatarUrl: 'http://placekitten.com/g/64/64',
        },
    };
    return <Comment date={comment.date} text={comment.text} author={comment.author}></Comment>
}

export default App;