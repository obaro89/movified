
import Like from './like'

const MoviesTable = ({onLike, onDelete, movies, onSort}) => {
    return ( 
         <table className="table table-striped">
            <thead>
               <tr>
                    <th onClick={() => onSort('title')}>Title</th>
                    <th onClick={() => onSort('genre.name')}>Genre</th>
                    <th onClick={() => onSort('numberInStock')}>Stock</th>
                    <th onClick={() => onSort('dailyRentalRate')}>Rental rate</th>
                    <th><i className="bi bi-heart"></i></th>
                     <th></th>
                </tr>                 
            </thead>
                            
            <tbody>
                {movies.map( (movie) => <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>{<Like movie={movie} handleLike={() => onLike(movie)} />}</td>
                <td><button onClick={() => {onDelete(movie)}} className='btn btn-sm btn-danger'>Delete</button>
                </td>             
                </tr>)}
                            
            </tbody>
                            

        </table>
     );
}
 
export default MoviesTable;