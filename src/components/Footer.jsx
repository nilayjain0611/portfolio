import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className=' md:w-178 w-full max-auto'>
        <div id="footer" className='border-t-1 p-7  border-t-[var(--highlight)] flex justify-between items-center'>
            <Image src="icons/Logo.svg" alt="Logo" width={82} height={32} />
            <div className="socials flex justify-between items-center font-light">
          

            <div className="social-links flex justify-between items-center gap-5">
              <Link href="https://linkedin.com/in/nilayjain0611" target="_blank">
                <Image src="icons/linkedin.svg" alt="Logo" width={30} height={30} />
              </Link>
              <Link href="https://github.com/nilayjain0611" target="_blank">
                <Image src="icons/github.svg" alt="Logo" width={30} height={30} />
              </Link>
              <Link href="https://x.com/nilayjain__" target="_blank">
                <Image src="icons/X.svg" alt="Logo" width={30} height={30} />
              </Link>

            </div>
          </div>
        </div>
    </section>
    
  )
}

export default Footer