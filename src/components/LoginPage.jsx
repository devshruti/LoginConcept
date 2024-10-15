import logo from '../assets/logo.svg';
import Login from './Login';

function LoginPage() {
    return (
        <>
            <div className="flex-grow flex items-center justify-center ">
                <div className="flex w-[70%] max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden m-10">
                    {/* Left Section - Logo */}
                    <div className="w-1/2 bg-white p-10 pt-0 flex justify-center items-center">
                        <img src={logo} alt="logo" className="h-40 w-auto" />
                    </div>

                    {/* Right Section - Login Form */}
                    <div className="w-1/2 p-10 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
                            Welcome Back
                        </h2>
                        <p className="text-gray-500 text-center mb-6">
                            Please log in to your account
                        </p>
                        <Login />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
