import { Form, Input, Button, Card, InputNumber } from "antd";

const { TextArea } = Input;
const createMenuItem = () => {
  return (
    <Card title="New Menu Item" style={{margin: 20}}>
        <Form layout="vertical" wrapperCol={{span: 8}}>
            <Form.Item label="Dish Name" required>
                <Input placeholder="Enter dish Name"/>
            </Form.Item>
            <Form.Item label="Dish Description">
                <TextArea row={4} placeholder="Enter dish description"/>
            </Form.Item>
            <Form.Item label="Price {৳}">
                <InputNumber/>
            </Form.Item>
            <Form.Item>
                <Button type="primary">Submit</Button>
            </Form.Item>
        </Form>
    </Card>
  )
}

export default createMenuItem