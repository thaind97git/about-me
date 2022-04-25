const {
  NODE_ENV,
  API_SERVER_URL,
  PORT,
  MAP_BOX_TOKEN,
  ENABLE_DOWNLOAD_RESUME,
  ENABLE_BLOB_AVATAR_SEO,
  ORIGIN_URL,
} = process.env;

export default {
  nodeEnv: NODE_ENV,
  apiServerUrl: API_SERVER_URL,
  port: PORT,
  mapBoxToken: MAP_BOX_TOKEN,
  enableDownloadResume: ENABLE_DOWNLOAD_RESUME,
  enableBlobAvatarSEO: ENABLE_BLOB_AVATAR_SEO,
  originUrl: ORIGIN_URL,
};
