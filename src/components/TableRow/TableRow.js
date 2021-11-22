import React from 'react';

function TableRow({ user, stateUser, setStateUser, _id }) {

    const addData = (e) => {
        const { name, value, } = e.target;
        const list = [...stateUser];
        const element = list.find(item => item._id === _id);
        element.data[name] = value;
        setStateUser(list);
        let nonEmptyData = list.filter(el => el[name] !== '');
        localStorage.setItem('nonEmptyField', JSON.stringify(nonEmptyData));
    }

    return (
        <tr key={_id}>
            <td><textarea
                name="text"
                value={user.data.text}
                className="form-control"
                type="text"
                onChange={addData}
                rows="3"
            /></td>
            <td><input
                name="fname"
                value={user.data.fname}
                className="form-control"
                type="text"
                onChange={addData}
            /></td>
            <td><input
                name="lname"
                value={user.data.lname}
                className="form-control"
                type="text"
                onChange={addData}
            /></td>
            <td><input
                name="email"
                value={user.data.email}
                className="form-control"
                type="email"
                onChange={addData}
            /></td>
            
        </tr>
    );
}

export default TableRow;