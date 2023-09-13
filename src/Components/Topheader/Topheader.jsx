import { Contact } from "../../data/constants";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";

const Topheader = () => {
  return (
    <div class=" hidden lg:flex bg-bggray h-12  items-center">
      <div class="ml-6 text-grayfont font-normal flex  mx-auto max-w-screen-xl ">
        {Contact.certified}
      </div>
      <a href="tel:12895524246" class="no-underline">
        <div class="flex items-center">
          <LuPhoneCall color="#e52727" />
          <div class="ml-2  text-grayfont font-normal"> {Contact.phone}</div>
        </div>
      </a>
      <a href="mailto:thinkfutureca@gmail.com" class="no-underline">
        <div class="ml-6 flex items-center">
          <HiOutlineMail color="#e52727" />
          <div class="ml-2 mr-6 text-grayfont font-normal">{Contact.email}</div>
        </div>
      </a>
    </div>
  );
};

export default Topheader;
