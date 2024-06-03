import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { CartContext } from '../context/CartContext';

// Function to prefetch todos data
const prefetchTodos = async (queryClient) => {
  await queryClient.prefetchQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 5000
  });
};

// const prefetchTodos = async () => {
//   // The results of this query will be cached like a normal query
//   await queryClient.prefetchQuery('todos', fetchTodos)
// }

// Function to fetch todos data
const fetchTodos = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data;
};

function Data() {
  const queryClient = useQueryClient();

  useEffect(() => {
    prefetchTodos(queryClient);
  }, [queryClient]);

  const { data, error, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  const [searchTerm, setSearchTerm] = useState('');

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (todo) => {
    addToCart(todo);  // Assuming addToCart takes the todo object as a parameter
    navigate(`/todos/${todo.id}`);
  };

  const filteredTodos = data?.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const pstyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <>
      <div className='search-data'>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='container'>
        <div className='row'>
          {filteredTodos.map(todo => (
            <div key={todo.id} className='col-md-4 shopping'>
              <div className='data-shopping'>
                <Link to={`/products/${todo.id}`}>
                  <img src="https://via.placeholder.com/150" alt='Card image cap' />
                </Link>
                <div className='shopping-content'>
                  <h2 dangerouslySetInnerHTML={{ __html: todo.title }}></h2>
                  <p style={pstyle} dangerouslySetInnerHTML={{ __html: todo.completed ? 'Completed' : 'Not Completed' }}></p>
                  <button 
                    className='textCenter' 
                    onClick={() => handleAddToCart(todo)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Data;
