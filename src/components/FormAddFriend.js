import { useState } from "react";
import Button from "./Button";

function FormAddFriend({onAddFriend}) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/48');

    const handleAddFriend = (e) => {
        e.preventDefault();

        if(!name) {
            return
        }

        const id = crypto.randomUUID();
        const newFriend = {
            name,
            image: `${image}?=${id}`,
            balance: 0,
            id
        };

        onAddFriend(newFriend);

        setName('');
        setImage('https://i.pravatar.cc/48')
    }

    return (
        <form onSubmit={(e) => handleAddFriend(e)} className="form-add-friend">
            <label>Friend name</label>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
            />

            <label>Image URL</label>
            <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                type="text"
            />

            <Button>Add</Button>
        </form>
    )
}

export default FormAddFriend
