const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Prepare Sales Report",
                "task_description": "Prepare the Q2 sales report.",
                "task_date": "2025-08-01",
                "task_category": "Reporting"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Client Meeting",
                "task_description": "Meeting with client ABC Ltd.",
                "task_date": "2025-07-29",
                "task_category": "Meeting"
            },
            {
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true,
                "task_title": "Update CRM Data",
                "task_description": "Input recent leads into CRM.",
                "task_date": "2025-07-28",
                "task_category": "Data Entry"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Design Homepage",
                "task_description": "Design the new homepage for the website.",
                "task_date": "2025-08-02",
                "task_category": "Design"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Logo Update",
                "task_description": "Refresh company logo for Q3 branding.",
                "task_date": "2025-07-31",
                "task_category": "Branding"
            },
            {
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true,
                "task_title": "Client Presentation",
                "task_description": "Presentation for client XYZ.",
                "task_date": "2025-07-27",
                "task_category": "Presentation"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Code Review",
                "task_description": "Review code for project Alpha.",
                "task_date": "2025-08-04",
                "task_category": "Development"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Bug Fixes",
                "task_description": "Fix UI bugs in the dashboard.",
                "task_date": "2025-08-01",
                "task_category": "Bugfix"
            },
            {
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true,
                "task_title": "Deploy Update",
                "task_description": "Deploy the latest version to production.",
                "task_date": "2025-07-25",
                "task_category": "Deployment"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Draft Contract",
                "task_description": "Draft new client contract.",
                "task_date": "2025-08-03",
                "task_category": "Legal"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Policy Review",
                "task_description": "Review updated HR policies.",
                "task_date": "2025-07-30",
                "task_category": "HR"
            },
            {
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true,
                "task_title": "Interview Candidates",
                "task_description": "Interview for open developer position.",
                "task_date": "2025-07-26",
                "task_category": "Recruitment"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Inventory Check",
                "task_description": "Monthly check of inventory levels.",
                "task_date": "2025-08-05",
                "task_category": "Inventory"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Supplier Call",
                "task_description": "Call suppliers for order status.",
                "task_date": "2025-07-28",
                "task_category": "Supplier"
            },
            {
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true,
                "task_title": "Update Database",
                "task_description": "Update inventory database records.",
                "task_date": "2025-07-24",
                "task_category": "Database"
            }
        ]
    }
]



const admin = [
    {
        "id": 1,
        "email": "admin@deepanshu.com",
        "password": "123"
    },
    {
        "id": 2,
        "email": "admin@admin.com",
        "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    // const data = localStorage.getItem('employees')
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    // console.log(data);
    // console.log(JSON.parse(data));
    console.log(employees, admin);
}