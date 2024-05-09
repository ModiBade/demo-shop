import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-10">
        <h2 className="font-normal text-5xl text-blue-500">
          متاسفیم، این مسیر به جایی ختم نمیشه !
        </h2>
      </div>
      <Image
        src="/media/images/404.gif"
        width="700"
        height="700"
        alt="404"
        unoptimized
      />
    </div>
  );
};

export default NotFound;
