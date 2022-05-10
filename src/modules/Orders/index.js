import orders from '../../assets/data/orders.json'
import {Card, Table, Tag } from 'antd'
import { useNavigate } from 'react-router';

const Orders = () => {
    const navigate = useNavigate();
    const renderOrderStatus = (orderStatus) => {
        if (orderStatus === 'Accepted'){
            return <Tag color={'green'}>{orderStatus}</Tag>
        }
        if (orderStatus === 'Pending'){
            return <Tag color={'orange'}>{orderStatus}</Tag>
        }
        if (orderStatus === 'Decline'){
            return <Tag color={'red'}>{orderStatus}</Tag>
        }
    };
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
            render: renderOrderStatus
        }
    ]

    return(
        <Card title={'Orders'} style={{ margin: 20 }}>
            <Table dataSource={orders} columns={tableColumns} rowKey="orderId" onRow={(orderItem) => ({
                onClick: () => navigate(`order/${orderItem.orderId}`)
            })}
            />
        </Card>
    )
}

export default Orders;