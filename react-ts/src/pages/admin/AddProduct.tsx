import { IProduct } from "../../types/product";
import { Form, Input, Select } from "antd";
import { ICategory } from "../../types/category";
import { useNavigate } from "react-router-dom";

interface IProps {
  onAdd: (product: IProduct) => void;
  category: ICategory[];
}

const AddProductPage = (props: IProps) => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    const newProduct = {
      _id: values._id,
      name: values.name,
      price: values.price,
      image: values.image,
      desc: values.desc,
      categoryId: values.categoryId,
    };
    props.onAdd(newProduct);
    alert("Thêm sản phẩm thành công");
    navigate("/admin/products");
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
          label="Category"
          name="categoryId"
          rules={[
            { required: true, message: "Please select a product category!" },
            { whitespace: true },
          ]}
          hasFeedback
        >
          <Select placeholder="Select a category">
            {props.category.map((item) => (
              <Select.Option key={item._id} value={item._id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Product Name"
          name="name"
          rules={[
            { required: true, message: "Please input your name!" },
            { min: 6, max: 255 },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="price"
          rules={[{ required: true, message: "Please input your price!" }]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Description"
          name="desc"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
          hasFeedback
        >
          <Input.TextArea style={{ height: 200 }} />
        </Form.Item>

        <Form.Item
          label="Product Image"
          name="image"
          rules={[{ required: true, message: "Please input your image!" }]}
          hasFeedback
        >
          <input type="file" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <button>Add Product</button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProductPage;
