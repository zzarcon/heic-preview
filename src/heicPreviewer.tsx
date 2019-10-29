// import * as heic2any from 'heic2any';
const heic2any = require('heic2any');

export const heicPreviewer = async (file: File): Promise<Blob> => {
  const preview = await heic2any({
    blob: file,
    // "image/jpeg", "image/png" or "image/gif"
    toType: 'image/jpeg',
    quality: 1
  });

  return preview;
}