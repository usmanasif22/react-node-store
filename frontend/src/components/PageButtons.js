const PageButtons = (props) => {
  const { page, totalPages, setPage, classname } = props;
  return (
    <div>
      <div className={classname}>
        <div
          className="back"
          onClick={() => {
            if (page > 1 && page <= totalPages) setPage(page - 1);
          }}
        >
          <img
            src="https://thebuyhive.com/buy/img/chevronLeft.c50c4a36.svg"
            alt=""
          />
        </div>
        <div className="page-no">{page}</div>
        <div className="total-pages">{`of ${totalPages}`}</div>
        <div
          className="forward"
          onClick={() => {
            if (page > 0 && page < totalPages) setPage(page + 1);
          }}
        >
          <img
            src="https://thebuyhive.com/buy/img/chevronRight.b3ce29d8.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PageButtons;
