import dynamic from "next/dynamic";
import { memo } from "react";

import steps from "./data/index";

/**
 * Renders the Home component.
 * Dependent on React.memo
 *
 * @return {JSX.Element} The JSX element representing the Home component.
 */
const Home = (): JSX.Element => {
    const Steps = dynamic(() => import('./Steps'));
    const NextStep = dynamic(() => import('./NextStep'));
    const BlankATag = dynamic(() => import('./BlankATag'));
    const AdditionalInfo = dynamic(() => import('./AdditionalInfo'));

    const next = {
        link: "/reconnaissance",
        text: "Let's Get Started",
    }

    return (
        <section>
            <h2>Introduction</h2>
            <p>This site is a walk through that gives a step by step checklist of the <BlankATag link="https://attack.mitre.org/" text="MITRE ATT&CK" /> framework.</p>
            <article>
                <h3>Overview</h3>
                <p>
                    MITRE ATT&CK® is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. 
                    The ATT&CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.
                </p>
                <Steps steps={steps} />
            </article>
            <AdditionalInfo />
            <NextStep next={next}/>
        </section>
    );
}

export default memo(Home);
