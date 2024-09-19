import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.png" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/2345/Home">
                        <img src="/images/database.jpeg" width={200} />
                        <div>
                            <h5>
                                CS2345 Database Management Systems
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Database Engineer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>

                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/3456/Home">
                        <img src="/images/algorithms.jpeg" width={200} />
                        <div>
                            <h5>
                                CS3456 Algorithms
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Algorithms Engineer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/4567/Home">
                        <img src="/images/ml.jpeg" width={200} />
                        <div>
                            <h5>
                                CS4567 Machine Learning
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Machine Learning Engineer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/5678/Home">
                        <img src="/images/nlp.jpeg" width={200} />
                        <div>
                            <h5>
                                CS5678 Natural Language Processing
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Natural Language Processing Engineer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/6789/Home">
                        <img src="/images/pdp.jpeg" width={200} />
                        <div>
                            <h5>
                                CS6789 Parallel Data Processing
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Data Engineer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/7890/Home">
                        <img src="/images/mad.jpeg" width={200} />
                        <div>
                            <h5>
                                CS7890 Mobile Application Development
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Mobile App Developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/8901/Home">
                        <img src="/images/security.jpeg" width={200} />
                        <div>
                            <h5>
                                CS8901 Security and Vulnerabilities in Software Systems
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Security Engineer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
