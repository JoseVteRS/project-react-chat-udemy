import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/auth-context";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "user05@user.com",
    password: "asdfasdf",
    remember: false,
  });

  useEffect(() => {
    const email = localStorage.getItem("remember");
    if (email)
      setForm((form) => ({
        ...form,
        email,
        remember: true,
      }));
  }, []);

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const toggleCheck = () => {
    setForm({
      ...form,
      remember: !form.remember,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (form.remember) localStorage.setItem("remember", form.email);
    else localStorage.removeItem("remember");

    const { email, password } = form;
    const ok = await login(email, password);
  };

  const allOk = () => {
    return form.email.length > 0 && form.password.length > 0;
  };

  return (
    <div className="bg-slate-100 w-full min-h-screen grid place-content-center">
      <div className="w-80">
        <div>
          <form onSubmit={handleOnSubmit}>
            <h1 className="text-2xl uppercase font-bold text-center mb-10">
              Ingreso
            </h1>

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
              <div onClick={() => toggleCheck()}>
                <input
                  id="ckb1"
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  readOnly
                  onChange={handleOnChange}
                />
                <label>Recordarme</label>
              </div>

              <div>
                <Link className="text-indigo-500" to="/auth/register">
                  Nueva cuenta?
                </Link>
              </div>
            </div>

            <div>
              <button
                className="w-full p-2 bg-indigo-500 disabled:bg-gray-400 text-white mt-8 py-4"
                type="submit"
                disabled={!allOk()}
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
