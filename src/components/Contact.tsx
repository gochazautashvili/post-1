import Link from "next/link";

const Contact = () => {
  return (
    <section className="py-[120px] w-full max-w-screen-lg xl:max-w-screen-xl p-3 mx-auto flex flex-col gap-[20px] border-b border-[#e6e6e6]">
      <h1 className="font-tenor text-[20px] text-black">THIS IS NOICELAND.</h1>
      <p className="font-source text-[18px] text-black">
        Vim et dolore eligendi voluptua, qui id unum quas omittantur, at sed
        justo tation eligendi. Assum accommodare an mei. Sonet propriae
        partiendo ad vix, ex vis epicuri constituto incorrupte. Ut vim liber
        recteque eloquentiam, qui te exerci forensibus. Eu pri ullum meliore
        tincidunt, an ius aeque paulo saperet, eum modus tation an.
      </p>
      <p className="font-source text-[18px] text-black">
        Vix mandamus deseruisse voluptatibus in. Ei pri epicurei indoctum.
        Aeterno oportere at his. Nam prompta recteque dissentias id. Aperiam
        atomorum iudicabit sed id, malis dicit pericula at vis.
      </p>
      <p className="font-source text-[18px] text-black">
        At sea scripta nostrud facilisis, his at nihil ubique sententiae, aeque
        menandri urbanitas eu quo. Fastidii qualisque cum id. Tollit convenire
        adversarium duo te. Te vim dictas virtute iudicabit, tibique omittam cum
        ut, clita decore lucilius nec ei. Sit facer docendi ex, laoreet deserunt
        pro eu, eum putent virtute vivendum te. Purto interpretaris
        signiferumque te eam, at mel saperet voluptua.
      </p>
      <Link
        className="font-libre text-[10px] uppercase text-black underline"
        href="/"
      >
        Contact us
      </Link>
    </section>
  );
};

export default Contact;
