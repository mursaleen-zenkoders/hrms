// React Query Imports
import { useQuery, UseQueryResult } from '@tanstack/react-query';

// API & Service Imports
import { URL } from '@/services/api-base-urls';
import { GET } from '@/services/axios-request-handler';
import { Leave } from '@/types/types/leave';

/**
 * React Query hook for user login mutation.
 *
 * @returns {Object} - React Query hook result object.
 */
export const GetAttendanceHook = (): UseQueryResult<Leave, Error> => {
  /**
   * Function to perform the actual API call for user login.
   *
   * @param payload - Payload
   *
   * @returns {Promise<any>} - Promise resolving to the API response.
   *
   * @throws Will throw an error if the API call fails.
   */
  const GetAttendanceFn = async (): Promise<unknown> => {
    const response = await GET(URL.GET_Attendance_LEAVE);
    return response;
  };

  return useQuery({
    // Function that performs the fetching
    queryFn: GetAttendanceFn,
    queryKey: ['attendance'],
  });
};
