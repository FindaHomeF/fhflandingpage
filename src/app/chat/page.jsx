import ChatPage from "../components/chatPage/chatpage"
import Header from "../components/global/Header"


const Chat = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
        <Header/>
        <ChatPage/>
    </div>
  )
}

export default Chat