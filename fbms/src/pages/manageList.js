import React,{Component} from 'react';
import { Table} from 'antd';

const columns = [
    {
      title: '管理员',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '部门',
      dataIndex: 'department',
      key: 'department 1',
      ellipsis: true,
    },
    {
      title: '操作者',
      dataIndex: 'handlers',
      key: 'address 2',
      ellipsis: true,
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      id: 1,
      department: '销售部',
      handlers:'Jon',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      id: 2,
      department: '采购部',
      handlers:'Amy',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      id: 3,
      department: '宣传部',
      handlers:'Tom',
      tags: ['cool', 'teacher'],
    },
  ];

class ManageList extends Component{
    
    render(){
       
        return (
            <div>
                 <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}

export default ManageList;