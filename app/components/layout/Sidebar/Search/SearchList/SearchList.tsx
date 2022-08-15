import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import { getMovieUrl } from '@/configs/url.config'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <div className={styles.list}>
      {movies.length ? (
        movies.map((movie) => (
          <Link key={movie._id} href={getMovieUrl(movie.slug)}>
            <a>
              <Image
                src={movie.poster}
                width={50}
                height={50}
                alt={movie.title}
                objectFit="cover"
                objectPosition="top"
                draggable={false}
              />
              <span>{movie.title}</span>
            </a>
          </Link>
        ))
      ) : (
        <div className="my-4 text-center text-white">Movies not found</div>
      )}
    </div>
  )
}
export default SearchList
