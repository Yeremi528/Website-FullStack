import Head from "next/head";
import Layout from "../components/Layout";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Home() {
  return (
    <>
   <Layout>
          <div className="bg-black h-screen ">
        <div className="bg-black  justify-content h-screen ">
          <div
            className="bg-cover bg-center h-screen m-auto     "
            style={{
              backgroundImage:
                'url("https://wallup.net/wp-content/uploads/2018/10/09/20426-black-dark-cars-ferrari-vehicles-ferrari-f430-black-background-black-cars-front-view-side-view.jpg")',
            }}
          >
            <div className="block h-3/4"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/><br/></div>
            <h4 className="text-center  text-white  font-bold text-4xl">
              <a href="/" className="">ESTA OCURRIENDO</a>
              
            </h4>

            <h4 className="text-center text-white mt-8  hover:underline">PARA SABER MAS <ArrowForwardIosIcon className="hover:text-red-700"/></h4>
          </div>
        </div>
      </div>
   </Layout>
 
    </>
  );
}
