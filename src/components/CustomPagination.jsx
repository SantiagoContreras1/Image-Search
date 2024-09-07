import Pagination from "@mui/material/Pagination";

export const CustomPagination = ({ setPage, page }) => {
  return (
    <Pagination count={10} page={page} onChange={(event,value) => setPage(value)} />
  );
};
