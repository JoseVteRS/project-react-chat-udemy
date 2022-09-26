import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <div className="bg-slate-100 w-full min-h-screen grid place-content-center">
      <div className="w-80">
        <div>
          <form>
            <h1 className="text-2xl uppercase font-bold text-center mb-10">
              Chat - Registro
            </h1>
            <div className="mb-5">
              <input
                className="w-full bg-slate-300 p-2 text-slate-800"
                type="username"
                name="username"
                placeholder="Nombre"
              />
              <span></span>
            </div>

            <div className="mb-5">
              <input
                className="w-full bg-slate-300 p-2 text-slate-800"
                type="email"
                name="email"
                placeholder="Email"
              />
              <span></span>
            </div>

            <div>
              <input
                className="w-full bg-slate-300 p-2 text-slate-800"
                type="password"
                name="password"
                placeholder="Password"
              />
              <span></span>
            </div>

            <div className="flex items-center justify-between my-5">
              <div>
                <input id="ckb1" type="checkbox" name="remember-me" />
                <label>Recordarme</label>
              </div>

              <div>
                <Link className="text-indigo-500" to="/auth/login">
                  Ya tienes cuenta?
                </Link>
              </div>
            </div>

            <div>
              <button className="w-full p-2 bg-indigo-500 text-white mt-8">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
