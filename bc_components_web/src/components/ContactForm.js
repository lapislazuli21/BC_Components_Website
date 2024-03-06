import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form"

const ContactForm = () => {

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm();

    const [successMessage, setSuccessMessage] = useState("");

    function onSubmit(data) {
        axios
            .post("https://eoqpbh3rtni9q33.m.pipedream.net", data)
            .then((response) => {
                setSuccessMessage(
                    'Message sent successfully!'
                );
            })
            .catch((e) => console.error(e));
    }

    return (
        <div className='flex flex-row items-center justify-evenly py-20 sm:py-5 sm:bg-light bg-slate-300  rounded-xl sm:flex-col'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='my-10'>
                    <h1 className='text-dark font-mono font-semibold text-5xl sm:text-4xl text-center'>Get in touch</h1>
                </div>

                <div className='my-10 text-center w-[720px] sm:w-[320px]'>
                    <div className='mb-5 flex flex-col justify-center'>
                        <div className='flex flex-row items-center justify-center my-5'>
                            <input type='email' placeholder='Email' className='mx-5 rounded-md w-[540px] h-[40px] p-4 border-primary border-2' {...register("email")} defaultValue={""} required></input>
                        </div>
                        <div className='flex flex-row items-center justify-center my-5'>
                            <input type="tel" placeholder='Phone' className='mx-5 rounded-md w-[540px] h-[40px] p-4 border-primary border-2' {...register("contact")} defaultValue={""}></input>
                        </div>
                    </div>
                    <div className='my-5 mx-4 flex flex-row items-center justify-center'>
                        <textarea placeholder='Message' className='mx-5 rounded-md w-[540px] h-[130px] p-2 border-primary border-2' {...register("message")} required></textarea>
                    </div>
                </div>

                <div className='mt-15 mb-10 text-center'>
                    <button className='border-2 border-dark font-semibold text-primary rounded-full w-[150px] h-[40px] hover:bg-secondary hover:text-light text-lg' role='submit'>{isSubmitting ? "Submitting" : "Submit"}</button>
                    {successMessage && <p className='my-10 text-xl text-primary font-semibold'>{successMessage}</p>}
                </div>
            </form>
            <div className='text-center'>
                <h2 className='text-center mx-auto text-dark font-mono font-semibold text-5xl sm:text-4xl sm:my-5 my-10'>Visit us</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15093.312036063411!2d72.8155386!3d18.961116!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cefa8350e16b%3A0x40edb95f16a49a86!2sBC%20Components!5e0!3m2!1sen!2sca!4v1699281315869!5m2!1sen!2sca" width="720" height="560" className='sm:w-[300px] sm:h-[225px]' loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default ContactForm