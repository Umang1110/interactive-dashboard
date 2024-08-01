Interactive Dashboard
An interactive dashboard application built with Next.js, React.js, TypeScript, HTML5, and CSS3. This project includes a dashboard with charts, data tables, and a settings page, and is designed to be responsive and visually appealing.

Table of Contents:

    Installation
    Usage
    Folder Structure
    Styling
    License

Installation

    Prerequisites
    Ensure you have the following software installed on your machine:

    Node.js (version 18.x or later recommended)
    Git
    
    Clone the Repository
    First, clone the repository to your local machine:    
    git clone https://github.com/Umang1110/interactive-dashboard.git
    cd interactive-dashboard

    Install Dependencies
    Navigate to the project directory and install the required dependencies:
    npm install
    or if you use Yarn:
    yarn install

Usage
    Running the Development Server
    To start the development server and view the application locally, run:
    npm run dev
    or with Yarn:
    yarn dev
    Open your browser and navigate to http://localhost:3000 to view the dashboard.

Building the Project
    To build the project for production:


    npm run build
    or with Yarn:


    yarn build
    To start the production server:


    npm start
    or with Yarn:


    yarn start

Folder Structure
    The folder structure of the project is organized as follows:

    /src
    /components
        Header.tsx
        Header.module.css
        Sidebar.tsx
        Sidebar.module.css
        ChartWidget.tsx
        ChartWidget.module.css
        DataTableWidget.tsx
        DataTableWidget.module.css
        BarChartWidget.tsx
        BarChartWidget.module.css
    /pages
        _app.tsx
        index.tsx
        settings.tsx
    /utils
        mockData.ts
    /lib
        chart.ts
    /styles
        globals.css
        layout.css
    public
    .gitignore
    next.config.js
    package.json
    tsconfig.json

Styling
    Global Styles
    /styles/globals.css: Contains global styles applied across the application.
    /styles/layout.css: Contains layout-specific styles for the dashboard and settings page.
    Component Styles
    Header: Defined in Header.module.css
    Sidebar: Defined in Sidebar.module.css
    ChartWidget: Defined in ChartWidget.module.css
    DataTableWidget: Defined in DataTableWidget.module.css
    BarChartWidget: Defined in BarChartWidget.module.css
    Responsive Design
    The application includes responsive design adjustments for mobile and tablet views. The sidebar is hidden on mobile devices and can be toggled using a hamburger menu.

License
This project is licensed under the MIT License. See the LICENSE file for details.