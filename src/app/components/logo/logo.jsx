import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/">
      <Image
        height={100}
        width={200}
        src="https://i.ibb.co/2SV91vK/Achem-1.png"
        className="w-200"
        alt=""
      />
    </Link>
  );
}

export default Logo;
