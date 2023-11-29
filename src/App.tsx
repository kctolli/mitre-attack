import Common from './common/main';
import routes from "./routes";

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The rendered application component.
 */
export default function App(): JSX.Element {
    /**
     * Renders the footer component.
     *
     * @returns {JSX.Element} The JSX element representing the footer.
     */
    const Footer = (): JSX.Element => (
        <footer>
            <br /><hr />
            &copy; {Common.year} Kyle Tolliver - <a href="/">Security Attack</a>
            <br /> 
            All rights reserved - <Common.BlankATag 
                link="https://attack.mitre.org" 
                text="MITRE ATT&CK" 
            />
        </footer>
    );

    return (
        <Common.StrictMode>
            <Common.Suspense fallback={<h2>Loading...</h2>}>
                <Common.BrowserRouter>
                    <Common.Routes>
                        {routes.map(route => (
                            <Common.Route 
                                key={route?.path} 
                                path={route?.path} 
                                element={route?.element} 
                            />
                        ))}
                    </Common.Routes>
                </Common.BrowserRouter>
            </Common.Suspense>
            <Footer />
        </Common.StrictMode>
    );
}
