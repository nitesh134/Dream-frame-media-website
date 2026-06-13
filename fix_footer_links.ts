import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace footer anchors with Links and add scroll behavior if needed, or simply use Link to=
// For simplicity, since the function handleScrollToHash is inside Navbar, we can just use Link
// Wait, Link to="/#faq-section" alone won't scroll smoothly without a custom hook.
// But standard href="#faq" would, but wait it has "/#"
// Let's replace href="/#... with href="/#..." wait, let's just make sure it's Link so it doesn't reload.
content = content.replace(/<a href="\/#who-we-are"/g, '<Link to="/#who-we-are"');
content = content.replace(/<a href="\/#work"/g, '<Link to="/#work"');
content = content.replace(/<a href="\/#case-studies"/g, '<Link to="/#case-studies"');
content = content.replace(/<a href="\/#faq-section"/g, '<Link to="/#faq-section"');
content = content.replace(/<a href="\/#booking"/g, '<Link to="/#booking"');

content = content.replace(/<\/a><\/li>/g, '</Link></li>');

fs.writeFileSync('src/App.tsx', content);
