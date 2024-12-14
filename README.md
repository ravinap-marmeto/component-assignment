# Implementation Guidelines for Custom UI Components

## Introduction

This document provides guidelines for implementing and using the custom UI components created for the hypothetical company dashboard. It includes details on the components' API/Props, styling considerations, and usage examples.

## Components Overview

### 1. **Button Component**

#### API/Props:

- `data-variant` (string): Specifies the button style variant. Options include:
  - `primary` (default)
  - `secondary`
  - `disabled`
- `data-size` (string): Specifies the button size. Options include:
  - `small`
  - `medium` (default)
  - `large`
- `label` (string): The text label to be displayed inside the button.

#### Usage Example:

```html
<custom-button
  data-variant="primary"
  data-size="medium"
  label="Submit"
></custom-button>
<custom-button
  data-variant="secondary"
  data-size="small"
  label="Cancel"
></custom-button>
<custom-button
  data-variant="disabled"
  label="Disabled"
  disabled
></custom-button>
```

#### Styling Considerations:

- The button component uses neumorphism design with soft shadows and subtle hover effects.
- The `data-variant` and `data-size` props control the background color, text color, and size of the button.

---

### 2. **Card Component**

#### API/Props:

- `title` (string): The title of the card.
- `subtitle` (string): An optional subtitle of the card.
- `body` (string): The body content of the card.
- `imageSrc` (string, optional): The source URL of an image to be displayed inside the card.

#### Usage Example:

```html
<custom-card
  title="Card Title"
  subtitle="Subtitle (optional)"
  body="This is the content of the card."
  imageSrc="image.jpg"
>
</custom-card>
```

#### Styling Considerations:

- The card has a soft neumorphic shadow and a subtle hover effect for interactivity.
- The card content (title, subtitle, body, and image) is structured within the component, and the image is optional.

---

### 3. **Input Component**

#### API/Props:

- `label` (string): The label for the input field.
- `type` (string): The type of the input (e.g., `text`, `email`, `password`). Default is `text`.
- `placeholder` (string): The placeholder text to be displayed when the input is empty.
- `errorMessage` (string): Optional error message to display when input is invalid.
- `successMessage` (string): Optional success message to display when input is valid.

#### Usage Example:

```html
<custom-input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  errorMessage="Invalid email address"
  successMessage="Valid email address"
>
</custom-input>
```

#### Styling Considerations:

- The input field features neumorphism-inspired styling with a soft shadow effect.
- Error and success messages are displayed conditionally based on input validity.

---

## General Styling Guidelines

### Neumorphism Design Pattern

- All components (buttons, cards, and inputs) use neumorphism to create a soft, tactile interface with subtle shadows and highlights.
- The shadows are applied using `box-shadow`, with two shadow effects: one for the inset shadow and one for the external shadow.
- This effect provides a 3D look, making the components appear as though they are softly pressed or floating on the page.

### Responsive Design

- Components are designed to be flexible and scalable. Although the styles are kept simple, they are intended to scale easily across various screen sizes by modifying the CSS properties if needed.
- Button and card sizes are adjustable via the `data-size` attribute for different layouts.

### Consistency

- To ensure uniformity, all components use consistent padding, border-radius, and font properties.
- The color scheme is neutral and subtle to avoid visual overload while ensuring elements like buttons stand out.

## Example of Full Implementation

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Custom UI Components</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- Button Components -->
    <custom-button
      data-variant="primary"
      data-size="medium"
      label="Submit"
    ></custom-button>
    <custom-button
      data-variant="secondary"
      data-size="small"
      label="Cancel"
    ></custom-button>

    <!-- Card Component -->
    <custom-card
      title="Card Title"
      subtitle="Subtitle"
      body="This is the content of the card."
      imageSrc="image.jpg"
    >
    </custom-card>

    <!-- Input Component -->
    <custom-input
      label="Email Address"
      type="email"
      placeholder="Enter your email"
      errorMessage="Invalid email address"
      successMessage="Valid email address"
    >
    </custom-input>

    <script src="index.js"></script>
  </body>
</html>
```

## Conclusion

This guideline explains how to use and customize the custom UI components for a company dashboard. The components are designed with accessibility, consistency, and responsiveness in mind, ensuring a smooth user experience across devices and use cases. By using the provided props and following the styling conventions, these components can be easily integrated into any project.

### Key Sections of the Document:

1. **Introduction**: Overview of the components and what the guidelines cover.
2. **Components Overview**: Detailed information on each component (Button, Card, Input) including their API/Props, usage, and styling considerations.
3. **General Styling Guidelines**: Explanation of the design principles like neumorphism, responsiveness, and consistency.
4. **Example of Full Implementation**: A basic HTML example showing how to implement all the components.
5. **Conclusion**: A summary of the guidelines and how to use the components effectively.
