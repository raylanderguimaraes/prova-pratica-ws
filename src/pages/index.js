import Head from "next/head";

import Layout from "./Layout";
import Image from "next/image";
import Link from "next/link";
import SideMenu from "@/components/SideMenu";

export default function Home() {
  return (
    <Layout>
      <SideMenu />
      <div className=" md:w-full xl:w-4/5  xl:ml-[250px] flex flex-col">
        <div className="xl:flex gap-4 px-4 items-center mb-16">
          <Image
            className="rounded-lg"
            src="/suplementos-naturais.jpg"
            alt="Frasco de suplementos naturais"
            width={700}
            height={500}
          />

          <div className="md:full xl:w-2/6 2xl:w-2/4">
            <h2 className="text-4xl font-bold">$ 9,99</h2>
            <p className="mb-2">
              super suplement for you health and well-being, natural and 100%
              functional, take advanatage of this offer
            </p>
            <button
              href="#"
              className="text-4xl font-bold bg-zinc-950 text-zinc-100 rounded-md px-6 py-2 hover:bg-zinc-800">
              Buy
            </button>
          </div>
        </div>

        {/*Colocar um carrossel aqui*/}
        <div className="xl:w-full xl:flex xl:items-center xl:justify-evenly gap-2  py-4">
          <div className="text-center md:max-w-md mb-3">
            <Image
              className="rounded-md mx-auto"
              src="/suplementos-naturais.jpg"
              alt="Frasco de suplementos naturais"
              width={300}
              height={250}
            />
            <span className="font-bold">$ 1.99</span>
          </div>
          <div className="text-center md:max-w-md mb-3">
            <Image
              className="rounded-md mx-auto"
              src="/suplementos-naturais.jpg"
              alt="Frasco de suplementos naturais"
              width={300}
              height={250}
            />
            <span className="font-bold">$ 8.77</span>
          </div>
          <div className="text-center md:max-w-md mb-3">
            <Image
              className="rounded-md mx-auto"
              src="/suplementos-naturais.jpg"
              alt="Frasco de suplementos naturais"
              width={300}
              height={250}
            />
            <span className="font-bold">$ 3.74</span>
          </div>
          <div className="text-center md:max-w-md mb-3">
            <Image
              className=" rounded-md text-center mx-auto"
              src="/suplementos-naturais.jpg"
              alt="Frasco de suplementos naturais"
              width={300}
              height={250}
            />
            <span className="font-bold">$ 6.88</span>
          </div>
        </div>

        <div className="flex justify-between py-8 px-6 mt-8">
          <div>
            <div className="flex gap-4">
              <Image
                className="rounded-md"
                src="/suplementos-naturais.jpg"
                alt="Frasco de suplementos naturais"
                width={250}
                height={250}
              />
              <div>
                <h3 className="text-2xl font-semibold">Only $0.22</h3>
                <p>Healty power pills</p>
                <p>Most Healty for u</p>
                <p className=" italic font-semibold">
                  cheap and powerful remedy
                  <br />
                  for long term healing
                </p>
              </div>
            </div>
            <button
              href="#"
              className="text-4xl font-bold w-3/4 mt-4 bg-zinc-950 text-zinc-100 rounded-md px-6 py-1 hover:bg-zinc-800">
              BUY NOW
            </button>
          </div>

          <div>
            <div className="flex gap-4">
              <Image
                className="rounded-md"
                src="/suplementos-naturais.jpg"
                alt="Frasco de suplementos naturais"
                width="300"
                height="300"
              />
              <div>
                <h3 className="text-3xl font-bold">best drink</h3>
                <button
                  href="#"
                  className="text-2xl font-bold w-full mt-4 bg-white border border-red-600 text-red-600 rounded-md px-4 py-1 hover:bg-red-600 hover:border-white hover:text-white">
                  FOR FREE
                </button>
                <h4 className="text-xl w-full">long term health</h4>
              </div>
            </div>
            <div className="font-semibold hover:text-zinc-600 mt-2 group hover:underline">
              <Link href="#">
                click here and join us
                <br /> with these magical benefits
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
