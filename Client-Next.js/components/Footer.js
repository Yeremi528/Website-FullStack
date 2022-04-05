import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
  return (
    <div className='bg-black w-full h-56 flex text-white'>
   
    <div className=' w-full text-center text-sm flex mt-6'>
      <div className='w-1/12 '></div>
      <div className='w-2/12  '>
       <FacebookIcon className=""/>
       <h4 className='mt-4 hover:underline'>Ferrari Oficial</h4>
       <h4 className='mt-2 hover:underline'>Scuderia Ferrari</h4>
       <h4>Ferrari Races</h4>
       <h4 className='mt-2 hover:underline'><a href='/'>FDA</a></h4>
       <h4 className='mt-2 hover:underline'>  <a>Ferrari Style</a> </h4>
       
     </div>
     <div className='w-2/12 '>
       <InstagramIcon/>
       <h4 className='mt-4 hover:underline'> <a>Ferrari Official</a>  </h4>
       <h4 className='mt-2 hover:underline'> <a>Scuderia Ferrari</a>  </h4>
       <h4 className='mt-2 hover:underline'>  <a>Ferrari Races</a>  </h4>
       <h4 className='mt-2 hover:underline'>  <a>Ferrari Driver Academy</a>   </h4>
       <h4 className='mt-2 hover:underline'>   <a>Ferrari Style</a> </h4>
       
     </div>
     <div className='w-2/12'>
       <TwitterIcon/>
       <h4 className='mt-4 hover:underline'> <a href="/">Ferarri Official</a>   </h4>
       <h4 className='mt-2 hover:underline'>  <a href="/">Scuderia Ferrari</a>  </h4>
       <h4 className='mt-2 hover:underline'>  <a href="/">Ferrari Races</a> </h4>
       <h4 className='mt-2 hover:underline'> <a href="/">Ferrari Driver Academy</a>   </h4>
       <h4 className='mt-2 hover:underline'>  <a href="/">FerrariEsports</a> </h4>  
     </div>
     <div className="w-2/12">
       <a target="_blank" href="https://github.com/Yeremi528"><GitHubIcon/></a>
       
       <h4 className='mt-4 hover:underline'>  <a target="_blank" href="https://github.com/Yeremi528">Mi GitHub</a>   </h4>
       
     </div>
     <div className='w-2/12 '>
       <a target="_blank" href='https://www.linkedin.com/in/yeremi-araya-urbina-242a7321a'>  <LinkedInIcon/></a>
   
       <h4 className='mt-4 hover:underline'><a target="_blank" href="https://www.linkedin.com/in/yeremi-araya-urbina-242a7321a">Mi Linkedin</a></h4>
       <h4 className='mt-2 hover:underline'><a href="/">Scuderia Ferrari</a></h4>
     
     </div>
     <div className='w-1/12'></div>
      </div>
  

    </div>
  )
}

export default Footer