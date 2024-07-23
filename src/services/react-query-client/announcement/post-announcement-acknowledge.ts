// React Query Imports
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';

// API & Service Imports
import { URL } from '@/services/api-base-urls';
import { POST } from '@/services/axios-request-handler';

// Toast Import
// import toast from "react-hot-toast";

// Custom Types Imports
import { CustomAxiosErrorType } from '@/types/types/shared.types';
import toast from 'react-hot-toast';

/**
 * React Query hook for user login mutation.
 *
 * @returns {Object} - React Query hook result object.
 */
export const AnnouncementAcknowledgeMutationHook = (
  id: number,
): UseMutationResult<unknown, Error, { announcement_id: number }> => {
  const queryClient = useQueryClient();

  /**
   * Function to perform the actual API call for user login.
   *
   * @param payload - Payload containing user login details.
   *
   * @returns {Promise<any>} - Promise resolving to the API response.
   *
   * @throws Will throw an error if the API call fails.
   */
  const AnnouncementAcknowledgeFn = async (): Promise<unknown> => {
    const response = await POST(URL.POST_ANNOUNCEMENT_ACKNOWLEDGE, {
      announcement_id: id,
    });
    return response;
  };

  return useMutation({
    // Function that performs the mutation
    mutationFn: AnnouncementAcknowledgeFn,
    /**
     * Callback fired when the mutation is successful.
     *
     * @param message - The data returned by the mutation function (userLoginFn).
     *
     * @param variables - The variables passed to the mutation function (Payload).
     *
     * @param context - Additional context provided during the mutation setup (optional).
     */
    onSuccess: (message, variables, context) => {
      toast.success('Announcement Acknowledge Added successfully');
      return {
        message,
        variables,
        context,
      };
    },
    // Callback fired when the mutation encounters an error
    onError: (error: CustomAxiosErrorType) => {
      toast.error(error?.response?.data?.message ?? 'Something went wrong');

      return {
        error:
          error?.response?.data?.message ??
          "Can't access the server, please try again later.",
      };
    },
    // Callback fired when the mutation is settled (whether successful or not)
    onSettled: () => {
      // Invalidate the queries related to pdfVector after login mutation is settled
      queryClient.invalidateQueries({
        queryKey: ['announcement-acknowledges'],
      });
      queryClient.invalidateQueries({
        queryKey: ['all-announcements'],
      });
    },
  });
};
