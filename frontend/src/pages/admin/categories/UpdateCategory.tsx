import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICategory } from "../../../types/category";
import { Form, Input } from "antd";

interface IProps {
  categories: ICategory[];
  onUpdate: (category: ICategory) => void;
}
const UpdateCategory = (props: IProps) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState<ICategory>();
  useEffect(() => {
    const currentCategory = props.categories.find(
      (category: ICategory) => category._id == String(id)
    );
    setCategory(currentCategory);
  }, [props]);

  useEffect(() => {
    setFields();
  }, [category]);

  const [form] = Form.useForm();

  const setFields = () => {
    form.setFieldsValue({
      _id: category?._id,
      name: category?.name,
    });
  };

  const onFinish = (values: any) => {
    props.onUpdate(id, values);
    alert("Cập nhật danh mục thành công");
    navigate("/admin/categories/list");
  };

  return (
    <div>
      <Form form={form} style={{ maxWidth: 600 }} onFinish={onFinish}>
        <Form.Item
          label="Category Name"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <button>Update Category</button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateCategory;
