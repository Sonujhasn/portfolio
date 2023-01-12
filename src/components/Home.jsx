import React, { useRef } from 'react'
import {animate, motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs";
import me from "../assets/logo.png";
const Home = ({ratio}) => {

    const clientCount=useRef(null)
    const projectCount=useRef(null)
    const animationsClientCount=()=>{
        animate(0,100,{
            duration:1,
            onUpdate:(v)=>(clientCount.current.textContent=v.toFixed()),
        })
    }
    const animationsProjectCount=()=>{
        animate(0,50,{
            duration:1,
            onUpdate:(v)=>(projectCount.current.textContent=v.toFixed()),
        })
    }
    const animations={
        h1:{
            initial:{
               x:"-100%",
               opacity:0,
            },
            whileInView:{
                x:0,
                opacity:1,
            }
        },
        button:{
            initial:{
               y:"-100%",
               opacity:0,
            },
            whileInView:{
                y:0,
                opacity:1,
            }
        }
    }
  return (
    <div id='home'>
        <section>
           <div>
               <motion.h1 {...animations.h1}>
                  Hi, I Am <br/> Sonu
               </motion.h1>
               <Typewriter options={{
                strings:["A Developer","A Designer" ,"A Creator"],
                autoStart:true,
                loop:true,
                wrapperClassName:"typewriterpara",
                cursor:""
               }} />
               <div>
               <a href="mailto:sonujhasn8@gmail.com">
                 Hire Me
               </a>
                <a href="#work">Project  <BsArrowUpRight/></a>
               </div>
               <article>
                <p>
                    +{
                        ratio<3 && <motion.span whileInView={animationsClientCount} ref={clientCount}></motion.span>
                    }
                </p>
                <span>Clients Worldwide</span>
               </article>
               <aside>
                <article>
                    <p>
                    +{
                        ratio< 3 && <motion.span whileInView={animationsProjectCount} ref={projectCount}>
                            
                        </motion.span>
                    }
                    </p>
                    <span>Projects Done</span>
                 </article>
                 <article data-special>
                    <p>Contact</p>
                    <span>sonujhasn8@gmail.com</span>
               </article>
               </aside>
           </div>
        </section>
        <section>
            <img src={me} alt="" />
        </section>
        <BsChevronDown/>
    </div>
  )
}

export default Home