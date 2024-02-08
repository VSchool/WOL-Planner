import { useState } from "react"
// import { Link } from "react-router-dom";
import { AuthLayout } from '../../components/authlayout/AuthLayout';
import hamburger_menu from '../../images/dash/hamburger_menu.svg'
import hankHill from '../../images/dash/Hank_Hill.webp'
import image103 from '../../images/logos/loginGroup103.svg'
import HamburgerNav from "../../components/hamburger-nav/HamburgerNav";
import './dashboard.css'



export const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (

        <AuthLayout className="">
            {!isOpen ? (
                <div
                    id="HomePageDashboardRoot"
                    className=" md:w-834 md:h-1192 bg-white flex flex-col justify-between gap-[112px] w-full font-['Sofia_Pro'] items-start pt-3 pb-16 px-6 rounded-[40px]"
                >
                    <div className="flex flex-col justify-between gap-16 w-full font-['FONTSPRING_DEMO_-_Capitana_Medium'] items-start ">
                        <div className="flex flex-col gap-8 w-2/3 h-24 items-start">
                            <img
                                src={image103}
                                alt="top_image"
                                className="ml-[109px] md:invisible"
                            />

                            <div className="flex md:w-fit-content md:h-fit-content flex-row justify-between w-4/5 items-start">

                                <button onClick={() => setIsOpen(!isOpen)}>
                                    <img
                                        src={hamburger_menu}
                                        alt="HamburgerMenu"
                                        id="HamburgerMenu"
                                    />
                                </button>
                                <img
                                    src={hankHill}
                                    alt="Frame2"
                                    className="w-8 rounded-xl"
                                />
                            </div>


                        </div>
                        <div id="hello" className="text-4xl ml-20">Hi, Bsmith</div>
                        <div className="flex flex-col gap-16 w-full font-['Sofia_Pro'] items-start">
                            <div className="flex flex-col ml-20 gap-6 w-1/2 items-start">
                                <div className="text-5xl font-bold">###.##</div>
                                <div className="text-4xl font-light ml-4">Net worth</div>
                            </div>
                            <div className="flex flex-col gap-8 w-full items-start">
                                <button
                                    id="DailyCashFlowBTN"
                                    className="text-xl hover:font-mono font-bold text-white bg-[#148cfb] flex flex-row justify-center pt-4 w-full h-12 cursor-pointer items-start rounded-[100px]"
                                >
                                    Cash Flow
                                </button>
                                <button
                                    id="AssetTrackerBTN"
                                    className="text-xl hover:font-mono font-bold text-white bg-[#148cfb] flex flex-row justify-center pt-4 w-full h-12 cursor-pointer items-start rounded-[100px]"
                                >
                                    Balance Sheet
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="font-bold border-solid flex flex-row ml-24 w-2/5 h-10 items-start pt-2 px-2 border-black border-2 rounded-[20px]">
                        First Time User ?
                    </div>

                </div>

            ) :
                (
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <HamburgerNav />
                    </div>
                )

            }
        </AuthLayout>

    )
}
