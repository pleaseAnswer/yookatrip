import React,{Component} from 'react';

import { Table,   Button } from 'antd';



 

  const columns = [
    {
      title: '用户名',
      dataIndex: 'usernamename',
    },
    {
      title: '密码',
      dataIndex: 'password',
    },
    {
      title: '操作',
      dataIndex: "tags",
    },
  ];
  
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      usernamename: `${i+1}09104807${i}@qq.com `,
      password:`${i+20}${i*3}${i*20}${i+55}`,
      tags: ['删除'],
    });
  }
  
  class  UserList extends React.Component {
    state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
    };
  
    start = () => {
      this.setState({ loading: true });
      // ajax request after empty completing
      setTimeout(() => {
        this.setState({
          selectedRowKeys: [],
          loading: false,
        });
      }, 1000);
    };
  
    onSelectChange = selectedRowKeys => {

      this.setState({ selectedRowKeys });
    };
  
    render() {
      const { loading, selectedRowKeys } = this.state;
      const rowSelection = {
        selectedRowKeys,
        onChange: this.onSelectChange,
      };
      const hasSelected = selectedRowKeys.length > 0;
      return (
        <div>
          <div style={{ marginBottom: 16 }}>
            <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
              取消全选
            </Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
            </span>
          </div>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
      );
    }
  }



export default UserList;