import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image
          src="/logo.png"
          width={152}
          height={40}
          alt="Портфолио фотографа Юлия Земски"
        />
      </a>
    </Link>
  );
};

export default Logo;
