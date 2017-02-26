import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Layout, Menu, Breadcrumb, Icon , Message } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class IndexPage extends Layout{
  constructor(props) {
    super(props);
    this.state = { view: 'dashboard' };
  }

  MenuSelected(item,key,selectedKeys){
    this.setState({view:item.key});
    console.log(this.state);
  }

  render() {
    return (
      <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['project']}
              style={{ lineHeight: '64px' }}
              onSelect={ this.MenuSelected.bind(this) }
            >
              <Menu.Item key="project">项目</Menu.Item>
              <Menu.Item key="member">成员</Menu.Item>
              <Menu.Item key="profile">我的</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>主页</Breadcrumb.Item>
              <Breadcrumb.Item>项目</Breadcrumb.Item>
              <Breadcrumb.Item>列表</Breadcrumb.Item>
            </Breadcrumb>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' }}
                  onSelect={ this.MenuSelected.bind(this) }
                >
                  <SubMenu key="project" title={<span><Icon type="user" />项目管理</span>}>
                    <Menu.Item key="addProject">新增项目</Menu.Item>
                    <Menu.Item key="listProject">项目管理</Menu.Item>
                  </SubMenu>
                  <SubMenu key="member" title={<span><Icon type="laptop" />成员管理</span>}>
                    <Menu.Item key="listMember">成员列表</Menu.Item>
                    <Menu.Item key="inviteMember">邀请成员</Menu.Item>
                  </SubMenu>
                  <SubMenu key="setting" title={<span><Icon type="notification" />设置</span>}>
                    <Menu.Item key="systemSetting">系统设置</Menu.Item>
                    <Menu.Item key="about">关于</Menu.Item>
                    <Menu.Item key="logout">注销</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                { this.state.view }
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Zuma By HexPang
          </Footer>
        </Layout>
    );
  }
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));
