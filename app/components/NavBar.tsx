import Image from 'next/image';
import StoreIcon from '../../public/store-icon.png';
import Chevron from '../../public/chevron.svg';
import NavButton from './NavButton';
import Wallet from '../../public/wallet.svg';

const NavBar = () => {
    return (
        <div className="bg-nav-bar-background-color h-full px-[10px] py-[16px] flex flex-col gap-4">
            <div className="flex flex-col gap-6">
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
            <div className="flex justify-center w-[192px] mx-auto">
                <div className="bg-[#353C53] flex gap-3 px-3 py-[6px] rounded w-full">
                    <div className="p-[6px] bg-[#FFFFFF1A] rounded h-[36px] my-auto">
                        <div className="text-[#FFFFFF] fill-current text-white h-full flex justify-center">
                            <Image
                                width={100}
                                height={100}
                                className="w-6 h-6 text-[#FFFFFF] my-auto"
                                src={Wallet}
                                alt="wallet icon"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[2px]">
                        <div className="text-[#FFFFFF] font-[400] leading-4 opacity-[80%] text-[13px]">
                            Available credits
                        </div>
                        <div className="text-[#FFFFFF] font-[500] leading-6 text-[16px]">
                            222.10
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
