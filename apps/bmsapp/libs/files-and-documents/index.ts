// convert file size (bytes) to human readable format (MB, GB, etc.)
export const convertFileSize = (size: number) => {
  if (size === 0) return '0 Bytes';
  const k = 1024;
  const dm = 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(size) / Math.log(k));
  return `${parseFloat((size / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};
