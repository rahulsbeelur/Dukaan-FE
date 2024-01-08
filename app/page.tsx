import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";

export default function Home() {
    return (
        <Wrapper>
            <div className="w-[224px] h-full">
                <NavBar />
            </div>
        </Wrapper>
    );
}
