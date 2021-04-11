import * as React from 'react';
import { Table } from 'antd';
import { Card } from 'antd';
import * as moment from 'moment'
import { DatePicker, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
const { RangePicker } = DatePicker;
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];



export default class Admin extends React.Component {
  state = {
    dataSource: [],
    searchText: '',
    searchedColumn: '',
    filters: {}
  }

  searchInput;
  componentDidMount() {
    let self = this;
    let filters = [];
    fetch('/getAllForAdmin', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.filters),
    }).then((res) => {
      return res.json()
    }).then((json) => {
      self.setState({
        dataSource: json
      })
    })

  }

  onChangeHandler(event) {
    let self = this;
    let filters = {}
    filters['startDate'] = moment(event[0]).toDate()
    filters['endDate'] = moment(event[1]).toDate()
    fetch('/getAllForAdmin', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filters),
    }).then((res) => {
      return res.json()
    }).then((json) => {
      self.setState({
        dataSource: json
      })
    })
  }




  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      text,
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {

    const columns = [
      {
        title: 'Pan Number',
        dataIndex: 'pannumber',
        key: 'pannumber',
        ...this.getColumnSearchProps('pannumber'),
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Insurance Number',
        dataIndex: 'insurancenumber',
        key: 'insurancenumber',
        ...this.getColumnSearchProps('insurancenumber'),
      },

    ];


    const dateFormat = 'YYYY/MM/DD';
    return (
      <div>
        <Card><Table dataSource={this.state.dataSource} columns={columns} /></Card>
      </div >
    )


  }
}