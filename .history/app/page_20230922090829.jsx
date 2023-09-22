import Feed from "../components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col pt-12">
      <h1 className="head_text text-center">
        Discover and Share
        <br/>
        <span className="orange_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        
        Promptopia is an open-source AI prompting tool for medern world to
        discover,create and share prompts
      </p>
      <Feed/>
    </section>
  );
};

export default Home;
