// React Query Imports
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';

// API & Service Imports
import { URL } from '@/services/api-base-urls';

// Toast Import
// import toast from "react-hot-toast";

// Custom Types Imports
import { PATCH } from '@/services/axios-request-handler';
import { ProfileFormikT } from '@/types/types/profile';
import { CustomAxiosErrorType } from '@/types/types/shared.types';
import toast from 'react-hot-toast';

/**
 * React Query hook for user login mutation.
 *
 * @returns {Object} - React Query hook result object.
 */
export const EditUserMutationHook = (): UseMutationResult<
  unknown,
  Error,
  Partial<ProfileFormikT>
> => {
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
  const EditUserFn = async (
    payload: Partial<ProfileFormikT>,
  ): Promise<unknown> => {
    const response = await PATCH(URL.PATCH_USER, payload);
    return response;
  };

  return useMutation({
    // Function that performs the mutation
    mutationFn: EditUserFn,
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
      toast.success('User Info Updated Successfully');
      return {
        message,
        variables,
        context,
      };
    },
    // Callback fired when the mutation encounters an error
    onError: (error: CustomAxiosErrorType) => {
      toast.error(
        error?.response?.data?.message ?? 'User Info Updation failed',
      );

      return {
        error:
          error?.response?.data?.message ??
          "Can't access the server, please try again later.",
      };
    },
    // Callback fired when the mutation is settled (whether successful or not)
    onSettled: () => {
      // Invalidate the queries related to pdfVector after login mutation is settled
      queryClient.invalidateQueries({ queryKey: ['edit-user'] });
      queryClient.invalidateQueries({ queryKey: ['all-users'] });
    },
  });
};
