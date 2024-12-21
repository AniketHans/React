/**
 * We are just exporting env variables in this file so that we can use them anywhere in the code.
 * This is to avoid any unwanted errors that might come while accessing the env varibles in place.
 */
const envVariables = {
  appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  appriteApiKey: String(import.meta.env.VITE_APPWRITE_API_KEY),
};

export default envVariables;
