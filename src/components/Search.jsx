export const Search = ({ setValor, handleOnSubmit }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <form className="d-flex" role="search" onSubmit={handleOnSubmit}>
          <input
            className="form-color me-2"
            type="text"
            onChange={(e) => setValor(e.target.value)}
          />
          <input type="submit" className="btn btn-success" value="Buscar" />
        </form>
      </div>
    </nav>
  );
};
