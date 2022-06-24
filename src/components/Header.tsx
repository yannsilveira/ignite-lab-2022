import { ArrowLeft } from "phosphor-react";
import { Logo } from "./Logo";

export function Header() {
    return (
        <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
            <a href="/" className="text-green-600 absolute left-10 hover:bg-green-600 rounded-3xl hover:text-white transition-colors">
                <ArrowLeft size={30} />
            </a>
            <Logo />
        </header>
    );
}