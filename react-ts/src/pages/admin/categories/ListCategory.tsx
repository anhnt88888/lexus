import React from "react";
import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ICategory } from "../../../types/category";
import { Link } from "react-router-dom";

interface DataType {
  key: string | number;
  _id: string;
  name: string;
}
interface IProps {
  categories: ICategory[];
  onRemove: (_id: string) => void;
}

const ListCategory = (props: IProps) => {
  const removeCategory = (_id: string) => {
    props.onRemove(_id);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
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
              const delCategory = confirm("Bạn có muốn xoá danh mục này không");
              if (delCategory) {
                removeCategory(record._id);
                alert("Xoá danh mục thành công");
              }
            }}
          >
            Remove
          </button>
          <button style={{ width: 100 }}>
            <Link
              to={`/admin/categories/${record._id}/update`}
              style={{ color: "yellow" }}
            >
              Update
            </Link>
          </button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = props.categories.map((item: ICategory) => {
    return {
      key: item._id,
      ...item,
    };
  });

  return (
    <div>
      <button>
        <Link to={"/admin/categories/add"} style={{ color: "yellow" }}>
          Add New Category
        </Link>
      </button>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default ListCategory;
