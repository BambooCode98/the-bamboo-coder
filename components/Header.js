import React, {useState,useRef,useEffect} from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
  let mobHidden = "mob-hidden"
  let mobNavMenu = "mob-navMenu";
  let windowSize;
  const [navMenu, setNavMenu] = useState(mobHidden);
  const [mobileMenu, setMobileMenu] = useState(false);
  const htmlSize = useRef(null);
  // console.log(htmlWidth);
  
  useEffect(() => {

    // window.addEventListener('load', ()=> {
      
    // })
    
    // screen.orientation.addEventListener('change', () => {
    //   // e.preventDefault();
    // })
    windowSize = htmlSize.current.clientWidth;
    // console.log(htmlSize.current.clientWidth);
    // console.log(window.innerHeight);
    
    if(windowSize < 500) {
      setMobileMenu(true)
    }
  })

  function showMenu() {

    if(navMenu === mobHidden) {
      setNavMenu(mobNavMenu)
    } else {
      setNavMenu(mobHidden)
    }
  }

  return (
    <header className='header' ref={htmlSize}>
      <div className='head-part1'>
        <Link href="/">
          <h1 className='title'><span className='the-title'>The</span> <span className='b-title'>Bamboo</span> <span className='c-title'>Coder</span> </h1>
        </Link>
      </div>
      <div className='head-part2'>
        {mobileMenu ? 
          <>
            <span onClick={() => showMenu()}>
              <FontAwesomeIcon icon={faBars}  className='icons'/>
            </span>
              <nav className={navMenu}>
                <ul className='mob-navi'>
                  <Link href="/">
                    <li className='mob-n1' onClick={() => showMenu()}>Home</li>
                  </Link>
      
                  <Link href="/about">
                    <li className='mob-n1' onClick={() => showMenu()}>About</li>
                  </Link>
      
                  <Link href="/blog">
                    <li className='mob-n1' onClick={() => showMenu()}>Blog</li>
                  </Link>
      
                  <Link href="/contact">
                    <li className='mob-n1' onClick={() => showMenu()}>Contact</li>
                  </Link>
                </ul>
              </nav>
          </>  
          : 
          <nav className='navMenu'>
            <ul className='navi'>
              <Link href="/">
                <li className='n1'>Home</li>
              </Link>

              <Link href="/about">
                <li className='n1'>About</li>
              </Link>

              <Link href="/blog">
                <li className='n1'>Blog</li>
              </Link>

              <Link href="/contact">
                <li className='n1'>Contact</li>
              </Link>
            </ul>
          </nav>
        
        }
        {/* <FontAwesomeIcon icon={faBars}  className='icons' /> */}
        {/* <nav className='navMenu'>
          <ul className='navi'>
            <Link href="/">
              <li className='n1'>Home</li>
            </Link>

            <Link href="/about">
              <li className='n1'>About</li>
            </Link>

            <Link href="/blog">
              <li className='n1'>Blog</li>
            </Link>

            <Link href="/contact">
              <li className='n1'>Contact</li>
            </Link>
          </ul>
        </nav> */}
        {/* could be a search area here */}
      </div>

    </header>
  )
}
