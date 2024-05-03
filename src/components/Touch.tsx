const Touch = () => {
  const touch = [
    {
      id: 1,
      title: "ADDRESS",
    },
    {
      id: 2,
      title: "GENERAL INQUIRIES",
    },
    {
      id: 3,
      title: "PRESS INQUIRIES",
    },
    {
      id: 4,
      title: "POTENTIAL CONTRIBUTORS",
    },
  ];

  return (
    <section className="my-[90px] w-full max-w-screen-lg px-7 mx-auto lg:px-2 xl:max-w-screen-xl">
      <h1 className="mb-[30px] text-black font-tenor text-[20px]">
        WANNA GET IN TOUCH?
      </h1>
      <p className="text-lg font-source text-black mb-[50px]">
        Vim et dolore eligendi voluptua, qui id unum quas omittantur, at sed
        justo tation eligendi. Assum accommodare an mei. Sonet propriae
        partiendo ad vix, ex vis epicuri constituto incorrupte.
      </p>
      <div className="flex justify-center items-center gap-[20px] w-full flex-wrap">
        {touch.map((item) => {
          return (
            <div
              className="flex flex-col items-center justify-center w-full max-w-[285px] py-[45px] px-[30px] border border-black"
              key={item.id}
            >
              <h1 className="flex items-center justify-center w-[60px] h-[60px] text-white bg-black rounded-full">
                {item.id}
              </h1>
              <p className="mt-[30px] mb-[20px] font-libre text-[10px] text-[#999]">
                {item.title}
              </p>
              <p className=" font-source text-lg text-black">
                hello@noiceland.co
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Touch;
