import { useState } from "react";
import Users from "./components/Users";
import { ToastContainer, toast, Bounce } from 'react-toastify';

const CreateAccountForm = () => {

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: ""

  })
  const [error, setError] = useState("")
  const [user, setUser] = useState([])


  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      setError("Password must be 8 characters long")
      return
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Password and Confirm password must be same")
      return
    }
    if (!/[@#$%&*?-_()+!~^]/.test(formData.password)) {
      setError("Password must have any special character")
      return
    }
    if (!/[A-Z]/.test(formData.password)) {
      setError("Password must have any Uppercase letter")
      return

    }

    setUser((prevUsers) => [...prevUsers, formData]);

    setFormData({
      fullname: "",
      email: "",
      password: "",
      confirmPassword: ""
    })

    setError("")



  }
  const notify = () => toast('Account created sucessfully !');


  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))



  }


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <div className="min-h-screen  items-center justify-center bg-gray-800 px-4 py-10 relative">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md absolute left-1/2 bottom-1/2 tranform -translate-x-[50%] translate-y-[50%]">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
          <form className="space-y-4"
            onSubmit={formSubmitHandler}
          >
            <div>
              <label className="block text-gray-700" htmlFor="fullname">Full Name</label>
              <input
                id="fullname"
                type="text"
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"

                name="fullname"
                value={formData.fullname}
                onChange={onChangeHandle}
              />
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
                name="email"
                value={formData.email}
                onChange={onChangeHandle}
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"

                name="password"
                value={formData.password}
                onChange={onChangeHandle}
              />
            </div>
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"

                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={onChangeHandle}
              />
            </div>

            {error && (
              <div>
                <span className="text-red-700 text-sm">{error}</span>
              </div>
            )}
            <button
              onClick={notify}

              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
            >
              Create Account
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account? <a href="#" className="text-blue-600 hover:underline">Log in</a>
          </p>
        </div>

      </div>
      <Users user={user} />

    </>
  );
};

export default CreateAccountForm;
