import Image from "next/legacy/image";
import clsx from "clsx";

type TImageProps = {
  src: string;
  alt?: string;
  className?: string;
  size: string;
  onBlur?: boolean;
};

export default function Images({ src, alt, className, size, onBlur }: TImageProps) {
  return (
    <div className={clsx("relative cursor-pointer", size)}>
      <Image
        src={src}
        alt={alt}
        className={clsx("z-[2]", className, onBlur && "onBlur")}
        objectFit="cover"
        layout="fill"
        loading="lazy"
      />
    </div>
  );
}
