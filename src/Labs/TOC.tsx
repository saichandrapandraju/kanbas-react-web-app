import React from 'react';
import { Link } from 'react-router-dom';

const TOC = () => {
  return (
    <div className="container mt-4">
      <nav className="card shadow-sm">
        <div className="card-header bg-danger text-white">
          <h5 className="mb-0">Navigation Menu</h5>
        </div>
        <div className="card-body">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link 
                to="/Labs" 
                className="nav-link text-danger hover:bg-danger-100 rounded"
              >
                <i className="fas fa-flask me-2"></i>
                Labs
              </Link>
            </li>
            {[1, 2, 3, 4, 5].map((labNumber) => (
              <li className="nav-item ms-3" key={labNumber}>
                <Link 
                  to={`/Labs/Lab${labNumber}`}
                  className="nav-link text-secondary hover:bg-gray-100 rounded"
                >
                  <i className="fas fa-angle-right me-2"></i>
                  Lab {labNumber}
                </Link>
              </li>   
            ))}
            <li className="nav-item mt-2">
              <Link 
                to="/Kanbas" 
                className="nav-link text-danger hover:bg-gray-100 rounded"
              >
                <i className="fas fa-tasks me-2"></i>
                Kanbas
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TOC;