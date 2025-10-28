import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";


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
    linkHref: "tel:+919617388656",
  },
  {
    id: 3,
    icon: <FaLocationDot />,
    title: "Location",
    value: "Bhopal, MP, India",
    linkText: "View on map",
    linkHref: "https://www.google.com/maps?q=Bhopal",
  },
  {
    id: 4,
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    value: "+91 9617388656",
    linkText: "Send Message",
    linkHref: "https://wa.me/919617388656",
  },
];

function Contact() {
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = () => {
    emailjs.sendForm(
        "service_bd6c8fg",     // Replace
        "template_c17qnvm",    // Replace
        formRef.current,
        "rdWuAXBE5yzcrdDza"      // Replace
      )
      .then(() => {
        console.log('Message sent successfully');
        alert("Message sent successfully ✅");
        reset();
      })
      .catch((err) => {
        alert("Failed to send ❌");
        console.log("failed",err)
      });
  };

  return (
    <section className="w-full flex justify-center items-center flex-col py-16 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-500">
      
      <h2 className="w-full p-6 text-center text-3xl font-semibold underline underline-offset-8 decoration-blue-500 text-blue-500">
        Get in Touch
      </h2>

      <div className="flex flex-col-reverse lg:flex-row w-full items-center justify-center p-10 ">
        
        {/* Contact Info Left */}
        <div className="w-full lg:w-1/2 flex items-center justify-center flex-col gap-6 text-white text-2xl font-bold py-10">
          {contactData.map((item) => (
            <div
              key={item.id}
              className="border border-zinc-500 bg-zinc-900 rounded-2xl px-6 py-4 flex items-center gap-4 w-[85%] sm:w-[65%] lg:w-[55%]
              shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
              hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex items-center justify-center text-black p-3 rounded-full bg-blue-400 text-2xl">
                {item.icon}
              </span>

              <div className="flex flex-col justify-center leading-tight">
                <h1 className="text-[15px] sm:text-[17px] font-semibold">{item.title}</h1>
                <h3 className="text-[14px] sm:text-[16px] text-gray-300 font-medium break-all">
                  {item.value}
                </h3>
                <a
                  href={item.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm text-blue-400 hover:text-blue-500 transition-colors"
                >
                  {item.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Form Right */}
        <div className="w-full lg:w-1/2 flex justify-center items-center py-10">
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[60%] xl:w-[50%] flex flex-col border-2 border-zinc-400 p-8 rounded-2xl bg-zinc-300/50 gap-6 font-semibold text-lg shadow-md"
          >
            
            <input
              type="text"
              placeholder="Your Name"
              name="from_name"
              {...register("name", { required: "Name is required" })}
              className="bg-transparent border-b border-gray-400 focus:border-blue-500 outline-none py-3 px-2 transition-all duration-200"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <input
              type="email"
              placeholder="Your Email"
              name="email"
              {...register("email", { required: "Email is required" })}
              className="bg-transparent border-b border-gray-400 focus:border-blue-500 outline-none py-3 px-2 transition-all duration-200"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <input
              type="text"
              placeholder="Your Subject"
              name="subject"
              {...register("subject")}
              className="bg-transparent border-b border-gray-400 focus:border-blue-500 outline-none py-3 px-2 transition-all duration-200"
            />

            <textarea
              placeholder="Your Message"
              name="message"
              rows="4"
              {...register("message", { required: "Message is required" })}
              className="bg-transparent border-b border-gray-400 focus:border-blue-500 outline-none py-3 px-2 resize-none transition-all duration-200"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

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
