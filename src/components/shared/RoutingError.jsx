import { useRouteError } from "react-router-dom"


const RoutingError = () => {
    const error = useRouteError();
  return (
    <div>
        <h1>Ooops!</h1>
        <p>error: {error.message || error.statusText}</p>
    </div>
  )
}

export default RoutingError