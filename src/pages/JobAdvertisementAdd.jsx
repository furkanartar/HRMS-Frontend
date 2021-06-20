import React, { useState, useEffect } from "react";
import "../assets/stylesheets/JobAdvertisementAdd.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { FormGroup, Input, Button, Label } from "reactstrap";
import JobAdvertisementService from './../services/jobAdvertisementService';
import WayOfWorkingService from './../services/wayOfWorkingService';


export default function JobAdvertisementAdd() {
    const [wayOfWorkings, setWayOfWorkings] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        let wayOfWorkingService = new WayOfWorkingService();

        wayOfWorkingService.getAll().then((response) => setWayOfWorkings(response.data));
    }, [])

    return (
        <div className="container">
            <div className="form">
                <Formik
                    initialValues={{
                        employer: "",
                        jobPosition: "",
                        city: "",
                        description: "",
                        minimumSalary: "",
                        maximumSalary: "",
                        numberOfPeopleToBeHired: "",
                        applicationDeadline: "",
                        wayOfWorking: "",
                        remote: "",
                    }}
                    validationSchema={Yup.object({
                        employer: Yup.number().required("Employer boş geçilemez"),
                        jobPosition: Yup.number().required("jobPosition boş geçilemez"),
                        city: Yup.number().required("city boş geçilemez"),
                        description: Yup.string().required("description boş geçilemez"),
                        minimumSalary: Yup.number(),
                        maximumSalary: Yup.number(),
                        numberOfPeopleToBeHired: Yup.number().required("numberOfPeopleToBeHired boş geçilemez"),
                        applicationDeadline: Yup.date().required("applicationDeadline boş geçilemez"),
                        wayOfWorking: Yup.number().required("wayOfWorking boş geçilemez"),
                        remote: Yup.bool()
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        console.log(values)
                        values.employer = { id: values.employer }
                        values.jobPosition = { id: values.jobPosition }
                        values.city = { id: values.city }
                        values.wayOfWorking = { id: values.wayOfWorking }
                        this.jobAdvertisementService.add(values).then((response) => console.log(response.data));
                        setTimeout(() => {
                            setSubmitting(false);
                            resetForm();
                        }, 1000);
                    }}
                >
                    {({
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleSubmit,
                        handleReset,
                        handleChange,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <FormGroup>
                                <h3>İş ilanı ekleme formu</h3>
                                <Input
                                    id="employer"
                                    type="text"
                                    placeholder="employer"
                                    value={values.employer}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                                {errors.employer && touched.employer && (
                                    <div>{errors.employer}</div>
                                )}
                            </FormGroup>

                            {/* <FormGroup>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup> */}

                            <FormGroup>
                                <Input
                                    id="jobPosition"
                                    type="text"
                                    placeholder="jobPosition"
                                    value={values.jobPosition}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                                {errors.jobPosition && touched.jobPosition && (
                                    <div>{errors.jobPosition}</div>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <Input
                                    id="city"
                                    type="text"
                                    placeholder="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                                {errors.city && touched.city && (
                                    <div>{errors.city}</div>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <Input
                                    id="wayOfWorking"
                                    type="select"
                                    placeholder="wayOfWorking"
                                    value={values.wayOfWorking}
                                    onChange={handleChange}
                                    defaultValue="true"
                                    className="form-input">
                                    <option value=""> Çalışma şeklinizi seçiniz </option>
                                    {wayOfWorkings.map((wayOfWorking) => (
                                        <option key={wayOfWorking.id} value={wayOfWorking.id}> {wayOfWorking.name} </option>
                                    ))}
                                </Input>
                            </FormGroup>

                            {/* <FormGroup>
                                <Input
                                    id="wayOfWorking"
                                    type="text"
                                    placeholder="wayOfWorking"
                                    value={values.wayOfWorking}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                                {errors.wayOfWorking && touched.wayOfWorking && (
                                    <div>{errors.wayOfWorking}</div>
                                )}
                            </FormGroup> */}

                            <FormGroup check>
                                <Label check>
                                    <Input id="remote" type="checkbox" value={values.remote} onChange={handleChange} className="form-input" /> Remote çalışıyoruz.
                                </Label>
                                {errors.remote && touched.remote && (
                                    <div>{errors.remote}</div>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <Input
                                    id="description"
                                    type="textarea"
                                    placeholder="description."
                                    value={values.description}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                                {errors.description && touched.description && (
                                    <div>{errors.description}</div>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <Input
                                    id="minimumSalary"
                                    type="text"
                                    placeholder="minimumSalary"
                                    value={values.minimumSalary}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                                {errors.minimumSalary && touched.minimumSalary && (
                                    <div>{errors.minimumSalary}</div>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <Input
                                    id="maximumSalary"
                                    type="text"
                                    placeholder="maximumSalary"
                                    value={values.maximumSalary}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                                {errors.maximumSalary && touched.maximumSalary && (
                                    <div>{errors.maximumSalary}</div>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <Input
                                    id="numberOfPeopleToBeHired"
                                    type="text"
                                    placeholder="numberOfPeopleToBeHired"
                                    value={values.numberOfPeopleToBeHired}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                                {errors.numberOfPeopleToBeHired && touched.numberOfPeopleToBeHired && (
                                    <div>{errors.numberOfPeopleToBeHired}</div>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <Input
                                    id="applicationDeadline"
                                    type="date"
                                    placeholder="applicationDeadline"
                                    value={values.applicationDeadline}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                                {errors.applicationDeadline && touched.applicationDeadline && (
                                    <div>{errors.applicationDeadline}</div>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <Button type="submit" to="/" disabled={!dirty || isSubmitting}>
                                    Kaydol
                                </Button>
                                {errors.submit && touched.submit && (
                                    <div>{errors.submit}</div>
                                )}
                            </FormGroup>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
