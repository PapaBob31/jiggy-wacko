import { ArrowUpRight, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react"
import { useState } from "react"
import { motion, stagger, type Variants }  from "motion/react"

interface NewProductData {
  id: string;
  name: string;
  imgUrl: string;
  description: string;
  price: number;
}


const jerseysSectionTextAnimations: Variants = {
  hidden: {
    translateY: "40%",
    opacity: 0,
  },
  visible: {
    translateY: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    }
  }
}

const jerseysSectionImgBoxVariants: Variants = {
  outsideparent: {
    translateY: "50%",
    opacity: 0,
  },
  slidein: {
    translateY: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    }
  }
}

const jerseysSectionImgsVariants: Variants = {
  outsideparent: {
    scale: 1.3,
    originX: "0%",
    originY: "100%",
  },
  slidein: {
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
    scale: 1,
    originX: "0%",
    originY: "100%"
  }
}


function JerseySection() {
  const [slidesMoved, setSlidesMoved] = useState(0);

	function moveSlidesRight() {
		setSlidesMoved(slidesMoved => slidesMoved + 1)
	}

	function moveSlidesLeft() {
		setSlidesMoved(slidesMoved => slidesMoved - 1)
	}
	
  return  (
    <section className="md:w-[80vw] w-[90vw] mx-auto blur-none">
      <motion.h2
        initial={"hidden"}
        whileInView={"visible"}
        variants={jerseysSectionTextAnimations}
        viewport={{once: true}}
        className="text-lg font-semibold"
      >
        Stylish Jerseys
      </motion.h2>
      <motion.div 
        initial={"hidden"}
        whileInView={"visible"}
        variants={jerseysSectionTextAnimations}
        viewport={{once: true}}
        className="flex items-center gap-2"
      >
        <span>Unique Jerseys for any occassion</span>
        <a href="/jerseys" className="flex items-center font-semibold">Explore <ArrowRight size={20}/></a>
      </motion.div>
      <div className="flex md:flex-row flex-col items-start gap-2">
        <div className="md:w-[55vw] grow overflow-hidden">
          <motion.div
            initial="outsideparent"
            whileInView="slidein"
            variants={jerseysSectionImgBoxVariants}
            viewport={{once: true}}
            className="w-full md:h-[40vw] flex items-start relative overflow-hidden"
          >
            <div className={`w-full h-full shrink-0 duration-500 ease-in-out ${slidesMoved < 0 ? "-" : ""}translate-x-[${100 * Math.abs(slidesMoved)}%]`}>
              {/* This div wrapper is needed to stop the slide animation from interfering with motion page load animation */}
              <motion.img 
                variants={jerseysSectionImgsVariants}
                className={`w-full h-full object-cover bg-neutral-300`}
                src="/assets/home-red-jersey-front.png"
              />
            </div>
            <div className={`w-full h-full shrink-0 duration-500 ease-in-out ${slidesMoved < 0 ? "-" : ""}translate-x-[${100 * Math.abs(slidesMoved)}%]`}>
              <img
                className={`w-full h-full object-cover bg-neutral-300`}
                src="/assets/home-red-jersey-back.png"
              />
            </div>
            <button onClick={moveSlidesRight} disabled={slidesMoved == 0} className="disabled:text-neutral-500 absolute top-[45%] left-2 p-1 cursor-pointer">
              <ChevronLeft size={18}/>
            </button>
            <button onClick={moveSlidesLeft} disabled={slidesMoved == -1} className="disabled:text-neutral-500 absolute top-[45%] right-2 p-1 cursor-pointer">
              <ChevronRight size={18}/>
            </button>
          </motion.div>
        </div>
        <div className="md:w-[28vw] md:h-[40vw] w-full overflow-y-hidden flex md:flex-col gap-2">
          <motion.div 
            variants={jerseysSectionImgBoxVariants}
            initial="outsideparent"
            whileInView="slidein" 
            viewport={{once: true}}
            className="p-4 h-[50%] bg-neutral-300 overflow-hidden"
          >
            <motion.img variants={jerseysSectionImgsVariants} className="object-cover h-full w-full" src="/assets/home-black-jersey.png"/>
          </motion.div>
          <motion.div
            variants={jerseysSectionImgBoxVariants}
            initial="outsideparent"
            whileInView="slidein"
            className="p-4 h-[50%] bg-neutral-300 overflow-hidden"
            viewport={{once: true}}
          >
            <motion.img variants={jerseysSectionImgsVariants} className="object-cover h-full w-full" src="/assets/home-black-jersey-2.png"/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



const joggersSectionVariants: Variants = {
  hidden: {
    clipPath: "inset(0 0 100% 0)"
  },
  visible: {
    clipPath: "inset(0 0 -0 0)",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  }
}

const joggersSectionContentVariants: Variants = {
  hidden: {
    scale: 1.3,
    originX: "0%",
    originY: "0%"
  },
  visible: {
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
    scale: 1,
    originX: "0%",
    originY: "0%"
  }
}



function JoggersSection() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.4}}
      variants={joggersSectionVariants}
      className="bg-gray-100 mt-10 p-px overflow-hidden relative"
    >
      <div className="md:w-[80vw] md:mx-auto md:flex justify-between gap-4 py-8 items-center">
        <motion.img variants={joggersSectionContentVariants} className="md:w-[40vw] w-[60vw] md:mx-0 mx-auto md:h-[30vw] object-cover" src="/assets/black-joggers.png"/>
        <motion.div variants={joggersSectionContentVariants} className="text-center">
          <h2 className="text-3xl font-bold mb-2">JW Joggers</h2>
          <p className="md:min-w-100 md:w-[30vw] mb-2 md:px-0 px-6 ">
            The perfect balance of loungewear comfort and streetwear style. Designed for slow mornings, long travels, and cozy weekends.
          </p>
          <a className="bg-black text-white p-4 block w-fit mx-auto" href="/joggers">Explore Collection</a>
        </motion.div>
      </div>
    </motion.section>
  )
}

function ModelsSection() {
  return (
    <motion.section 
      initial={{opacity: 0.4, translateY: "10%"}}
      whileInView={{opacity: 1, translateY: "0", transition: {duration: 0.3, ease: "easeInOut"}}}
      viewport={{once: true, amount: 0.4}}
      className="sm:w-[80vw] w-[90vw] mx-auto relative sm:my-10 pt-12 my-5"
    >
      {/* <div></div> */}
      {/* <h3 className="font-stanlinist w-full text-center z-10 absolute top-6 text-gray-400 md:text-8xl sm:text-7xl max-sm:text-5xl">JIGGY WACKO</h3> */}
      <h3 className="font-bold w-full text-center md:text-6xl sm:text-5xl max-sm:text-2xl">SHOW OFF YOUR PERSONAL STYLE</h3>
      <p className="text-center text-gray-600 lg:w-[50vw] zm:w-[70vw] w-[90vw] mx-auto sm:mt-4 mt-2">
        We've got a wide range of unique designs such that anybody can find something that fits their aesthetic. So Whatever your style might be, We've got you!
      </p>
      <div className="relative z-20 flex justify-between items-end sm:mt-10 mt-5">
        <img className="xl:w-60 w-35 h-auto" src="/assets/model-5.png"/>
        <img className="xl:w-60 w-35 h-auto md:block hidden" src="/assets/model-2.png"/>
        <img className="xl:w-60 w-35 h-auto" src="/assets/model-4.png"/>
        <img className="xl:w-60 w-35 h-auto sm:block hidden" src="/assets/model-1.png"/>
        <img className="xl:w-60 w-35 h-auto md:block hidden" src="/assets/model-6.png"/>
      </div>
    </motion.section>
  )
}

const footerSectionAnimation: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    }
  }
}

const footerTextAnimations: Variants = {
  hidden: {
    opacity: 0,
    translateY: "40%",
  },
  visible: {
    translateY: "0%",
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.3,
      ease: "easeInOut"
    }
  }
}

const instagramLinkAnimation: Variants = {
  hidden: {
    scale: 0.5
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
}

function Catalog() {
  return (
    <motion.footer className="relative" initial="hidden" whileInView="visible" variants={footerSectionAnimation} viewport={{once: true}}>
      <img className="w-full h-full object-cover absolute inset-0 z-10" src="/assets/clothes.jpg"/>
      <div className="bg-neutral-700/50 absolute inset-0 z-10"/>
      <div className="sm:w-[80vw] w-[90vw] mx-auto relative z-20 py-8">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={footerTextAnimations}
          viewport={{once: true}}
          className="text-white text-center sm:text-5xl text-3xl font-bold mb-4"
        >
          EXPLORE OUR FASHION CATALOG
        </motion.h1>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          variants={footerTextAnimations}
          viewport={{once: true}}
          className="text-gray-100 sm:text-lg text-center mb-6"
        >
          Browse through our fashion Catalog to find a wide range of stylish clothing options.<br/>
          From classic looks to the latest Trends, There's something for everyone.
        </motion.p>
        <motion.a
          initial="hidden"
          whileInView="visible"
          variants={instagramLinkAnimation}
          viewport={{once: true}}
          href="https://www.instagram.com/jiggywack"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-center rounded-3xl border border-white flex gap-2 items-center w-fit mx-auto text-white p-2 backdrop-blur-sm font-medium mb-8"
        >
          <span>SEE OUR INSTAGRAM</span> <ArrowUpRight size={20}/>
        </motion.a>
        <div className="bg-white flex md:flex-nowrap flex-wrap md:justify-between gap-4 text-neutral-500 bg-white rounded-lg md:px-8 md:pt-8 px-4 pt-4 md:pb-20 pb-8">
          <div className="max-md:w-[40%] max-sm:w-[45%] shrink-0">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={footerTextAnimations}
              viewport={{once: true}}
              className="md:text-lg font-bold mb-2 text-black"
            >
              GENERAL
            </motion.h2>
            <ul>
              <motion.li 
                initial="hidden"
                whileInView="visible"
                variants={footerTextAnimations}
                viewport={{once: true}}
              >
                <a href="">About Us</a></motion.li>
              <motion.li 
                initial="hidden"
                whileInView="visible"
                variants={footerTextAnimations}
                viewport={{once: true}}
              >
                <a href="">Contact Us</a>
              </motion.li>
            </ul>
          </div>
          <div className="max-md:w-[40%] max-sm:w-[45%] shrink-0">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              variants={footerTextAnimations}
              viewport={{once: true}}
              className="md:text-lg font-bold mb-2 text-black"
            >
              CUSTOMER SERVICE
            </motion.h2>
            <ul>
              <motion.li initial="hidden" whileInView="visible" variants={footerTextAnimations} viewport={{once: true}}>
                <a href="">Privacy Policy</a>
              </motion.li>
              <motion.li initial="hidden" whileInView="visible" variants={footerTextAnimations} viewport={{once: true}}>
                <a href="">Terms of Service</a>
              </motion.li>
            </ul>
          </div>
          <div className="max-md:w-[40%] max-sm:w-[45%] shrink-0">
            <motion.h2 initial="hidden" whileInView="visible" variants={footerTextAnimations} viewport={{once: true}} 
              className="md:text-lg font-bold mb-2 text-black"
            >
              SOCIAL MEDIA
            </motion.h2>
            <ul>
              <motion.li initial="hidden" whileInView="visible" variants={footerTextAnimations} viewport={{once: true}}><a href="">Instagram</a></motion.li>
              <motion.li initial="hidden" whileInView="visible" variants={footerTextAnimations} viewport={{once: true}}><a href="">X</a></motion.li>
              <motion.li initial="hidden" whileInView="visible" variants={footerTextAnimations} viewport={{once: true}}><a href="">Tiktok</a></motion.li>
              <motion.li initial="hidden" whileInView="visible" variants={footerTextAnimations} viewport={{once: true}}><a href="">Snapchat</a></motion.li>
            </ul>
          </div>
          <div className="max-md:w-[40%] max-sm:w-[45%] shrink-0">
            <motion.h2 initial="hidden" whileInView="visible" variants={footerTextAnimations} className="text-lg font-bold mb-2 text-black">PRODUCTS</motion.h2>
            <ul>
              <motion.li initial="hidden" whileInView="visible" variants={footerTextAnimations} viewport={{once: true}}><a href="">Jerseys</a></motion.li>
              <motion.li initial="hidden" whileInView="visible" variants={footerTextAnimations} viewport={{once: true}}><a href="">Tees</a></motion.li>
              <motion.li initial="hidden" whileInView="visible" variants={footerTextAnimations} viewport={{once: true}}><a href="">Joggers</a></motion.li>
              <motion.li initial="hidden" whileInView="visible" variants={footerTextAnimations} viewport={{once: true}}><a href="">Jeans</a></motion.li>
              <motion.li initial="hidden" whileInView="visible" variants={footerTextAnimations} viewport={{once: true}}><a href="">Caps</a></motion.li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}


const heroSectionAnimationVariants: Variants = {
  hidden: {

  },
  visible: {
    transition: {
      // delay: 0.5,
      when: "beforeChildren",
      delayChildren: stagger(0.3)
    }
  }
}



const heroImgAnimationVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
    }
  }
}

const heroTextAnimationVariants: Variants = {
  hidden: {
    opacity: 0,
    translateY: "50%"
  },
  visible: {
    opacity: 1,
    translateY: "0%",
    transition: {
      delay: 0.5,
      ease: "easeInOut",
      duration: 0.5,
    }
  }
}

const newArrivalsVariants: Variants = {
  hidden: {
    opacity: 0, 
    translateY: "20%"
  },
  visible : {
    opacity: 1,
    translateY: "0",
    transition: {
      ease: "easeInOut", duration: 0.5
    }
  }
}

export default function LandingPage() {			
  const newArrivals: NewProductData[] = [
    {
      id: "t6MFV", 
      description: "This is the peak of clothing right here. Trending casual wear that gets everyone looking", 
      name: `JW SLICK 💋 WEARS`,
      price: 20000,
      imgUrl: "/assets/vest-1.jpg"
    },
    {
      id: "iWoR3",
      description: "This is the peak of clothing right here. Trending casual wear that gets everyone looking",
      name: `JW Smiley head Tees`,
      price: 20000, 
      imgUrl: "/assets/smiley-tee.jpg"
    },
    {
      id: "IoNcz",
      description: "This is the peak of clothing right here. Trending casual wear that gets everyone looking",
      name: `JW Don't Care tees`,
      price: 20000,
      imgUrl: "/assets/jw-dc-tees.jpg"
    },
    {
      id: "FpAtK",
      description: "This is the peak of clothing right here. Trending casual wear that gets everyone looking",
      name: `JW BLAC SLIM Joggers`, 
      price: 20000, 
      imgUrl: "/assets/black-joggers.jpg"
    },
    {
      id: "WupMq", 
      description: "This is the peak of clothing right here. Trending casual wear that gets everyone looking", 
      name: `JW x RJ BLAC JERSEY`, 
      price: 20000, 
      imgUrl: "/assets/jersey-8.jpg"
    },
    {
      id: "ByBJW", 
      description: "This is the peak of clothing right here. Trending casual wear that gets everyone looking", 
      name: `JW REAL SHI TEES`, 
      price: 20000,
      imgUrl: "/assets/real-shi-tee.jpg"
    }
  ]

  return (<>
    <motion.section variants={heroSectionAnimationVariants} initial="hidden" animate="visible" className="relative mb-60">
      <section className="bg-black xl:h-screen xl:pt-0 xl:pb-0 px-px pt-20 pb-40">
        <motion.div 
          className="flex xl:flex-row flex-col sm:w-[80vw] w-[90vw] h-full mx-auto items-center gap-4" 
          variants={heroImgAnimationVariants}
        >
          <div className="xl:w-[40%] xl:order-1 order-2 xl:text-left text-center sm:w-150">
            <motion.h1
              className="text-white lg:text-4xl text-2xl mb-2 font-semibold"
              variants={heroTextAnimationVariants}
            >
              StreetWear Clothing Brand
            </motion.h1>
            <motion.p
              className="text-neutral-300 lg:text-lg overflow-y-hidden block"
              variants={heroTextAnimationVariants}
            >
              Bold, Edgy, rebellious, playful and urban. A mix of graffiti, 90s hip-hop and underground street culture.
            </motion.p>
          </div>
          <img  src="/assets/hero.jpg" className="xl:w-[35%] sm:w-[50%] w-[70%] xl:order-2 order-1"/>
        </motion.div>
      </section>
      <div className="absolute sm:-bottom-50 -bottom-40 w-full">
        <motion.h2
          variants={heroTextAnimationVariants} 
          className="text-neutral-300 text-lg font-semibold md:w-[80vw] w-[90vw] mx-auto mb-1"
        >
            New Arrivals
        </motion.h2>
        <motion.ul
          className="flex items-start sm:w-[80vw] w-[90vw] mx-auto sm:gap-4 gap-2 overflow-x-auto h-fit"
          variants={newArrivalsVariants}
        >
          {newArrivals.map(cloth => (
            <li key={cloth.id} className="bg-linear-to-b shrink-0 from-neutral-400 to-neutral-100 p-2 rounded-lg sm:h-70 h-60 hover:shadow-gray-400 hover:shadow-sm cursor-pointer">
              <div className="overflow-hidden w-full rounded-lg">
                <img src={cloth.imgUrl} className="block hover:scale-125 duration-300 w-full sm:h-50 h-40 object-cover"/>
              </div>
              <h3 className="uppercase text-gray-700 mt-2">{cloth.name}</h3>
              <p className="text-gray-500 font-medium">₦{cloth.price.toLocaleString()}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
    <JerseySection/>
    <JoggersSection/>
    <ModelsSection/>
    <Catalog/>
  </>)
}

