import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      width={152}
      height={40}
      alt="Портфолио фотографа Юлия Земски"
    />
  );
};

export default Logo;
