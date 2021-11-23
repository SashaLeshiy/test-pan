import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import api from '../../utils/TableApi'
import _ from 'lodash';
import Second from '../../components/Second/Second';
import './App.css';
import Main from '../Main/Main';


function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(50);

  const [stateUser, setStateUser] = useState(
    [{ data: { text: '', fname: '', lname: '', email: '' }, _id: Number(currentPage+'0') }]
  );

  const [sort, setSort] = useState('desc');

  const lastUsersIndex = currentPage * usersPerPage;
  const firstUsersIndex = lastUsersIndex - usersPerPage;
  const currentUsers = stateUser.slice(firstUsersIndex, lastUsersIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  // деактивированная функция подгрузки демо контента 
  // function loadDemo() {
  //   api.getList()
  //           .then((res) => {
  //               setStateUser({data: res});
  //           })
  //           .catch((err) => {
  //               console.log(err);
  //           });
  // }


  const onSort = (sortElement) => {
    let emptyField = stateUser.filter(el => 
      el.data[sortElement.target.name] === ''
      );
    let nonEmptyField = stateUser.filter(el => 
      el.data[sortElement.target.name] !== ''
      );
    localStorage.setItem('nonEmptyField', JSON.stringify(nonEmptyField));

    const cloneUsers = JSON.parse(localStorage.getItem('nonEmptyField')).concat();

    const sortUsers = sort === 'asc' ? 'desc' : 'asc';
    const orderedUsers = _.orderBy(cloneUsers, item => 
      item.data[sortElement.target.name], 
      sortUsers
      );
    setSort(sortUsers);

    setStateUser([...orderedUsers, ...emptyField]);
  }

  const addForm = () => {
    setStateUser([...stateUser,
    {
      data: { text: '', fname: '', lname: '', email: '' },
      _id: Number(`${currentPage}${stateUser.length}`)
    }
    ]);
  }

  const deleteEmpty = () => {
    setStateUser(JSON.parse(localStorage.getItem('nonEmptyField')));
  }

  return (
    <div className="app">
      <Routes >
        <Route path="/" element={
          <Main onSort={onSort}
            currentUsers={currentUsers}
            stateUser={stateUser}
            setStateUser={setStateUser}
            currentPage={currentPage}
            usersPerPage={usersPerPage}
            paginate={paginate}
            addForm={addForm}
            deleteEmpty={deleteEmpty}
          />
        }>
        </Route>
        <Route exact path="/second" element={<Second />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
