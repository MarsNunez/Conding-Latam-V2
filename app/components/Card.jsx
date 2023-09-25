import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <Link href={"/"}>
      <div className="border p-3 rounded-md">
        <img
          src="/img/code.jpg"
          alt="thumbnail"
          className="h-[167px] w-full rounded-md object-cover object-center"
        />
        <h2 className="font-medium text-lg mt-2 line-clamp-2">
          Curso de HTML Avanzado
        </h2>
        <p className="text-xs text-slate-500">John Doe</p>
        <div className="flex items-center gap-2 my-3">
          <div className="rounded-full w-fit flex p-[5px] items-center bg-sky-100 text-sky-700">
            <i className="lni lni-folder "></i>
          </div>
          <p className="text-slate-500 text-sm">38 Capitulos</p>
        </div>
        <p className="font-medium">Gratis</p>
      </div>
    </Link>
  );
};

export default Card;
