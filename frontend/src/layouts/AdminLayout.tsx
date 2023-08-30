import { Outlet } from "react-router-dom";
import React from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1"].map((key) => ({
  key,
  label: `Quản Lý Sản Phẩm`,
}));

const ListMenu = [
  {
    path: "/admin",
    id: 1,
    name: "DashBoard",
  },
  {
    path: "/admin/products",
    id: 2,
    name: "Product",
  },
  {
    path: "/admin/categories/list",
    id: 3,
    name: "Category",
  },
];

const AdminLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key={1}>
              <Link to={"/admin"}>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key={2}>
              <Link to={"/admin/products"}>Product</Link>
            </Menu.Item>
            <Menu.Item key={3}>
              <Link to={"/admin/categories/list"}>Category</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
