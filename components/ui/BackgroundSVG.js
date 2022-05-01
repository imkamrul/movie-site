import Image from "next/image";

function BackgroundSVG({ src, style }) {
  console.log(src);
  return (
    <div
      className={`absolute -top-1/2 ${style.horizontalPositio}  hidden lg:block z-[-5]`}
    >
      <Image src="/celebrity.svg" width={900} height={900} alt="phtoo" />
    </div>
  );
}

export default BackgroundSVG;
