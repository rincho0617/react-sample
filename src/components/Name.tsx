import React from "react"
const Name = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    return (
        <div style={{ padding: "16px", backgroundColor:"gray"}}>
            <label htmlFor="name">名前</label>
            <input type="text" name="" id="name" className="input-name" onChange={onChange}/>
        </div>
    )
}

export default Name;