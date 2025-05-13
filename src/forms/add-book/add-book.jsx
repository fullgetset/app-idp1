import './add-book.styles.scss';

import { useForm } from 'react-hook-form';

const FormAdd = ({ onSubmit, withoutRequired }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='add-book'>
      <input
        className='add-book__field'
        placeholder='Заголовок'
        {...register('title', {
          required: !withoutRequired,
          pattern: /^[a-zA-Zа-яА-Я0-9\s]+$/,
        })}
      />

      <textarea
        className='add-book__field'
        placeholder='Описание'
        {...register('description', {
          required: !withoutRequired,
          pattern: /^[a-zA-Zа-яА-Я0-9\s.,!?-]+$/,
        })}
      />

      <input
        className='add-book__field'
        placeholder='Цена'
        type='number'
        {...register('price', {
          required: !withoutRequired,
          min: 10,
          maxLength: 5,
        })}
      />

      {errors.exampleRequired && <span>This field is required</span>}

      <input
        className='button-primary '
        type='submit'
      />
    </form>
  );
};

export { FormAdd };
