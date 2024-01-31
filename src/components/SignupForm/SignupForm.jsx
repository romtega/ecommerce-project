import { useForm } from "react-hook-form";
import "./signupform.css";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
          <label htmlFor="firstName">Nombre</label>
          <input
            className="signup-form__input"
            type="text"
            id="firstName"
            placeholder="¿Cual es tu nombre?"
            {...register("firstName", {
              required: "No me ignores! 🥲",
            })}
          />
          {errors.firstName && (
            <p className="signup-form__error">{errors.firstName.message}</p>
          )}
        </div>
        <div className="signup-form__inputs flex flex-center">
          <label htmlFor="lastName">Apellidos</label>
          <input
            className="signup-form__input"
            type="text"
            id="lastName"
            placeholder="¿Cual es tu apellido?"
            {...register("lastName", {
              required: "No me ignores! 🥲",
            })}
          />
          {errors.lastName && (
            <p className="signup-form__error">{errors.lastName.message}</p>
          )}
        </div>
        <div className="signup-form__inputs flex flex-center">
          <label htmlFor="age">Edad</label>
          <input
            className="signup-form__input"
            type="number"
            id="age"
            placeholder="Pon tu edad"
            {...register("age", {
              required: "No me ignores! 🥲",
            })}
          />
          {errors.age && (
            <p className="signup-form__error">{errors.age.message}</p>
          )}
        </div>
        <div className="signup-form__inputs flex flex-center">
          <label htmlFor="genre">Genero</label>
          <select
            className="signup-form__input"
            id="genre"
            {...register("genre", {
              required: "No me ignores! 🥲",
            })}
          >
            <option value="">Selecciona tu genero</option>
            <option value="male">Hombre</option>
            <option value="female">Mujer</option>
            <option value="other">Otros</option>
          </select>
          {errors.genre && (
            <p className="signup-form__error">{errors.genre.message}</p>
          )}
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
          {errors.email && (
            <p className="signup-form__error">{errors.email.message}</p>
          )}
        </div>
        <input className="signup-form__submit" type="submit" value="Guardar" />
      </form>
      <a className="login-form__link" to="#">
        Ya tienes cuenta?, por aqui por favor
      </a>
    </div>
  );
};

export default SignupForm;
