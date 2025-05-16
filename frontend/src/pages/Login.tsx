import { FormEvent, useContext, useState } from "react";
import { Logo, useTitle } from "../conponents/exportComp";
import { apple_logo, google_logo } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { AppContext } from "../context/expContext";


function Login() {
  const appContext = useContext(AppContext);
  const [formState, setFormState] = useState("Login");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(" ");
  const [viewPassword, setViewPassword] = useState("password");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    rememberMe: false,
  });
  function clearForm() {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      rememberMe: false,
    });
  }
  useTitle({ title: formState });

  function toggleFormState() {
    if (formState === "Login") {
      setError("");
      setLoading(false);
      clearForm();
      return setFormState("Sign Up");
    }
    clearForm();
    setFormState("Login");
  }

  function togglePassword() {
    if (viewPassword === "password") return setViewPassword("text");
    return setViewPassword("password");
  }
  const passwordIcon =
    viewPassword === "password" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className="fill-gray-600"
      >
        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className="fill-gray-600"
      >
        <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
      </svg>
    );
  async function handlerFormSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      // SIGNIN
      if (formState === "Login") {
        const body = { email: formData.email, password: formData.password };
        const { data } = await axios.post(
          appContext?.baseUrl + "/api/auth/sign-in",
          body
        );
        const { success, message, user, token } = data;

        if (!success) {
          setError(message);
          setLoading(false);
          return clearForm();
        }
        toast.success(message);
        setLoading(false);
        localStorage.setItem("token", token);
        appContext?.setUser(user);
        return setTimeout(() => appContext?.navigate("/"), 1000);
      }

      // SIGNUP
      const { data } = await axios.post(
        appContext?.baseUrl + "/api/auth/sign-up",
        formData
      );
      const { success, message, user, token } = data;
      if (!success) {
        setError(message);
        setLoading(false);
        return clearForm();
      }
      toast.success(message);
      setLoading(false);
      localStorage.setItem("token", token);
      appContext?.setUser(user);
      return setTimeout(() => appContext?.navigate("/"), 1000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Unknown error", error);
      }
    }
  }
  return (
    <form
      onSubmit={handlerFormSubmit}
      className="bg-white dark:bg-black mb-8 p-8 rounded-lg s w-sm border border-gray-300 dark:border-gray-800 mx-auto shadow-lg"
    >
      <div className="text-start mb-5 ">
        <Logo logoSize="size-8" textSize="heading4" />
        <h1 className="font-bold ">Welcome to Logo</h1>
        <p className="text-sm text-gray-500">
          {formState} using the form below
        </p>
      </div>
      {formState !== "Login" && (
        <div className="mb-2">
          <label htmlFor="fullName" className="block text-start text-sm mb-1">
            Full Name{" "}
          </label>
          <div className="border rounded-full py-2 flex items-center px-3 gap-2 border-gray-400 dark:border-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="gray"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>{" "}
            <input
              type="text"
              placeholder="Full Name"
              required
              autoComplete="name"
              value={formData.fullName}
              minLength={3}
              maxLength={20}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="w-full bg-transparent outline-none border-none text-sm"
            />
          </div>
        </div>
      )}
      <div className="mb-2">
        <label htmlFor="email" className="block text-start text-sm mb-1">
          Email{" "}
        </label>
        <div className="border rounded-full py-2 flex items-center px-4 gap-2 border-gray-400 dark:border-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="gray"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
          <input
            type="text"
            placeholder="example@email.com"
            required
            autoComplete="email"
            minLength={9}
            maxLength={25}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full  bg-transparent outline-none border-none text-sm"
          />
        </div>
      </div>
      {formState !== "Login" && (
        <div className="mb-2">
          <label htmlFor="phone" className="block text-start text-sm mb-1">
            Phone{" "}
          </label>
          <div className="border rounded-full py-2 flex items-center px-4 gap-2 border-gray-400 dark:border-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="gray"
            >
              <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
            </svg>
            <input
              type="tell"
              placeholder="+1 234 2505 3400"
              required
              autoComplete="tell"
              minLength={9}
              maxLength={15}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full bg-transparent outline-none border-none text-sm"
            />
          </div>
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="password" className="block text-start text-sm mb-1">
          Password
        </label>
        <div className="relative border rounded-full py-2 flex items-center px-4 gap-2 border-gray-400 dark:border-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="gray"
          >
            <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
          </svg>
          <input
            type={viewPassword}
            placeholder="Password"
            required
            id="password"
            autoComplete="password"
            value={formData.password}
            minLength={8}
            maxLength={12}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full bg-transparent outline-none border-none text-sm"
          />
          <span
            onClick={togglePassword}
            className="absolute right-3 top-1 cursor-pointer "
          >
            {passwordIcon}
          </span>
        </div>
      </div>
      {formState === "Login" && (
        <div className="flex items-center font-medium text-xs  justify-between mb-4">
          <label
            htmlFor="rememberMe"
            className="cursor-pointer flex items-center gap-2"
          >
            <input
              type="checkbox"
              checked={formData.rememberMe}
              onChange={() =>
                setFormData({ ...formData, rememberMe: !formData.rememberMe })
              }
              id="rememberMe"
              className="cursor-pointer"
            />
            Remember me
          </label>
          <p className="text-indigo-700 hover:underline cursor-pointer">
            Forgot Password
          </p>
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full disabled:bg-accent/50 cursor-pointer bg-accent hover:opacity-80 text-white rounded-full py-2 text-sm mb-2"
      >
        {isLoading ? "Loding..." : formState}
      </button>
      <p className="text-sm text-red-500 font-medium text-center mb-2">
        {error}
      </p>
      <div className="flex items-center gap-3 mb-3 ">
        <hr className="border-0.5 border-gray-400 w-1/2 dark:border-gray-800" />
        <span className="text-xs">Or</span>
        <hr className="border-0.5 border-gray-400 w-1/2 dark:border-gray-800" />
      </div>
      {/* OAUTH */}
      <button
        type="button"
        className="text-xs flex items-center gap-2 justify-center font-medium w-full cursor-pointer rounded-full py-2 border mb-4 hover:border-black/10 hover:bg-black/10 border-gray-400 dark:border-gray-800"
      >
        <img src={google_logo} alt=" google logo" width={20} />
        Continue with Google
      </button>
      <button
        type="button"
        className="text-xs flex items-center gap-2 justify-center font-medium w-full cursor-pointer rounded-full py-2 border mb-4 hover:border-black/10  hover:bg-black/10 border-gray-400 dark:border-gray-800"
      >
        <img src={apple_logo} alt=" google logo" width={20} />
        Continue with Apple
      </button>

      {/* TOGGLE FORM STATE */}
      {formState === "Login" ? (
        <p
          onClick={toggleFormState}
          className="text-xs flex items-center justify-center gap-2 mt-2"
        >
          <span>Don't have an account?</span>
          <span className="text-indigo-700  text-sm font-medium cursor-pointer hover:text-indigo-900 hover:underline">
            Sign up
          </span>
        </p>
      ) : (
        <p
          onClick={toggleFormState}
          className="text-xs flex items-center justify-center gap-2 mt-2"
        >
          <span>Already have an account?</span>
          <span className="text-indigo-700   font-medium cursor-pointer hover:text-indigo-900 hover:underline">
            Login
          </span>
        </p>
      )}
    </form>
  );
}

export default Login;
