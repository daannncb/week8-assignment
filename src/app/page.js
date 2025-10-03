import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex flex-col mt-3">
      <p className="flex justify-center">
        Humans have been around on Earth for a little while now, and we&apos;ve
        been up to some cool stuff.
        <br />
        Learn about some of it.
      </p>
      <div className="flex justify-center mt-20">
        <Image
          src="/homeimg.webp"
          width={1000}
          height={500}
          alt="The mosaic 'The Gypsy Girl'"
        />
      </div>
    </div>
  );
}

//! could add a random post viewer in here?
