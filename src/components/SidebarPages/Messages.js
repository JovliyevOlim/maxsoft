function Messages(){

    return (
        <div className={"container"}>
            <div className="row">
                <div className="boxMessage">
                    <div className="card">
                        <div className="card-header">
                            <h4>Welcome to message</h4>
                        </div>
                        <div className="card-body">
                            <ul id={"messagesList"}></ul>
                            <div class={"bottom_bar"}>
                                <input type="text" id={"nicknameInput"} placeholder={"Nickname"}/>
                                <input type="text" id={"messageInput"} autocomplete={"off"} placeholder={"Type a message"}/>
                                <button id={"senButton"}>Send</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Messages
