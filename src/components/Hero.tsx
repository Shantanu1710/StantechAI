import Image from "next/image"
export default function TopBanner() {
    return (
        <>
            <section className=" relative overflow-hidden ">
                <div className="absolute top-0  aspect-square w-full h-[100vh] overflow-hidden -z-10">
                    <Image src={'/a.jpg'} fill={true} objectFit="cover" alt="Stantech AI" />
                </div>
                <div className="container mx-auto   ">
                    <div className="flex flex-col md:w-[60%] xl:w-[40%] xl:ml-28    max-md:items-center justify-center h-[70vh]">
                        <h1 className="text-white text-[34px] sm:text-[50px] lg:text-[64px] font-poppins mb-2.5 font-semibold lg:font-bold max-md:text-center  z-20 ">We are at the forefront of AI</h1>
                        <p className="max-lg:hidden lg:my-5 text-[19.2px] font-poppins text-white  ">From Conserving Wildlife to Automatically Generating Caricatures– <span className="font-bold"> We Do It All</span></p>
                        <div>
                            <button className="bg-secondary  rounded-[10px] my-2.5 text-white py-[0.6rem] px-8 text-lg font-poppins">Learn More</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}