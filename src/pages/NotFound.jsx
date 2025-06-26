import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-6xl mb-4">🚫</div>
      <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-muted-foreground mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
};
