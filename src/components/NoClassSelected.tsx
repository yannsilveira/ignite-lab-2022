import { WarningOctagon } from "phosphor-react";


export function NoClassSelected() {
    return (
        <div className="flex flex-col items-center h-full w-full max-h-[900px] justify-center text-center">
            <WarningOctagon size={100} color="rgb(141, 141, 153)" />
            <span className="text-3xl text-gray-300 mt-10">Opss... Você ainda não escolheu uma aula</span>
            <p className="text-gray-300 text-1xl mt-5">Escolha uma das aula no menu de <strong className="text-green-600">Cronograma de aulas</strong> para começar a assitir</p>
        </div>
    );
}