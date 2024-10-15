import Button from "./Button"

const Footer = () => {
    return (
        <footer className="pt-20 max-w-[1500px] mx-auto">
            <div className="px-10 sm:flex justify-between">
                <div className="">
                    <small className="font-semibold mb-10 block">Quick navigate our pages</small>
                    <ul className="text-lg font-bold">
                        <li>About</li>
                        <li>Forecast</li>
                        <li>Report a Case</li>
                        <li>Resources</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="">
                    <small className="font-semibold mb-10 block">Contact us on our social handles</small>
                    <ul className="text-lg font-bold text-right">
                        <li>Facebook</li>
                        <li>X</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
            <form className="flex px-10 mt-10 gap-8 items-end">
                <div className="flex flex-col gap-3 w-full max-w-[300px]">
                    <label htmlFor="email" className="text-sm font-bold">Subscribe to our newsletter</label>
                    <input type="email" id="email" name="email" className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none" placeholder="e.g. kunlegaladima@gmail.com" required />
                </div>
                <Button>Subcribe</Button>
            </form>
            <div className="border-t border-black py-6 px-10 mt-10 flex justify-center items-center font-semibold">
                <small>© 2024 AI4LASSA Fever. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer