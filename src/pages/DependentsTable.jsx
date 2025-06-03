import React from 'react';

const DependentsTable = () => {
  const dependents = [
    { name: 'XXXXXXXXXa', relation: 'Spouse', dob: 'DD-MM-YYYY' },
  
  ];

  return (
    <div>
      <div className="mb-3 text-muted">
        Home &gt; <span className="fw-bold text-dark">Dependents Details</span>
      </div>
      <h5 className="fw-bold mb-3">Dependents Details</h5>
      <div className="table-responsive bg-white shadow rounded">
        <table className="table table-bordered mb-0">
          <thead className="table-primary">
            <tr>
              <th>Sr no</th>
              <th>Dependent Name</th>
              <th>Relation</th>
              <th>Date of Birth</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dependents.map((d, i) => (
              <tr key={i}>
                <td>{`0${i + 1}`}</td>
                <td>{d.name}</td>
                <td>{d.relation}</td>
                <td>{d.dob}</td>
                <td><i className="bi bi-eye"></i></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DependentsTable;
