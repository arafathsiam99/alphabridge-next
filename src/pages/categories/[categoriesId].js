const CategoriesPage = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.Name}</h2>
          <ul>
            {category.products.map((product) => (
              <li key={product.id}>{product.Name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoriesPage;

export const getStaticPaths = async () => {
  const cpuCategoryIds =
    data
      .find((category) => category.cpu)
      ?.cpu.map((cpu) => cpu.id.toString()) || [];

  // Generate paths based on CPU category IDs
  const paths = cpuCategoryIds.map((categoryId) => ({
    params: { categoriesId: categoryId },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const categoryId = params.categoriesId;
  const res = await fetch(`http://localhost:5000/categories/${categoryId}`);
  const data = await res.json();

  return {
    props: {
      categories: data,
    },
  };
};
