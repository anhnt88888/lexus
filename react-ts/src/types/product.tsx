export interface IProduct {
  _id: string;
  name: string;
  price: string;
  image: string;
  desc: string;
  categoryId: string;
}

export interface IProps {
  products: IProduct[];
  onRemove: (_id: string) => void;
}
