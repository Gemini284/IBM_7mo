import * as React from 'react';
import { Space, Table, Tag } from 'antd';
import DataTable from "examples/Tables/DataTable";

export default function EmployeeTableSearch(props) {
    const columns = [
        {
          title: 'UID',
          dataIndex: 'uid',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Departamento',
          dataIndex: 'organization',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Ubicación',
          dataIndex: 'work_location',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Certificaciones',
          dataIndex: 'employee_certifications',
          
          render: (text) => (
            <Tag color={'magenta'}>
            {text.length}
            </Tag>
          ),
        },
      ];

      
  return (
    <Table columns={columns} dataSource={props.data}/>
  );
}
