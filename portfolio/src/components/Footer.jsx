import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    return (
        <footer className=" bg-gray-800 text-white p-4">
          <div className="flex container mx-auto  flex-col items-center space-y-2">
            <a className='flex items-center' href="mailto:estebanneorenfranco@gmail.com"><EmailIcon/> estebanneorenfranco@gmail.com</a>
            <a className='flex items-center' href="https://www.linkedin.com/in/estebanneorenfranco/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/>Esteban Neoren Franco</a>
            <p>&copy; 2023 Esteban Neoren Franco</p>
          </div>
        </footer>
      );
}

export default Footer
