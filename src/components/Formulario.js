import { useForm } from "react-hook-form";


const Formulario = () => {
  const { register,formState: {errors},watch, handleSubmit } = useForm({
    defaultValues: {
      firstName: 'Valentina',
      lastName: 'Madrid'
    }
  });
  const onSubmit = (data) => {
       console.log(data);
}


  return <div>
    <h2>Formulario</h2>
    
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label>First Name</label>
        <input type="text" {...register('firstName')} />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" {...register('lastName', {
          required: true
        })} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" {...register('email', {
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
        })} />
         {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password',{
          pattern:"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        })}></input>
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"></input>
      </div>
      <input type="submit" value="enviar"></input>
      <h3>Your Form Data</h3>
      <p>First Name: {watch('firstName')}</p>
      <p>Last Name: {watch('lastName')}</p>
      <p>Email: {watch('email')}</p>
      <p>Password: {watch('password')}</p>
      <p>Confirm Password: {watch('password')}</p>
      
    </form>
  </div>
}

export default Formulario;