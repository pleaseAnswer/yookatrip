import React,{Component} from 'react';
import { Table } from 'antd';

    const columns = [
                    { title: 'Name', dataIndex: 'name', key: 'name' },
                    { title: 'Price', dataIndex: 'price', key: 'price' },
                    { title: 'Time', dataIndex: 'time', key: 'time' },
                    {
                        title: 'Action',
                        dataIndex: '',
                        key: 'x',
                        render: () => <a>Delete</a>,
                    },
                ];

    const data = [
            {
                key: 1,
                name: '色达稻城七日',
                price: '￥ 2580',
                time: '2019-12-02',
                description: '这里的景色非常的美丽，欢迎来玩耍',
            },
            {
                key: 2,
                name: '318国道川藏线十日游',
                price: '￥ 6500',
                time: '2019-12-15',
                description: '一个字，美',
            },
            {
                key: 3,
                name: '色达稻城八日',
                price: '￥ 3280',
                time: '2019-12-18',
                description: '风光无限',
            },
        ];

class ActiveList extends Component{
    render(){
        return (
            <div>
                <Table
                    columns={columns}
                    expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    dataSource={data}
                />
            </div>
        )
    }
}

export default ActiveList;