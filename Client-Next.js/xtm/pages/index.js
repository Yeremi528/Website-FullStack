import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
   <Layout>
          <div className="bg-black  ">
        <div className="bg-black  justify-content h-screen ">
          <div
            className="bg-cover bg-center w-4/5 m-auto     "
            style={{
              backgroundImage:
                'url("https://wallup.net/wp-content/uploads/2018/10/09/20426-black-dark-cars-ferrari-vehicles-ferrari-f430-black-background-black-cars-front-view-side-view.jpg")',
            }}
          >
          
            <h4 className="text-center text-white  font-bold text-4xl">
              ESTA OCURRIENDO
            </h4>

            <h4 className="text-center text-white mt-8 ">PARA SABER MAS </h4>
          </div>
        </div>
      </div>
   </Layout>
 
    </>
  );
}
