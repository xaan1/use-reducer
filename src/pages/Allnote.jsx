import React, { useContext } from 'react';
import { globalContext } from '../Contex';
import { useNavigate } from 'react-router-dom';

const Allnote = () => {
  const { state, dispatch } = useContext(globalContext);

   const navigate = useNavigate()

  return (
    <div className="p-4 mx-auto max-w-md">
      {state &&
        state.notes.map((note) => (
          <div
            key={note.id}
            className="bg-white shadow-md rounded-lg p-4 mb-4"
          >
            <h1 className="text-xl font-bold mb-2">{note.title}</h1>
            <p className="text-gray-700 mb-4">{note.content}</p>
            <div className='flex gap-x-3'>
            <button
              onClick={() =>
                dispatch({ type: 'DELETE_NOTE', payload: note.id })
              }
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => navigate(`/update/${note.id}`)
              }
              className="bg-blue-500 hover:bg-red-300 text-white py-2 px-4 rounded"
            >
              Update
            </button>
                </div>
            
          </div>
        ))}
    </div>
  );
};

export default Allnote;