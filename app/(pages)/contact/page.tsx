"use client"

import { useRef } from "react";
import { FaAddressCard } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import emailjs from '@emailjs/browser';

import Button from "@/components/Button"
import { useCharacterAnimation, useSlideUpAnimation } from "@/hooks/useAnimation"
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Contact = () => {
    useCharacterAnimation({ stagger: 0.02 })
    useSlideUpAnimation()

    const formRef = useRef<HTMLFormElement>(null);
    const formCardRef = useRef<HTMLDivElement>(null)
    const isDesktop = useMediaQuery('(min-width: 768px)', false)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardRef: React.RefObject<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const tiltX = (y - centerY) / 10;
        const tiltY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = (cardRef: React.RefObject<HTMLDivElement>) => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current) {
            const form = formRef.current;
            const name = form.user_name.value.trim();
            const email = form.user_email.value.trim();
            const message = form.message.value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields before sending.');
                return;
            }

            emailjs.sendForm(
                'xxxxxxx',
                'xxxxxxx',
                form,
                'xxxxxxx'
            )
                .then((result) => {
                    console.log(result.text);
                    alert('Message sent successfully!');
                    // Clear the form after successful submission
                    form.reset();
                }, (error) => {
                    console.log(error.text);
                    alert('Failed to send the message, please try again.');
                });
        }
    };

    return (
        <main className="pt-24 max-w-[600px] mx-auto px-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">Send us a mail <IoMdMail className="inline-block" /></h1>
            {/* Contact Form */}
            <div ref={formCardRef}
                onMouseMove={(e) => isDesktop && handleMouseMove(e, formCardRef)}
                onMouseLeave={() => isDesktop && handleMouseLeave(formCardRef)}
                className="contact-section mb-16 md:mb-32 backdrop-blur-md bg-white rounded-xl shadow-md p-4 border">
                <form ref={formRef}
                    onSubmit={sendEmail} className="flex flex-col gap-4 placeholder:text-gray-600">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Name"
                        className="p-2 rounded-md bg-appBg ring-2 ring-outline/50 focus:outline-none focus:ring-outline"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        className="p-2 rounded-md bg-appBg ring-2 ring-outline/50 focus:outline-none focus:ring-outline"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        className="p-2 rounded-md bg-appBg ring-2 ring-outline/50 h-32 resize-none focus:outline-none focus:ring-outline"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-outline text-white p-2 rounded-md hover:bg-green-900 transition-colors flex items-center justify-center gap-3"
                    >
                        <span>Send Message</span> <FaLocationArrow />
                    </button>
                </form>
            </div>
            {/* Social Handles + Adress */}
            <div>
                <div>
                    <small className="font-semibold mb-6 block animate-character">Or Contact us through our social handles</small>
                    <ul className="text-lg font-bold">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                        <li>WhatsApp</li>
                        <li>X</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <div className="text-sm font-bold mb-2 animate-character">Address</div>
                    <p className="text-[.7rem] text-blue-700 font-semibold max-w-[400px] animate-slide-up">Room 215, SEET building, FUT-Minna Main campus, Minna-Bida road, Gidan Kwano</p>
                </div>
            </div>
            {/* Subscription Form */}
            <form className="flex flex-col sm:flex-row my-10 gap-6 sm:gap-8 items-end">
                <div className="flex flex-col gap-3 w-full sm:max-w-[300px]">
                    <label htmlFor="email" className="text-sm font-bold animate-character">Subscribe to our newsletter</label>
                    <input type="email" id="email" name="email" className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none animate-slide-up" placeholder="e.g. kunlegaladima@gmail.com" required />
                </div>
                <Button className="max-sm:w-full min-w-[200px] animate-character flex items-center justify-center gap-3">
                    <span>Subscribe</span> <FaAddressCard />
                </Button>
            </form>
        </main>
    )
}

export default Contact