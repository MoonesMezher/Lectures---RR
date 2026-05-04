/**
 * Lectures data — add new lessons here.
 * Structure mirrors LECTURE.md (sections, notes, lists) and TASK.md (tasks).
 */
const LECTURES = [{
        id: 'L1',
        title: 'Tailwind CSS',
        shortDescription: 'Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
        resourceUrl: 'https://tailwindcss.com/',
        repoUrl: 'https://github.com/MoonesMezher/L1-RR',
        content: [
            { type: 'heading', text: 'Framework vs Library' },
            { type: 'list', items: ['Framework: Bigger, From Zero, Make Everything', 'Library: Smaller, Need Other Libraries'] },
            { type: 'note', text: 'First Page in HTML called: index.html' },
            { type: 'heading', text: 'Setup' },
            { type: 'list', items: ['Play CDN', 'Tailwind CLI (Recommended)'] },
            { type: 'paragraph', text: 'Extension: Tailwind CSS IntelliSense' },
            { type: 'heading', text: 'Classes' },
            {
                type: 'mapping',
                pairs: [
                    ['bg-color', 'background-color'],
                    ['text-color', 'color'],
                    ['text-size', 'font-size'],
                    ['font-title', 'font-weight'],
                    ['p', 'padding'],
                    ['m', 'margin'],
                    ['w', 'width'],
                    ['h', 'height'],
                    ['overflow', 'overflow']
                ]
            },
            { type: 'paragraph', text: 'p => left & right & top & bottom | px => left & right | py => top & bottom | pt, pb, pl, pr, ps, pe — the same for margin (m, mx, my, mt, mb, ml, mr, ms, me)' },
            { type: 'example', from: 'bg-linear-to-r from-blue-500 to-red-500', to: 'background: linear-gradient(0%, blue, red)' },
            { type: 'paragraph', text: 'Colors: 50 - 100 - 200 - ... - 900 - 950' },
            { type: 'heading', text: 'What we use in this lecture (index.html)' },
            { type: 'paragraph', text: 'We link Tailwind via the built output: <link rel="stylesheet" href="./src/output.css">' },
            { type: 'heading', text: 'Basic utilities (commented in index.html)' },
            {
                type: 'mapping',
                pairs: [
                    ['bg-emerald-500 text-amber-800', 'background + text color'],
                    ['text-5xl font-bold cursor-pointer', 'font-size, font-weight, cursor'],
                    ['p-2 m-5', 'padding + margin'],
                    ['w-20 h-20', 'width + height'],
                    ['overflow-hidden', 'overflow: hidden'],
                    ['mt-2', 'margin-top']
                ]
            },
            { type: 'heading', text: 'Flexbox' },
            { type: 'paragraph', text: 'hidden mt-5 w-full gap-5 justify-center flex-col items-center => display: flex (with flex-col), gap, justify-center, items-center, plus hidden and w-full' },
            {
                type: 'mapping',
                pairs: [
                    ['flex', 'display: flex'],
                    ['flex-col', 'flex-direction: column'],
                    ['justify-center', 'justify-content: center'],
                    ['items-center', 'align-items: center'],
                    ['gap-5', 'gap'],
                    ['hidden', 'display: none']
                ]
            },
            { type: 'heading', text: 'Grid' },
            {
                type: 'mapping',
                pairs: [
                    ['grid', 'display: grid'],
                    ['grid-cols-3', 'grid-template-columns: repeat(3, minmax(0, 1fr))'],
                    ['gap-2', 'gap'],
                    ['grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5', 'responsive columns']
                ]
            },
            { type: 'heading', text: 'Borders, hover, transition' },
            {
                type: 'mapping',
                pairs: [
                    ['border-2 border-solid', 'border width + style'],
                    ['hover:bg-white hover:border-black', 'hover states'],
                    ['duration-300', 'transition-duration']
                ]
            },
            { type: 'heading', text: 'Position & pseudo-elements' },
            {
                type: 'mapping',
                pairs: [
                    ['relative', 'position: relative'],
                    ['absolute left-0 top-0', 'position: absolute + placement'],
                    ['before:h-10 before:bg-black before:p-2', '::before size, background, padding']
                ]
            },
            { type: 'heading', text: 'Transform & opacity' },
            {
                type: 'mapping',
                pairs: [
                    ['rotate-12', 'transform: rotate'],
                    ['translate-2', 'transform: translate'],
                    ['scale-110', 'transform: scale'],
                    ['opacity-50', 'opacity: 0.5']
                ]
            },
            { type: 'heading', text: 'Other utilities (from index.html)' },
            {
                type: 'mapping',
                pairs: [
                    ['mx-auto', 'margin left/right auto'],
                    ['rounded-full', 'border-radius: 9999px'],
                    ['animate-spin', 'animation: spin'],
                    ['border-4 border-r-red-500', 'border + border-right color'],
                    ['h-screen', 'height: 100vh'],
                    ['text-center mb-2', 'text-align + margin-bottom']
                ]
            },
            { type: 'heading', text: 'Arbitrary values (square brackets)' },
            { type: 'paragraph', text: 'When you need a value Tailwind does not have, use [value]:' },
            { type: 'example', from: 'w-[100px] translate-x-[50%] rotate-[10deg] bg-[#eee] h-[50px] text-[red] p-[20px] mt-[100px]', to: 'custom width, transform, color, padding, margin' },
            { type: 'heading', text: 'Flex basis & responsive breakpoints' },
            { type: 'paragraph', text: 'basis-[100%] min-[500px]:basis-[44%] md:basis-[30%] min-[900px]:basis-[18%]! => flex-basis with breakpoints (min-width 500px, md, min-width 900px); ! = important' },
            {
                type: 'mapping',
                pairs: [
                    ['flex-wrap', 'flex-wrap: wrap'],
                    ['justify-between', 'justify-content: space-between'],
                    ['basis-[100%]', 'flex-basis: 100%'],
                    ['min-[500px]:...', 'apply at min-width 500px'],
                    ['md:basis-[30%]', 'apply at md breakpoint'],
                    ['...!', '!important (e.g. p-10!)']
                ]
            },
            { type: 'heading', text: 'Theme / custom (primary)' },
            { type: 'paragraph', text: 'bg-primary text-primary border-primary => use custom theme colors defined in Tailwind config' }
        ],
        tasks: [
            'Convert the ARABESCA Using Tailwind.css',
            { text: 'Create this website using Tailwind', url: 'https://themewagon.github.io/stylish/index.html' }
        ]
    },
    {
        id: 'L2',
        title: 'React.js Fundamentals',
        shortDescription: 'A JavaScript library for building user interfaces. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
        resourceUrl: 'https://react.dev/',
        repoUrl: 'https://github.com/MoonesMezher/L2-React',
        content: [
            { type: 'heading', text: 'What is React?' },
            {
                type: 'list',
                items: [
                    'Library (not a framework)',
                    'Created by Meta (Facebook)',
                    'Based on JavaScript',
                    'Easy to learn',
                    'Functional Programming (FP) approach',
                    'Uses Components = Functions = Reusable pieces',
                    'Supports TypeScript',
                    'Enables mobile (React Native) & desktop (Electron) development',
                    'Huge community → easy problem solving',
                    'Top choice for AI tools',
                    'Most popular in the market (#1)'
                ]
            },
            { type: 'heading', text: 'Vanilla JS vs React JS' },
            {
                type: 'mapping',
                pairs: [
                    ['Vanilla JS (Pure JS)', 'Works directly with the real DOM'],
                    ['React JS', 'Uses a Virtual DOM for better performance']
                ]
            },
            { type: 'paragraph', text: 'The Virtual DOM is a lightweight copy of the real DOM. React updates it first, then efficiently applies changes to the real DOM.' },

            { type: 'heading', text: 'Installation (with Vite)' },
            { type: 'paragraph', text: 'Vite is a fast build tool. Create a new React project:' },
            { type: 'example', from: 'npm create vite@latest', to: 'Follow prompts: project name, select React, then variant (JavaScript or TypeScript)' },
            { type: 'paragraph', text: 'Then:' },
            {
                type: 'list',
                items: [
                    'cd your-project',
                    'npm install',
                    'npm run dev'
                ]
            },
            { type: 'note', text: 'If you see "npm error Missing script: \'dev\'", check: 1) node_modules exists, 2) package.json has "dev" script, 3) you are in the correct folder (beside package.json).' },

            { type: 'heading', text: 'Project Structure (Vite + React)' },
            {
                type: 'list',
                items: [
                    'node_modules/ – dependencies',
                    'public/ – static assets (images, icons, cached files)',
                    'src/ – main work folder',
                    '  main.jsx – entry point (connects HTML and React)',
                    '.gitignore',
                    'eslint.config.js – code formatting rules',
                    'index.html – the only HTML file (SPA)',
                    'package-lock.json',
                    'package.json – project metadata and scripts',
                    'README.md – documentation',
                    'vite.config.js – build tool configuration'
                ]
            },
            { type: 'paragraph', text: 'Everything you write in React goes inside the <div id="root"> element in index.html.' },

            { type: 'heading', text: 'Components' },
            { type: 'paragraph', text: 'Components are the building blocks. They are JavaScript functions that return markup. Think of them as reusable pieces, like Tailwind classes but for structure.' },
            { type: 'heading', text: 'Examples of reusability' },
            {
                type: 'list',
                items: [
                    'Navigation links (home, about, contact) – same design, different title and URL',
                    'Main buttons – same style, different text',
                    'Section titles – same typography, different heading'
                ]
            },
            {
                type: 'mapping',
                pairs: [
                    ['Component = Function', 'Returns JSX (HTML-like syntax)'],
                    ['Props', 'Arguments passed to components (like HTML attributes)'],
                    ['State', 'Data that changes over time, triggers re-render']
                ]
            },

            { type: 'heading', text: 'Advice' },
            { type: 'paragraph', text: 'Shift your mindset from "one file, one page" to "component-based". If you see a design pattern repeated, turn it into a component. This is the React way — just like you think in utility classes with Tailwind.' },

            { type: 'heading', text: 'Useful Libraries' },
            { type: 'paragraph', text: 'AOS (Animate On Scroll) – https://michalsnik.github.io/aos/ – for smooth scroll animations in React.' },

            { type: 'heading', text: 'Full Stack Project Structure' },
            {
                type: 'mapping',
                pairs: [
                    ['Frontend (Client)', 'React (web), React Native (mobile), React Electron (desktop)'],
                    ['Backend (Server)', 'Node.js, Express, etc.']
                ]
            }
        ],
        tasks: [{
                text: 'Build this website using HTML & Tailwind CSS & AOS, and ensure it will be full respoosive on mobile screen.',
                url: 'https://themewagon.github.io/fruitkha'
            },
            'Install React project using vite.'
        ]
    },
    {
        id: 'L3',
        title: 'React Project Setup & Core Concepts',
        shortDescription: 'Learn how to strip a React project to its simplest form, understand how the browser loads a React app, create reusable components, work with JSX, pass data with props, and use fragments — all following functional programming principles.',
        resourceUrl: 'https://react.dev/',
        repoUrl: 'https://github.com/MoonesMezher/L3-React',
        content: [
            { type: 'heading', text: 'Reset React Project' },
            { type: 'paragraph', text: 'To get the simplest possible React application (Single Page Application), clean up the default Vite + React boilerplate:' },
            {
                type: 'list',
                items: [
                    'Delete icons in the `public` folder',
                    'Clear the `README.md` file',
                    'Remove the tab icon link from `index.html`',
                    'Delete these files/folders inside `src`: `App.jsx`, `index.css`, and the `assets` folder',
                    'Clean `main.jsx`: remove `<StrictMode>` and delete the `import "./index.css"` line'
                ]
            },
            { type: 'note', text: 'Result: a minimal React app with only the essential files – perfect for understanding the core mechanics.' },

            { type: 'heading', text: 'Main Entry' },
            { type: 'paragraph', text: 'React was created to make DOM manipulation easier and to encourage dividing the web page into reusable components.' },

            { type: 'heading', text: 'Rules' },
            {
                type: 'list',
                items: [
                    'FP (Functional Programming) → Create components as functions',
                    'You can add a `<link rel="stylesheet" href="./src/index.css">` in `index.html`, but it’s not recommended. Instead, import the CSS file inside `main.jsx`: `import "./index.css"`'
                ]
            },
            { type: 'note', text: 'Old versions of React used classes (OOP), but that style is outdated and no longer supported.' },

            { type: 'heading', text: 'How the Browser Reads a React Project' },
            {
                type: 'list',
                items: [
                    'Reads `index.html`',
                    'Loads everything inside the `<head>`, then moves to the `<body>`',
                    'Renders the `<div id="root">` element, then the `<script>` tag that connects to `main.jsx`',
                    'Executes all import statements in `main.jsx` (e.g., CSS files)',
                    'Creates a React root from the `root` DOM element to render all components',
                    'Renders the `<App />` component'
                ]
            },

            { type: 'heading', text: 'How App.jsx Renders New Content' },
            {
                type: 'list',
                items: [
                    'Create a function inside `App.jsx`',
                    'The function must `return` the new content (JSX)'
                ]
            },

            { type: 'heading', text: 'How to Create a New Component (Function)' },
            {
                type: 'list',
                items: [
                    'Create a new function – the first letter **must** be uppercase',
                    'Call this function anywhere in your code like an HTML tag'
                ]
            },
            { type: 'example', from: 'function NewFunction() {\n  return <div>Hello World</div>;\n}\n\n<NewFunction />', to: 'Component definition and usage' },

            { type: 'heading', text: 'Best Practices for Components' },
            {
                type: 'list',
                items: [
                    'Create a folder called `components`',
                    'Place each component in its own file inside that folder'
                ]
            },
            { type: 'note', text: 'Additional rules:\n• File name must start with an uppercase letter\n• Function name must start with an uppercase letter\n• Export the function if you want to use it elsewhere\n• File extension must be `.jsx` (or `.tsx` for TypeScript)' },

            { type: 'heading', text: 'What is JSX?' },
            { type: 'paragraph', text: 'JSX = JavaScript + XML (HTML-like syntax). It’s a syntax extension that lets you write HTML inside JavaScript.' },
            { type: 'note', text: 'In TypeScript, it’s called TSX.' },

            { type: 'heading', text: 'Working with JSX' },
            {
                type: 'list',
                items: [
                    'Install an extension (e.g., ES7+ snippets) to speed up file creation',
                    'Use `{}` to embed JavaScript expressions inside HTML',
                    'Use `map()` to render arrays',
                    'Use ternary operators: `condition ? <A /> : <B />`'
                ]
            },
            { type: 'paragraph', text: 'Any JavaScript code can be placed **outside** (above) the `return` statement.' },

            { type: 'heading', text: 'The "key" Prop Warning' },
            { type: 'paragraph', text: 'When you see: `Each child in a list should have a unique "key" prop`' },
            {
                type: 'list',
                items: [
                    'Check every place you used `map()`',
                    'Add a `key` prop to the outermost element returned inside the loop',
                    'The key must be a unique value (e.g., an item `id`) – it helps the virtual DOM identify which items changed'
                ]
            },

            { type: 'heading', text: 'Props' },
            { type: 'paragraph', text: 'Props (short for "properties") are used to:' },
            {
                type: 'list',
                items: [
                    'Pass data from a parent component to a child',
                    'Reuse the same design with different data',
                    'Passed as attributes when calling a component',
                    'Received as an object argument in the component function'
                ]
            },
            { type: 'example', from: 'function Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n\n<Greeting name="Moones" />', to: 'Using props' },

            { type: 'heading', text: 'Fragment Tag' },
            { type: 'paragraph', text: 'Fragments solve two problems:' },
            {
                type: 'list',
                items: [
                    'Respect the JSX rule that a function must return a single element',
                    'Avoid adding extra unnecessary nodes to the DOM'
                ]
            },
            { type: 'example', from: '<>\n  <ChildA />\n  <ChildB />\n</>', to: 'Short syntax for React.Fragment' },
            { type: 'note', text: 'Use `<></>` or `<React.Fragment></React.Fragment>`.' }
        ],
        tasks: [
            'Reset your React project following the steps above until you have a clean `main.jsx` and no extra files.',
            'Create a new component called `Header` that returns a heading, and use it inside `App`.',
            'Build a list component that receives an array of strings via props and renders them using `map()` with a unique key.',
            'Experiment with fragments to wrap two sibling elements without adding a `<div>` to the DOM.'
        ]
    },
    {
        id: 'L4',
        title: 'Tailwind with React Vite, Events & useState',
        shortDescription: 'Integrate Tailwind CSS into a React Vite project, handle user events the React way (without addEventListener), and fix the “variable does not update in the DOM” problem using React’s render model and the useState hook. Includes Counter, Accordion, and Form examples.',
        resourceUrl: 'https://react.dev/',
        repoUrl: 'https://github.com/MoonesMezher/L4-React',
        content: [
            { type: 'heading', text: 'Use Tailwind CSS with React Vite' },
            {
                type: 'list',
                items: [
                    'Go to www.tailwindcss.com and follow the Vite setup',
                    'Using Vite (your existing React + Vite project)',
                    'Install: `npm install tailwindcss @tailwindcss/vite`',
                    'Edit `vite.config.js` and add the Tailwind plugin',
                    'In your CSS file (recommended: `src/index.css`), add: `@import "tailwindcss"`',
                    'In `index.html`, add: `<link rel="stylesheet" href="./src/index.css">` (or keep importing the CSS in `main.jsx`)'
                ]
            },
            { type: 'note', text: 'Recommended: put `@import "tailwindcss"` in `src/index.css` and import that file in `main.jsx` so Tailwind is available in all components.' },

            { type: 'heading', text: 'Events in React' },
            {
                type: 'list',
                items: [
                    'Do not use `addEventListener`. Add `on[Event]` as an attribute on the target element (e.g. `onClick`, `onChange`, `onSubmit`).',
                    'Write the handler function in the same file as normal JavaScript (e.g. above or below the JSX).'
                ]
            },
            {
                type: 'mapping',
                pairs: [
                    ['onClick={func}', 'Correct – pass the function reference'],
                    ['onClick={func()}', 'Wrong – calls the function immediately on every render, not on click']
                ]
            },
            { type: 'note', text: 'Use `onClick={func}` (reference) not `onClick={func()}` (invocation). Same for other events: `onChange`, `onSubmit`, etc.' },

            { type: 'heading', text: 'Problem: Variable does not update in the DOM' },
            {
                type: 'list',
                items: [
                    'You declare `let count = 0` and a button that increases count on click.',
                    'You render `{count}` in JSX, but the value does not change in the DOM when you click.'
                ]
            },
            { type: 'paragraph', text: 'The Virtual DOM does not re-render when a plain variable changes. React needs a way to know that something changed so it can update the rendered value. This is where the concept of **Render** and **Hooks** (especially `useState`) appears.' },

            { type: 'heading', text: 'Render' },
            { type: 'paragraph', text: 'React needs a trigger to update the rendered value in the Virtual DOM. That trigger is provided by Hooks – in particular, `useState` – which tell React to re-render when state changes.' },

            { type: 'heading', text: 'Hooks' },
            {
                type: 'list',
                items: [
                    'Hooks are a set of functions used as tools to solve common problems in React.',
                    'Any hook name starts with `use` (e.g. `useState`, `useEffect`).'
                ]
            },

            { type: 'heading', text: 'useState' },
            {
                type: 'list',
                items: [
                    'Import from React: `import { useState } from "react"`',
                    'Returns an array: `[get, set]` – current value and setter function',
                    'Initial value can be anything: number (0), string (""), array ([]), object ({})',
                    'Form: `const [get, set] = useState(initial)`'
                ]
            },
            { type: 'note', text: 'You cannot update state by reassigning: `count += 1` does nothing for React. Always use the setter: `setCount(count + 1)`.' },
            {
                type: 'mapping',
                pairs: [
                    ['const [count, setCount] = useState(0)', 'Counter: get = count, set = setCount'],
                    ['setCount(count + 1)', 'Update and trigger re-render'],
                    ['setInputs({ ...inputs, name: e.target.value })', 'Update one field in an object (controlled input)']
                ]
            },

            { type: 'heading', text: 'Example: Counter' },
            { type: 'paragraph', text: 'Wrong: `let count = 0` and `count += 1` – DOM does not update. Correct: `const [count, setCount] = useState(0)` and `setCount(count + 1)` in click handlers. Pass the function reference: `onClick={add}` not `onClick={add()}`.' },
            { type: 'example', from: 'const [count, setCount] = useState(0);\nconst add = () => setCount(count + 1);\n<button onClick={add}>+</button>\n<div>Result: {count}</div>', to: 'Counter with useState' },

            { type: 'heading', text: 'Example: Accordion (toggle visibility)' },
            { type: 'paragraph', text: 'One state: `open` (boolean). Button toggles it with `setOpen(!open)`. Conditionally apply classes (e.g. opacity) based on `open`.' },
            { type: 'example', from: 'const [open, setOpen] = useState(false);\n<button onClick={() => setOpen(!open)}>{open ? "CLOSE" : "OPEN"}</button>\n<p className={`${open ? "opacity-100" : "opacity-0"} duration-300`}>Hello World</p>', to: 'Accordion with useState' },

            { type: 'heading', text: 'Example: Form (list + controlled inputs)' },
            {
                type: 'list',
                items: [
                    'State for list: e.g. `users` from `localStorage` or initial array; update with `setUsers([...users, newUser])`.',
                    'State for form fields: e.g. `inputs` object `{ name: "", age: 0 }`; update with `setInputs({ ...inputs, name: e.target.value })` in `onChange`.',
                    'On submit: add `inputs` to `users`, save to `localStorage`, then reset `inputs` with `setInputs({ name: "", age: 0 })`.',
                    'Use `onSubmit={handleAdd}` on the form and `e.preventDefault()` in the handler.'
                ]
            },
            { type: 'paragraph', text: 'Controlled inputs: `value={inputs.name}` and `onChange={(e) => setInputs({ ...inputs, name: e.target.value })}`. Render the list with `users.map((user, index) => <div key={index}>...</div>)`.' },

            { type: 'heading', text: 'Composing in App' },
            { type: 'paragraph', text: 'Import Counter, Accordion, and Form from `./components/...`. Render one or more in `App` (e.g. inside a div with Tailwind classes like `bg-red-500 flex justify-center items-center`). Comment out the ones you are not testing.' }
        ],
        tasks: [
            'Add Tailwind CSS to your React Vite project using the steps above and confirm utility classes work.',
            'Build a Counter component with useState: display a number and buttons to add, subtract, and reset.',
            'Build an Accordion component that toggles visibility of content with a button.',
            'Build a Form component with controlled inputs (e.g. name, age), add to a list, and persist the list in localStorage.'
        ]
    },
    {
        id: 'L5',
        title: 'Node.js Updates, Re-renders & useEffect',
        shortDescription: 'Learn how to update Node.js on your machine, why state updates trigger a re-render, and how `useEffect` runs after render with no dependency array, an empty array, or a watched value. Includes a warning about dependency arrays and state updates that cause infinite loops.',
        resourceUrl: 'https://react.dev/reference/react/useEffect',
        repoUrl: 'https://github.com/MoonesMezher/L5-React',
        content: [
            { type: 'heading', text: 'How to update Node.js on your laptop' },
            { type: 'paragraph', text: 'You need a current Node.js version for modern tooling (Vite, React, npm). Pick one approach and stick with it.' },
            {
                type: 'list',
                items: [
                    'Official installer: go to https://nodejs.org/, download the LTS installer for your OS, run it, and restart the terminal. Check with `node -v` and `npm -v`.',
                    'Version manager (recommended for multiple projects): **nvm** (Mac/Linux) or **nvm-windows** on Windows — install nvm, then `nvm install --lts` and `nvm use <version>`. Lets you switch Node per project.',
                    'Other managers: **fnm**, **n**, or **Volta** — similar idea: install a version, then select it for your shell or project.'
                ]
            },
            { type: 'note', text: 'After any upgrade, close and reopen your terminal (or IDE) so `PATH` picks up the new `node` binary.' },

            { type: 'heading', text: 'State updates and re-render' },
            { type: 'paragraph', text: 'When you update state with a setter from `useState` (or similar), React schedules a re-render of that component (and children as needed). Any update to state causes the component to render again so the UI can reflect the new values.' },

            { type: 'heading', text: 'useEffect — three dependency patterns' },
            { type: 'paragraph', text: '`useEffect` runs **after** the component has rendered (after paint). What runs depends on the dependency array.' },
            {
                type: 'mapping',
                pairs: [
                    ['useEffect(() => { ... }) — no second argument', 'Runs after **every** render (same cadence as re-renders when state/props change)'],
                    ['useEffect(() => { ... }, [])', 'Runs once after the **first** render (mount), then does not run again on later renders'],
                    ['useEffect(() => { ... }, [counter])', 'Runs after first render, and again **whenever `counter` changes**']
                ]
            },
            { type: 'example', from: 'useEffect(() => {\n  console.log("Hello World");\n});', to: 'After every render' },
            { type: 'example', from: 'useEffect(() => {\n  console.log("Hello World");\n}, []);', to: 'Only after first mount' },
            { type: 'example', from: 'useEffect(() => {\n  console.log("Hello World");\n}, [counter]);', to: 'When `counter` changes' },

            { type: 'heading', text: 'Warning: state in the dependency array' },
            { type: 'paragraph', text: 'Do **not** list a piece of state in the dependency array and then update that same state inside the effect without a safe condition. That pattern often causes: render → effect runs → `setState` → render → effect runs again → infinite loop.' },
            { type: 'note', text: 'If you must react to state, either remove that state from deps and rethink the logic, use a ref, split effects, or add guards so the setter is not called every time in a way that retriggers the effect.' }
        ],
        tasks: [
            'Verify your Node.js version (`node -v`). If it is old, update using an official installer or a version manager (nvm / nvm-windows).',
            'Experiment: three `useEffect` snippets — no deps, `[]`, and `[counter]` — and observe `console.log` in the browser devtools.',
            {
                text: 'Build the Feane fast-food restaurant landing page using React and Tailwind (layout, hero, menu filters, sections, footer). Reference:',
                url: 'https://themewagon.github.io/feane/'
            }
        ]
    },
    {
        id: 'L6',
        title: 'useRef, Deploy on Render & React Router',
        shortDescription: 'Use `useRef` to hold DOM nodes or mutable values without re-renders, combine it with `useEffect` to touch the DOM (e.g. change an element’s color), host a Vite React build on Render’s free static tier from GitHub, and introduce client-side routing with `react-router-dom` (BrowserRouter, Routes, Route, Link).',
        resourceUrl: 'https://react.dev/reference/react/useRef',
        repoUrl: 'https://github.com/MoonesMezher/Push-React-Project-on-Render',
        content: [
            { type: 'heading', text: 'useRef' },
            {
                type: 'list',
                items: [
                    'Import: `import { useRef } from "react"`',
                    '`const ref = useRef(initial)` returns a stable object `{ current }`. You read and write `ref.current`.',
                    'Updating `ref.current` does **not** trigger a re-render (unlike `useState`).',
                    'Typical use: attach to a DOM element with `ref={ref}` so you can call DOM APIs (focus, scroll, measure, style).',
                    'Also used to keep a mutable value across renders without causing extra renders (e.g. previous value, timer id).'
                ]
            },

            { type: 'heading', text: 'useRef + useEffect (example: change element color)' },
            { type: 'paragraph', text: 'After React paints the DOM, `useEffect` can safely use the ref. The ref points at the real element.' },
            {
                type: 'example',
                from: 'const boxRef = useRef(null);\n\nuseEffect(() => {\n  if (boxRef.current) {\n    boxRef.current.style.backgroundColor = "tomato";\n  }\n}, []); // or [someState] to re-run when that changes\n\nreturn <div ref={boxRef} className="p-8">Hello</div>;',
                to: 'Mount → effect runs → DOM node exists → set inline style (or classList)'
            },
            { type: 'note', text: 'Mix pattern: e.g. store `color` in `useState`, put `color` in the effect dependency array, and inside the effect set `boxRef.current.style.backgroundColor = color` so the DOM updates when state changes without storing the DOM node in state.' },

            { type: 'heading', text: 'Deploy React (Vite) on Render for free (static site)' },
            {
                type: 'list',
                items: [
                    'Push your project to a GitHub repository.',
                    'Create a free account on https://render.com/ and sign in.',
                    'Create a **New Static Site**, connect the GitHub repo, and authorize Render if asked.',
                    'Build command: `npm install && npm run build` (or `npm ci && npm run build`).',
                    'Publish directory: `dist` (Vite’s default output folder).',
                    'Deploy — Render builds on each push (depending on settings) and serves the static files on a free URL.'
                ]
            },
            { type: 'note', text: 'If you add client-side routes (`react-router-dom`), configure a SPA fallback so unknown paths serve `index.html` (otherwise refreshing on `/about` can 404). Check Render docs for “redirects” or rewrite rules for static sites.' },

            { type: 'heading', text: 'Intro: react-router-dom' },
            { type: 'paragraph', text: 'Install: `npm install react-router-dom`. Wrap your app so every component can use routing hooks and components.' },
            {
                type: 'mapping',
                pairs: [
                    ['`<BrowserRouter>`', 'Provider-style wrapper: supplies routing context to the tree (like a context provider). Put it once around `<App />` in `main.jsx`.'],
                    ['`<Routes>`', 'Container for multiple `<Route>` definitions.'],
                    ['`<Route path="/about" element={<About />} />`', 'When the URL matches `path`, React renders `element`.'],
                    ['`<Link to="/about">About</Link>`', 'Client-side navigation without full page reload (prefer over `<a href>` for in-app routes).']
                ]
            },
            { type: 'example', from: '<BrowserRouter>\n  <Routes>\n    <Route path="/" element={<Home />} />\n    <Route path="/about" element={<About />} />\n  </Routes>\n</BrowserRouter>', to: 'Minimal router shell' },
            { type: 'paragraph', text: 'Reference repo for pushing a Vite React project to Render: https://github.com/MoonesMezher/Push-React-Project-on-Render' }
        ],
        tasks: [
            'Build a small demo: a `div` with `useRef`, and a `useEffect` that changes its background color (try empty deps vs a color state in the dependency array).',
            'Deploy your Vite React app to Render as a static site: GitHub → Render → New Static Site → build + `dist` as publish directory.',
            'Add `react-router-dom`: wrap the app in `BrowserRouter`, define two routes with `Routes` / `Route`, and navigate with `Link`.',
            {
                text: 'Recreate the Furnish eCommerce-style landing page in React + Tailwind. Prioritize a fully responsive layout (mobile, tablet, desktop). Reference:',
                url: 'https://themewagon.github.io/furnish/'
            }
        ]
    }
    // Add more lectures by copying the object above and changing id, title, content, tasks.
];