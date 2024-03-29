import React, { useState } from 'react';
import "./productlist.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [data,setData]=useState(productRows);

    const handleDelete=(id)=>{
      setData(data.filter(item=> item.id !== id))
    }
    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      { field: "product", headerName: " Product", width: 200, renderCell:(params)=>{
        return (
          <div className="product_List">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
      }},
      { field: "stock", headerName: "Stock", width: 200 },
      {
        field: "status",
        headerName: "Status",
        width: 120,
      },
      {
          field: "price",
          headerName: "Price",
          width: 160,
        },
        {
          field:"action",
          headerName:"Transaction Volume",
          width:150,
          renderCell:(params)=>{
            return(
                <>
                <Link to={"product/" + params.row.id}>
                <button className="productListEdit">Edit</button>
                </Link>
                 <DeleteOutlineIcon className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
                 </>
              )
            }
          }
      ];
    
  return (
    <div className="productList">
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
  )
    };


export default ProductList