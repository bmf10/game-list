'use client'
import Container from '@/components/Container'
import GameCard from '@/components/GameCard'
import { Game } from '@/types'
import axios from '@/utils/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import Image from 'next/image'
import { useState } from 'react'

const List = () => {
  const [genre, setGenre] = useState<string>()
  const { data } = useQuery<AxiosResponse<Game[]>>({
    queryKey: ['GET_GAME', genre],
    queryFn: (ctx) => {
      return axios.get(
        ``,
        genre
          ? { params: { category: genre }, signal: ctx.signal }
          : { signal: ctx.signal }
      )
    },
    retry: false,
  })

  return (
    <Container className="pt-10 " parentClassName="bg-slate-100">
      <div className="flex justify-between mb-10 gap-3 items-center">
        <h2 className="text-slate-700 text-2xl font-medium leading-9">
          Game Terbaru
        </h2>
        <div className="relative">
          <select
            onChange={(e) => setGenre(e.target.value)}
            className="px-4 py-3 bg-white rounded border border-slate-300 appearance-none relative  w-[180px] md:w-[234px]"
          >
            <option value="">Semua Genre</option>
            <option value="mmorpg">MMORPG</option>
            <option value="shooter">Shooter</option>
            <option value="pvp">PVP</option>
            <option value="mmofps">MMOFPS</option>
          </select>
          <Image
            src="/down.svg"
            width={24}
            height={24}
            alt="down"
            className="absolute right-4 top-3.5"
          />
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[34px] gap-y-6">
        {data?.data.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </section>
    </Container>
  )
}

export default List
