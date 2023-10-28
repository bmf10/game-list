import { Game } from '@/types'
import Image from 'next/image'
import { FC } from 'react'

interface Props {
  readonly game: Game
}

const GameCard: FC<Props> = ({ game }) => {
  return (
    <div className="px-3 pt-3 pb-6 bg-white rounded-lg shadow border border-slate-200 flex-col justify-start items-start gap-3 inline-flex">
      <div className="w-full relative">
        <Image
          src={game.thumbnail}
          width={354}
          height={184}
          alt="game-img"
          className="rounded"
          layout="responsive"
          loading="lazy"
        />
        <span className="absolute bottom-3 left-3 text-blue-950 text-sm font-semibold px-3 py-1 bg-blue-200 rounded-full">
          {game.genre}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-slate-700 text-xl font-normal leading-[30.20px]">
          {game.title}
        </h3>
        <p className="text-slate-700 text-base font-normal leading-normal line-clamp-2">
          {game.short_description}
        </p>
      </div>
      <div className="border-t border-slate-100 w-full pt-4 flex">
        <div className="flex-1">
          <h4 className="text-gray-400 text-sm font-normal leading-[21.14px]">
            Platform
          </h4>
          <p className="text-slate-700 text-base font-normal leading-normal">
            {game.platform}
          </p>
        </div>
        <div className="flex-1">
          <h4 className="text-gray-400 text-sm font-normal leading-[21.14px]">
            Release Date
          </h4>
          <p className="text-slate-700 text-base font-normal leading-normal">
            {game.release_date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default GameCard
