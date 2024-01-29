let svgFile = (function () {
    let template = `<svg xmlns="http://www.w3.org/2000/svg"
     width="115" height="20" role="img" aria-label="Maintained?: yes">
    <title>Maintained?: yes</title>
    <linearGradient id="s" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <clipPath id="r">
        <rect width="115" height="20" rx="3" fill="#fff"/>
    </clipPath>
    <g clip-path="url(#r)">
        <rect width="50" height="20" fill="#555"/>
        <rect x="50" width="160" height="20" fill="#007ec6"/>
        <rect width="115" height="20" fill="url(#s)"/>
    </g>
    <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="110">
        <text x="250" y="140" transform="scale(.1)" fill="#fff">Views</text>
        <text x="825" y="140" transform="scale(.1)" fill="#fff">{views}</text>
    </g>
</svg>`;
    let create = async function (views) {
        return template.replace('{views}', views.toLocaleString());
    }
    return {
        create: create
    };
})();
module.exports = svgFile