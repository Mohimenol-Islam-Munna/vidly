import React, { useState } from 'react'
import { getMovies } from '../services/fakeMovieService'
import Like from "./Like"
import Pagination from './Pagination'
import { paginate } from '../Utils/Paginate'


function MovieComponent() {

    const [movieState, setMovieState] = useState({
        movies: getMovies(),
        moviePerPage: 4,
        currentPage: 1,
        start: 1,
        end: 5,
    })

    let movies = paginate(movieState.movies, movieState.currentPage, movieState.moviePerPage);

    const deleteMovieHandler = (id) => {

        let filteredMovie = movieState.movies.filter(movie => {
            return movie._id !== id
        })

        setMovieState({
            ...movieState,
            movies: filteredMovie,
        })
    }

    const PageChangeHandler = (page) => {

        if (page) {
            setMovieState({
                ...movieState,
                currentPage: page,
                // start: movieState.start + 4,
                // end: movieState.moviePerPage * page + 1,
            })
        }
        // console.log("change movie page to ", page)
    }

    return (
        <div className="mt-5 p-3">
            <div className="container">
                <h2>Showing {movies.length} movies in the Database.</h2>
                <div className="mt-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movies.map(movie => {
                                    return (
                                        <tr key={movie._id}>
                                            <td>
                                                {movie.title}
                                            </td>
                                            <td>
                                                {movie.genre.name}
                                            </td>
                                            <td>
                                                {movie.numberInStock}
                                            </td>
                                            <td>
                                                {movie.dailyRentalRate}
                                            </td>
                                            <td>
                                                <Like />
                                                <button className="btn  btn-danger" onClick={() => deleteMovieHandler(movie._id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <Pagination
                    totalMovies={movieState.movies.length}
                    moviePerPage={movieState.moviePerPage}
                    onPageChangeHandler={PageChangeHandler}
                    currentPage={movieState.currentPage}
                />
            </div>
        </div>
    )
}

export default MovieComponent
