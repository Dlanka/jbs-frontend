import { TextXs, TextXxs } from "@/components/UI/Typography";
import Link from "next/link";
import React from "react";

interface AdsItemProps {
  title: string;
  subTitle?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
}

const AdsItem = (props: AdsItemProps) => {
  const { title, subTitle, location, startDate, endDate } = props;

  return (
    <Link passHref href="/jobs/12">
      <a className="block group cursor-pointer">
        <div className="px-6 py-2 flex justify-between border-b border-b-gary-50 text-1 group-hover:bg-gary-50">
          <div className="flex-1 pr-4">
            <TextXs color="secondary_400">{title}</TextXs>

            {subTitle && (
              <TextXxs className="mt-1" color="primary">
                {subTitle}
              </TextXxs>
            )}
          </div>

          <div className="block">
            {location && (
              <TextXs
                color="secondary_600"
                className="leading-none text-right mb-1"
              >
                {location}
              </TextXs>
            )}

            <span className="block leading-none text-right">
              {startDate && (
                <TextXxs
                  color="secondary_600"
                  component="span"
                  className="leading-none"
                >
                  {startDate}
                </TextXxs>
              )}

              {endDate && (
                <TextXxs
                  component="span"
                  color="secondary_400"
                  className="ml-1 leading-none"
                >
                  {endDate}
                </TextXxs>
              )}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default AdsItem;
