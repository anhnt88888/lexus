import { Button, Checkbox, Form, Input } from "antd";
import { IUser } from "../types/user";

interface Iprops {
  signIn(user: IUser): void;
}
const SignIn = (props: Iprops) => {
  const onFinish = (values: any) => {
    props.signIn(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="mt-4">
      <h3 className="txt-title-inup">Đăng nhập tài khoản</h3>
      <Form
        name="basic"
        style={{
          maxWidth: 400,
          margin: "auto",
          marginTop: 50,
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="mx-auto"
      >
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

        <Form.Item valuePropName="checked" wrapperCol={{ offset: 5, span: 10 }}>
          <Checkbox>Ghi nhớ tài khoản</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
          <button>Đăng nhập</button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
