import Header from './components/Header';
import NavBar from './components/NavBar';
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
                </div>
            </div>
        </Wrapper>
    );
}
