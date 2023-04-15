import { useState } from "react";
import { data } from "./data";
function Employee() {
    const [employee, setEmployee] = useState(JSON.parse(localStorage.getItem("employees")) || data);
    const [select, setSelect] = useState(JSON.parse(localStorage.getItem("team")) || "teamA");
    function selectTeamHandler(e) {
        setSelect(e.target.value);
    }
    function handleTeamClick(e) {
        const transformTeam = employee.map((cur) => cur.id === parseInt(e.currentTarget.id) ? (cur.team === select) ? { ...cur, team: "" } : { ...cur, team: select } : cur);
        setEmployee(transformTeam);
        localStorage.setItem("employees", JSON.stringify(transformTeam));
        localStorage.setItem("team", JSON.stringify(select));
    }
    return (
        <div className="container-fluid mt-4">
            <div className="row mb-4 justify-content-center">
                <div className="col-6">
                    <select className="form-select form-select-md" style={{ cursor: "pointer" }} value={select} onChange={selectTeamHandler}>
                        <option value="teamA">TeamA</option>
                        <option value="teamB">TeamB</option>
                        <option value="teamC">TeamC</option>
                        <option value="teamD">TeamD</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex">
                    <div className="row justify-content-center">
                        {
                            employee.map((cur) => {
                                return (
                                    <div className={cur.team === select ? "col-6 col-sm-6 col-md-4 col-lg-3 border border-2 border-success" : "card col-6 col-sm-6 col-md-4 col-lg-3"} style={{ height: "400px", margin: "3px", cursor: "pointer" }} id={cur.id} key={cur.id} onClick={handleTeamClick}>
                                        <div style={{ width: "100%", height: "200px" }}>
                                            {
                                                cur.gender === "male" ? <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" className="card-img-top" alt="card-img-top" style={{ width: "100%", height: "100%" }} /> : <img src="https://spng.pngfind.com/pngs/s/114-1146554_girl-avatar-png-pic-female-avatar-icon-transparent.png" className="card-img-top" alt="card-img-top" style={{ width: "100%", height: "100%" }} />
                                            }
                                        </div>
                                        <div className="card-body">
                                            <h4 className="fs-5 fw-bold">Employee details</h4>
                                            <p className="card-text"><b>Designation</b> {cur.designation}</p>
                                            <p className="card-text">Name : {cur.name}</p>
                                            <p className="card-text">Gender : {cur.gender}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Employee;