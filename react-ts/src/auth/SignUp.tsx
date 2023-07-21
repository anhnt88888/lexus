import React from "react";
import { Button, Form, Input } from "antd";
import { IUser } from "../types/user";

interface IProps {
  signUp(user: IUser): void;
}

const SignUp = (props: IProps) => {
  const onFinish = (values: any) => {
    props.signUp(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="mt-4">
      <h3 className="txt-title-inup">Đăng ký tài khoản</h3>
      <Form
        name="basic"
        style={{ maxWidth: 400, marginLeft: 400, marginTop: 50 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="mx-auto"
      >
        <Form.Item
          label="Họ tên"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập họ tên của bạn!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Vui lòng nhập email của bạn!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Xác nhận mật khẩu"
          name="confirmPassword"
          rules={[{ required: true, message: "Vui lòng nhập lại mật khẩu!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <button style={{ backgroundColor: "#fa541c", marginRight: 400 }}>
            Đăng ký
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
