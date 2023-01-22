import React, { useState } from 'react';
import { Layout, Empty, Button, Input, Space } from 'antd';
const { Content } = Layout;

function LiveChat() {
    const [value, setValue] = useState('99');
    return (
        <>
            <Layout style={{ minWidth: "390px", height: "100%" }}  >
                <div className="Chat-dexsffa">
                    <header>
                        <div className='chahesfkt'>
                            <h3>LiveChat</h3>
                            <div className='bedgedsgs'>15</div>
                        </div>
                    </header>
                    <Content className='chat-container'>
                        <Empty description={false} />
                    </Content>
                    <footer>
                        <div className='ant-space-itemhdf'>
                            <Input placeholder='Send somthng' style={{ width: "100%" }} size='middle' />
                            <Button
                                type="primary"
                                onClick={() => {
                                    setValue(99);
                                }}
                            >
                                send
                            </Button>
                        </div>
                    </footer>
                </div>
            </Layout>
        </>
    );
}

export default LiveChat;
