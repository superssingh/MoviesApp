import React from "react";
import _ from "lodash";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationBar = (props) => {
  const { itemCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <nav className="PaginationBar">
      <Stack spacing={2}>
        <Pagination
          count={pages.length}
          defaultPage={currentPage}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </nav>
  );
};

export default PaginationBar;
