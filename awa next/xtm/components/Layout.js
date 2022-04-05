import React from 'react'
import { useRouter } from 'next/router';
import Sidebar from './Sidebar';
import Head from "next/head"
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}) => {

    // Hook de routing
    const router = useRouter();

    return ( 
    
           <>
           <Head>
                <title>CRM - Administración de Clientes</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
           </Head>
            {router.pathname === "/login" || router.pathname === "/register"  ? (
                 <div className='bg-gray-800 min-h-screen flex flex-col justify-center'>
                      <div>
                          {children} 
                      </div>
                      
                 </div>
            ): (
                <div className='bg-gray-200 min-h-screen'>
               <div className='flex min-h-screen'>
                    
                    <main className='sm:w-full xl:w-full sm:min-h-screen '>
                         <Header/>
                         {children}
                         <Footer/>
                    </main>
                    
                   
               </div>
                
           </div>  
            )}
          
               
                          
                
                        
           </>
                
     
        
     );
}
 
export default Layout;