import Image from 'next/image';
import StoreIcon from '../../public/store-icon.png';
import Chevron from '../../public/chevron.svg';
import NavButton from './NavButton';

const NavBar = () => {
    return (
        <div className="bg-nav-bar-background-color h-full px-[10px] py-[16px] flex flex-col gap-6">
            <div className="flex gap-3 mx-[6px]">
                <div className="w-10 h-10">
                    <Image
                        width={100}
                        height={100}
                        className="w-10 h-10 rounded"
                        src={StoreIcon}
                        alt="store icon"
                    />
                </div>
                <div className="w-[108px] h-[42px] flex flex-col gap-1">
                    <div className="w-full text-[#FFFFFF] font-[500] leading-[22px] text-[16px]">
                        Nishyan
                    </div>
                    <div className="w-full text-[#FFFFFF] font-[400] leading-4 opacity-[80%] text-[13px] underline underline-offset-2">
                        Visit store
                    </div>
                </div>
                <Image
                    width={100}
                    height={100}
                    className="w-5 h-5 my-auto ml-auto"
                    src={Chevron}
                    alt="chevron down"
                />
            </div>
            <div>
                <NavButton />
            </div>
        </div>
    );
};

export default NavBar;
