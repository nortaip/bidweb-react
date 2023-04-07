import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';

const LoginForm = () => {
    const onFinish = async (values) => {
        try {
            const response = await axios.post('http://localhost/tu/api/login.php', {
                username: values.username,
                password: values.password,
            });
            console.log(response.data); // handle successful login
        } catch (error) {
            console.log(error); // handle login error
        }
    };

    return (
        <div className='container' >
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;
