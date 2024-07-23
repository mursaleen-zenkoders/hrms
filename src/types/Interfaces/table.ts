import { FormikHandlers } from 'formik';

export interface ITable {
  children?: React.ReactNode;
  handleSubmit?: FormikHandlers['handleSubmit'];
  rowsPerPage?: number;
  setRowsPerPage?: React.Dispatch<React.SetStateAction<number>>;
  currentPage?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  rowsOption?: number[];
  total?: number;
  isPending: boolean;
}

export interface ITableBody {
  day?: string;
  date?: string;
  status?: string;
  checkIn?: string;
  checkOut?: string;
  officeHours?: string;
  workingHours?: string;
}

export interface ITableHead {
  tableHeader?: string[];
}

export interface TableFootI {
  rowsPerPage?: number;
  setRowsPerPage?: React.Dispatch<React.SetStateAction<number>>;
  currentPage?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  rowsOption?: number[];
  total?: number;
}
