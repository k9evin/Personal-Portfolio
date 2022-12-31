import bg from '../public/images/bg.png';
import { ImageProps } from '../types';
import Image from 'next/image';

export const Background = (): JSX.Element => {
  return (
    <div className="absolute top-0 bottom-0 -z-10 flex flex-col">
      <BackGroundImage src={bg} alt="Mountains" />
    </div>
  );
};

const BackGroundImage = ({ src, alt }: ImageProps) => {
  return <Image src={src} alt={alt} className="min-h-screen object-cover" />;
};
