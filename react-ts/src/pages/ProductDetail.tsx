// import { useParams } from "react-router-dom";
// import { IProduct } from "../types/product";
// import "../css/product_detail.css";

// interface IProps {
//   products: IProduct[];
// }

// const ProductDetailPage = (props: IProps) => {
//   const { id } = useParams();
//   const currentProduct = props.products.find((item) => item._id == String(id));

//   return (
//     <div key={currentProduct?._id}>
//       <h1 style={{ color: "blue", marginBottom: 100 }}>Chi tiết sản phẩm</h1>
//       <div id="table">
//         <table>
//           <thead>
//             <tr>
//               <th>Tên sản phẩm</th>
//               <th>Giá</th>
//               <th>Hình ảnh</th>
//               <th>Mô tả sản phẩm</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>
//                 <p>{currentProduct?.name}</p>
//               </td>
//               <td>
//                 <p>{currentProduct?.price}</p>
//               </td>
//               <td>
//                 <p>
//                   <img
//                     src={currentProduct?.image}
//                     alt=""
//                     style={{ width: "100%" }}
//                   />
//                 </p>
//               </td>
//               <td>
//                 <p>{currentProduct?.desc}</p>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;

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
