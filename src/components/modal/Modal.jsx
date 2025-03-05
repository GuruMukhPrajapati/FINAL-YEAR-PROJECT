import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'

export default function Modal({ name, address, pincode, phoneNumber, setName, setAddress, setPincode, setPhoneNumber, buyNow }) {
    let [isOpen, setIsOpen] = useState(false)
    const [errors, setErrors] = useState({
        name: '',
        address: '',
        pincode: '',
        phoneNumber: ''
    })
    const [isFormValid, setIsFormValid] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    // Validate name - should not contain numbers
    const validateName = (value) => {
        if (!value.trim()) return "Name is required";
        if (/\d/.test(value)) return "Name should not contain numbers";
        return "";
    }

    // Validate address - min 2 and max 4 digits followed by letters
    const validateAddress = (value) => {
        if (!value.trim()) return "Address is required";
        if (!/^\d{2,4}[a-zA-Z\s]+/.test(value)) return "Address should start with 2-4 digits followed by letters";
        return "";
    }

    // Validate pincode - exactly 6 digits
    const validatePincode = (value) => {
        if (!value.trim()) return "Pincode is required";
        if (!/^\d{6}$/.test(value)) return "Pincode should be exactly 6 digits";
        return "";
    }

    // Validate phone number - exactly 10 digits
    const validatePhoneNumber = (value) => {
        if (!value.trim()) return "Phone number is required";
        if (!/^\d{10}$/.test(value)) return "Phone number should be exactly 10 digits";
        return "";
    }

    // Handle input changes with validation
    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        setErrors(prev => ({ ...prev, name: validateName(value) }));
    }

    const handleAddressChange = (e) => {
        const value = e.target.value;
        setAddress(value);
        setErrors(prev => ({ ...prev, address: validateAddress(value) }));
    }

    const handlePincodeChange = (e) => {
        const value = e.target.value;
        setPincode(value);
        setErrors(prev => ({ ...prev, pincode: validatePincode(value) }));
    }

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);
        setErrors(prev => ({ ...prev, phoneNumber: validatePhoneNumber(value) }));
    }

    // Check if form is valid
    useEffect(() => {
        const formValid = 
            !errors.name && 
            !errors.address && 
            !errors.pincode && 
            !errors.phoneNumber &&
            name.trim() !== "" &&
            address.trim() !== "" &&
            pincode.trim() !== "" &&
            phoneNumber.trim() !== "";
        
        setIsFormValid(formValid);
    }, [errors, name, address, pincode, phoneNumber]);

    return (
        <>
            <div className="text-center rounded-lg text-white font-bold">
                <button
                    type="button"
                    onClick={openModal}
                    className="w-full bg-violet-600 py-2 text-center rounded-lg text-white font-bold"
                >
                    Buy Now
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-2 text-left align-middle shadow-xl transition-all bg-gray-50">
                                    <section className="">
                                        <div className="flex flex-col items-center justify-center py-8 mx-auto lg:py-0">
                                            <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                                    <form className="space-y-4 md:space-y-6" action="#">
                                                        <div>
                                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                                                                Enter Full Name
                                                            </label>
                                                            <input 
                                                                value={name} 
                                                                onChange={handleNameChange} 
                                                                type="text" 
                                                                name="name" 
                                                                id="name" 
                                                                className={`border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100 ${errors.name ? 'border-red-500' : ''}`} 
                                                                required 
                                                            />
                                                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                                        </div>
                                                        <div>
                                                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">
                                                                Enter Full Address (start with 2-4 digits)
                                                            </label>
                                                            <input 
                                                                value={address} 
                                                                onChange={handleAddressChange} 
                                                                type="text" 
                                                                name="address" 
                                                                id="address" 
                                                                className={`border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100 ${errors.address ? 'border-red-500' : ''}`} 
                                                                required 
                                                            />
                                                            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                                                        </div>
                                                        <div>
                                                            <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900">
                                                                Enter Pincode (6 digits)
                                                            </label>
                                                            <input 
                                                                value={pincode} 
                                                                onChange={handlePincodeChange} 
                                                                type="text" 
                                                                name="pincode" 
                                                                id="pincode" 
                                                                className={`border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100 ${errors.pincode ? 'border-red-500' : ''}`}
                                                                required 
                                                            />
                                                            {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
                                                        </div>
                                                        <div>
                                                            <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900">
                                                                Enter Mobile Number (10 digits)
                                                            </label>
                                                            <input 
                                                                value={phoneNumber} 
                                                                onChange={handlePhoneNumberChange} 
                                                                type="text" 
                                                                name="mobileNumber" 
                                                                id="mobileNumber" 
                                                                className={`border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100 ${errors.phoneNumber ? 'border-red-500' : ''}`}
                                                                required 
                                                            />
                                                            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                                                        </div>
                                                    </form>
                                                    <button 
                                                        onClick={() => {
                                                            if (isFormValid) {
                                                                buyNow();
                                                                closeModal();
                                                            }
                                                        }} 
                                                        type="button" 
                                                        className={`focus:outline-none w-full text-white ${isFormValid ? 'bg-violet-600 hover:bg-violet-800' : 'bg-violet-400 cursor-not-allowed'} outline-0 font-medium rounded-lg text-sm px-5 py-2.5`}
                                                        disabled={!isFormValid}
                                                    >
                                                        Order Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}