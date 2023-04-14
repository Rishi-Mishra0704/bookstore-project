import { useSelector } from 'react-redux';

const Categories = () => {
  const status = useSelector((state) => state.categories.status);

  return (
    <div>
      <h1>Categories</h1>
      <p>{status}</p>
    </div>
  );
};

export default Categories;
