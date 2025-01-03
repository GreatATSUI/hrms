import React from "react";
import '../css/dashboard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faBell, faCircleUser, faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="app">
                <div className="sidebar">
                    <h5><FontAwesomeIcon icon={faLaptop} className="lapicon" />Leave Management <span>System</span></h5>
                    <ul>
                        <li>Dashboard</li>
                        <li>Apply Leave</li>
                        <li>Leaves Left</li>
                    </ul>
                </div>
                <div className="main-content">
                    <div className="header-section">
                        <h1>Dashboard</h1>
                        <div className="search-bar">
                            <input type="text" placeholder="Search..." />
                            <button type="button">Search</button>
                        </div>
                        <div><FontAwesomeIcon icon={faBell} className="bellicon" /><FontAwesomeIcon icon={faEnvelope} className="envelopeicon" /><FontAwesomeIcon icon={faCircleUser} className="bellicon" /></div>

                    </div>

                    <div className="stats-cards">
                        <div className="card">
                            <h5>Today's Leaves</h5>
                            <h3>5</h3>
                        </div>
                        <div className="card">
                            <h5>No.of Leaves Approved</h5>
                            <h3>4</h3>
                        </div>
                        <div className="card">
                            <h5>Total Sick Leaves</h5>
                            <h3>3</h3>
                        </div>
                        <div className="card">
                            <h5>Casual Leaves</h5>
                            <h3>1</h3>
                        </div>
                    </div>

                    <div className="table-section">
                        <h5>Recent Leaves</h5>
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Leave Type</th>
                                        <th>Leave Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Sathvik</td>
                                        <td>Sick</td>
                                        <td className="text-success">Completed</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Swamy</td>
                                        <td>Casual</td>
                                        <td className="text-danger">Pending</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Akhilesh</td>
                                        <td>Pay</td>
                                        <td className="text-success">Completed</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Harsha</td>
                                        <td>Pay</td>
                                        <td className="text-success">Completed</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Vijay</td>
                                        <td>Casual</td>
                                        <td className="text-success">Completed</td>
                                    </tr>
                                </tbody>
                            </table>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-end">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="additional-cards">
                        <div className="card">
                            <h5>Leaves</h5>
                            <h3>10</h3>
                        </div>
                        <div className="card">
                            <h5>Events</h5>
                            <h3>10</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;