import s1 from "../assets/icons/1.png";
import s2 from "../assets/icons/2.png";
import s3 from "../assets/icons/3.png";
import s4 from "../assets/icons/4.png";

const Services = () => {
  return (
    <div className="flex items-center justify-between gap-12 bg-[#ECEAE3] px-4 md:px-8 lg:px-12 py-12">
      <div className="space-y-2">
        <img src={s1} className="w-12" alt="" />
        <h3 className="text-[#331A15] text-3xl font-medium font-Rancho">
          Awesome Aroma
        </h3>
        <p className="text-[#1B1A1A]">
          You will definitely be a fan of the design & aroma of your coffee
        </p>
      </div>
      <div className="space-y-2">
        <img src={s2} className="w-12" alt="" />
        <h3 className="text-[#331A15] text-3xl font-medium font-Rancho">
          High Quality
        </h3>
        <p className="text-[#1B1A1A]">
          We served the coffee to you maintaining the best quality
        </p>
      </div>
      <div className="space-y-2">
        <img src={s3} className="w-12" alt="" />
        <h3 className="text-[#331A15] text-3xl font-medium font-Rancho">
          Pure Grades
        </h3>
        <p className="text-[#1B1A1A]">
          The coffee is made of the green coffee beans which you will love
        </p>
      </div>
      <div className="space-y-2">
        <img src={s4} className="w-12" alt="" />
        <h3 className="text-[#331A15] text-3xl font-medium font-Rancho">
          Proper Roasting
        </h3>
        <p className="text-[#1B1A1A]">
          Your coffee is brewed by first roasting the green coffee beans
        </p>
      </div>
    </div>
  );
};

export default Services;
