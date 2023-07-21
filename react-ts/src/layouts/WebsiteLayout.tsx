import React from "react";
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const WebsiteLayout: React.FC = () => {
  return (
    <Layout className="layout">
      <Header style={{ backgroundColor: "violet" }}>
        <Content
          style={{
            padding: "0 400px",
          }}
        >
          <Breadcrumb style={{ marginTop: "20px" }}>
            <Breadcrumb.Item>
              <Link to={"/"} style={{ color: "white", fontSize: "15px" }}>
                Trang chủ
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link
                to={"/products"}
                style={{ color: "white", fontSize: "15px" }}
              >
                Sản phẩm
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={"/signin"} style={{ color: "white", fontSize: "15px" }}>
                Đăng nhập
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={"/signup"} style={{ color: "white", fontSize: "15px" }}>
                Đăng ký
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Content>
      </Header>

      <div className="banner" style={{ marginTop: 30 }}>
        <img
          src="https://thegioilexus.com.vn/wp-content/uploads/2021/09/cach-the-gioi-lexus-chiem-tron-long-tin-khach-hang-1.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </div>

      <main
        style={{ textAlign: "center", backgroundColor: "pink", marginTop: 30 }}
      >
        <Outlet />
      </main>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "gray",
          marginTop: 30,
        }}
      >
        @Copyright by: Nguyen Tuan Anh
      </Footer>
    </Layout>
  );
};

export default WebsiteLayout;
