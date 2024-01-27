import Image from "next/image";
import React from "react";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import chatIcon from "@/public/navbar/chat.svg";
import stroriesIcon from "@/public/navbar/stories.svg";
import spotlightIcon from "@/public/navbar/spotlight.svg";

const Navbar = async () => {
  return (
    <header className="w-full py-4 px-8 flex justify-between items-center">
      <Image
        src="/logo.svg"
        width={40}
        height={40}
        alt="Snapchat logo"
        className="cursor-pointer"
      />
      <div className="flex space-x-4">
        <div className="bg-transparent hover:bg-primary/5 text-black p-2 rounded-md text-sm font-medium w-[80px]">
          <Link
            href={"/stories"}
            className="flex flex-col justify-center items-center gap-1"
          >
            <Image src={stroriesIcon} width={25} alt="Stories icon" />
            Stories
          </Link>
        </div>

        <div className="bg-transparent hover:bg-primary/5 text-black p-2 rounded-md text-sm font-medium w-[80px]">
          <Link
            href={"/spotlight"}
            className="flex flex-col justify-center items-center gap-1"
          >
            <Image
              src={spotlightIcon}
              width={24}
              height={24}
              alt="Spotlight icon"
            />
            Spotlight
          </Link>
        </div>

        <div className="bg-transparent hover:bg-primary/5 text-black p-2 rounded-md text-sm font-medium w-[80px]">
          <Link
            href={"/chat"}
            className="flex flex-col justify-center items-center gap-1"
          >
            <Image src={chatIcon} width={24} height={24} alt="chat icon" />
            Chat
          </Link>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button className="bg-black text-white rounded-full p-3 text-xs md:text-sm">
          Watch tutorial
        </Button>
        <form>
          <Button className="bg-black text-white rounded-full p-3 text-xs md:text-sm">
            <LogOut className="cursor-pointer" />
          </Button>
        </form>
      </div>
    </header>
  );
};
export default Navbar;
