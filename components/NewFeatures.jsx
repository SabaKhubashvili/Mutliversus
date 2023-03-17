const NewFeatures = ({title,subtitle,imgUrl}) => (
  <div className="flex flex-col max-w-[25rem] mr-8 justify-start items-start ">
    <div className="bg-[#323F5D] rounded-[24px] w-[70px] h-[70px] p-3 flex justify-center items-center ">
      <img src={imgUrl} alt="" className="w-[90%] h-[90%]" />
    </div>
    <div className=" text-[24px] leading-[30px] font-extrabold text-white my-[30px] ">
      {title}
    </div>
    <p className="text-[#B0B0B0]">
      {subtitle}
    </p>

  </div>
);

export default NewFeatures;
