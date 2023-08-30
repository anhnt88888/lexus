import instance from "./instance";

interface IProduct {
  id: string;
}

const token = JSON.parse(localStorage.getItem("token")!);

export const getAllProduct = () => {
  return instance.get(`/api/products`);
};

export const getProduct = (id: string) => {
  return instance.get(`/api/products/${id}`);
};

export const addProduct = (product: IProduct) => {
  return instance.post(`/api/products`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProduct = (id, product: IProduct) => {
  return instance.put(`/api/products/${id}`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteProduct = (id: string) => {
  return instance.delete(`/api/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
