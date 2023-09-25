import TopicButton from "./TopicButton";

const Topics = () => {
  return (
    <section>
      <div className="text-sm relative flex items-center">
        <i className="lni lni-search-alt absolute left-3"></i>
        <input
          type="text"
          placeholder="Buscar Curso"
          className="bg-slate-100 h-10 rounded-md border w-full pl-9 placeholder:text-slate-500"
        />
      </div>
      <div className="mt-6 mb-4 flex gap-2 overflow-scroll pb-2">
        <TopicButton />
        <TopicButton />
        <TopicButton />
        <TopicButton />
        <TopicButton />
        <TopicButton />
        <TopicButton />
        <TopicButton />
        <TopicButton />
        <TopicButton />
        <TopicButton />
        <TopicButton />
      </div>
    </section>
  );
};

export default Topics;
