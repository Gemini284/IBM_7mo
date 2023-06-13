import * as React from 'react';
import { Space, Table, Tag } from 'antd';

const columns = [
  {
    title: 'UID',
    dataIndex: 'uid',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Fecha',
    dataIndex: 'issue_date',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Tipo',
    dataIndex: 'type',
    
    render: (text) => (
      <>
        <Tag color={text==='badge'? 'green': 'volcano'} key={text}>
              {text.toUpperCase()}
        </Tag>
      </>
    ),
  },
];

export default function TableSearch(props) {
  return (
    <Table columns={columns} dataSource={props.data} />
  );
}
