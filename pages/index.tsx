import { NextPage } from "next";

import SearchBar from "@/components/UI/SearchBar";
import Wall from "@/components/UI/Wall";
import FilterContent from "@/components/UI/FilterContent";
import AdsList from "@/components/Advertisements/AdsList";
import AdsItem from "@/components/Advertisements/AdsList/AdsItem";
import Main from "@/components/Layout/Main";
import Container from "@/components/UI/Container";
import Chip from "@/components/UI/Chip";

const Home: NextPage = () => {
  return (
    <Main>
      <Container>
        Home
      </Container>
    </Main>
  );
};

export default Home;
