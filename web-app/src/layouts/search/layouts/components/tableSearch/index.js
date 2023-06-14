import * as React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Tag } from 'antd';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { useMaterialUIController } from 'context';

export default function TableSearch(props) {
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
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend', 'ascend'],
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
      title: 'Fecha',
      dataIndex: 'issue_date',
      key: 'issue_date',
      ...getColumnSearchProps('issue_date'),
      sorter: (a, b) => a.issue_date.length - b.issue_date.length,
      sortDirections: ['descend', 'ascend'],
      render(text) {
        return {
          props: {
            style: {
              background: darkMode ? '#202940' : '#fff',
              color: darkMode ? '#D2D4D9' : '#344767',
            },
          },
          children: <div>{text.split('T')[0]}</div>,
        }
      },
    },
    {
      title: 'Tipo',
      dataIndex: 'type',
      key: 'type',
      ...getColumnSearchProps('type'),
      sorter: (a, b) => a.type.length - b.type.length,
      sortDirections: ['descend', 'ascend'],
      render(text) {
        return {
          props: {
            style: {
              background: darkMode ? '#202940' : '#fff',
              color: darkMode ? '#D2D4D9' : '#344767',
            },
          },
          children: <Tag color={text==='badge'? 'green': 'volcano'} key={text}>
            {text.toUpperCase()}
            </Tag>,
        }
      },
    },
  ];

  return (
    <Table columns={columns} dataSource={props.data}/>
  );
}
