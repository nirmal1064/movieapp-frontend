import { Pagination } from "react-bootstrap";

const PaginationTab = ({ currentPage, totalPages, pageChange }) => {
  let pages = [];
  if (totalPages <= 5) {
    pages = Array.from(Array(totalPages + 1).keys()).slice(1);
  }

  const createPagination = (pageNumbers) => {
    const elements = pageNumbers.map((pageNumber) => (
      <Pagination.Item
        key={pageNumber}
        active={pageNumber === currentPage}
        onClick={
          currentPage === pageNumber ? () => {} : () => pageChange(pageNumber)
        }>
        {pageNumber}
      </Pagination.Item>
    ));
    return elements;
  };

  const returnPagination = () => {
    if (currentPage - 2 < 1) {
      return createPagination([1, 2, 3, 4, 5]);
    } else if (totalPages - currentPage < 2) {
      return createPagination([
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      ]);
    } else {
      return createPagination([
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2
      ]);
    }
  };

  return (
    <Pagination style={{ justifyContent: "center" }}>
      {totalPages > 5 ? (
        <>
          <Pagination.First
            onClick={currentPage === 1 ? () => {} : () => pageChange(1)}
          />
          <Pagination.Prev
            onClick={
              currentPage === 1 ? () => {} : () => pageChange(currentPage - 1)
            }
          />
          {returnPagination()}
          <Pagination.Next
            onClick={
              currentPage === totalPages
                ? () => {}
                : () => pageChange(currentPage + 1)
            }
          />
          <Pagination.Last
            onClick={
              currentPage === totalPages
                ? () => {}
                : () => pageChange(totalPages)
            }
          />
        </>
      ) : (
        <>{createPagination(pages)}</>
      )}
    </Pagination>
  );
};

export default PaginationTab;
