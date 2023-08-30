import { ICategory } from "../../../types/category";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

interface IProps {
  onAdd: (category: ICategory) => void;
}

const AddCategory = (props: IProps) => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    const newCategory = {
      _id: values._id,
      name: values.name,
    };
    props.onAdd(newCategory);
    alert("Thêm danh mục thành công");
    navigate("/admin/categories/list");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Category Name"
          name="name"
          rules={[
            { required: true, message: "Please input your name!" },
            { min: 6, max: 255 },
            { whitespace: true },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <button>Add Category</button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCategory;
