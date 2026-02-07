/**
 * Lectures data — add new lessons here.
 * Structure mirrors LECTURE.md (sections, notes, lists) and TASK.md (tasks).
 */
const LECTURES = [
  {
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
      { type: 'mapping', pairs: [
        ['bg-color', 'background-color'],
        ['text-color', 'color'],
        ['text-size', 'font-size'],
        ['font-title', 'font-weight'],
        ['p', 'padding'],
        ['m', 'margin'],
        ['w', 'width'],
        ['h', 'height'],
        ['overflow', 'overflow']
      ]},
      { type: 'paragraph', text: 'p => left & right & top & bottom | px => left & right | py => top & bottom | pt, pb, pl, pr, ps, pe — the same for margin (m, mx, my, mt, mb, ml, mr, ms, me)' },
      { type: 'example', from: 'bg-linear-to-r from-blue-500 to-red-500', to: 'background: linear-gradient(0%, blue, red)' },
      { type: 'paragraph', text: 'Colors: 50 - 100 - 200 - ... - 900 - 950' },
      { type: 'heading', text: 'What we use in this lecture (index.html)' },
      { type: 'paragraph', text: 'We link Tailwind via the built output: <link rel="stylesheet" href="./src/output.css">' },
      { type: 'heading', text: 'Basic utilities (commented in index.html)' },
      { type: 'mapping', pairs: [
        ['bg-emerald-500 text-amber-800', 'background + text color'],
        ['text-5xl font-bold cursor-pointer', 'font-size, font-weight, cursor'],
        ['p-2 m-5', 'padding + margin'],
        ['w-20 h-20', 'width + height'],
        ['overflow-hidden', 'overflow: hidden'],
        ['mt-2', 'margin-top']
      ]},
      { type: 'heading', text: 'Flexbox' },
      { type: 'paragraph', text: 'hidden mt-5 w-full gap-5 justify-center flex-col items-center => display: flex (with flex-col), gap, justify-center, items-center, plus hidden and w-full' },
      { type: 'mapping', pairs: [
        ['flex', 'display: flex'],
        ['flex-col', 'flex-direction: column'],
        ['justify-center', 'justify-content: center'],
        ['items-center', 'align-items: center'],
        ['gap-5', 'gap'],
        ['hidden', 'display: none']
      ]},
      { type: 'heading', text: 'Grid' },
      { type: 'mapping', pairs: [
        ['grid', 'display: grid'],
        ['grid-cols-3', 'grid-template-columns: repeat(3, minmax(0, 1fr))'],
        ['gap-2', 'gap'],
        ['grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5', 'responsive columns']
      ]},
      { type: 'heading', text: 'Borders, hover, transition' },
      { type: 'mapping', pairs: [
        ['border-2 border-solid', 'border width + style'],
        ['hover:bg-white hover:border-black', 'hover states'],
        ['duration-300', 'transition-duration']
      ]},
      { type: 'heading', text: 'Position & pseudo-elements' },
      { type: 'mapping', pairs: [
        ['relative', 'position: relative'],
        ['absolute left-0 top-0', 'position: absolute + placement'],
        ['before:h-10 before:bg-black before:p-2', '::before size, background, padding']
      ]},
      { type: 'heading', text: 'Transform & opacity' },
      { type: 'mapping', pairs: [
        ['rotate-12', 'transform: rotate'],
        ['translate-2', 'transform: translate'],
        ['scale-110', 'transform: scale'],
        ['opacity-50', 'opacity: 0.5']
      ]},
      { type: 'heading', text: 'Other utilities (from index.html)' },
      { type: 'mapping', pairs: [
        ['mx-auto', 'margin left/right auto'],
        ['rounded-full', 'border-radius: 9999px'],
        ['animate-spin', 'animation: spin'],
        ['border-4 border-r-red-500', 'border + border-right color'],
        ['h-screen', 'height: 100vh'],
        ['text-center mb-2', 'text-align + margin-bottom']
      ]},
      { type: 'heading', text: 'Arbitrary values (square brackets)' },
      { type: 'paragraph', text: 'When you need a value Tailwind does not have, use [value]:' },
      { type: 'example', from: 'w-[100px] translate-x-[50%] rotate-[10deg] bg-[#eee] h-[50px] text-[red] p-[20px] mt-[100px]', to: 'custom width, transform, color, padding, margin' },
      { type: 'heading', text: 'Flex basis & responsive breakpoints' },
      { type: 'paragraph', text: 'basis-[100%] min-[500px]:basis-[44%] md:basis-[30%] min-[900px]:basis-[18%]! => flex-basis with breakpoints (min-width 500px, md, min-width 900px); ! = important' },
      { type: 'mapping', pairs: [
        ['flex-wrap', 'flex-wrap: wrap'],
        ['justify-between', 'justify-content: space-between'],
        ['basis-[100%]', 'flex-basis: 100%'],
        ['min-[500px]:...', 'apply at min-width 500px'],
        ['md:basis-[30%]', 'apply at md breakpoint'],
        ['...!', '!important (e.g. p-10!)']
      ]},
      { type: 'heading', text: 'Theme / custom (primary)' },
      { type: 'paragraph', text: 'bg-primary text-primary border-primary => use custom theme colors defined in Tailwind config' }
    ],
    tasks: [
      'Convert the ARABESCA Using Tailwind.css',
      { text: 'Create this website using Tailwind', url: 'https://themewagon.github.io/stylish/index.html' }
    ]
  }
  // Add more lectures by copying the object above and changing id, title, content, tasks.
];
