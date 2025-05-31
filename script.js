const wallpapers = [
    { category: 'nature', src: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { category: 'nature', src: 'https://images.pexels.com/photos/1379640/pexels-photo-1379640.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { category: 'abstract', src: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { category: 'abstract', src: 'https://images.pexels.com/photos/2514035/pexels-photo-2514035.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { category: 'technology', src: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { category: 'technology', src: 'https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

function loadWallpapers(category = 'all') {
    const gallery = document.getElementById('wallpaper-gallery');
    gallery.innerHTML = '';

    const filtered = category === 'all' ? wallpapers : wallpapers.filter(w => w.category === category);

    filtered.forEach(wallpaper => {
        const div = document.createElement('div');
        div.classList.add('wallpaper');
        div.innerHTML = `<img src="${wallpaper.src}" alt="${wallpaper.category} wallpaper">`;
        gallery.appendChild(div);
    });
}

function filterCategory(category) {
    loadWallpapers(category);
}

// Load all wallpapers initially
window.onload = () => loadWallpapers();
