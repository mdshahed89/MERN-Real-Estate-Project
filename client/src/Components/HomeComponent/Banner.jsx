import { useEffect, useState } from "react";

export const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [{img: "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Where Tranquility Meets Modern Luxury", des: "Escape to a sanctuary of calm amidst stunning landscapes, offering contemporary elegance and unparalleled comfort.",}, {img: "https://images.unsplash.com/photo-1602497485099-e41a116a272c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Discover Stylish Living in the Heart of the City", des: "Experience vibrant city living in chic urban condos, blending modern sophistication with the pulse of downtown energy.",}, {img: "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Embrace Luxury Beachfront Living at Its Finest", des: "Indulge in coastal paradise with luxurious beachfront residences offering breathtaking views and unrivaled seaside charm.",}, {img: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Timeless Beauty and Refined Luxury Living",des: "Step into a world of timeless elegance, where classic charm meets contemporary sophistication in every meticulously crafted detail.",}, {img: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Find Harmony in Serene Natural Surroundings", des: "Discover your dream home nestled amidst tranquil landscapes, offering serenity, seclusion, and the perfect blend of nature and luxury.",},];
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
        <>
            <div className=" rounded-lg w-full relative h-96 md:h-[80vh] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:rounded-md before:absolute  before:inset-0 before:bg-black/30 transform object-cover duration-1000 ease-linear"
                style={{ backgroundImage: `url(${sliders[currentSlider].img}) `, }}>
                {/* text container here */}
                <div className=" text-white text-center z-50 px-5 max-w-[700px] ">
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
                    <p className="text-sm md:text-base">{sliders[currentSlider].des}</p>
                </div>
            {/* slider container */}
            <div className="flex justify-center absolute bottom-0 items-center gap-3 p-2">
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <img onClick={() => setCurrentSlider(inx)} key={inx}
                        src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 opacity-60 bg-black/20 ${currentSlider === inx ? 'opacity-100' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                        alt={slide.title}/>
                ))}
            </div>
            </div>
        </>
  )};
