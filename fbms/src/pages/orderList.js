import React,{Component} from 'react';

import { Table, Tag,InputNumber,Input,DatePicker,Button,Select} from 'antd';
const InputGroup = Input.Group;
const { Option } = Select;
const columns = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '下单时间',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '活动类型',
      dataIndex: 'address',
      key: 'address',
    },
    {
        title: '订单编号',
        dataIndex: 'bianhao',
        key: 'bianhao',
      },
    
    {
      title: '订单状态',
      key: 'action',
      render: (text, record) => (
        <span>
          <a>已结算</a>
        </span>
      ),
    },
    {
        title: '是否处理',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
  ];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: "2019-03-01",
    address: '色达稻城七日',
    bianhao: Date.now(),
    tags: ['删除'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age:  " 2019-03-06",
    address: '盛夏伊犁（南疆九日行）',
    bianhao: Date.now()+1,
    tags:  ['删除'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age:" 2019-03-05",
    address: '乌鲁木齐',
    bianhao: Date.now()+2,
    tags:  ['删除'],
  },
  {
    key: '4',
    name: 'Joe Black',
    age: " 2019-03-04",
    address: '佛国色达',
    bianhao: Date.now()+6,
    tags: ['删除'],
  },
];
  
class OrderList extends Component{
    
render(){
    return(
        <div>
            <div style={{width:"800px",height:"150px",}}>
            <span style={{fontSize:"24px",color:"#02a578",fontWeight:600,marginLeft:"20px",marginTop:"30px}"}}>订单查询</span>
            <div  style={{width:"1300px",height:"100px",marginTop:"30px"}}>
                <div  style={{float:"left",}}>
                <span>下单时间: </span>
                    <DatePicker style={{ width: '70%' }} />
                </div>
                <div style={{float:"left"}}>
                    <span>订单编号: </span>
                    <Input size="large"   style={{ width: '70%' }}/>
                </div>
                <div style={{float:"left"}}>
                    <span>客户名称: </span>
                    <Input size="large"  style={{ width: '70%' }}/>
                </div>
                <div style={{float:"left"}}>
                    <span>活动类型: </span>
                    <Input size="large"  style={{ width: '70%' }}/>
                </div>
                <div style={{float:"left",width:"300px",height:"50px",position:"relative"}}>
                    <span style={{float:"left"}}>订单状态: </span> 
                   
                    <InputGroup compact style={{position:"absolute",left:"80px"}}>
                    <Select defaultValue="未接单">
                        <Option value="Option1">未接单</Option>
                        <Option value="Option2">已接单</Option>
                        <Option value="Option3">已结清</Option>
                    </Select>
                    
                    </InputGroup>
                  

                    {/* <Dropdown overlay={menu} placement="bottomLeft">
                    <Button>未接单</Button>
                  </Dropdown> */}
                </div>
                
            </div>
           
            </div>
        <Table columns={columns} dataSource={data} />
            
            </div>
    )
       
}}
export default OrderList;