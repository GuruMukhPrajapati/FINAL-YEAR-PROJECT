import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../fireabase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate();

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const signup = async () => {
        setLoading(true);

        // Check if all fields are filled
        if (name === "" || email === "" || password === "") {
            setLoading(false);
            return toast.error("All fields are required");
        }

        // Validate email format
        if (!emailRegex.test(email)) {
            setLoading(false);
            return toast.error("Please enter a valid email address");
        }

        try {
            // Create user in Firebase Authentication
            const users = await createUserWithEmailAndPassword(auth, email, password);

            // Prepare user data to store in Firestore
            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time: Timestamp.now()
            };

            // Add user data to Firestore
            const userRef = collection(fireDB, "users");
            await addDoc(userRef, user);

            // Show success message and reset form fields
            toast.success("Signup Successful");
            setName("");
            setEmail("");
            setPassword("");

            // Stop loading and redirect to login page
            setLoading(false);
            navigate('/login');
        } catch (error) {
            console.log(error);
            setLoading(false);

            // Handle specific Firebase errors
            if (error.code === 'auth/email-already-in-use') {
                toast.error("Email already in use. Please use a different email.");
            } else {
                toast.error("An error occurred during signup. Please try again.");
            }
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                <div>
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name='name'
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Name'
                    />
                </div>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className='flex justify-center mb-3'>
                    <button
                        onClick={signup}
                        className='bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account <Link className='text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
                <div className='mt-4'>
                    <Link to={'/'}>
                        <button className='bg-blue-500 w-full text-white font-bold px-2 py-2 rounded-lg'>
                            Go to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;