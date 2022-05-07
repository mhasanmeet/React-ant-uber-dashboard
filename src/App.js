import {Card, Descriptions, Divider, List, Button} from 'antd'
import dishes from "./assets/data/dishes.json"

function App() {
  return(
    <Card title={'Order Title'} style={ {margin: 20} }>
      <Descriptions bordered column={{lg: 1, md: 1, sm: 1}}>
        <Descriptions.Item label="Customer">Mahmudul Hasan</Descriptions.Item>
        <Descriptions.Item label="Customer Addess">Khilkhet, Dhaka</Descriptions.Item>
      </Descriptions>

      <Divider/>

      <List dataSource={dishes} renderItem={(dishItem) =>(
        <List.Item>
          <div>{dishItem.name}</div>
          <div>{dishItem.quantity}</div>
          <div>{dishItem.price}</div>
        </List.Item>
      )}>

      </List>
    </Card>
  )
}

export default App;
