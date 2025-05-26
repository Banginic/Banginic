const ErrorFallback = ({ error }) => (
  <div
    style={{ textAlign: "center", padding: "2rem" }}
    className="h-screen grid place-items-center"
  >
    <div>
      <h2>Oops! Something went wrong.</h2>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      <button onClick={() => window.location.reload()}>Reload Page</button>
    </div>
  </div>
);

export default ErrorFallback;
