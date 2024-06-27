import App from "./App/App.jsx"
import ErrorPage from "./Error/Error.jsx";

const routes = [
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]

export default routes;