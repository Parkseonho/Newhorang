
function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <div  className="items-center">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
              className="m-2"
            >
              {i + 1}
            </button>
          ))}
        <button className="btn"onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </button>
      </div>
    </>
  );
}

export default Pagination;
