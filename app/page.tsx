import { Suspense } from "react";
import ListingCard from "./components/ListingCard";
import MapFilterItem from "./components/MapFilterItem";
import prisma from "./lib/db";
import { SkeletonCard } from "./components/SkeletonCard";
import { NoItems } from "./components/NoItem";


async function getData({ searchParams, }: { searchParams?: { filter?: string }; }) {
  const data = await prisma.home.findMany({
    where: {
      addedCategory: true,
      addedDescription: true,
      addedLocation: true,
      categoryName: searchParams?.filter ?? undefined
    }, select: {
      photo: true,
      id: true,
      price: true,
      description: true,
      country: true,
    }
  });

  return data;
}



export default function Home({ searchParams, }: { searchParams?: { filter?: string }; }) {

  return (
    <div className="container mx-auto px-5 lg:px-10 mb-10">
      <MapFilterItem />

      <Suspense key={searchParams?.filter} fallback={<SkeletonLoading />}>
        <ShowItems searchParams={searchParams} />
      </Suspense>
    </div>
  );
}


async function ShowItems({ searchParams, }: { searchParams?: { filter?: string }; }) {
  const data = await getData({ searchParams: searchParams });

  return (
    <>
      {
        data.length === 0 ? (
          <NoItems description="Please check a other category or create your own listing!"
          title="Sorry no listings found for this category..." />
        ) : (
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {
              data.map((item) => (
                <ListingCard key={item.id} description={item.description as string} imagePath={item.photo as string} location={item.country as string} price={item.price as number} />
              ))
            }
          </div>
        )
      }
    </>
  )
}

function SkeletonLoading() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  )
}
