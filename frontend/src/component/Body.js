import { useState } from "react";
import axios from "axios";
import "../css/Body.css"

const Body = () => {
    const [name, setName] = useState('')

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/api/v1/sending-digest',{name})
        setName('');
    }
    const onChangeHandler = e => {
        setName(e.target.value)
    }
    return (

        <form onSubmit={onSubmitHandler} className="form">
            <label for="noti-text" className="label">Enter notification text:</label>
            <input id="noti-text" placeholder="Will be sent as a digest message" type="text" onChange={onChangeHandler} value={name} className="text"/>
            <button className="btn" type="submit"> Send </button>
        </form>
    )
}

export default Body