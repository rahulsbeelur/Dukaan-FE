const OverViewCard = ({ heading, number }: { heading: string; number: string }) => {
    return (
        <div className="w-[566px] bg-[#FFFFF] p-5 flex flex-col gap-4 rounded-[8px]">
            <div className="text-[#4D4D4D] font-[400] leading-[24px] text-[16px] w-fit">
                {heading}
            </div>
            <div className="text-[#1A181E] font-[500] leading-[38px] text-[32px] w-fit">
                {number}
            </div>
        </div>
    );
};

export default OverViewCard;
