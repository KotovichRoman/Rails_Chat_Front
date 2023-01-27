import {useEffect, useState} from "react";
import IChat from "../types/data";
import Chat from "./Chat";

function ChatList() {
    const [chats, setChats] = useState<IChat[]>([])
    const [isUpdate, setUpdate] = useState<boolean>(false)

    useEffect(() => {
        getChats()
        setUpdate(false)
    }, [isUpdate])

    const getChats = async() => {
        try {
            let chats: IChat[] = [
                {title: "first title"},
                {title: "second title"},
                {title: "third title"}
            ]

            setChats(chats);

        } catch (error: any) {
            console.log(error)
        }
    }
    
    return (
        <div className="chat-list">
            <h1>Chat List</h1>
            { chats.map((chat: IChat) => (
                <Chat title={chat.title} />
            ))}
        </div>
    )

}

export default ChatList