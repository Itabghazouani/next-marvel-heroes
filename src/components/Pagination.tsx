"use client"
import { useRouter } from 'next/navigation';

interface IPaginationProps {
  page: number;
  totalPages: number;
}

const Pagination = ({ page, totalPages }: IPaginationProps) => {

  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('page', newPage.toString());
    const newPath = `${window.location.pathname}?${queryParams.toString()}`;
    router.push(newPath);
  };

  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      {page > 1 && (
        <>
          <button
            onClick={() => handlePageChange(1)}
            className="px-4 py-2 border rounded-lg bg-slate-500 text-white hover:bg-slate-700"
          >
            First
          </button>
          <button
            onClick={() => handlePageChange(page - 1)}
            className="px-4 py-2 border rounded-lg bg-slate-500 text-white hover:bg-slate-700"
          >
            Previous
          </button>
        </>
      )}
      <span className="px-4 py-2 border rounded-lg dark:text-gray-800 bg-gray-200">
        {page}
      </span>
      {page < totalPages && (
        <>
          <button
            onClick={() => handlePageChange(page + 1)}
            className="px-4 py-2 border rounded-lg bg-slate-500 text-white hover:bg-slate-700"
          >
            Next
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            className="px-4 py-2 border rounded-lg bg-slate-500 text-white hover:bg-slate-700"
          >
            Last
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
