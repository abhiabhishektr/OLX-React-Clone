import guitar from "../assets/guitar.png"; // Importing guitar image
import google from "../assets/google.png"; // Importing Google icon image
import phone from "../assets/phone.png"; // Importing phone icon image
import { signInWithPopup } from "firebase/auth"; // Importing signInWithPopup function from Firebase authentication module
import { auth, googleProvider } from "../firebase/setup"; // Importing authentication and Google provider from Firebase setup



const Login = (props) => { // Login component declaration



  const googleSignin = async () => { // Function for Google sign-in
    try {
      await signInWithPopup(auth, googleProvider);// Signing in with Google using Firebase authentication
      console.log('auth.currentUser',auth.currentUser);

    } catch(err) {
      console.error(err); // Logging errors, if any
    }
  };

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true"> {/* Login modal container */}
      <div className="fixed inset-0 bg-zinc-950 bg-opacity-75 transition-opacity"></div> {/* Overlay background */}
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto"> {/* Modal content container */}
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"> {/* Modal content wrapper */}
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-96 sm:max-w-lg"> {/* Modal content */}
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"> {/* Modal header */}
              <h1 onClick={() => props.setLoginPop(false)} className="cursor-pointer font-semibold text-3xl">X</h1> {/* Close button */}
              <div className="sm:flex sm:items-start"> {/* Modal body */}
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"> {/* Modal body content */}
                  <div className="mt-2"> {/* Image and text content */}
                    <img src={guitar} className="w-20 h-20 ml-32"/> {/* Guitar image */}
                    <p className="text-base font-medium mt-5 text-center">Help us to become one of the safest places<br/> to buy and sell</p> {/* Text */}
                    <div className="flex border-2 border-black p-2 rounded-md mt-12 cursor-pointer"> {/* "Continue with phone" button */}
                      <img src={phone} className="w-6 h-6"/> {/* Phone icon */}
                      <h1 className="font-semibold ml-3">Continue with phone</h1> {/* Text */}
                    </div>
                    <div onClick={googleSignin} className="flex border border-gray-300 p-2 rounded-md mt-4 cursor-pointer"> {/* "Continue with Google" button */}
                      <img src={google} className="w-6 h-6"/> {/* Google icon */}
                      <h1 className="font-semibold ml-12">Continue with Google</h1> {/* Text */}
                    </div>
                    <h1 className="text-center mt-4 cursor-pointer">OR</h1> {/* "OR" text */}
                    <h1 className="text-center mt-4 underline cursor-pointer">Login with Email</h1> {/* "Login with Email" text */}
                    <h1 className="text-center mt-28 text-xs">All your personal details are safe with us.</h1> {/* Text */}
                    <h1 className="text-center mt-4 text-xs">If you continue, you are accepting <span className="text-blue-600">OLX Terms and <br/>Conditions and Privacy Policy</span></h1> {/* Text */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; // Exporting Login component


// export {
//   Login
// }
