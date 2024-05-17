import Button from '../components/Button';

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='font-palanquin text-center text-4xl font-bold leading-[68px] lg:max-w-md'>
        Inscreva-se para <span className='text-coral-red'>Atualizações </span>&
        Newsletter
      </h3>

      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input
          type='email'
          placeholder='subscribe@nike.com'
          className='input'
          autoComplete='email'
        />

        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Assinar' fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
