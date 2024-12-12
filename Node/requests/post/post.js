
app.post('/api/greet', (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).json({ message: `Hello ${name}` });
  } else {
    res.status(404).json({ message: 'Please Provide user name' });
  }
});

app.listen(PORT, () => {
  console.log('Server is runnunig on port ' + PORT);
});

// Types of Joins in MySQL with Examples
SELECT 
    Employees.Name AS EmployeeName,
    Departments.DepartmentName
FROM 
    Employees
INNER JOIN 
    Departments
ON 
    Employees.DepartmentID = Departments.DepartmentID;

////////////////////////////////////////////////////////////////
// LEFT JOIN (LEFT OUTER JOIN)
    SELECT 
    Employees.Name AS EmployeeName,
    Departments.DepartmentName
FROM 
    Employees
LEFT JOIN 
    Departments
ON 
    Employees.DepartmentID = Departments.DepartmentID;

    /// RIGHT JOIN (RIGHT OUTER JOIN)
    SELECT 
    Employees.Name AS EmployeeName,
    Departments.DepartmentName
FROM 
    Employees
RIGHT JOIN 
    Departments
ON 
    Employees.DepartmentID = Departments.DepartmentID;


    ////FULL OUTER JOIN (Not directly supported in MySQL, but can be simulated using UNION)

    SELECT 
    Employees.Name AS EmployeeName,
    Departments.DepartmentName
FROM 
    Employees
LEFT JOIN 
    Departments
ON 
    Employees.DepartmentID = Departments.DepartmentID
UNION
SELECT 
    Employees.Name AS EmployeeName,
    Departments.DepartmentName
FROM 
    Employees
RIGHT JOIN 
    Departments
ON 
    Employees.DepartmentID = Departments.DepartmentID;


    // CROSS JOIN
    SELECT 
    Employees.Name AS EmployeeName,
    Departments.DepartmentName
FROM 
    Employees
CROSS JOIN 
    Departments;
