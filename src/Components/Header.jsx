const Header = () => {
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
                  <a className="nav-link ms-5 text-secondary cursor">
                    {" "}
                    INICIO DE SESION{" "}
                  </a>{" "}
                </li>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
