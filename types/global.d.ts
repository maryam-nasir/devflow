type Tag = {
  _id: string;
  name: string;
};

type Author = {
  _id: string;
  name: string;
  image: string;
};

type Question = {
  _id: string;
  title: string;
  tags: Tag[];
  author: Author;
  createdAt: Date;
  views: number;
  upvotes: number;
  answers: number;
};
