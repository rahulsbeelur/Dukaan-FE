import Image from 'next/image';
import Search from '../../public/search.svg';
import TransactionRow from './TransactionRow';

const Transactions = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="font-[500] leading-[28px] text-[20px] w-fit">
                Transactions | This Month
            </div>
            <div className="p-3 pb-6 flex flex-col rounded-[8px] gap-3">
                <div className="px-4 py-[10px] rounded gap-2 flex w-[248px] outline outline-[1px] outline-[#D9D9D9]">
                    <div className="my-auto">
                        <Image
                            width={100}
                            height={100}
                            className="w-[14px] h-[14px]"
                            src={Search}
                            alt="search icon"
                        />
                    </div>
                    <div className="text-[#808080] font-[400] leading-[20px] text-[14px]">
                        Search by order ID...
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex bg-[#F2F2F2] gap-10 rounded py-[10px] px-3 justify-between'>
                        <div className='text-[#808080] font-[400] leading-[20px] text-[14px] w-[246px]'>Order ID</div>
                        <div className='text-[#808080] font-[400] leading-[20px] text-[14px] w-[246px]'>Order date</div>
                        <div className='text-[#808080] font-[400] leading-[20px] text-[14px] w-[246px] text-end'>Order amount</div>
                        <div className='text-[#808080] font-[400] leading-[20px] text-[14px] w-[246px] text-end'>Transaction fee</div>
                    </div>
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                    <TransactionRow />
                </div>
            </div>
        </div>
    );
};

export default Transactions;
