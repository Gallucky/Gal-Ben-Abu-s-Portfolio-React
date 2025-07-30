import { Route, Routes } from "react-router";
import Error from "../../pages/Error/Error.page";
import Main from "../../pages/Main/Main.page";

const RouteHandler = () => {
    return (
        <>
            <Routes>
                {/* Main Page */}
                <Route path="/" element={<Main />} />
                {/* Error Page */}
                <Route path="/*" element={<Error />} />
            </Routes>
        </>
    );
};

export default RouteHandler;
