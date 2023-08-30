import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  getAllProduct,
  addProduct,
  deleteProduct,
  updateProduct,
} from "./api/product";
import HomePage from "./pages/client/HomePage";
import DashBoard from "./pages/admin/products/DashBoard";
import ProductPage from "./pages/client/ProductPage";
import AddProduct from "./pages/admin/products/AddProduct";
import ProductDetailPage from "./pages/client/ProductDetail";
import ListProduct from "./pages/admin/products/ListProduct";
import { IProduct } from "./types/product";
import { ICategory } from "./types/category";
import WebsiteLayout from "./layouts/WebsiteLayout";
import AdminLayout from "./layouts/AdminLayout";
import ListCategory from "./pages/admin/categories/ListCategory";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "./api/category";
import AddCategory from "./pages/admin/categories/AddCategory";
import UpdateCategory from "./pages/admin/categories/UpdateCategory";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { signIn, signUp } from "./api/auth";
import { IUser } from "./types/user";
import UpdateProduct from "./pages/admin//products/UpdateProduct";

function App() {
  const navigate = useNavigate();

  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data.docs));
  }, []);

  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    getAllCategory().then(({ data }) => setCategories(data));
  }, []);

  const onHandleRemove = (_id: string) => {
    deleteProduct(_id)
      .then(() =>
        setProducts(products.filter((product) => product._id !== _id))
      )
      .catch(({ response }) => {
        alert(response.data.message);
      });
  };

  const onHandleAdd = (product: IProduct) => {
    addProduct(product)
      .then(() => {
        setProducts([...products, product]);
        navigate("/admin/products");
      })
      .catch(({ response }) => {
        alert(response.data.message);
      });
  };

  const onHandleUpdate = (id, product: IProduct) => {
    updateProduct(id, product)
      .then(() => {
        getAllProduct().then(({ data }) => setProducts(data));
        navigate("/admin/products");
        location.reload();
      })
      .catch(({ response }) => {
        alert(response.data.message);
      });
  };

  const onHandleSignIn = (user: IUser) => {
    signIn(user)
      .then((response) => {
        const token = response.data.accessToken;
        localStorage.setItem("token", JSON.stringify(token));
        alert(response.data.message);
        navigate("/admin");
      })
      .catch(({ response }) => {
        alert(response.data.message);
      });
  };

  const onHandleSignUp = (user: IUser) => {
    signUp(user)
      .then((response) => {
        alert(response.data.message);
        navigate("/signin");
      })
      .catch(({ response }) => {
        alert(response.data.message);
      });
  };

  const onRemoveCategory = (_id: string) => {
    deleteCategory(_id)
      .then(() =>
        setCategories(categories.filter((category) => category._id !== _id))
      )
      .catch(({ response }) => {
        alert(response.data.message);
      });
  };

  const onAddCategory = (category: ICategory) => {
    addCategory(category)
      .then(() => {
        setCategories([...categories, category]);
        navigate("/admin/categories/list");
      })
      .catch(({ response }) => {
        alert(response.data.message);
      });
  };

  const onUpdateCategory = (id, category: ICategory) => {
    updateCategory(id, category)
      .then(() => {
        setCategories(
          categories.map((item) =>
            item._id === category._id ? category : item
          )
        );
        getAllCategory().then(({ data }) => setCategories(data));
        navigate("/admin/categories/list");
      })
      .catch(({ response }) => {
        alert(response.data.message);
      });
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="products"
            element={
              <ProductPage products={products} onRemove={onHandleRemove} />
            }
          />
          <Route
            path="products/:id"
            element={<ProductDetailPage products={products} />}
          />
          <Route path="/signin" element={<SignIn signIn={onHandleSignIn} />} />
          <Route path="/signup" element={<SignUp signUp={onHandleSignUp} />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashBoard />} />
          <Route
            path="products"
            element={
              <ListProduct products={products} onRemove={onHandleRemove} />
            }
          />
          <Route
            path="products/add"
            element={<AddProduct onAdd={onHandleAdd} category={categories} />}
          />
          <Route
            path="products/:id/update"
            element={
              <UpdateProduct products={products} onUpdate={onHandleUpdate} />
            }
          />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route
            path="categories/list"
            element={
              <ListCategory
                categories={categories}
                onRemove={onRemoveCategory}
              />
            }
          />
          <Route
            path="categories/add"
            element={<AddCategory onAdd={onAddCategory} />}
          />
          <Route
            path="categories/:id/update"
            element={
              <UpdateCategory
                categories={categories}
                onUpdate={onUpdateCategory}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
