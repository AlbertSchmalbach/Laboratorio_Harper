import React from "react";

const Sesion = () => {
  /* const [sesion, setSesion] = useState({
    login: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {console.log(e.target.value);}

  const handleSubmit = (e) => {
    e.preventDefault();
    const { login, password } = sesion;
    if (login === "admin" && password === "admin") {
      console.log("Login correcto");
      setError(false);
    }else{
      console.log("Login incorrecto");
      setError(true);
    }
  };
 */
  return (
    <div>
      <header>
        <div className="container-fluid bg-header shadow-sm">
          <div className="row d-flex p-5 ms-2">
            <div className="col">
              <h2> LABORATORIOS HARPER</h2>
            </div>
            <div className="col">
              <nav className="nav d-flex align-items-center justify-content-center">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link ms-5 active cursor"> HOME </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link ms-5 text-secondary cursor">
                    {" "}
                    REGISTRESE{" "}
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link ms-5 text-secondary active cursor">
                    {" "}
                    INICIO DE SESION{" "}
                  </a>{" "}
                </li>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container-fluid bg-success p-5">
          <div className="row d-flex justify-content-center">
            <div className="col text-white">
              <h2> INICIO DE SESION</h2>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
          <form /*onSubmit={handleSubmit}*/ className="w-25 mt-5">
            <div class="mb-3">
              <label htmlFor="login" className="form-label">
                Usuario
              </label>
              <input type="text" className="form-control w-100" name="login" /* value={sesion.login} 
              onChange={handleChange} */ />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control w-100"
                name="password"
                /* value={sesion.password} 
                onChange={handleChange} */
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Enviar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Sesion;
