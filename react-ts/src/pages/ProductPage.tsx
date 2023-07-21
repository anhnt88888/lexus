import { useEffect, useState } from "react";
import { IProduct } from "../types/product";
import { Link } from "react-router-dom";
import "../css/product.css";

interface IProps {
  products: IProduct[];
  onRemove: (_id: string) => void;
}

const ProductPage = (props: IProps) => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    setData(props.products);
  }, [props]);

  return (
    <div>
      <h1 style={{ color: "blue", marginBottom: "50px" }}>Sản phẩm</h1>
      <div id="product">
        {data.map((product) => {
          return (
            <div key={product._id}>
              <div>
                <div
                  style={{
                    border: "2px solid orangered",
                    marginBottom: 20,
                  }}
                >
                  <h2>{product?.name}</h2>
                  <p style={{ color: "green" }}>{product?.price}</p>
                  <p id="image_product">
                    <img src={product?.image} alt="" />
                  </p>
                  <p id="desc_product">{product?.desc}</p>
                  <button>
                    <Link id="link" to={`/products/${product._id}`}>
                      Xem chi tiết
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
