const employees = [
    {
        id: 1,
        name: "Aarav Sharma",
        firstname: "Aarav",
        email: "employee1@example.com",
        password: "123",
        taskCount: { active: 2, new_task: 3, completed: 1, failed: 1 },
        tasks: [
            {
                active: true,
                new_task: true,
                completed: false,
                failed: false,
                task_title: "Prepare Sales Report",
                task_description: "Prepare the Q2 sales report.",
                task_date: "2025-08-01",
                task_category: "Reporting"
            },
            {
                active: true,
                new_task: false,
                completed: false,
                failed: false,
                task_title: "Follow Up with Client",
                task_description: "Call client to confirm shipment.",
                task_date: "2025-08-06",
                task_category: "Customer Service"
            },
            {
                active: false,
                new_task: false,
                completed: true,
                failed: false,
                task_title: "Client Meeting",
                task_description: "Meeting with client ABC Ltd.",
                task_date: "2025-07-29",
                task_category: "Meeting"
            },
            {
                active: false,
                new_task: false,
                completed: false,
                failed: true,
                task_title: "Update CRM Data",
                task_description: "Input recent leads into CRM.",
                task_date: "2025-07-28",
                task_category: "Data Entry"
            }
        ]
    },
    {
        id: 2,
        name: "Vihaan Gupta",
        firstname: "Vihaan",
        email: "employee2@example.com",
        password: "123",
        taskCount: { active: 1, new_task: 2, completed: 1, failed: 0 },
        tasks: [
            {
                active: true,
                new_task: true,
                completed: false,
                failed: false,
                task_title: "Design Homepage",
                task_description: "Design the new homepage for the website.",
                task_date: "2025-08-02",
                task_category: "Design"
            },
            {
                active: false,
                new_task: true,
                completed: false,
                failed: false,
                task_title: "Create Ad Banner",
                task_description: "Design ad banner for marketing campaign.",
                task_date: "2025-08-06",
                task_category: "Marketing"
            },
            {
                active: false,
                new_task: false,
                completed: true,
                failed: false,
                task_title: "Logo Update",
                task_description: "Refresh company logo for Q3 branding.",
                task_date: "2025-07-31",
                task_category: "Branding"
            }
        ]
    },
    {
        id: 3,
        name: "Priya Mehta",
        firstname: "Priya",
        email: "employee3@example.com",
        password: "123",
        taskCount: { active: 2, new_task: 0, completed: 1, failed: 1 },
        tasks: [
            {
                active: true,
                new_task: false,
                completed: false,
                failed: false,
                task_title: "Code Review",
                task_description: "Review code for project Alpha.",
                task_date: "2025-08-04",
                task_category: "Development"
            },
            {
                active: true,
                new_task: false,
                completed: false,
                failed: false,
                task_title: "API Testing",
                task_description: "Test backend APIs for project Beta.",
                task_date: "2025-08-06",
                task_category: "Testing"
            },
            {
                active: false,
                new_task: false,
                completed: true,
                failed: false,
                task_title: "Bug Fixes",
                task_description: "Fix UI bugs in the dashboard.",
                task_date: "2025-08-01",
                task_category: "Bugfix"
            },
            {
                active: false,
                new_task: false,
                completed: false,
                failed: true,
                task_title: "Deploy Update",
                task_description: "Deploy the latest version to production.",
                task_date: "2025-07-25",
                task_category: "Deployment"
            }
        ]
    },
    {
        id: 4,
        name: "Rohan Verma",
        firstname: "Rohan",
        email: "employee4@example.com",
        password: "123",
        taskCount: { active: 1, new_task: 1, completed: 2, failed: 0 },
        tasks: [
            {
                active: true,
                new_task: true,
                completed: false,
                failed: false,
                task_title: "Draft Contract",
                task_description: "Draft new client contract.",
                task_date: "2025-08-03",
                task_category: "Legal"
            },
            {
                active: false,
                new_task: false,
                completed: true,
                failed: false,
                task_title: "Policy Review",
                task_description: "Review updated HR policies.",
                task_date: "2025-07-30",
                task_category: "HR"
            },
            {
                active: false,
                new_task: false,
                completed: true,
                failed: false,
                task_title: "Finalize Budget Report",
                task_description: "Prepare and finalize budget report for Q3.",
                task_date: "2025-07-20",
                task_category: "Finance"
            }
        ]
    },
    {
        id: 5,
        name: "Ishita Kapoor",
        firstname: "Ishita",
        email: "employee5@example.com",
        password: "123",
        taskCount: { active: 2, new_task: 1, completed: 0, failed: 1 },
        tasks: [
            {
                active: true,
                new_task: false,
                completed: false,
                failed: false,
                task_title: "Inventory Check",
                task_description: "Monthly check of inventory levels.",
                task_date: "2025-08-05",
                task_category: "Inventory"
            },
            {
                active: true,
                new_task: true,
                completed: false,
                failed: false,
                task_title: "Prepare Supplier Order",
                task_description: "Create PO for supplier delivery.",
                task_date: "2025-08-06",
                task_category: "Procurement"
            },
            {
                active: false,
                new_task: false,
                completed: false,
                failed: true,
                task_title: "Update Database",
                task_description: "Update inventory database records.",
                task_date: "2025-07-24",
                task_category: "Database"
            }
        ]
    }
];

// ✅ Admin data now same style as employees
const admin = [
    {
        id: 1,
        name: "Deepanshu Choudhary",
        firstname: "Deepanshu",
        email: "admin@deepanshu.com",
        password: "123",
        taskCount: { active: 2, new_task: 1, completed: 2, failed: 0 },
        tasks: [
            {
                active: true,
                new_task: true,
                completed: false,
                failed: false,
                task_title: "Approve Employee Leaves",
                task_description: "Review and approve pending leave requests.",
                task_date: "2025-08-07",
                task_category: "HR"
            },
            {
                active: true,
                new_task: false,
                completed: false,
                failed: false,
                task_title: "Budget Approval",
                task_description: "Approve quarterly budgets.",
                task_date: "2025-08-06",
                task_category: "Finance"
            },
            {
                active: false,
                new_task: false,
                completed: true,
                failed: false,
                task_title: "Company Newsletter",
                task_description: "Publish the August newsletter.",
                task_date: "2025-07-31",
                task_category: "Communication"
            },
            {
                active: false,
                new_task: false,
                completed: true,
                failed: false,
                task_title: "Client Partnership",
                task_description: "Sign MoU with new vendor.",
                task_date: "2025-07-29",
                task_category: "Partnership"
            }
        ]
    },
    {
        id: 2,
        name: "Admin admin",
        firstname: "Admin",
        email: "admin@admin.com",
        password: "123",
        taskCount: { active: 1, new_task: 2, completed: 1, failed: 1 },
        tasks: [
            {
                active: true,
                new_task: false,
                completed: false,
                failed: false,
                task_title: "Oversee System Upgrade",
                task_description: "Monitor IT system upgrade progress.",
                task_date: "2025-08-06",
                task_category: "IT"
            },
            {
                active: false,
                new_task: true,
                completed: false,
                failed: false,
                task_title: "Policy Draft",
                task_description: "Draft new security policy.",
                task_date: "2025-08-05",
                task_category: "Security"
            },
            {
                active: false,
                new_task: true,
                completed: false,
                failed: false,
                task_title: "Office Expansion Planning",
                task_description: "Plan infrastructure for new office.",
                task_date: "2025-08-04",
                task_category: "Operations"
            },
            {
                active: false,
                new_task: false,
                completed: false,
                failed: true,
                task_title: "Vendor Payment Delay",
                task_description: "Resolve the payment issue with vendor.",
                task_date: "2025-07-28",
                task_category: "Finance"
            }
        ]
    },
    {
        id: 3,
        name: "Deepanshu Admin",
        firstname: "DeepanshuA",
        email: "deepanshu@admin.com",
        password: "123",
        taskCount: { active: 2, new_task: 0, completed: 1, failed: 1 },
        tasks: [
            {
                active: true,
                new_task: false,
                completed: false,
                failed: false,
                task_title: "Compliance Review",
                task_description: "Check Q3 compliance reports.",
                task_date: "2025-08-07",
                task_category: "Compliance"
            },
            {
                active: true,
                new_task: false,
                completed: false,
                failed: false,
                task_title: "Stakeholder Meeting",
                task_description: "Discussion with board members.",
                task_date: "2025-08-06",
                task_category: "Meeting"
            },
            {
                active: false,
                new_task: false,
                completed: true,
                failed: false,
                task_title: "CSR Activity",
                task_description: "Coordinate charity event.",
                task_date: "2025-07-30",
                task_category: "CSR"
            },
            {
                active: false,
                new_task: false,
                completed: false,
                failed: true,
                task_title: "Audit Issue",
                task_description: "Resolve pending audit compliance.",
                task_date: "2025-07-25",
                task_category: "Audit"
            }
        ]
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}