import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUserServices } from "@/services/useServices";

import "./loginform.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Submitting form data:", data);
    try {
      const response = await loginUserServices(data);
      console.log("Response from server:", response);
      console.log("Response status:", response.status);
      if (response.status === 200) {
        navigate("/");
        alert("Bienvenido!");
      }
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };
  return (
    <div className="login-form grid grid-center">
      <div className="login-form__header grid grid-center">
        <h2 className="login-form__title fs-700">Bienvenido!</h2>
        <div className="login-form__underline"></div>
      </div>
      <form className="login-form__form grid" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-form__inputs flex flex-center">
          <ion-icon name="person"></ion-icon>{" "}
          <input
            className="login-form__input"
            type="text"
            id="email"
            placeholder="Ingresa tu usuario"
            {...register("email", {
              required: "Ingresa un usuario valido",
            })}
          />
          {errors.email && (
            <p className="login-form__error">{errors.email.message}</p>
          )}
        </div>
        <div className="login-form__inputs flex flex-center">
          <ion-icon name="key"></ion-icon>{" "}
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
      <Link to="/signupform" className="login-form__link">
        No tienes cuenta? Registrate!
      </Link>
    </div>
  );
};

export default LoginForm;
