function Message({text}) {
    return ( 
        <div className="text-block">
            <h1>PROPS</h1>
            <p style={{background: 'red'}}>{text}</p>
        </div>
     );
}

export default Message;