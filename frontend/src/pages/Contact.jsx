import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const contactData = [
  {
    id: 1,
    icon: <MdEmail />,
    title: "Email",
    value: "somaysen656@gmail.com",
    linkText: "Send Email",
    linkHref: "mailto:somaysen656@gmail.com",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 9617388656",
    linkText: "Call Now",
    linkHref: "tel:+91 9617388656",
  },
  {
    id: 3,
    icon: <FaLocationDot />,
    title: "Location",
    value: "Bhopal, MP, INDIA",
    linkText: "View on map",
    linkHref: "https://www.google.com/maps",
  },
  {
    id: 4,
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    value: "+91 9617388656",
    linkText: "Send Message",
    linkHref: "https://wa.me/9617388656",
  },
];

function Contact() {
  return (
    <section className="w-full flex justify-center items-center flex-col py-16 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-500">
      {/* Header */}
      <div className="w-full p-6 text-center text-3xl font-semibold underline underline-offset-8 decoration-blue text-blue-500 ">
  Get in Touch
</div>

      {/* Main Container */}
      <div className="flex flex-col-reverse lg:flex-row w-full flex-1 items-center justify-center">
        {/* Left Side - Contact Info */}
        <div className="w-full lg:w-1/2 flex items-center justify-center flex-col gap-6 text-white text-2xl font-bold py-10">
          {contactData.map((item) => (
            <div
                key={item.id}
                className="border border-zinc-500 bg-zinc-900 rounded-2xl p-6 flex justify-center items-center gap-4 w-[80%] sm:w-[60%] lg:w-[50%] 
                shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] 
                hover:-translate-y-1 transition-all duration-300"
              >

              <span className="text-black border-2 p-2 rounded-3xl border-transparent bg-blue-400 text-xl sm:text-2xl">
                {item.icon}
              </span>
              <div className="text-left">
                <h1 className="text-[15px] sm:text-[17px] font-semibold">
                  {item.title}
                </h1>
                <h3 className="text-[14px] sm:text-[16px] text-gray-300 font-medium break-all">
                  {item.value}
                </h3>
                <a
                  href={item.linkHref}
                  className="font-semibold text-sm text-blue-400 hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex justify-center items-center py-10">
          <form className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[60%] xl:w-[50%] flex flex-col border-2 border-zinc-100 p-8 rounded-2xl bg-zinc-200 gap-6 font-semibold text-lg shadow-md">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border-b border-gray-400 focus:border-blue-500 outline-none py-3 px-2 transition-all duration-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border-b border-gray-400 focus:border-blue-500 outline-none py-3 px-2 transition-all duration-200"
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="bg-transparent border-b border-gray-400 focus:border-blue-500 outline-none py-3 px-2 transition-all duration-200"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="bg-transparent border-b border-gray-400 focus:border-blue-500 outline-none py-3 px-2 resize-none transition-all duration-200"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
