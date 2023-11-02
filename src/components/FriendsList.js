import Friend from "./Friend";

function FriendsList({friends, onSelection, selectedFriends}) {
    return (
        <ul>
            {friends.map((friend) => (
                <Friend
                    onSelection={onSelection}
                    key={friend.id}
                    friend={friend}
                    selectedFriends={selectedFriends}
                />
            ))}
        </ul>
    );
}

export default FriendsList;
