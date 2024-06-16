"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';

const itemsPerPage = 20;

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const offset = (currentPage - 1) * itemsPerPage;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`);
      const data = await res.json();
      setPokemon(data.results);
      setTotalItems(data.count);
    };

    fetchData();
  }, [currentPage]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemon.map((p) => (
          <li key={p.name}>
            <Link href={p.url}>
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
} 