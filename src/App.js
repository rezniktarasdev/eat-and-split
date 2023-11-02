import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend"
import Button from './components/Button'
import FormSplitBill from './components/FormSplitBill'
import { useState } from "react";

const initialFriends = [
    {
        id: 118836,
        name: "Clarks",
        image: "https://i.pravatar.cc/48?u=118836d",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setshowAddFriend] = useState(false);
    const [selectedFriends, setselectedFriends] = useState(null);

    const handleShowAddFriend = () => {
        setshowAddFriend((currShowAddFriend) => !currShowAddFriend)
    }

    const handleAddFriend = (newFriend) => {
        setFriends((friends) => [...friends, newFriend]);
        setshowAddFriend(false)
    }

    const handleSelection = (friend) =>  {
        setselectedFriends((cur) => (cur?.id === friend.id ? null : friend));
        setshowAddFriend(false);

    }

    const  handleSplitBill = (value) => {
        console.log(value)
        setFriends((friends) =>
            friends.map((friend) =>
            friend.id === selectedFriends.id
                ? { ...friend, balance: friend.balance + value }
                : friend
            )
        );

        setselectedFriends(null);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    friends={friends}
                    onSelection={handleSelection}
                    selectedFriends={selectedFriends}
                />

                {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}

                <Button onClick={handleShowAddFriend}>
                    {showAddFriend ? 'Add Friend' : 'Close'}
                </Button>
            </div>

            {selectedFriends && <FormSplitBill selectedFriends={selectedFriends} onSplitBill={handleSplitBill} />}
        </div>
    )
}

export default App;
