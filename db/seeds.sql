INSERT INTO department (name)
VALUES ("Managment"), 
        ("Human Resources"),
        ("Sales"), 
        ("Impact");

INSERT INTO role (title, salary, department_id)
VALUES ("General Manager", 120000.00, 1),
        ("Assistant Manager", 100000.00, 1),
        ("Store Manager", 80000.00, 1),
        ("Impact Manager", 85000.00, 1),
        ("Human Resources Represenative", 90000, 2),
        ("Sales Supervisor", 65000.00, 3),
        ("Sales Consultant", 50000.00, 3),
        ("Sales Associate", 45000.00, 3),
        ("Impact Supervisor", 70000.00, 4),
        ("Impact Associate", 50000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Olivia", "Hanson", 1, NULL),
        ("Andrew", "Calihan", 2, 1),
        ("Alyssa", "Morgan", 3, 2),
        ("Kait", "Kellogg", 3, 2),
        ("Sekou", "Savane", 4 , 1),
        ("Ruthie", "Kim", 4 , 1),
        ("Garret", "Matthews", 5, 1),
        ("Mia", "Ferrace", 6, 3),
        ("Andy", "Hull", 6, 3),
        ("August", "Grason", 6, 3),
        ("Robert", "Miller", 7, 4),
        ("Britnay", "Tarson", 7, 4),
        ("Tyler", "Park", 8, 4),
        ("Nina", "Richards", 8, 4),
        ("Michelle", "Yeoh", 8, 4),
        ("Susan", "Walsh", 9, 5),
        ("Kevin", "Cari", 9, 5),
        ("Amy", "Design", 10, 6),
        ("Mike", "King", 10, 6),
        ("Sarah", "Press", 10, 6),
        ("Isabelle", "McCarthy", 10, 6);


