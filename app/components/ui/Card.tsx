import { ReactNode } from "react";

type props = {
    title: string;
    children: ReactNode;
}
export const Card = ({title, children}: props) => {

    return (
        <div className="border rounded-3xl border-white m-4 p-4 w-full h-auto">
            <div className="flex flex-col text-white">
                <h1 className="text-3xl">{title}</h1>
                <br className="border border-white h-1" />
            </div>
            {children}
        </div>
    )
}