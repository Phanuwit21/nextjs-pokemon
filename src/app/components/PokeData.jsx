"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';

const itemsPerPage = 20;

function PokeData() {

    const [poke, setPoke] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    console.log("Data from state: ", poke)

    useEffect(() => {
        setLoading(true);
        const fetchPokeData = async () => {
            const offset = (currentPage - 1) * itemsPerPage;
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`);
            const data = await res.json();
            setPoke(data.results);
            setTotalItems(data.count);
            setLoading(false);
        }
        fetchPokeData();
    }, [currentPage])



    return (
        <div className='container text-center mx-auto'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='grid grid-cols-5'>
                    {poke.map((val, index) => (
                        <Link key={val.name} href={`/pokeinfo/[id]`} as={`/pokeinfo/${val.url.split("/")[6]}`}>
                            <div key={index} className='flex justify-center items-center shadow-md trasition cursor-pointer hover:shadow-lg m-3 rounded-md'>
                                <div>
                                    <h3>{val.name}</h3>
                                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${val.url.split("/")[6]}.png`} width={100} height={100} alt='val.name' />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            <div className="pagination flex flex-row gap-4 justify-center my-10">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={``}
          >
            {page}
          </button>
        ))}
      </div>
        </div>
    )
}

export default PokeData