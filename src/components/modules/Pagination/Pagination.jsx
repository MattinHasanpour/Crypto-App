import styles from "./pagination.module.css";

function Pagination({ page, setPage }) {
  const totalPages = 12;

  const previousHandler = () => {
    if (page <= 1) return;
    setPage((prev) => prev - 1);
  };

  const nextHandler = () => {
    if (page >= totalPages) return;
    setPage((prev) => prev + 1);
  };

  const renderPageNumbers = () => {
    const pages = [];

    // همیشه صفحه اول نمایش داده شود
    pages.push(
      <button
        key={1}
        onClick={() => setPage(1)}
        className={`${styles.pageButton} ${page === 1 ? styles.active : ""}`}
      >
        1
      </button>
    );

    // نمایش ... بعد از صفحه اول اگر نیاز باشد
    if (page > 3) {
      pages.push(
        <span key="left-ellipsis" className={styles.ellipsis}>
          ...
        </span>
      );
    }

    // نمایش صفحات اطراف صفحه فعلی
    for (
      let i = Math.max(2, page - 1);
      i <= Math.min(totalPages - 1, page + 1);
      i++
    ) {
      pages.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`${styles.pageButton} ${page === i ? styles.active : ""}`}
        >
          {i}
        </button>
      );
    }

    // نمایش ... قبل از صفحه آخر اگر نیاز باشد
    if (page < totalPages - 2) {
      pages.push(
        <span key="right-ellipsis" className={styles.ellipsis}>
          ...
        </span>
      );
    }

    // همیشه صفحه آخر نمایش داده شود
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => setPage(totalPages)}
          className={`${styles.pageButton} ${
            page === totalPages ? styles.active : ""
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={styles.paginationContainer}>
      <button
        onClick={previousHandler}
        disabled={page <= 1}
        className={`${styles.navButton} ${page <= 1 ? styles.disabled : ""}`}
      >
        قبلی
      </button>

      <div className={styles.pagesWrapper}>{renderPageNumbers()}</div>

      <button
        onClick={nextHandler}
        disabled={page >= totalPages}
        className={`${styles.navButton} ${
          page >= totalPages ? styles.disabled : ""
        }`}
      >
        بعدی
      </button>
    </div>
  );
}

export default Pagination;
