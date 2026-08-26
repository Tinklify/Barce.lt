const fs = require('fs');
const files = [
  'app/apie-mus/page.tsx',
  'app/portfolio/page.tsx',
  'app/paslaugos/[slug]/page.tsx',
  'app/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // find <img ... className="..." ... className="..."
  // It's easier to use a regex for className="([^"]*)"\\s+className="([^"]*)"
  // because my sed added it right before or near it.
  
  content = content.replace(/className="absolute inset-0 w-full h-full object-cover"\s*className="([^"]*)"/g, 'className="absolute inset-0 w-full h-full object-cover $1"');
  
  // also check if they are separated by newlines
  content = content.replace(/className="absolute inset-0 w-full h-full object-cover"\s*\n\s*className="([^"]*)"/g, 'className="absolute inset-0 w-full h-full object-cover $1"');
  
  fs.writeFileSync(file, content);
});
