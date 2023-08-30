import instance from "./instance";

interface ICategory {
  id: number;
}

const token = JSON.parse(localStorage.getItem("token")!);

export const getAllCategory = () => {
  return instance.get(`/api/categories`);
};

export const getCategory = (id: number) => {
  return instance.get(`/api/categories/${id}`);
};

export const addCategory = (category: ICategory) => {
  return instance.post(`/api/categories`, category, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateCategory = (id, category: ICategory) => {
  return instance.put(`/api/categories/${id}`, category, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteCategory = (id: string) => {
  return instance.delete(`/api/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
