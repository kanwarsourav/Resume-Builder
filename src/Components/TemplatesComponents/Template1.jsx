import React from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

function Template1() {
    const dataStore = useSelector(state => state.dataStore);

    return (
        <div className="px-1" style={{ backgroundColor: "white", height: 'auto', display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1 }}>
                <div className="d-flex m-0  justify-content-between align-content-center ">
                    {dataStore.imageFile ? (
                        <div className="col-2 text-center media">
                            <img
                                className="rounded align-self-center mx-auto"
                                src={dataStore.imageFile}
                                alt='profile-pic'
                                style={{ maxHeight: '180px', minHeight: "120px", width: '100px', background: 'grey', padding: 0 }}
                            />
                        </div>
                    ) : (
                        <div className="col-2" style={{ visibility: 'hidden', display: 'none' }} /> // Use visibility to maintain layout
                    )}
                    <div className={dataStore.imageFile ? "col-6 text-left font-weight-bold" : " text-left font-weight-bold"} style={{ fontFamily: "Serif" }}>
                        <div className='' style={{ color: "#00adb5", fontSize: "55px" }}>
                            {dataStore.personalInfo.firstName + " " + dataStore.personalInfo.lastName}
                        </div>
                        <h5 className='d-flex justify-content-center'>{dataStore.workEx[dataStore.workEx.length - 1].title}</h5>
                    </div>
                    <div className=""  >
                        <div className='p-3' style={{ fontSize: "25px",}}>
                            <div>{dataStore.personalInfo.Email}</div>
                            <div>{dataStore.personalInfo.Mobile}</div>
                            <div>{dataStore.personalInfo.Address1 + ", " + dataStore.personalInfo.Address2
                                + ",  " + dataStore.personalInfo.City + ", " + dataStore.personalInfo.State + ", " + dataStore.personalInfo.Pin}
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
                <div className="text-justify mx-4" style={{ fontSize: "25px" }}>{dataStore.personalInfo.Objective}</div>
                <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />

                <div className="container" style={{ fontFamily: "Serif", }}>
                    <div className="row">
                        <div className="col-3 text-left" style={{ color: "#00adb5" }}> <h4> Professional Experience</h4></div>
                        <div className="col-9 text-left" style={{ fontSize: "25px" }}>
                            {dataStore.workEx.map((item) => {
                                return (
                                    <div key={shortid.generate()}>
                                        <div className='mt-2'><b>{item.title}</b></div>
                                        <div className='mt-2'>
                                            Worked in {item.orgName} from {item.startYear} to {item.endYear}.
                                        </div>
                                        <div>{item.jobDescription}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="w-100 mt-4"> </div>
                        <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
                        <div className="col-3 text-left" style={{ color: "#00adb5" }}><h4>Education</h4></div>
                        <div className="col-9 text-left">
                            <div style={{ fontSize: "25px" }}>
                                {dataStore.education.map((item) => {
                                    return (
                                        <div key={shortid.generate()}>
                                            <b> {item.Degree}</b>
                                            <div> I have pursued my {item.Type} in {item.Degree} from {item.University}</div>
                                            <p>Duration: {" " + item.Start + " - " + item.End}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="w-100 mt-4"> </div>
                        <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
                        <div className="col-3 text-left ">
                            <h4 style={{ color: "#00adb5" }}>Key Skills</h4>
                        </div>
                        <div className="col-9 text-left" style={{ fontSize: "25px" }}>
                            {dataStore.skills.map((skill) => {
                                return (
                                    <div key={shortid.generate()}>
                                        <li style={{ listStyle: "none" }}>{skill.skillName}</li>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template1