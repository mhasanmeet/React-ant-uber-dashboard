import {Card, Descriptions, Divider, List, Button} from 'antd'
import dishes from "../../assets/data/dishes.json"
import { useParams } from 'react-router'

const DetailedOrder = () => {
    const {id} = useParams();

    return(
        <Card title={`Order ${id}`} style={ {margin: 20} }>
            <Descriptions bordered column={{lg: 1, md: 1, sm: 1}}>
                <Descriptions.Item label="Customer">Mahmudul Hasan</Descriptions.Item>
                <Descriptions.Item label="Customer Addess">Khilkhet, Dhaka</Descriptions.Item>
            </Descriptions>

            <Divider/>

            <List dataSource={dishes} renderItem={(dishItem) =>(
                <List.Item>
                <div style={{fontWeight: 'bold'}}>{dishItem.name} X {dishItem.quantity}</div>
                <div style={{fontWeight: 'bold'}}> ৳{dishItem.price}</div>
                </List.Item>
            )}>
            </List>

            <Divider/>

            <div style={styles.totalSumContainer}>
                <h2>Total:</h2>
                <h2 style={styles.totalPrice}>৳950</h2>
            </div>

            <Divider/>

            <div style={styles.buttonContainer}>
                <Button block type="danger" size="large" style={styles.button}>
                    Decline Order
                </Button>

                <Button block type="primary" size="large">
                    Accept Order
                </Button>
            </div>

            <Divider/>
            <div>
                <Button block type="primary" size="large">
                    Food Is Done
                </Button>
            </div>
        </Card>
    )
}

const styles = {
    totalSumContainer: {
      flexDirection: 'row',
      display: 'flex'
    },
    totalPrice: {
      marginLeft: 'auto',
      fontWeight: 'bold'
    },
    buttonContainer: {
      flexDirection: 'row',
      display: 'flex'
    },
    button: {
      marginLeft: 20,
      marginRight: 20
    }
  }

export default DetailedOrder;