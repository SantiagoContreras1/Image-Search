import React from "react";
import { Search } from "./components/Search";
import { CustomPagination } from "./components/CustomPagination";
import { ImageList } from "./components/ImageList";
import { useBuscarResultados } from "./hooks/useBuscarResultados";

export const GApp = () => {
  const { result, setValor, handleOnSubmit, setPage, page } = useBuscarResultados();

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Search setValor={setValor} handleOnSubmit={handleOnSubmit} />
          <CustomPagination setPage={setPage} page={page} />
        </div>
      </nav>

      <div className="container mt-5 d-flex justify-content-center">
        <ImageList result={result} />
      </div>
    </>
  );
};
