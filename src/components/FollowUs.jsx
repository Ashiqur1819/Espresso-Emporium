import f1 from "../assets/cups/Rectangle 10.png";
import f2 from "../assets/cups/Rectangle 11.png";
import f3 from "../assets/cups/Rectangle 12.png";
import f4 from "../assets/cups/Rectangle 13.png";
import f5 from "../assets/cups/Rectangle 14.png";
import f6 from "../assets/cups/Rectangle 15.png";
import f7 from "../assets/cups/Rectangle 16.png";
import f8 from "../assets/cups/Rectangle 9.png";

const FollowUs = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-lg text-[#1B1A1A]">--- Follow Us Now ---</p>
        <h2 className="text-5xl font-medium text-[#331A15] font-Rancho">
          Follow On Instagram
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <img src={f1} alt="" />
        <img src={f2} alt="" />
        <img src={f3} alt="" />
        <img src={f4} alt="" />
        <img src={f5} alt="" />
        <img src={f6} alt="" />
        <img src={f7} alt="" />
        <img src={f8} alt="" />
      </div>
    </div>
  );
};

export default FollowUs;
