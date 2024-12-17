import Image from "next/image";

export default function BrandsLogo() {
    return (
        <section className="max-w-screen-xl mx-auto mt-16 px-4 sm:px-6 lg:px-8"> 
            <div className="flex justify-center items-center">
                <div className="w-full max-w-[500px] sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1400px]">
                    <Image 
                        src="/images/brandlogo.png" 
                        alt="brands" 
                        width={1000} 
                        height={1000} 
                        className="w-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
