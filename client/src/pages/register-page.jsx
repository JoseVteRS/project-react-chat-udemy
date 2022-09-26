import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/auth-context";

export const RegisterPage = () => {
  const { register } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    remember: false,
  });

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const { email, password, name } = form;
    const ok = await register(name, email, password);
  };

  const allOk = () => {
    return (
      form.email.length > 0 && form.password.length > 0 && form.name.length > 0
    );
  };

  return (
    <div className="bg-slate-100 w-full min-h-screen grid place-content-center">
      <div className="w-80">
        <div>
          <form onSubmit={handleOnSubmit}>
            <h1 className="text-2xl uppercase font-bold text-center mb-10">
              Chat - Registro
            </h1>
            <div className="mb-5">
              <input
                className="w-full bg-slate-300 p-2 text-slate-800"
                type="name"
                name="name"
                placeholder="Nombre"
                value={form.name}
                onChange={handleOnChange}
              />
              <span></span>
            </div>

            <div className="mb-5">
              <input
                className="w-full bg-slate-300 p-2 text-slate-800"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleOnChange}
              />
              <span></span>
            </div>

            <div>
              <input
                className="w-full bg-slate-300 p-2 text-slate-800"
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleOnChange}
              />
              <span></span>
            </div>

            <div className="flex items-center justify-between my-5">
              <div>
                <Link className="text-indigo-500" to="/auth/login">
                  Ya tienes cuenta?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={!allOk()}
                className="w-full p-2 bg-indigo-500 text-white mt-8"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
