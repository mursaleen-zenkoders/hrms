'use client';
import { ITableBody } from '@/types/Interfaces/table';

/**
 *
 * @param IDetailsTableBody
 * @example
 * <TableBody
 *   statusStyle={[
 *     {
 *       text: 'Open',
 *       bg: '#FEE4E2',
 *       textColor: '#F14D4D',
 *     },
 *     {
 *       bg: '#F0F7FF',
 *       textColor: '#5293F4',
 *       text: 'Closed',
 *     },
 *    ]}
 *    {...item}
 *    onActionClick={() => {}}
 * />
 */
const TableBody = ({
  checkIn,
  checkOut,
  date,
  day,
  officeHours,
  status,
  workingHours,
}: ITableBody) => {
  const BodyData = [
    day,
    date,
    checkIn,
    checkOut,
    officeHours,
    workingHours,
    status,
  ];

  return (
    <tbody>
      <tr
        className={`h-[60px] border-b border-dark-black text-[13px] font-medium text-[#51595A] hover:bg-[#f7f7f709] relative`}
      >
        {BodyData.map((item, index) => (
          <td
            key={index}
            className={`px-3 py-2 text-gray-50 text-sm font-medium text-center`}
          >
            {item}
          </td>
        ))}
      </tr>
    </tbody>
  );
};

export default TableBody;
