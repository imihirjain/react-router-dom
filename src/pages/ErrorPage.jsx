import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  if (error.status === 404) {
    return (
      <>
        <div className="h-screen w-screen flex justify-center items-center flex-col">
          <h1 className="font-semibold text-5xl text-red-400">
            {error.status} - {error.statusText}
          </h1>
          <button
            className="mt-4 px-4 py-2 bg-red-400 cursor-pointer rounded-lg"
            onClick={handleClick}
          >
            Go Back
          </button>
        </div>
      </>
    );
  }
};
