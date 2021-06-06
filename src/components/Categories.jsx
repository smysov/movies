import CategoriesItem from './categories/CategoriesItem';

const Categories = ({ type, types, handleRadio }) => (
  <section className='categories-movies'>
    <div className='container'>
      <form className='categories'>
        <CategoriesItem types={types} type={type} handleRadio={handleRadio} />
      </form>
    </div>
  </section>
);

export default Categories;
