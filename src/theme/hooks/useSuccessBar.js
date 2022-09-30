import { useRef, useState } from "react"

const useSuccessBar = () => {
    const formRef = useRef();
    const [isVisible, setIsVisble] = useState(false);

    const showSuccessBar = () => {
        const { children } = formRef.current;

        console.log(children);
        setIsVisble(true)
    };

    const hideSucessBar = () => setIsVisble(false);


    return { formRef,isVisible, showSuccessBar, hideSucessBar }

}

export default useSuccessBar;