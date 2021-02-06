import React from "react";
import { useStep } from "react-hooks-helper";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import ForthStep from "./ForthStep";
import Review from "./Review";


const steps = [
    { id: "first" },
    { id: "second" },
    { id: "third" },
    { id: "forth" },
    { id: "review" },
    { id: "submit" },

];

export const Form = () => {
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    const props = {navigation};

    // eslint-disable-next-line default-case
    switch (step.id) {
        case "first":
            return <FirstStep {...props} />;
        case "second":
            return <SecondStep {...props} />;
        case "third":
            return <ThirdStep {...props} />;
        case "forth":
            return <ForthStep {...props} />;
        case "review":
            return <Review {...props} />;
    }

    return (
        <div>
            <h1>Multi step form</h1>
        </div>
    );
};

export default Form;


