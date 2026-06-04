import fs from 'fs';
fetch('https://motointegrator.com/bg/bg/serviz/gabrovo/v8zw59wm-minchev-klima-eood', {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
    }
})
.then(r => r.text())
.then(html => fs.writeFileSync('out.html', html))
.catch(e => console.error(e));
