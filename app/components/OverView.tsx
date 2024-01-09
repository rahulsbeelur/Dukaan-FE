import Image from 'next/image';
import Chevron from '../../public/chevron-menu.svg';
import OverViewCard from './OverViewCard';

const OverView = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between w-full">
                <div className="text-[#1A181E] font-[500] leading-[28px] text-[20px] my-auto">
                    Overview
                </div>
                <div className="py-[6px] px-[14px] p outline outline-[1px] outline-[#D9D9D9] rounded flex gap-[7px]">
                    <div className="text-[#4D4D4D] font-[400] leading-[24px] text-[16px]">
                        Last Month
                    </div>
                    <Image
                        width={100}
                        height={100}
                        className="w-4 h-4 my-auto"
                        src={Chevron}
                        alt="chevron down"
                    />
                </div>
            </div>
            <div className="flex gap-5">
                <OverViewCard heading="Online orders" number="231" />
                <OverViewCard heading="Amount received" number="₹23,92,312.19" />
            </div>
        </div>
    );
};

export default OverView;
