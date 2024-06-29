import App from "./App/App.jsx"
import ErrorPage from "./Error/Error.jsx";
import Page2 from "./Page2/Page2.jsx";

const routes = [
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    
  },
  {
    path: "page2/:year",
    element: <Page2 />
  }
]

export default routes;