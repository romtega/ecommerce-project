import { useForm } from "react-hook-form";

import "./loginform.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="login-form grid grid-center bg-accent">
      <div className="login-form__header grid grid-center">
        <h2 className="login-form__title">Bienvenido!</h2>
        <div className="login-form__underline"></div>
      </div>
      <form className="login-form__form grid" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-form__inputs flex flex-center">
          <img src={UserIcon} alt="User Icon" className="login-form__icon" />
          <input
            className="login-form__input"
            type="text"
            id="username"
            placeholder="Ingresa tu usuario"
            {...register("username", {
              required: "Ingresa un usuario valido",
            })}
          />
          {errors.username && (
            <p className="login-form__error">{errors.username.message}</p>
          )}
        </div>
        <div className="login-form__inputs flex flex-center">
          <img src={KeyIcon} alt="Password Icon" className="login-form__icon" />
          <input
            className="login-form__input"
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            {...register("password", {
              required: "Ingresa una contraseña valida",
            })}
          />
          {errors.password && (
            <p className="login-form__error">{errors.password.message}</p>
          )}
        </div>
        <input
          className="login-form__submit"
          type="submit"
          value="Iniciar Sesión"
        />
      </form>
      <a className="login-form__link" href="#">
        No tienes cuenta? Registrate!
      </a>
    </div>
  );
};

export default LoginForm;
