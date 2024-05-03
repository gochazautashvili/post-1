const Input = () => {
  return (
    <form className="w-full flex items-center justify-center h-[48px] mb-[35px]">
      <input
        className="px-[15px] py-2 w-full h-full bg-white font-libre text-[14px] text-[#999] outline-none"
        type="text"
        placeholder="Email address"
      />
      <button
        className="px-[15px] w-[100px] h-full py-[9px] bg-black text-white font-libre text-[10px]"
        type="submit"
      >
        SEND
      </button>
    </form>
  );
};

export default Input;
