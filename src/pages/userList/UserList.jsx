import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";

const UserList = () => {
  const [data,setData]=useState(userRows);

  const handleDelete=(id)=>{
    setData(data.filter(item=> item.id !== id))
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "user", headerName: " User", width: 200, renderCell:(params)=>{
      return (
        <div className="user_List">
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
    }},
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
        field: "transactions",
        headerName: "Transactions",
        width: 160,
      },
      {
        field:"action",
        headerName:"Transaction Volume",
        width:150,
        renderCell:(params)=>{
          return(
            <>
            <Link to={"user/" + params.row.id}>
            <button className="userListEdit">Edit</button>
            </Link>
             <DeleteOutlineIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
             </>
          )
        }
      }
  ];

  

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[8, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
