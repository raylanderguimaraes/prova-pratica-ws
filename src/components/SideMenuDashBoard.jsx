import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdManageAccounts, MdOutlineLogout} from "react-icons/md";

export default function SideMenuDashBoard() {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-zinc-900 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-400 group hover:bg-zinc-800">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-rose-100 fixed z-20 top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out-in delay-150 duration-200">
          <div className="flex flex-col justify-start items-center">
            <h1 className="text-base text-center cursor-pointer font-bold border-b border-gray-100 pt-16 pb-4 w-full">
              Products
            </h1>

            <div className="mb-4 border-b border-gray-100 pb-4 ">
              <div className="flex mb-2 justify-start items-center gap-4 px-3 hover:bg-zinc-800 py-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdManageAccounts className="text-2xl text-zinc-800 group-hover:text-zinc-100" />
                <h3 className="text-base text-zinc-800 group-hover:text-zinc-100 font-semibold  ">
                  Company Profile
                </h3>
              </div>

              <div className="py-4 mt-20">
                <Link href="/">
                  <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-zinc-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineLogout className="text-2xl text-zinc-800 group-hover:text-zinc-100" />
                    <h3 className="text-base text-zinc-800 group-hover:text-zinc-100 font-semibold  ">
                      Logout
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
