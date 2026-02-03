const portfolioData = [
    {
        semester: 1,
        softwares: [
            { name: "Microsoft Office", desc: "Dasar pengolahan laporan dan data statistik sederhana.", img: "assets/microsoft.svg" },
            { name: "AutoCAD", desc: "Pengenalan gambar teknik dan digitasi peta dasar.", img: "assets/autocad.svg" }
        ]
    },
    {
        semester: 2,
        softwares: [
            { name: "PostgreSQL", desc: "Pembuatan model 3D permukaan dan analisis kontur.", img: "assets/postgresql.svg" },
            { name: "Python", desc: "Logika pemrograman dasar untuk otomasi hitungan.", img: "assets/python.svg" },
            { name: "Google Collabs", desc: "Penedia layanan kolaborasi berbasis cloud.", img: "assets/googlecolab.svg" }
        ]
    },
        {
        semester: 3,
        softwares: [
            { name: "PCI Geomatica", desc: "Software fotogrametri", img: "assets/pci.svg" },
            { name: "QGIS", desc: "SIG", img: "assets/qgis.svg" },
            { name: "CloudCompare", desc: "Point Cloud Processing", img: "assets/cloudcompare.svg" },
            { name: "Surpac", desc: "Survei Terestris", img: "assets/surpac.svg" },
            { name: "Photomodeler", desc: "fotografi", img: "assets/photomodeler.svg" }
        ]
    },
        {
        semester: 4,
        softwares: [
            { name: "Sketchup", desc: "Pembuatan model 3D.", img: "assets/sketchup.svg" },
            { name: "Envi", desc: "Olah data citra penginderaan jauh.", img: "assets/envi.svg" },
            { name: "Three.js", desc: "Pembuatan visualisasi 3D interaktif.", img: "assets/threejs.svg" },
            { name: "sketchfab", desc: "Model 3D online.", img: "assets/sketchfab.svg" },
            { name: "Google Earth", desc: "Visualisasi data geospasial.", img: "assets/googleearth.svg" },
            { name: "Google Earth Engine", desc: "Platform analisis data citra berbasis cloud.", img: "assets/googleearthengine.svg" },
            { name: "Mapbox", desc: "Platform peta interaktif.", img: "assets/mapbox.svg" },
        ]
    },
        {
        semester: 5,
        softwares: [
            { name: "Agisoft Metashape", desc: "Olah data fotogrametri dari drone/UAV.", img: "assets/agisoft.svg" },
            { name: "Anaconda", desc: "Logika pemrograman data geospasial.", img: "assets/anaconda.svg" },
            { name: "Geopandas", desc: "Library pemrograman data geospasial.", img: "assets/geopandas.svg" },
            { name: "Trimble", desc: "Pengolahan data GNSS", img: "assets/trimble.svg" },
            { name: "Surfer", desc: "software gridding + surface modeling.", img: "assets/surfer.svg" },
            { name: "Dji Pilot", desc: "Software Pembuatan waypoint.", img: "assets/djipilot.svg" },

        ]
    },
    {
        semester: 6, // Contoh semester kamu sekarang
        softwares: [
            { name: "Mathlab", desc: "Perhitungan arus pasut.", img: "assets/mathlab.svg" },
            { name: "GDAL", desc: "Pengolahan data geospasial", img: "assets/gdal.svg" },
            { name: "OSgeo", desc: "Pengolahan data geospasial", img: "assets/osgeo.svg" },
            { name: "Leaflet.js", desc: "Library JavaScript untuk peta interaktif.", img: "assets/leaflet.svg" },
            { name: "Bootstrap", desc: "Framework CSS untuk pengembangan web.", img: "assets/bootstrap.svg" },
            { name: "Github page", desc: "Platform hosting web statis.", img: "assets/githubpages.svg" },
        ]
    },
    {
        semester: 7,
        softwares: [
            { name: "Bahasa R", desc: "Bahasa pemrograman R.", img: "assets/r.svg" },
            { name: "PostGIS", desc: "Manajemen basis data spasial untuk skala besar.", img: "assets/postgis.svg" },
            { name: "Arcgis", desc: "Analisis SIG esri lisenced", img: "assets/arcgis.svg" }, 
            { name: "Eiva", desc: "Software pengolahan arus pasut hidrografi.", img: "assets/eiva.svg" }
        ]
    },
    {
        semester: 8,
        softwares: [
            { name: "prediksi", desc: "???", img: "https://via.placeholder.com/80?text=?" },
            { name: "prediksi", desc: "???", img: "https://via.placeholder.com/80?text=?" }
        ]
    }
];

function renderPortfolio() {
    const container = document.getElementById('portfolio-container');

    portfolioData.forEach(item => {
        const section = document.createElement('div');
        section.className = 'semester-section';

        let cardsHtml = item.softwares.map(sw => `
            <div class="software-card">
                <img src="${sw.img}" alt="${sw.name}">
                <h3>${sw.name}</h3>
                <p>${sw.desc}</p>
            </div>
        `).join('');

        section.innerHTML = `
            <h2 class="semester-header">Semester ${item.semester}</h2>
            <div class="software-grid">
                ${cardsHtml}
            </div>
        `;
        
        container.appendChild(section);
    });
}

window.onload = renderPortfolio;