import { Link } from "react-router-dom";
import Waves from "./Waves";

export const Footer = () => {
	return (
    <footer id="#footer" className="relative w-full min-h-[100px] px-5 pt-10 pb-20 flex justify-center items-center flex-col">       
        <div className="relative flex flex-col gap-4 justify-center items-center mx-3 flex-wrap z-[1000]">
            <ul className="flex gap-4 p-3 border-dashed border-2 border-bgBlack">
                <li className="list-none transition-all hover:-translate-y-2">
                    <Link to="https://github.com/CisorM" target="_blank" rel="noopener noreferrer">
                        <img src="svgs/github.svg" alt="My Github" />
                    </Link>
                </li>
                <li className="list-none transition-all hover:-translate-y-2">
                    <Link to="https://www.linkedin.com/in/cesarmartinez-dev/" target="_blank" rel="noopener noreferrer">
                        <img src="svgs/linkedn.svg" alt="My LinkedIn" />
                    </Link>
                </li>
                <li className="list-none transition-all hover:-translate-y-2">
                    <Link to="mailto:cmmh200427@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="svgs/gmail.svg" alt="My Gmail" />
                    </Link>
                </li>
            </ul>
            <p className="text-lg p-2 border-dashed border-2 border-bgBlack">2024 | Made by César Martínez</p>
        </div>
        <Waves />
    </footer> 
    );
};