import * as React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Tag } from 'antd';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { useMaterialUIController } from 'context';

export default function EmployeeTableSearch(props) {
  const [controller, dispatch] = useMaterialUIController();
  const {darkMode} = controller;
  
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
        {
          title: 'UID',
          dataIndex: 'uid',
          key: 'uid',
          ...getColumnSearchProps('uid'),
          sorter: (a, b) => a.uid.length - b.uid.length,
          sortDirections: ['descend', 'ascend'],
          headerStyle: {
            backgroundColor: '#202940'
          },
          render(text) {
            return {
              props: {
                style: {
                  background: darkMode ? '#202940' : '#fff',
                  color: darkMode ? '#D2D4D9' : '#344767',
                },
              },
              children: <div>{text}</div>,
            }
          },
        },
        {
          title: 'Departamento',
          dataIndex: 'organization',
          key: 'organization',
          ...getColumnSearchProps('organization'),
          sorter: (a, b) => a.organization.length - b.organization.length,
          sortDirections: ['descend', 'ascend'],
          headerStyle: {
            backgroundColor: '#202940'
          },
          render(text) {
            return {
              props: {
                style: {
                  background: darkMode ? '#202940' : '#fff',
                  color: darkMode ? '#D2D4D9' : '#344767',
                },
              },
              children: <div>{text}</div>,
            }
          },
        },
        {
          title: 'Ubicación',
          dataIndex: 'work_location',
          key: 'work_location',
          ...getColumnSearchProps('work_location'),
          sorter: (a, b) => a.work_location.length - b.work_location.length,
          sortDirections: ['descend', 'ascend'],
          headerStyle: {
            backgroundColor: '#202940'
          },
          render(text) {
            return {
              props: {
                style: {
                  background: darkMode ? '#202940' : '#fff',
                  color: darkMode ? '#D2D4D9' : '#344767',
                },
              },
              children: <div>{text}</div>,
            }
          },
        },
        {
          title: 'Certificaciones',
          dataIndex: 'employee_certifications',
          key: 'employee_certifications',
          ...getColumnSearchProps('employee_certifications'),
          sorter: (a, b) => a.employee_certifications.length - b.employee_certifications.length,
          sortDirections: ['descend', 'ascend'],
          headerStyle: {
            backgroundColor: '#202940'
          },
          render(text) {
            return {
              props: {
                style: {
                  background: darkMode ? '#202940' : '#fff',
                  color: darkMode ? '#D2D4D9' : '#344767',
                },
              },
              children: <Tag color={'magenta'}>{text.length}</Tag>,
            }
          },
        },
      ];

      
  return (
    <Table columns={columns} dataSource={props.data} rootClassName={'#4BEC13'}/>
  );
}
