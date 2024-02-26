import { Badge } from "flowbite-react";
import { BsGithub } from "react-icons/bs";
import { SiFastapi } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full p-24">
        <p className="text-lg text-center mb-4">FAST API DOCUMENTATION HERE</p>
      <div className="flex flex-wrap gap-2">
       
        <Badge size="sm" href="https://global-locations.vercel.app/docs" icon={SiFastapi}>
          Documentacion Fast Api 
        </Badge>
      </div>
      <p className="text-lg text-center mb-4">By</p>
      <div className="flex flex-wrap gap-2">
       
        <Badge size="sm" href="https://github.com/SebastianL2" icon={BsGithub}>
          Sebastian Cely: Documentacion Fast Api 
        </Badge>
      </div>

    </footer>
  );
};

export default Footer;
