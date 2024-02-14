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
      }
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };

  return (
    <div className="signup-form grid grid-center bg-accent">
      <div className="signup-form__header grid grid-center">
        <div className="signup-form__title">Registrate</div>
        <div className="signup-form__underline"></div>
      </div>
      <form
        className="signup-form__form grid"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="signup-form__inputs flex flex-center">
          <label htmlFor="first_name">Nombre</label>
          <input
            className="signup-form__input"
            type="text"
            id="first_name"
            placeholder="¿Cual es tu nombre?"
            {...register("first_name", {
              required: "No me ignores! 🥲",
            })}
          />
        </div>
        <div className="signup-form__inputs flex flex-center">
          <label htmlFor="last_name">Apellidos</label>
          <input
            className="signup-form__input"
            type="text"
            id="last_name"
            placeholder="¿Cual es tu apellido?"
            {...register("last_name", {
              required: "No me ignores! 🥲",
            })}
          />
        </div>
        <div className="signup-form__inputs flex flex-center">
          <label htmlFor="gender">Genero</label>
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
          <label htmlFor="email">Correo</label>
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
        </div>
        <div className="signup-form__inputs flex flex-center">
          <label htmlFor="password">Contraseña</label>
          <input
            className="signup-form__input"
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            {...register("password", {
              required: "Please enter your password",
            })}
          />
        </div>
        <input className="signup-form__submit" type="submit" value="Guardar" />
      </form>
      <Link to="/loginform" className="login-form__link">
        Ya tienes cuenta?, por aqui por favor
      </Link>
    </div>
  );
};

export default SignupForm;
