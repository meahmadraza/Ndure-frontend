const Footer = () => {
    return (
        <footer className="h-screen bg-white text-gray-700 px-6 pt-20 lg:pt-50 py-10 text-sm">
            <div className="text-center mb-10 pb-10 lg:pb-16">
                <h2 className="text-lg font-semibold mb-2">JOIN OUR NEWSLETTER</h2>
                <input
                    type="email"
                    placeholder="ENTER YOUR EMAIL ADDRESS"
                    className="w-full max-w-md border-b border-gray-300 focus:outline-none px-2 py-2 text-center text-gray-600 placeholder-gray-400"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                <div>
                    <h3 className="font-bold uppercase mb-3">Company</h3>
                    <ul className="space-y-1">
                        <li>What is NDURE?</li>
                        <li>Corporate News</li>
                        <li>Customer Reviews</li>
                        <li>Careers</li>
                        <li>Blogs</li>
                        <li>Find a Store</li>
                        <li>Franchise Program</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold uppercase mb-3">Follow Us</h3>
                    <ul className="space-y-1">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">YouTube</a></li>
                        <li><a href="#">TikTok</a></li>
                        <li><a href="#">Snapchat</a></li>
                        <li><a href="#">Spotify</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold uppercase mb-3">Help</h3>
                    <ul className="space-y-1">
                        <li>Order Status</li>
                        <li>Shipping & Delivery</li>
                        <li>Return & Exchange Policy</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold uppercase mb-3">Customer Care</h3>
                    <ul className="space-y-1">
                        <li>UAN: 042-35880175</li>
                        <li>Send Email: help@ndure.com</li>
                        <li>Address: Jail Road, Main Gulberg, Lahore</li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-xs text-gray-600 mt-10">
                NDURE © 2024. ALL RIGHTS RESERVED.
            </div>
        </footer>
    )
}

export default Footer
