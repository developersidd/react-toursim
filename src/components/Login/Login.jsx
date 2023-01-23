import { Facebook } from '@mui/icons-material';
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import sweetAlert from "sweetalert";
import useFirebaseMongo from '../../Hooks/useFirebaseMongo';
const Login = () => {
    const { firebase: { googleSignIn, setSEmail, setSPass, loginUser, firebaseErrors, setFirebaseData, setFirebaseErrors, setLoading , saveUser } } = useFirebaseMongo();

    const location = useLocation();
    const navigate = useNavigate();
    const redirect_Url = location.state?.from || "/";
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("clicked");
        loginUser()
            .then(res => {
                setFirebaseData(res.user);
                const { displayName, email } = res.user;
                saveUser(displayName, email, "PUT");
                navigate(redirect_Url);
                e.target.reset();
            }).catch(err => {
                sweetAlert("Oops!", err.message, "error");                
            }).finally(() => {
                setLoading(false);
            })

    }

    const handleGoogleSignIn = (e) => {
        googleSignIn()
            .then(res => {
                setFirebaseData(res.user);
                const { displayName, email } = res.user;
                saveUser(displayName, email, "PUT");
                navigate(redirect_Url, { replace: true });
            })
            .catch(error => {
                setFirebaseErrors(error.message)
            }).finally(() => {
                setLoading(false);
            })
    }


    return (
        <div>
            <div>
                <div className="flex items-center justify-center my-20 mx-6">
                    <div className="bg-white  rounded-md overflow-hidden shadow-md">
                        <h3 className="text-center text-puerto-500 text-2xl mt-4 font-bold">SIGN IN</h3>
                        <div>
                            <div className="p-6">
                                <form onSubmit={handleLogin}>
                                    <input
                                        onChange={(e) => setSEmail(e.target.value)}
                                        className={`border-2  rounded-full block w-full px-4 py-3 mt-3 outline-none`} type="email" placeholder="Your Email" required />

                                    <input
                                        onChange={(e) => setSPass(e.target.value)}
                                        className={`border-2   rounded-full block w-full px-4 py-3 mt-3 outline-none`} type="password" placeholder="Your password" required />

                                    {
                                        firebaseErrors && <p className="text-red-500">{firebaseErrors} </p>
                                    }

                                    <button type="submit" className="mt-6 px-8 mr-2 py-2 rounded-3xl bg-red-500 hover:bg-red-600  text-white shadow-lg">Sing Up </button>
                                    <p className="inline-block pb-2">New to ABTourism? <NavLink to="/signup" className="text-puerto-500 cursor-pointer"> Register </NavLink> </p>
                                </form>

                                {/*  google sign in */}
                                <div className="text-center pt-3">
                                    <h4 className="text-lg font-semibold mb-2">sign in with </h4>
                                    <button onClick={handleGoogleSignIn}> <Facebook />   </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
