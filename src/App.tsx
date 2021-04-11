import * as React from 'react';
import { Card } from 'antd';
import { Upload, message, Button } from 'antd';
const props = {
  name: 'file',
  action: '/upload/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default class App extends React.Component<any, any>{

  render() {
    return (
      <Card>
        <Upload {...props}>
          <Button>Click to Upload</Button>
        </Upload>
      </Card >
    )
  }
}