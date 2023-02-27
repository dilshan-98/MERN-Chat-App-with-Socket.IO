import axios from "axios";
import { useEffect, useState } from "react";

const Chats = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        await axios.get("api/chat")
        .then(res => {
            setUsers(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Chats Page</h1>
            {users.map(user => (
                <div key={user._id}>{user.chatName}</div>
            ))}
        </div>
    );
};

export default Chats;