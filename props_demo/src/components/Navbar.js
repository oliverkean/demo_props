function Navbar() {
  return (
    <div className="Navbar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand ms-5 fw-bolder text-uppercase fs-4" href="#">
                Climate Action</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#About">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#Action">Action</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#References">References</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
