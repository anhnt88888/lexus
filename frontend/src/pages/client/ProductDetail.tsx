import type { ColumnsType } from "antd/es/table";
import { IProduct } from "../types/product";
import { Table } from "antd";

interface DataType {
  key: string;
  name: string;
  price: number;
  image: string;
  desc: string[];
}

interface IProps {
  products: IProduct[];
}

const ProductDetailPage = (props: IProps) => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (imgLink) => (
        <img src={imgLink} alt="" style={{ width: "500px" }} />
      ),
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
      render: (text) => <a>{text}</a>,
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
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default ProductDetailPage;
