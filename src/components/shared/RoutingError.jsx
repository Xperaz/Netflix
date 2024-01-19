import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <h1 className="font-bold text-[2em]">Oops!</h1>
      <p className="font-medium text-[1.2em]">Sorry, an unexpected error has occurred.</p>
      <p className="font-medium text-[1.2em]">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}