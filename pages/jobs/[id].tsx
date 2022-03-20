import React from "react";
import Link from "next/link";
import { NextPage } from "next";

import Main from "@/components/Layout/Main";
import Container from "@/components/UI/Container";
import Wall from "@/components/UI/Wall";
import ThreeColumnLayout from "@/components/UI/ThreeColumnLayout";
import IconButton from "@/components/UI/IconButton";
import {
  Heading2,
  TextXs,
} from "@/components/UI/Typography";
import Button from "@/components/UI/Button";
import { useLogs } from "contextsApi/LogContext";


const JobView: NextPage = () => {

  const { printLog } = useLogs();

  printLog('load')

  return (
    <Main>
      <Container>
        <ThreeColumnLayout
          centerContent={
            <>
              <div className="flex w-full mb-8 lg:mb-8">
                <Link passHref href="/jobs">
                  <IconButton
                    component="a"
                    name="BackIcon"
                    iconSize="16"
                    className="bg-white hover:bg-opacity-70"
                  />
                </Link>
                <div className="ml-3 md:ml-4 lg:ml-6 w-full">
                  <Heading2 component="h2">
                    Technical Lead Engineer - C#/ .NET (1)
                  </Heading2>
                  <div className="flex mt-1 mb-4 ">
                    <TextXs className="mr-8" color="primary">
                      <span>George Bernard (Pvt) Ltd</span>
                      <TextXs
                        className="ml-3"
                        color="secondary_600"
                        component="span"
                      >
                        Colombo
                      </TextXs>
                    </TextXs>

                    <TextXs color="secondary_600">
                      <span> 20 Mar 2022</span>
                    </TextXs>
                  </div>
                  <Button>Apply</Button>
                </div>
              </div>

              <Wall className="px-4 py-6">
                content goes here
              </Wall>
            </>
          }
        />
      </Container>
    </Main>
  );
};

export default JobView;
