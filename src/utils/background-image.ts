import { getImage } from 'astro:assets';
import paperTextureImg from '../images/paper-texture.png';

export const bgImage = await getImage({
  src: paperTextureImg,
  format: 'webp',
});
