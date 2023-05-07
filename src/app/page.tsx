import { Header } from "@/components/Header";
import { Profile } from "@/components/Profile";
import { Skills } from "@/components/Skills";
import { Grid, Title } from "@tremor/react";

const Home = () => {
  return (
    <main>
      <Grid className="place-items-center bg-teal-300 h-[50vh]">
        <Header />
      </Grid>
      <Grid className="max-w-5xl mx-auto p-4 gap-4">
        <Profile />
        <Skills />
      </Grid>
    </main>
  );
};
export default Home;
