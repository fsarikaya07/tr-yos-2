import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Select from 'react-select';
import {data} from "../../helper/data";
import DepertmentsCard from './DepertmentsCard';
import '../Style/Departmants.css'
const Departments = () => {
  const cities = [
    {
      value: 'Ankara',
      label: 'Ankara',
    },
    {
      value: 'İstanbul',
      label: 'İstanbul',
    },
    {
      value: 'Bursa',
      label: 'Bursa',
    },
    {
      value: 'Balıkesir',
      label: 'Balıkesir',
    },
    {
      value: 'Bolu',
      label: 'Bolu',
    },
  ]
  const universities = [
    {
      value: 'Abant İzzet Baysal',
      label: 'Abant İzzet Baysal',
    },
    {
      value: 'Abdullah Gül University',
      label: 'Abdullah Gül University',
    },
    {
      value: 'Ethnology University',
      label: 'Acıbadem University',
    },
    {
      value: 'Alpaslan Türkeş Bilim ve Teknoloji',
      label: 'Alpaslan Türkeş Bilim ve Teknoloji',
    },
    {
      value: 'Uludağ University',
      label: 'Uludağ University',
    },
  ]
  const departmants = [
    {
      value: 'Turkish Folklore',
      label: 'Turkish Folklore',
    },
    {
      value: 'Archaeology',
      label: 'Archaeology',
    },
    {
      value: 'Ethnology',
      label: 'Ethnology',
    },
    {
      value: 'Biology',
      label: 'Biology',
    },
    {
      value: 'Dentist',
      label: 'Dentist',
    },
  ]
  return (
    <div>
    <div className="infoDiv mt-5 p-5 mb-2 bg-primary text-white ">
       <h2 className=" page-title fw-bold mx-5">Departmants</h2>
       
     </div>
     <Container>
   
     <Row className='d-flex '>  
  <div className='d-flex '>
{/* ********************form start************************ */}
<Col xs={0} md={0} lg={4} xl={3} >
<Form className='d-none d-lg-block row w-100 mt-5 p-3 text-start  bg-body rounded-4  align-items-center border d-inline-flex '
>
<div className='select col-12  mb-3 ' >
<Select
placeholder="Select City"
className=' w-100  '
isMulti
options={cities}
/>
</div>
<div className='select col-12 mb-3 '>
<Select
placeholder="Select University"
className='w-100'
isMulti
options={universities}
/>
</div>
<div className='select col-12 mb-3 '>
<Select
placeholder="Select Departmant"
className=' w-100 '
isMulti
options={departmants}
/>
</div>
<div className='d-flex align-items-center'>
<Form.Group className='flex-grow-1'>
 <Form.Control type='text' placeholder='Min Price' className='p-3' />
</Form.Group>
<span className='mx-2'></span>
<Form.Group className='flex-grow-1'>
 <Form.Control type='text' placeholder='Max Price' className='p-3' />
</Form.Group>
</div>
<h6 className='mt-5 '><strong>Advance Features</strong></h6>
<div className='d-flex justify-content-between mt-2'>
<div className='options-left'>
<Form.Group className="mb-1" >
<Form.Check type="checkbox" label="options 1" />
</Form.Group>
<Form.Group className="mb-1" >
<Form.Check type="checkbox" label="options 3" />
</Form.Group>
<Form.Group className="mb-1" >
<Form.Check type="checkbox" label="options 5" />
</Form.Group>
<Form.Group className="mb-1" >
<Form.Check type="checkbox" label="options 7" />
</Form.Group>
<Form.Group className="mb-1" >
<Form.Check type="checkbox" label="options 9" />
</Form.Group>
</div>
<div className='options-right'>
<Form.Group className="mb-1 fs-" >
<Form.Check type="checkbox" label="options 2" />
</Form.Group>
<Form.Group className="mb-1" >
<Form.Check type="checkbox" label="options 4" />
</Form.Group>
<Form.Group className="mb-1" >
<Form.Check type="checkbox" label="options 6" />
</Form.Group>
<Form.Group className="mb-1" >
<Form.Check type="checkbox" label="options 8" />
</Form.Group>
</div>
</div>
<Button variant="primary" type="submit" className='p-3 mt-4'>
Submit Search
</Button>
</Form>
</Col>
{/* ********************form end****************** */}
{/* *****************card start************************* */}
<Col xs={12} sm={12} md={12} lg={8} xl={9}>
<Container className=" rounded-4 mt-2 p-4 " >
<Row className="">
{data.map((item)=>{
return(
<Col sm={12} md={6} lg={6}>
<DepertmentsCard {...item}/>
</Col>
)
})}
</Row>
</Container>
</Col>

{/* ****************card end******************** */}
</div></Row>
 </Container>
 </div>
  )
}
export default Departments