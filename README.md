# Dynamic Input Sort App

## How to Use

### Prerequisites

1. Node.js and npm installed on your machine.
2. Angular CLI globally installed. Run `npm install -g @angular/cli` if not installed.

### Setup

1. Clone the Repository:

```bash
git clone git@github.com:yassaasalib/tdf-exercise.git
```

2. Navigate to the Project Directory:

```bash
cd tdf-exercise
```

3. Install Dependencies:

```bash
npm install
```

### Run the Application

1. Start the Development Server:

```bash
ng serve
```

2. Open Your Browser:

Open your web browser and navigate to http://localhost:4200/.

## How to Use the App

### Enter the Number of Inputs:

1. Enter a numeric value in the "Enter the number of inputs" field.

2. Click the "Generate Inputs" button.

### Fill in Input Values:

1. Fill in the dynamically generated input boxes with your desired values.

### Sort the Values:

1. Choose the desired sort order (Ascending or Descending) from the dropdown menu.

2. The input values will be sorted automatically as soon as you make a selection.

## Code Explanation

### app.component.ts

- Contains the main component logic, including the generation of input boxes, sorting functionality, and event handling.

### app.component.html

- Defines the HTML template for the application, including input fields, buttons, and the dynamically generated input boxes.

### sort.service.ts

- A service that provides sorting functions for values, including ascending and descending order.
- Uses a custom comparison function based on the types of values.

## Notes

- The application uses Angular two-way data binding with ngModel for real-time updates.
- Input values can be numeric, text (strings), or a mix of both.
- Sorting is triggered automatically when the user selects a sort order from the dropdown menu.
