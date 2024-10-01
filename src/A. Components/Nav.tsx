import { Link } from "react-router-dom";

export default function Nav() {
    const Logo: React.ReactNode = (
            <div className="flex items-center">
            <img className="mr-2 h-[45px]" src="/eye.svg" alt="Logo" />
            <p className="font-bold text-[20px]">P&P</p>
        </div>);

    return (
        <>
            <nav className="z-10 flex justify-around fixed backdrop-blur-lg w-screen h-[5em] items-center border-b-1 shadow-md border-black">
                <div>
                    {Logo}
                </div>

                <div className="">
                    <ul className="flex space-x-8">
                        {[
                            ['About Us', '/about'],
                            ['Join Us', '/team'],
                            ['Write', '/projects']
                        ].map(([title, url], index) => {
                            return (
                                <li
                                    key={index}
                                    className="text-xl font-bold transition-all duration-500">
                                    <Link to={url}>{title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <button className="border-solid border-[2px] p-2 text-white bg-slate-800 hover:shadow-[0px_3px_15px_rgba(0,0,0,0.5)] rounded-xl border-slate-700 
                     transition-all duration-500">Subscribe</button>

                </div>
            </nav>
        </>
    );
}
