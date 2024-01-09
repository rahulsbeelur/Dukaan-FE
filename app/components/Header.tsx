import Image from 'next/image';
import Help from '../../public/help.svg';
import Search from '../../public/search.svg';
import Menu from '../../public/menu.svg';
import MenuAccordian from '../../public/menu-accordian.svg';

const Header = () => {
    return (
        <div className="relative w-full flex gap-4 justify-between px-8 py-3 ">
            <div className="flex gap-4 h-fit my-auto w-[360px]">
                <div className="text-[#1A181E] font-[400] leading-[22px] text-[15px]">Payments</div>
                <div className="flex gap-[6px]">
                    <div className="my-auto">
                        <Image
                            width={100}
                            height={100}
                            className="w-[14px] h-[14px] text-[#FFFFFF]"
                            src={Help}
                            alt="wallet icon"
                        />
                    </div>
                    <div className="text-[#4D4D4D] font-[400] leading-4 text-[12px] my-auto">
                        How it works
                    </div>
                </div>
            </div>
            <div>
                <div className="px-4 py-[9px] bg-[#F2F2F2] rounded-[6px] gap-2 flex w-[400px]">
                    <div className="my-auto">
                        <Image
                            width={100}
                            height={100}
                            className="w-[14px] h-[14px] text-[#FFFFFF]"
                            src={Search}
                            alt="wallet icon"
                        />
                    </div>
                    <div className="text-[#808080] font-[400] leading-[22px] text-[15px]">
                        Search features, tutorials, etc.
                    </div>
                </div>
            </div>
            <div className="flex gap-3 w-[360px] justify-end">
                <div>
                    <Image
                        width={100}
                        height={100}
                        className="w-10 h-10"
                        src={Menu}
                        alt="menu icon"
                    />
                </div>
                <div>
                    <Image
                        width={100}
                        height={100}
                        className="w-10 h-10"
                        src={MenuAccordian}
                        alt="menu accordian icon"
                    />
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-[#D9D9D9]"></div>
        </div>
    );
};

export default Header;
