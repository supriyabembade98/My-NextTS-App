"use client";
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image';


const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={"/magnifying-glass.svg"}
        alt={"magnifying glass"}
        width={40}
        height={40}
        className='object-contain'
      />
    </button>
  );

function SearchBar() {
const [manufacturer,setManufacturer] =useState('')

    const handleSearch =()=>{

    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
<div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManufacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
    </form>
  )
}

export default SearchBar