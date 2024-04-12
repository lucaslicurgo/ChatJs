import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {

    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='76a6bf06-190e-4d4b-a72b-fc15cfd6e93e'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage;