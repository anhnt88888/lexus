export interface ICategory {
  _id: string;
  name: string;
}

export interface IProps {
  categories: ICategory[];
  onRemove: (_id: string) => void;
}
