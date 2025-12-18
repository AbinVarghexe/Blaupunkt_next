export default function sitemap() {
    const routes = [
        'https://blaupunkt-ev.com/en/',
        'https://blaupunkt-ev.com/en/products',
        'https://blaupunkt-ev.com/en/services',
        'https://blaupunkt-ev.com/en/company',
        'https://blaupunkt-ev.com/en/contact',
        'https://blaupunkt-ev.com/en/charging-cables',
        'https://blaupunkt-ev.com/en/charging-stations',
        'https://blaupunkt-ev.com/en/portable-ev-charging',
        'https://blaupunkt-ev.com/en/dc-charging-station',
        'https://blaupunkt-ev.com/en/dc-super-fast-charging-station',
    ];

    return routes.map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: url.endsWith('/en/') ? 1 : 0.8,
    }));
}
