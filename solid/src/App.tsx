// top level imports
import { ReactElement } from "react";

// React-Router
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Components
import { SRP } from "./components/principles/SRP";
import { OCP } from "./components/principles/OCP";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
        children: [
            { path: 'srp', element: <SRP /> },
            { path: 'ocp', element: <OCP /> }
        ]
    },
])

function App(): ReactElement {

    return (
        <RouterProvider router={router} />
    )
}

export default App;

