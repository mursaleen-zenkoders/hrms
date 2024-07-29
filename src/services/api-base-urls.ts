/**
 * Live URL that checks if the app is in production or development.
 */
const IS_LIVE = false;

/**
 * Production URL that will be treated as global start-point and is connected to production backend API.
 */
const PRODUCTION_URL = process.env.NEXT_PUBLIC_API_URL as string;

/**
 * Local URL that will be treated as global start-point and is connected to local backend or AWS Elastic API.
 */
const LOCAL_URL = 'http://192.168.1.123:5000' as string;

/**
 * Base URL that will be treated as global start-point.
 */
export const BASE_URL = IS_LIVE ? PRODUCTION_URL : LOCAL_URL;

export const URL = {
  // ======================== File Upload ========================
  UPLOAD_PDF: (uid: string | string[]) => `${BASE_URL}/S3/fileUpload/${uid}`,

  // ======================== Announcement ========================
  GET_ANNOUNCEMENTS: (page?: number, date?: string) =>
    `${BASE_URL}/announcement/all?limit=${10}&page=${page}&date=${date}`,
  GET_ANNOUNCEMENT: (id: number) => `${BASE_URL}/announcement/by/${id}`,
  POST_ANNOUNCEMENT_ACKNOWLEDGE: `${BASE_URL}/announcement/acknowledge`,

  // ======================== Standup ========================
  GET_ALL_STANDUP: `${BASE_URL}/standups/all`,

  // ======================== USER ========================
  GET_ALL_USERS: `${BASE_URL}/user/all`,
  PATCH_USER: `${BASE_URL}/user/update-profile`,

  // ======================== Attendance ========================
  GET_Attendance_LEAVE: `${BASE_URL}/attendance/leaves`,
} as const;
