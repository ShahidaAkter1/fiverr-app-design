import { useState } from "react";
import "./Navbar.scss";
import { useEffect } from "react";

const Navbar = () => {

    const [active, setActive]=useState(false);

    const isActive = () =>{
        window.screenY > 0 ? setActive(true) : setActive(false)
    };

    useEffect(()=>{
      window.addEventListener("scroll", isActive);

      return ()=>{
        window.removeEventListener("scroll", isActive);
      }
    },[])

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign in</span>
            <span>Become a seller</span>
            <button>Join</button>
        </div>
      </div>

     { active && (
         <>
           <hr/>
           <div className="menu">
             <span>test</span>
             <span>test1</span>
           </div>
         </>
     )
     }

    </div>
  );
};

export default Navbar;
