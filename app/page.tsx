import Header from './components/Header';
import NavBar from './components/NavBar';
import OverView from './components/OverView';
import Transactions from './components/Transactions';
import Wrapper from './components/Wrapper';

export default function Home() {
    return (
        <Wrapper>
            <div className="flex">
                <div className="w-[224px] h-full">
                    <NavBar />
                </div>
                <div className="w-full">
                    <Header />
                    <div className="p-8 bg-[#FFFFFF] flex flex-col gap-8">
                        <OverView />
                        <Transactions />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
