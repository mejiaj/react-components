# React Components Library

A set of accessible, reusable React components styled with CSS custom properties. Explore and test them in Storybook.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Storybook](#storybook)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

Clone the repository and install dependencies:

```bash
git clone git@github.com:mejiaj/react-components.git
cd react-components
npm install
```

## Usage

Import components into your React project:

```jsx
import { Button } from './Button/Button';
import { Header } from './Header/Header';
```

## Storybook

To view and develop components in isolation, run Storybook:

```bash
npm run storybook
```

This will start Storybook at [http://localhost:6006](http://localhost:6006).

## Folder Structure

```
react-components/
├── Button/
│   ├── Button.jsx
│   ├── button.css
│   └── Button.stories.js
├── Header/
│   ├── Header.jsx
│   ├── header.css
│   └── Header.stories.js
├── Page/
│   ├── Page.jsx
│   ├── page.css
│   └── Page.stories.js
├── stories/
│   └── assets/
├── package.json
├── README.md
└── vitest.config.js
```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the ISC License.
