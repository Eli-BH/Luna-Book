import {Typography} from '@material-ui/core';
import {useState, useEffect, useRef} from 'react';
import io from 'socket.io-client';
import './Chat.css';

const ChatPage = () => {
    //set the port that we connect to
    const socket = useRef();
    const ioPort = 'localhost:4500';

    const [loggedIn, setLoggedIn] = useState(false);
    const [messageList, setMessageList] = useState([]);
    const [room, setRoom] = useState([]);
    const [username, setUsername] = useState('');
    const [onlineList, setOnlineList] = useState([]);

    const message = useRef();
    const scrollRef = useRef();

    useEffect(() => {
        socket.current = io(ioPort);
    }, [ioPort]);

    useEffect(() => {
        socket.current.on('receiveMessage', (data) => {
            setMessageList([...messageList, data]);
        });
    });

    useEffect(() => {
        scrollRef?.current?.scrollIntoView({behavior: 'smooth'});
    }, [messageList]);

    useEffect(() => {
        socket.current.on('receiveMessage', (data) => {
            setMessageList([...messageList, data]);
        });

        return () => {
            socket.current.off('receiveMessage');
        };
    }, [messageList]);

    useEffect(() => {
        socket.current.on('sendList', (data) => {
            setOnlineList(data[room]);
        });
    });
    const handleEnterRoom = (e) => {
        e.preventDefault();
        const currentUser = {
            username,
            room,
        };
        socket.current.emit('enterRoom', currentUser);
        setLoggedIn((prev) => (prev = !prev));
    };

    const sendMessage = (e) => {
        e.preventDefault();
        let newMessage = {
            room,
            content: {
                username,
                text: message.current.value,
            },
        };

        socket.current.emit('sendMessage', newMessage);
        setMessageList([...messageList, newMessage.content]);
        message.current.value = '';
    };

    console.log(messageList);

    return (
        <div className="App">
            {loggedIn ? (
                <div className="chatPage">
                    <Typography variant="h4">{`Welcome to the ${room} room ${username}`}</Typography>
                    <div className="chatWrapper">
                        <div className="chatOnline">
                            {onlineList?.map((item, index) => (
                                <div className="name" key={index}>
                                    <p>{item.username}</p>
                                </div>
                            ))}
                        </div>

                        <div className="chatContainer">
                            <div className="chatBox">
                                {messageList.map((item, index) => (
                                    <div ref={scrollRef} className={username === item.username ? 'messageBubble right' : 'messageBubble'} key={index}>
                                        <p id="itemText">{item.text}</p>
                                        <p id="itemAuthor">
                                            <small>
                                                <i>{item.username}</i>
                                            </small>
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <form onSubmit={sendMessage} className="chatInput">
                                <input type="text" placeholder="type message" ref={message} />
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="form" style={{marginTop: 100}}>
                    <div className="formWrapper">
                        <form className="loginForm" onSubmit={handleEnterRoom}>
                            <input className="formInput" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} required />

                            <label for="room">Choose Room:</label>
                            <select name="cars" id="rooms" onChange={(e) => setRoom(e.target.value)} value={room}>
                                <option value="Marvel">Marvel</option>
                                <option value="DC">DC</option>
                                <option value="Dark Horse">Dark Horse</option>
                                <option value="Indi">Indi</option>
                                <option value="Movies">Movies</option>
                                <option value="TV">TV</option>
                                <option value="Anime">Anime</option>
                                <option value="Manga">Manga</option>
                                <option value="Web comics">Web-toons</option>
                            </select>

                            <button className="formBtn" type="submit">
                                Enter Room
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatPage;
