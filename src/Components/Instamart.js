import React from "react";
import { useState } from "react";

const Section = ({ title, description,isVisible ,setIsVisible}) => {
 

  return (
    <div className=" border border-violet-300 bg-gray p-3 m-2">
      <h1 className="font-bold text-xl">{title}</h1>
{isVisible? <button
        className="border border-gray-400 m-3 p-1"
        onClick={() => setIsVisible(false)}
      >
        hide
      </button>:<button
        className="border border-gray-400 m-3 p-1"
        onClick={() => setIsVisible(true)}
      >
        show
      </button>}
      
     
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
    const [visibleSection,setVisibleSection]=useState("about")
  return (
    <>
      <h1 className="text-3xl p-2 m-1 font-bold">instamart</h1>
      <Section
        title={"about instramart"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae atque quisquam reiciendis ratione vel cum obcaecati, voluptatem ipsum rerum animi laboriosam facilis minima non laborum similique itaque perspiciatis voluptates fugiat quasi veritatis corporis molestiae ullam odit? Consequuntur at eos omnis quam ea blanditiis tempora ipsam corrupti? Eaque, quis quia?"}
        isVisible={visibleSection=="about"}
        setIsVisible={()=>setVisibleSection("about")}
      />
      <Section
        title={"Team instramart"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae atque quisquam reiciendis ratione vel cum obcaecati, voluptatem ipsum rerum animi laboriosam facilis minima non laborum similique itaque perspiciatis voluptates fugiat quasi veritatis corporis molestiae ullam odit? Consequuntur at eos omnis quam ea blanditiis tempora ipsam corrupti? Eaque, quis quia?"}
        isVisible={visibleSection=="Team"}
        setIsVisible={()=>setVisibleSection("Team")}
      />
       <Section
        title={"carrier instramart"}
        description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta neque vitae totam pariatur officia fugiat obcaecati laboriosam hic quae reiciendis quis placeat ipsa, officiis nihil corporis voluptates, itaque sint. Animi sit iusto fugiat voluptatibus praesentium tempora necessitatibus sint ullam corporis, harum nobis ratione quam placeat suscipit, mollitia sapiente dolores rerum adipisci ipsum optio tenetur iure! Ullam nulla pariatur vitae! Odit animi tempora quos cumque, minima soluta, magni quas culpa veniam consectetur rem commodi, illum incidunt excepturi suscipit adipisci blanditiis? Dolor dicta assumenda veritatis reprehenderit quo ipsum necessitatibus est dolorum at eligendi ad veniam, porro quibusdam ipsam rerum, velit tempora earum."}
        isVisible={visibleSection=="carrier"}
        setIsVisible={()=>setVisibleSection("carrier")}
      />
    </>
  );
};
export default Instamart;
