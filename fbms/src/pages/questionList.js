import React,{Component} from 'react';
import { Table} from 'antd';

const columns = [
    {
      title: '用户账号',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '出行指南',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '访问量',
      dataIndex: 'visit',
      key: 'department 1',
      ellipsis: true,
    },
    {
      title: '时间',
      dataIndex: 'handlers',
      key: 'address 2',
      ellipsis: true,
    },
    {
        title: '评论量',
        dataIndex: 'pinglun',
        key: 'address 2',
        ellipsis: true,
      },
  ];
  
  const data = [
    {
      key: '1',
      name: '5398813',
      id: '初次去西藏需要注意什么？',
      visit: '156',
      handlers:'2018-11-29',
      pinglun:'0',
      width:100,
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: '67896893',
      id: '关于高反',
      visit: '138',
      handlers:'2018-11-29',
      pinglun:'0',
      tags: ['loser'],
    },
    {
      key: '3',
      name: '68968966',
      id: '川西景点简介',
      visit: '116',
      handlers:'2018-11-29',
      pinglun:'0',
      tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: '1233263',
        id: '川西旅行需要准备什么？',
        visit: '118',
        handlers:'2018-11-29',
        pinglun:'0',
        tags: ['cool', 'teacher'],
      },
  ];
class QuestionList extends Component{
    render(){
        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}

export default QuestionList;