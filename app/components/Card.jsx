import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <Link href={"/"}>
      <div className="border p-3 rounded-md">
        <img
          src="/img/code.jpg"
          alt="thumbnail"
          className="h-44 w-full rounded-md object-cover object-center"
        />
      </div>
    </Link>
  );
};

export default Card;
