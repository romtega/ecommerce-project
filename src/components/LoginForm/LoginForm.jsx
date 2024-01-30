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

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="title">Bienvenido!</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              placeholder="Ingresa tu usuario"
              {...register("username", {
                required: "Ingresa un usuario valido",
              })}
            />
            {errors.username && <p>{errors.username.message}</p>}
          </div>
          <div className="inputs">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              {...register("password", {
                required: "Ingresa una contraseña valida",
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <input type="submit" value="Iniciar Sesión" />
        </form>
        <a href="">No tienes cuenta? Registrate!</a>
      </div>
    </>
  );
};

export default LoginForm;
