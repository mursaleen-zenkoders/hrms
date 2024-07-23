// Interface
import { ITable } from '@/types/Interfaces/table';

// Components
import LoadingView from '../loading';
import TableFoot from './table-foot';

/**
 *
 * @param IProps
 * @example
 * <Table
 *   tabs={['Approved', 'Requested']}
 *   currentTab={tab}
 *   setTab={(value: number) => setTab(value)}
 *  >
 *   <TableHeader tableHeader={tableHeader} />
 * </Table>
 *
 */
const Table = ({
  children,
  handleSubmit,
  rowsPerPage,
  setRowsPerPage,
  currentPage,
  setCurrentPage,
  rowsOption,
  total,
  isPending,
}: ITable) => {
  return (
    <div className='overflow-hidden min-h-[82dvh] flex flex-col justify-between'>
      <form
        onSubmit={handleSubmit}
        className='px-6'
      ></form>
      <div className='h-full min-h-[76dvh]'>
        <div className='w-full overflow-x-scroll xl:overflow-x-hidden'>
          <table className='w-full min-w-[1000px]'>{children}</table>
          {isPending && <LoadingView />}
        </div>
      </div>
      <TableFoot
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowsOption={rowsOption}
        total={total}
      />
    </div>
  );
};

export default Table;
