export default function Navigation({ data_company, data_nav_left, data_nav_right }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a className="navbar-brand" href={data_company.url}>
          {data_company.name}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            {data_nav_left.map((item, index) => (
              <li className="nav-item">
                <a className="nav-link" href={item.url}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="nav justify-content-end">
            {data_nav_right.map((item, index) => (
              <li className="nav-item">
                <a className="nav-link" href={item.url}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          {/* <span className="navbar-text">Navbar text with an inline element</span> */}
        </div>
      </div>
    </nav>
  );
}
