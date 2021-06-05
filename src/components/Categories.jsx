import CategoriesItem from './categories/CategoriesItem';

function Categories(props) {
  const { type, types, handleRadio } = props;

  return (
    <section className='categories-movies'>
      <div className='container'>
        <form className='categories'>
          <CategoriesItem types={types} type={type} handleRadio={handleRadio} />
        </form>
      </div>
    </section>
  );
}

export default Categories;
