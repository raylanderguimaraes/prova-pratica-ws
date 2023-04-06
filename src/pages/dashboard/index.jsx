import SideMenuDashBoard from "@/components/SideMenuDashBoard";
import Layout from "../Layout";
import { verifyToken } from "@/services/user";
import { getCookie } from "cookies-next";
import Link from "next/link";


export default function dashboard() {
  return (
    <Layout>
      <SideMenuDashBoard/>
      <main className="flex items-center justify-center">
        <Link href="/">Voltar para Home</Link>
      </main>
    </Layout>
  );
}

// export const getServerSidesProps = async ({req, res}) => {
//   try {
//     const token = getCookie("authorization", { req, res });
//     if(!token) throw new Error("Token Inválido")
//     verifyToken(token)
//     console.log(token);
//     return {
//       props: {},
//     };
//   } catch (error) {
    
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/login"
//       },
//       props: {},
//     };
//   }
// };
