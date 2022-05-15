import {Card, Table, Tag } from 'antd'
import OrdersHistory from "../../assets/data/orders-history.json"

const ordersHistory = () => {
//   const renderOrderStatus = (orderStatus) => {
//     if (orderStatus === 'Delivered'){
//         return <Tag color={'green'}>{orderStatus}</Tag>
//     }
//     return <Tag color={'red'}>{orderStatus}</Tag>
//   };
  
  const tableColumns = [
    {
        title: 'Order ID',
        dataIndex: 'orderId',
        key: 'orderId'
    },
    {
        title: 'Delivery Address',
        dataIndex: 'deliveryAddress',
        key: 'deliveryAddress'
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (price) => `${price}৳`
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        //render: renderOrderStatus
        render: (status) => <Tag color={status === 'Delivered' ? 'green' : 'red'}>{status}</Tag>
    }
  ]

  return(
    <Card title={'Orders History'} style={{ margin: 20 }}>
        <Table dataSource={OrdersHistory} columns={tableColumns} rowKey="orderId" />
    </Card>
)
}

export default ordersHistory