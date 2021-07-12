import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './pagination';
import {paginate} from '../utils/paginate'
import ListGroup from './listGroup';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import lodash from 'lodash';



class Movies extends Component {
    state = { 
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1,
        genres: getGenres(),
        selectedGenre: {
            name: 'All'
        },
        sortColumn: {
            path: 'title',
            order: 'asc'
        }
     }
     
     deleteHandler = (movie) => {
         const movies = this.state.movies.filter(m => m._id !== movie._id)
         this.setState({movies})
     }
     handleLike = (movie) => {
         let movies = [...this.state.movies]
         let index = movies.indexOf(movie)
         movie.like  = !movie.like
         movies[index] = movie
        this.setState({movies})         
         
     }
     handlePageChange = (page) => {
        this.setState({ currentPage: page})
     }
     handleGenreSelect = (genre) => {
        this.setState({selectedGenre: genre, currentPage: 1})
     }
     handleSort = (path) => {
         this.setState({sortColumn: { path, order: 'asc'}})
     }

    render() { 
         const { length: count } = this.state.movies;
         let {pageSize, currentPage, selectedGenre, movies:allMovies, sortColumn} = this.state
            if (count === 0) return <p>There are no Movies in the database!</p>

            let filtered = selectedGenre ? 
            allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies
            if(selectedGenre.name ==='All') filtered = allMovies
           const sorted = lodash.sortBy(filtered, [sortColumn.path], [sortColumn.order])
            const movies = paginate(sorted, currentPage, pageSize)
        return ( 
            <React.Fragment>
                <div className='row'>
                    <div className='col-2 m-2'>
                        <ListGroup
                         items={this.state.genres}
                        onItemSelect={this.handleGenreSelect}
                        selectedItem={this.state.selectedGenre}
                        />
                    </div>
                    <div className='col-8'>
                        <p>There are {filtered.length} movie(s) in the database</p>
                       <MoviesTable 
                            movies={movies} 
                            onLike={this.handleLike} 
                            onDelete={this.deleteHandler}
                            onSort={this.handleSort}
                            />
                    </div>
                
                </div>
            
            <Pagination 
                itemCount={filtered.length} 
                pageSize={this.state.pageSize} 
                currentPage={this.state.currentPage}
                onPageChange={this.handlePageChange}
            />
        </React.Fragment>
         );
    }
}
 
export default Movies;