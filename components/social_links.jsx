import { FaInstagram, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
    return (
        <>
            
            <a 
                href="https://www.linkedin.com/company/fapstiet/?originalSubdomain=in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-8 left-10 text-4xl text-white z-10 transition-all duration-200 hover:text-pink-500 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.5)]"
            >
                <FaInstagram />
            </a>
            
            
            <a 
                href="https://www.linkedin.com/company/fapstiet/?originalSubdomain=in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-8 right-10 text-4xl text-white z-10 transition-all duration-200 hover:text-blue-600 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,119,181,0.5)]"
            >
                <FaLinkedin />
            </a>
        </>
    )
}

export default SocialLinks