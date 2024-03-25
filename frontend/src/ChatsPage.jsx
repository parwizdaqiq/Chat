import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
    <div style={{ height: '100vh' }}>
        <PrettyChatWindow
            projectId='
            2e83ffba-f063-4102-b702-f32cdb0f0f3e'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
        />
    </div>
    )
}

export default ChatsPage