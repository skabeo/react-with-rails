import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetingSlice';
import { NavLink } from 'react-router-dom';

const Greeting = () => {
  const greeting = useSelector((store) => store.greeting)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting())
  }, [])

  if (greeting.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>{ greeting.greeting.message }</h3>
      <NavLink to='/'>Back</NavLink>
    </div>
  )
}

export default Greeting