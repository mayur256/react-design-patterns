// top level imports
import { ReactElement } from "react";

// React-Router
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Components
import { SRP } from "./components/principles/SRP";
import { OCP } from "./components/principles/OCP";
import { LSP } from "./components/principles/LSP";
import { ISP } from "./components/principles/ISP";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
        children: [
            { path: 'srp', element: <SRP /> },
            { path: 'ocp', element: <OCP /> },
            { path: 'lsp', element: <LSP /> },
            { path: 'isp', element: <ISP /> }
        ]
    },
])

function App(): ReactElement {

    return (
        <RouterProvider router={router} />
    )
}

export default App;

