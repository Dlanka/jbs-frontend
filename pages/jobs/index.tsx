import { NextPage } from "next";

import SearchBar from "@/components/UI/SearchBar";
import Wall from "@/components/UI/Wall";
import FilterContent from "@/components/UI/FilterContent";
import AdsList from "@/components/Advertisements/AdsList";
import AdsItem from "@/components/Advertisements/AdsList/AdsItem";
import Main from "@/components/Layout/Main";
import Container from "@/components/UI/Container";
import Chip from "@/components/UI/Chip";
import ThreeColumnLayout from "@/components/UI/ThreeColumnLayout";

const Jobs: NextPage = () => {
  const CenterContent = (
    <>
      <div className="block">
        <Wall className="py-6">
          <AdsList>
            <AdsItem
              title="Technical Lead Engineer - C#/ .NET (1)"
              subTitle="George Bernard (Pvt) Ltd"
              location="Colombo 05"
              startDate="10 Mar 2022"
              endDate="20 Mar 2022"
            />
            <AdsItem
              title="Technical Lead Engineer - C#/ .NET (1)"
              subTitle="George Bernard (Pvt) Ltd"
              location="Colombo 05"
              startDate="10 Mar 2022"
              endDate="20 Mar 2022"
            />
          </AdsList>
        </Wall>
      </div>
    </>
  );

  const LeftContent = (
    <>
      <div className="block">
        {/* Filter options */}
        <Wall className="py-6 px-4">
          {/* Searchbar */}
          <SearchBar />

          <FilterContent containerClassName="mt-5" title="Job Positions">
            <Chip
              className="mt-1 mr-1"
              label="UI Enginer"
              value="ui_enginer"
              active
            />
            <Chip
              className="mt-1 mr-1"
              label="Frontend Develeoper"
              value="front_end"
            />
            <Chip
              className="mt-1 mr-1"
              label="Frontend Develeoper"
              value="front_end"
            />
            <Chip
              className="mt-1 mr-1"
              label="Frontend Develeoper"
              value="front_end"
            />
            <Chip
              className="mt-1 mr-1"
              label="Frontend Develeoper"
              value="front_end"
            />
          </FilterContent>

          <FilterContent containerClassName="mt-5" title="Positions">
            <Chip
              className="mt-1 mr-1"
              label="Junior Develeoper"
              value="junior_enginer"
            />
            <Chip
              className="mt-1 mr-1"
              label="Senior Develeoper"
              value="senior_dev"
            />
          </FilterContent>
        </Wall>
      </div>
    </>
  );

  return (
    <Main>
      <Container>
        <ThreeColumnLayout
          leftContent={LeftContent}
          centerContent={CenterContent}
        />
      </Container>
    </Main>
  );
};

export default Jobs;
