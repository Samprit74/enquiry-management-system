import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableHeadCell, TableCell, Button } from "flowbite-react";
import axios from "axios";
import { toast } from "react-toastify";
import './App.css';

const EnqueryTable = ({ data, getAllEnqueries, swal, setFormValue }) => {

  const deleteRow = (delId) => {
    swal.fire({
      title: "Do you want to save the change?",
      showDenyButton: true,
      showCancelButton:true,
      confirmButtonText: "Save",
    }).then((result) => {
      if (result.isConfirmed){
        axios.delete(`http://localhost:8000/api/website/enquiry/delete/${delId}`)
          .then(res => {
            toast.success("Enquery Deleted Successfully");
            getAllEnqueries();
          });
      } else if (result.isDenied) {
        swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const editRow = (editId) => {
    axios.get(`http://localhost:8000/api/website/enquiry/single/${editId}`)
      .then(res => setFormValue(res.data.enquery));
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Sr No</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Phone</TableHeadCell>
            <TableHeadCell>Message</TableHeadCell>
            <TableHeadCell>Edit</TableHeadCell>
            <TableHeadCell>Delete</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <TableRow
                key={item._id}
                className={`custom-row ${index % 2 === 0 ? 'row-even' : 'row-odd'}`}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.message}</TableCell>
                <TableCell><Button size="sm" color="blue" onClick={() => editRow(item._id)}>Edit</Button></TableCell>
                <TableCell><Button size="sm" color="red" onClick={() => deleteRow(item._id)}>Delete</Button></TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center text-white">No records found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default EnqueryTable;
