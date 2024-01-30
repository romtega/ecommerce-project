import { useForm } from "react-hook-form";
import "./loginform.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Usuario"
          {...register("example", { required: true })}
        />
        <input
          placeholder="Contraseña"
          {...register("example", { required: true })}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
