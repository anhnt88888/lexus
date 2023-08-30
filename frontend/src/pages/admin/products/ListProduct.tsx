import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IProduct } from "../../../types/product";
import { Link } from "react-router-dom";

interface DataType {
  key: string | number;
  id: string;
  name: string;
  image: string;
  price: number;
  desc: string;
}
interface IProps {
  products: IProduct[];
  onRemove: (id: string) => void;
}

const ListProduct = (props: IProps) => {
  const removeProduct = (_id: string) => {
    props.onRemove(_id);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Product Image",
      dataIndex: "image",
      key: "image",
      render: (imgLink) => (
        <img src={imgLink} alt="" style={{ width: "200px" }} />
      ),
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "CategoryId",
      dataIndex: "categoryId",
      key: "categoryId",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Product Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Product Description",
      dataIndex: "desc",
      key: "desc",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <button
            style={{ width: 100 }}
            onClick={() => {
              const delProduct = confirm("Bạn có muốn xoá sản phẩm này không?");
              if (delProduct) {
                removeProduct(record._id);
                alert("Xoá sản phẩm thành công");
              }
            }}
          >
            Remove
          </button>
          <button style={{ width: 100 }}>
            <Link
              to={`/admin/products/${record._id}/update`}
              style={{ color: "yellow" }}
            >
              Update
            </Link>
          </button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = props.products.map((item: IProduct) => {
    return {
      key: item._id,
      ...item,
    };
  });

  return (
    <div>
      <button>
        <Link to={"/admin/products/add"} style={{ color: "yellow" }}>
          Add New Product
        </Link>
      </button>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default ListProduct;
