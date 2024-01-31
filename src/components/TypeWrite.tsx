import { useEffect } from "react";

type TypeWriterProps = {
    id: string;
    text: string;
    delay: number;
    shown: boolean;
    className?: string;
}

export const TypeWriter = (props: TypeWriterProps) => {

    let j = 0;

    function type() {
        const typewriter = document.getElementById(props.id);
        if (typewriter) {
            if (typewriter.textContent != props.text) {
                typewriter.textContent = props.text.substring(0, j + 1);
                j++;
                setTimeout(type, props.delay);
            }
        }
    }

    useEffect(() => {
        if (props.shown) type();
    }, [props.shown]);

    return (<p id={props.id} className={props.className} />)
}