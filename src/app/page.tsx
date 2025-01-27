import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fuels, yearsOfProduction } from "@/constants";
import {  CarProps } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home() {

  const allcars = await fetchCars();
  console.log(allcars);
  const isCarrsEmpty = !Array.isArray(allcars) || allcars?.length < 1 || !allcars

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="home__filters">
        <SearchBar />
        <div className='home__filter-container'>
          <CustomFilter title='fuel' options={fuels} />
          <CustomFilter title='year' options={yearsOfProduction} />
        </div>
      </div>
      <section>
        {!isCarrsEmpty ? (
          <div className='home__cars-wrapper'>
            {allcars?.map((car: CarProps) => (
              <CarCard car={car} />
            ))}
          </div>
        ) :
          < div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allcars?.message}</p>
          </div>
        }

      </section>
    </main >
  );
}
