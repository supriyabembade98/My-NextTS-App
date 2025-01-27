"use client"
import { SearchManuFacturerProps } from '@/types'
import React, { useState, Fragment } from 'react'
import { Combobox, Transition, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import Image from 'next/image'
import { manufacturers } from '@/constants'

function SearchManufacturer(props: SearchManuFacturerProps) {
    const [query, setQuery] = useState("")

    const filteredManufacturers =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) =>
                item
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            );


    return (
        <div className='search-manufacturer'>
            <Combobox value={props.manufacturer} onChange={props.setManuFacturer}>
                <div className='realtive w-full'>
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image
                            src="/car-logo.svg"
                            alt="car logo"
                            width={20}
                            height={20}
                            className='ml-4'
                        />
                    </Combobox.Button>
                    <ComboboxInput
                        className='search-manufacturer__input'
                        placeholder='volkswagen'
                        displayValue={(item: string) => item}
                        onChange={(e) => { setQuery(e.target.value) }}
                    />

                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery('')}
                    >
                        <ComboboxOptions
                            static
                            className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'

                        >
                            {filteredManufacturers.length === 0 && query !== "" ? (
                                <ComboboxOption
                                    value={query}
                                    className='search-manufacturer__option'
                                >
                                    Create "{query}"
                                </ComboboxOption>
                            ) : (
                                filteredManufacturers.map((item) => (

                                    <ComboboxOption
                                        key={item}
                                        value={item}
                                        className={({ active }) =>
                                            `relative search-manufacturer__option ${active ? "bg-primary-blue text-white" : "text-gray-900"
                                            }`
                                        }
                                    >
                                        {item}
                                    </ComboboxOption>
                                ))
                            )
                            }
                        </ComboboxOptions>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer