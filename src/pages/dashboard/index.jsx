import SideMenuDashBoard from "@/components/SideMenuDashBoard";
import Layout from "../Layout";
import { verifyToken } from "@/services/user";
import { getCookie } from "cookies-next";
import { MdOutlineClose, MdAdd } from "react-icons/md";
import Link from "next/link";

export default function dashboard() {
  return (
    <Layout>
      <SideMenuDashBoard />
      <main className="w-full h-full mb-[500px] flex flex-col items-center justify-center">
        <div className="flex w-4/5 items-center justify-center gap-16">
          <h1 className="text-xl font-bold underline">List of Products</h1>
          <button className="text-xl font-bold flex items-center gap-1 border border-zinc-900 hover:bg-zinc-800 hover:text-zinc-100 py-1 px-4 rounded-md">
            <MdAdd />
            <span>New</span>
          </button>
        </div>

        <div className="lg:w-[700px] md:w-[600px] xs:w-full rounded-md flex  mt-8 flex-col bg-rose-100">
          <div className="w-full flex items-center px-2 my-2 justify-evenly gap-10 hover:bg-rose-200">
            <div class="mr-2 w-2/4 ">
              <h3>Red Aple</h3>
            </div>

            <div className="flex gap-4">
              <h3 className="font-bold">$1.99</h3>
              <button className="text-xl font-bold border border-zinc-900 hover:bg-zinc-800 hover:text-zinc-100  px-2 rounded-md">
                Edit
              </button>
              <button className="bg-red-600 px-2 rounded-md text-white text-xl font-bold">
                <MdOutlineClose />
              </button>
            </div>
          </div>

          <div className="w-full flex items-center px-2 my-2 justify-evenly gap-10 hover:bg-rose-200">
            <div class="mr-2 w-2/4 ">
              <h3>Green Salad</h3>
            </div>

            <div className="flex gap-4">
              <h3 className="font-bold">$4.66</h3>
              <button className="text-xl font-bold border border-zinc-900 hover:bg-zinc-800 hover:text-zinc-100  px-2 rounded-md">
                Edit
              </button>
              <button className="bg-red-600 px-2 rounded-md text-white text-xl font-bold">
                <MdOutlineClose />
              </button>
            </div>
          </div>

          <div className="w-full flex items-center px-2 my-2 justify-evenly gap-10 hover:bg-rose-200">
            <div class="mr-2 w-2/4 ">
              <h3>Water Jar</h3>
            </div>

            <div className="flex gap-4">
              <h3 className="font-bold">$3.66</h3>
              <button className="text-xl font-bold border border-zinc-900 hover:bg-zinc-800 hover:text-zinc-100  px-2 rounded-md">
                Edit
              </button>
              <button className="bg-red-600 px-2 rounded-md text-white text-xl font-bold">
                <MdOutlineClose />
              </button>
            </div>
          </div>

          <div className="w-full flex items-center px-2 my-2 justify-evenly gap-10 hover:bg-rose-200">
            <div class="mr-2 w-2/4 ">
              <h3>Natural Suplement 1</h3>
            </div>

            <div className="flex gap-4">
              <h3 className="font-bold">$7.86</h3>
              <button className="text-xl font-bold border border-zinc-900 hover:bg-zinc-800 hover:text-zinc-100  px-2 rounded-md">
                Edit
              </button>
              <button className="bg-red-600 px-2 rounded-md text-white text-xl font-bold">
                <MdOutlineClose />
              </button>
            </div>
          </div>

          <div className="w-full flex items-center px-2 my-2 justify-evenly gap-10 hover:bg-rose-200">
            <div class="mr-2 w-2/4 ">
              <h3>Natural Suplement 2</h3>
            </div>

            <div className="flex gap-4">
              <h3 className="font-bold">$5.00</h3>
              <button className="text-xl font-bold border border-zinc-900 hover:bg-zinc-800 hover:text-zinc-100  px-2 rounded-md">
                Edit
              </button>
              <button className="bg-red-600 px-2 rounded-md text-white text-xl font-bold">
                <MdOutlineClose />
              </button>
            </div>
          </div>

          <div className="w-full flex items-center px-2 my-2 justify-evenly gap-10 hover:bg-rose-200">
            <div class="mr-2 w-2/4 ">
              <h3>Banana's Juice</h3>
            </div>

            <div className="flex gap-4">
              <h3 className="font-bold">$4.77</h3>
              <button className="text-xl font-bold border border-zinc-900 hover:bg-zinc-800 hover:text-zinc-100  px-2 rounded-md">
                Edit
              </button>
              <button className="bg-red-600 px-2 rounded-md text-white text-xl font-bold">
                <MdOutlineClose />
              </button>
            </div>
          </div>

          <div className="w-full flex items-center px-2 my-2 justify-evenly gap-10 hover:bg-rose-200">
            <div class="mr-2 w-2/4 ">
              <h3>Natural Orange Juice</h3>
            </div>

            <div className="flex gap-4">
              <h3 className="font-bold">$3.21</h3>
              <button className="text-xl font-bold border border-zinc-900 hover:bg-zinc-800 hover:text-zinc-100  px-2 rounded-md">
                Edit
              </button>
              <button className="bg-red-600 px-2 rounded-md text-white text-xl font-bold">
                <MdOutlineClose />
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const getServerSidesProps = async ({ req, res }) => {
  try {
    const token = getCookie("authorization", { req, res });
    if (!token) throw new Error("Token Inválido");
    verifyToken(token);
    console.log(token);
    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
};
