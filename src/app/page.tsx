import { Certification } from "@/components/Certification";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Profile } from "@/components/Profile";
import { Skills } from "@/components/Skills";
import { Works } from "@/components/Works";
import { Grid } from "@tremor/react";

const Home = () => {
  return (
    <main>
      <Grid className="place-items-center bg-teal-300 h-[25vh]">
        <Header />
      </Grid>
      <Grid className="max-w-5xl mx-auto p-4 gap-8">
        <Profile />
        <Skills />
        <Certification />
        <Works />
        <Contact />
      </Grid>
    </main>
  );
};
export default Home;
