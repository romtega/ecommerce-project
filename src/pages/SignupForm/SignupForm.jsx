import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerUserServices } from "@/services/useServices";
import "./signupform.css";

const SignupForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Submitting form data:", data);
    try {
      const response = await registerUserServices(data);
      console.log("Response from server:", response);
      console.log("Response status:", response.status);
      if (response.status === 201) {
        navigate("/loginform");
        alert("Te registraste satisfactoriamente!, Ingresa a tu cuenta");
      }
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };

  return (
    <div className="signup-form grid grid-center">
      <div className="signup-form__header grid grid-center">
        <div className="signup-form__title fs-700">Registrate</div>
        <div className="signup-form__underline"></div>
      </div>
      <form
        className="signup-form__form grid grid-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="signup-form__inputs flex flex-center">
          <label htmlFor="first_name">Nombre:</label>
          <input
            className="signup-form__input"
            type="text"
            id="first_name"
            placeholder="¿Cual es tu nombre?"
            {...register("first_name", {
              required: "No me ignores! 🥲",
            })}
          />
          {errors.first_name && (
            <p className="login-form__error">{errors.first_name.message}</p>
          )}
        </div>
        <div className="signup-form__inputs flex flex-center">
          <label htmlFor="last_name">Apellidos:</label>
          <input
            className="signup-form__input"
            type="text"
            id="last_name"
            placeholder="¿Cual es tu apellido?"
            {...register("last_name", {
              required: "No me ignores! 🥲",
            })}
          />
          {errors.last_name && (
            <p className="login-form__error">{errors.last_name.message}</p>
          )}
        </div>
        <div className="signup-form__inputs flex flex-center">
          <label htmlFor="gender">Genero:</label>
          <select
            className="signup-form__input"
            id="gender"
            {...register("gender", {
              required: "No me ignores! 🥲",
            })}
          >
            <option value="">Selecciona tu genero</option>
            <option value="M">Hombre</option>
            <option value="F">Mujer</option>
          </select>
        </div>
        <div className="signup-form__inputs flex flex-center">
          <label htmlFor="email">Correo:</label>
          <input
            className="signup-form__input"
            type="email"
            id="email"
            placeholder="Ingresa tu correo"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="login-form__error">{errors.email.message}</p>
          )}
        </div>
        <div className="signup-form__inputs flex flex-center">
          <label htmlFor="password">Contraseña:</label>
          <input
            className="signup-form__input"
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            {...register("password", {
              required: "Please enter your password",
            })}
          />
          {errors.password && (
            <p className="login-form__error">{errors.password.message}</p>
          )}
        </div>
        <input className="signup-form__submit" type="submit" value="Guardar" />
      </form>
      <Link to="/loginform" className="signup-form__link">
        Ya tienes cuenta?
      </Link>
    </div>
  );
};

export default SignupForm;
