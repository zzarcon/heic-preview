import heic2any from 'heic2any';

// TODO: allow to pass options
export const heicPreviewer = async (file: File): Promise<Blob> => {
  const preview = await heic2any({
    blob: file,
    toType: 'image/jpeg', // "image/jpeg", "image/png" or "image/gif"
    quality: 1
  });

  return preview;
}