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
  GET_ANNOUNCEMENTS: `${BASE_URL}/announcement`,

  GET_ANNOUNCEMENT: (id: number) => `${BASE_URL}/announcement/${id}`,

  POST_ANNOUNCEMENT_ACKNOWLEDGE: `${BASE_URL}/announcement/acknowledge`,
} as const;
