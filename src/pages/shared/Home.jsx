import React, { useEffect } from "react";
import { GiHospitalCross } from "react-icons/gi";
import { RxAccessibility } from "react-icons/rx";
import { FiTarget } from "react-icons/fi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";


const Home = () => {

    useEffect(() => {
        const scrollContainer = document.querySelector(".doctors");
        
        const handleWheel = (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        };
        
        scrollContainer.addEventListener("wheel", handleWheel);
        
        // Clean up the event listener on component unmount
        return () => {
            scrollContainer.removeEventListener("wheel", handleWheel);
        };
    }, []); // Empty dependency array ensures the effect runs only once
    return(
        <div className="flex flex-col align-center container mx-auto">
            <section className="hero">
                <div>
                    <h3 className="text-4xl font-bold my-5">Welcome to <br /> <span> NHS Lanarkshire</span></h3>
                </div>
                <img className="max-w-[100%] rounded-[45px] my-5" src="https://png.pngtree.com/illustrations/20190321/ourlarge/pngtree-hospital-doctors-patient-cartoon-png-image_32768.jpg" alt="A background image of a dr and a patient" />
            </section>
            

            <section className="about bg-teal-700 rounded-[45px] p-3 text-white text-[20px]">
                <div className="flex items-center justify-center flex-col">
                <GiHospitalCross size="42" className="mb-2"/>
                    <h4 className="text-center">Our app is designed to provide you with convenient access <br />
                        to the services and information you need from NHS Lanarkshire. <br />
                        Whether you're a patient or visitor, our app is here to support <br />
                        you every step of the way.
                    </h4>
                    
                    <div className="flex gap-10 my-4 p-4">
                        <div className="card-1 flex flex-col items-center">
                        <RxAccessibility size="40"/>
                            <h4 className="text-bold text-2xl">Accessibility</h4>
                            <p className="text-[16px] max-w-[275px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias laboriosam distinctio deleniti ipsam quos commodi, facere velit similique quisquam porro amet repudiandae minus sapiente.</p>
                        </div>
                        <div  className="flex flex-col items-center">
                        <FiTarget size="40"/>
                            <h4 className="text-bold text-2xl">Accuracy</h4>
                            <p className="text-[16px] max-w-[275px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias laboriosam distinctio deleniti ipsam quos commodi, facere velit similique quisquam porro amet repudiandae minus sapiente.</p>
                        </div>
                        <div className="card-3 flex flex-col items-center">
                        <MdOutlinePrivacyTip size="40"/>
                            <h4 className="text-bold text-2xl">Privacy</h4>
                            <p className="text-[16px] max-w-[275px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias laboriosam distinctio deleniti ipsam quos commodi, facere velit similique quisquam porro amet repudiandae minus sapiente.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="doctors mt-5 overflow-hidden">
                {/* <h3 className="font-bold text-2xl mb-3">Meet your Doctors</h3> */}
                <div className="flex gap-5">
                <div className="target min-w-[250px] min-h-[275px] rounded border bg-white">
                    <img className="max-w-[100%] rounded-t-lg" src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h4 className="font-bold text-[20px] pt-2 px-2">Dr John Doe</h4>
                    <p className="text-[16px] px-2 text-neutral-400">MDRC, BMC, RDCD, Anaesthetist</p>
                    <div className="flex px-2">
                    <IoStarSharp color="yellow" />
                    <IoStarSharp color="yellow"/>
                    <IoStarSharp color="yellow"/>
                    <IoStarSharp />
                    </div>
                </div>
                <div className="target min-w-[250px] min-h-[275px] rounded border bg-white">
                    <img className="max-w-[100%] rounded-t-lg" src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h4 className="font-bold text-[20px] pt-2 px-2">Dr John Doe</h4>
                    <p className="text-[16px] px-2 text-neutral-400">MDRC, BMC, RDCD, Anaesthetist</p>
                    <div className="flex px-2">
                    <IoStarSharp color="yellow" />
                    <IoStarSharp color="yellow"/>
                    <IoStarSharp color="yellow"/>
                    <IoStarSharp />
                    </div>
                </div>
                <div className="target min-w-[250px] min-h-[275px] rounded border bg-white">
                    <img className="max-w-[100%] rounded-t-lg" src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h4 className="font-bold text-[20px] pt-2 px-2">Dr John Doe</h4>
                    <p className="text-[16px] px-2 text-neutral-400">MDRC, BMC, RDCD, Anaesthetist</p>
                    <div className="flex px-2">
                    <IoStarSharp color="yellow" />
                    <IoStarSharp color="yellow"/>
                    <IoStarSharp color="yellow"/>
                    <IoStarSharp />
                    </div>
                </div>
                <div className="target min-w-[250px] min-h-[275px] rounded border bg-white">
                    <img className="max-w-[100%] rounded-t-lg" src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h4 className="font-bold text-[20px] pt-2 px-2">Dr John Doe</h4>
                    <p className="text-[16px] px-2 text-neutral-400">MDRC, BMC, RDCD, Anaesthetist</p>
                    <div className="flex px-2">
                    <IoStarSharp color="yellow" />
                    <IoStarSharp color="yellow"/>
                    <IoStarSharp color="yellow"/>
                    <IoStarSharp />
                    </div>
                </div>
                <div className="target min-w-[250px] min-h-[275px] rounded border bg-white">
                    <img className="max-w-[100%] rounded-t-lg" src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h4 className="font-bold text-[20px] pt-2 px-2">Dr John Doe</h4>
                    <p className="text-[16px] px-2 text-neutral-400">MDRC, BMC, RDCD, Anaesthetist</p>
                    <div className="flex px-2">
                    <IoStarSharp color="yellow" />
                    <IoStarSharp color="yellow"/>
                    <IoStarSharp color="yellow"/>
                    <IoStarSharp />
                    </div>
                </div>
                </div>
            </section>
            

        </div>

        
    )
}



export default Home;