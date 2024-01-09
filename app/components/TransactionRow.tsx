const TransactionRow = () => {
    return (
        <div className="relative w-full px-3 py-[14px] flex gap-10 justify-between">
            <div className="text-[#146EB4] font-[500] leading-5 text-[14px] w-[246px]">#281209</div>
            <div className="text-[#1A181E] font-[400] leading-5 text-[14px] w-[246px]">7 July, 2023</div>
            <div className="text-[#1A181E] font-[400] leading-5 text-[14px] w-[246px] text-end">₹1,278.23</div>
            <div className="text-[#1A181E] font-[400] leading-5 text-[14px] w-[246px] text-end">₹22</div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-[#E6E6E6]"></div>
        </div>
    );
}

export default TransactionRow;
