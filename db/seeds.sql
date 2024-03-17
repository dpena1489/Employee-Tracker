\c employee_tracker;

INSERT INTO department (name) VALUES ('a'), ('b'), ('c');

INSERT INTO role (title,salary, department_id) VALUES 
('role a', 1000, 1),

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
