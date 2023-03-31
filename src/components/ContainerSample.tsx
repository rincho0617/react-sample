import React from "react";

const TitleContent = React.createContext("");

const Title = () => {
    return (
        <TitleContent.Consumer>
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContent.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            <Title/>
        </div>
    )
}

const Page = () => {
    const title = "React Book"
    
    return (
        <TitleContent.Provider value={title}>
            <Header/>
        </TitleContent.Provider>
    )
}

export default Page