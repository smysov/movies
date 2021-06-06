const CategoriesItem = ({ types, handleRadio, type }) =>
  types.map((item) => (
    <div className='categories__group' key={item.id}>
      <input
        className='categories__radio'
        type='radio'
        id={item.id}
        name='selectedCategory'
        value={item.value}
        onChange={handleRadio}
        checked={type === item.value}
      />
      <label htmlFor={item.for} className='categories__subtitle'>
        {item.title}
      </label>
    </div>
  ));

export default CategoriesItem;
