import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../../../types/product";
import { Form, Input, Select } from "antd";
import { ICategory } from "../../../types/category";
import { getAllCategory } from "../../../api/category";

interface IProps {
  products: IProduct[];
  category: ICategory[];
  onUpdate: (id, product: IProduct) => void;
}

const UpdateProduct = (props: IProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct>();
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const currentProduct = props.products.find(
      (product: IProduct) => product._id == String(id)
    );
    setProduct(currentProduct);
  }, [props]);

  useEffect(() => {
    getAllCategory().then(({ data }) => setCategories(data));
  }, [props]);

  const onFinish = (values: any) => {
    props.onUpdate(id, values);
    alert("Cập nhật sản phẩm thành công");
    navigate("/admin/products");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      {product && (
        <Form
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            name: product?.name,
            image: product?.image,
            price: product?.price,
            desc: product?.desc,
            categoryId: product?.categoryId,
          }}
        >
          <Form.Item
            label="Category"
            name="categoryId"
            rules={[
              { required: true, message: "Please input your categoryId!" },
            ]}
            hasFeedback
          >
            <Select id="">
              {categories?.map((cate) => {
                return <option value={cate._id}>{cate.name}</option>;
              })}
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
            rules={[{ required: true, message: "Please input your password!" }]}
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

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <button>Update Product</button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default UpdateProduct;
