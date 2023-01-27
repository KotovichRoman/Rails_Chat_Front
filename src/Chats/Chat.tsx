import IChat from "../types/data";

const Chat = (props: IChat) => (
    <div className="Chat">
        <h2>{props.title}</h2>
    </div>
)

export default Chat