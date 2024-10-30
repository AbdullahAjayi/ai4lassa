import Button from "./Button"

const Footer = () => {
    return (
        <footer id="contact" className="pt-20 max-w-[1500px] mx-auto">
            <div className="px-10 sm:flex justify-between">
                <div className="">
                    <small className="font-semibold mb-6 sm:mb-10 block">Quick navigate our pages</small>
                    <ul className="text-lg font-bold">
                        <li>About Us</li>
                        <li>Forecast</li>
                        <li>Report a Case</li>
                        <li>Resources</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="max-sm:mt-8">
                    <small className="font-semibold mb-6 sm:mb-10 block">Contact us on our social handles</small>
                    <ul className="text-lg font-bold sm:text-right">
                        <li>Facebook</li>
                        <li>X</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
            {/* Adress */}
            <div className="mt-10 px-10 sm:flex justify-between">
                <div className="max-sm:mb-6">
                    <div className="text-sm font-bold mb-2">Address:</div>
                    <p className="text-[.7rem] text-blue-700 font-semibold max-w-[400px]">Room 215, SEET building, FUT-Minna Main campus, Minna-Bida road, Gidan Kwano</p>
                </div>
                <div className="">
                    <div className="text-sm font-bold mb-2">Email:</div>
                    <a className="text-[.7rem] text-blue-700 font-semibold block" href="mailto:aidevg_24@futminna.edu.ng">aidevg_24@futminna.edu.ng</a>
                </div>
            </div>
            <form className="flex flex-col sm:flex-row px-10 mt-10 gap-6 sm:gap-8 items-end">
                <div className="flex flex-col gap-3 w-full sm:max-w-[300px]">
                    <label htmlFor="email" className="text-sm font-bold">Subscribe to our newsletter</label>
                    <input type="email" id="email" name="email" className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none" placeholder="e.g. kunlegaladima@gmail.com" required />
                </div>
                <Button className="max-sm:w-full min-w-[200px]">Subscribe</Button>
            </form>
            <div className="border-t border-black py-6 px-10 mt-10 flex justify-center items-center font-semibold">
                <small>© 2024 AI4LASSA Fever. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer