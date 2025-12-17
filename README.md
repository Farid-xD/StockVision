# StockVision

![GitHub Repo stars](https://img.shields.io/github/stars/Farid-xD/StockVision?style=social)
![GitHub forks](https://img.shields.io/github/forks/Farid-xD/StockVision?style=social)
![GitHub license](https://img.shields.io/github/license/Farid-xD/StockVision)
![Vite](https://img.shields.io/badge/Vite-3.0.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.2-blue)

StockVision is a modern, interactive stock market dashboard built with **React**, **Vite**, and **Tailwind CSS**. It allows users to track market trends, analyze stock data, and visualize projected investment growth. With sleek UI components and a responsive design, StockVision makes investing insights accessible and intuitive.

---

## Features

- **Market Overview Table**: View key stock data including low, high, and average prices.
- **Investment Calculator**: Simulate projected returns based on investment amount and duration.
- **Earnings Graph**: Visualize projected growth trends with dynamic charts using Recharts.
- **Hero Section**: Engaging landing section with animated visuals using Framer Motion.
- **User Authentication**: Integrates Clerk for secure sign-in and protected routes.
- **Responsive Design**: Mobile-first layout using Tailwind CSS.

---

## How it Works / Webpage Functionality

1. **Landing Hero Section**
   - Users are greeted with an animated hero section that provides a quick overview of the platform.
   - Clean background image with overlay and text describing the app purpose.

2. **Market Overview Table**
   - Displays a table of major stocks (Apple, Google, Tesla, Microsoft).
   - Shows the **low, high, and average prices**.
   - Table highlights hover effects for better user experience.

3. **Investment Calculator**
   - Users can input **investment amount** and **time in years**.
   - Automatically calculates **projected investment growth** using a simple interest compounding formula.
   - Output updates dynamically as the user changes inputs.

4. **Projected Growth Graph**
   - Displays an interactive **line chart** showing investment growth over time.
   - Uses Recharts for a responsive, animated graph.

5. **Protected Routes**
   - Home and Future Trading pages are **accessible only after signing in**.
   - Clerk handles authentication securely with login/signup forms.

6. **Responsive Layout**
   - Uses Tailwind CSS grid and spacing to adapt to all screen sizes.
   - Components stack vertically on mobile and layout in columns on desktop.

---

## Tech Stack

- **Frontend**: React, Vite  
- **Styling**: Tailwind CSS  
- **Charts**: Recharts  
- **Animations**: Framer Motion  
- **Authentication**: Clerk  
- **Package Management**: npm  

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/Farid-xD/StockVision.git

cd StockVision
