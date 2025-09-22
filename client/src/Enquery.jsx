import React, { useState, useEffect } from 'react';
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import EnqueryTable from './EnqueryTable';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import swal from 'sweetalert2/dist/sweetalert2.js';
import './App.css';
import WaveAnimation from "./animation/WaveAnimation.jsx";


const Enquery = () => {
  const [enqueryList, setEnqueryList] = useState([]);
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    _id: ''
  });

  const saveEnquery = (e) => {
    e.preventDefault();
    if (formValue._id) {
      axios.put(`http://localhost:8000/api/website/enquiry/update/${formValue._id}`, formValue)
        .then((res) => {
          toast.success('Enquery updated successfully');
          setFormValue({ name: '', email: '', phone: '', message: '', _id: '' });
          getAllEnqueries();
        });
    } else {
      axios.post('http://localhost:8000/api/website/enquiry/insert', formValue)
        .then((res) => {
          toast.success('Enquery saved successfully');
          setFormValue({ name: '', email: '', phone: '', message: '' });
          getAllEnqueries();
        });
    }
  };

  const getAllEnqueries = () => {
    axios.get('http://localhost:8000/api/website/enquiry/list')
      .then(res => res.data)
      .then(finalData => {
        if (finalData.status) {
          setEnqueryList(finalData.data);
        }
      })
      .catch(err => console.error("Error fetching enquiries:", err));
  };

  const getValue = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  useEffect(() => { getAllEnqueries(); }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <ToastContainer />
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6">

        {/* Left Panel - Form */}
        <div className="form-container flex flex-col gap-4">
          <h2>Enquery Form</h2>
          <p>Fill out this form and we will get back to you as soon as possible.</p>
          <form onSubmit={saveEnquery} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="name" value="Your Name" />
              <TextInput name="name" type="text" value={formValue.name} onChange={getValue} placeholder="Enter your name" required />
            </div>
            <div>
              <Label htmlFor="email" value="Your Email" />
              <TextInput name="email" type="email" value={formValue.email} onChange={getValue} placeholder="Enter your email" required />
            </div>
            <div>
              <Label htmlFor="phone" value="Your Phone" />
              <TextInput name="phone" type="text" value={formValue.phone} onChange={getValue} placeholder="Enter your phone" required />
            </div>
            <div>
              <Label htmlFor="message" value="Your Message" />
              <Textarea name="message" value={formValue.message} onChange={getValue} placeholder="Enter your message" required rows={4} />
            </div>
            <Button type="submit">{formValue._id ? "Update" : "Save"}</Button>
          </form>
        </div>

        {/* Right Panel - Animation */}

        <div className="animation-panel">
          <WaveAnimation enquiries={enqueryList} />
        </div>



        {/* Table below form */}
        <div className="table-container md:col-span-2">
          <EnqueryTable data={enqueryList} getAllEnqueries={getAllEnqueries} swal={swal} setFormValue={setFormValue} />
        </div>

      </div>
    </div>
  );
};

export default Enquery;
