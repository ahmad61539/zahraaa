const genreData = {
    fiksi: {
        title: "📖 Genre Fiksi",
        description: "Fiksi adalah karya sastra yang berisi cerita rekaan atau imajinasi pengarang. Meskipun tidak berdasarkan kejadian nyata, fiksi seringkali mencerminkan realitas kehidupan manusia.",
        characteristics: [
            "Berisi cerita rekaan atau khayalan",
            "Memiliki tokoh, alur, dan latar yang diciptakan pengarang",
            "Menggunakan teknik narasi untuk menyampaikan cerita",
            "Dapat mengandung pesan moral atau kritik sosial"
        ],
        types: [
            "Novel - cerita panjang dengan plot kompleks",
            "Novelet - cerita sedang, lebih panjang dari cerpen",
            "Cerpen - cerita pendek dengan satu konflik utama",
            "Roman - cerita percintaan yang panjang"
        ]
    },
    nonfiksi: {
        title: "📰 Genre Non-Fiksi",
        description: "Non-fiksi adalah karya tulis yang berdasarkan fakta, data, dan kejadian nyata. Genre ini bertujuan untuk menginformasikan, menjelaskan, atau meyakinkan pembaca.",
        characteristics: [
            "Berdasarkan fakta dan data yang dapat diverifikasi",
            "Menggunakan bahasa yang objektif dan informatif",
            "Bertujuan mendidik atau menginformasikan",
            "Dapat dipertanggungjawabkan kebenarannya"
        ],
        types: [
            "Biografi - kisah hidup seseorang",
            "Autobiografi - kisah hidup yang ditulis sendiri",
            "Esai - tulisan singkat tentang topik tertentu",
            "Artikel - tulisan informatif di media"
        ]
    },
    puisi: {
        title: "🎭 Genre Puisi",
        description: "Puisi adalah karya sastra yang menggunakan bahasa yang padat, berima, dan kaya akan makna simbolik. Puisi mengekspresikan perasaan dan pemikiran dengan cara yang artistik.",
        characteristics: [
            "Menggunakan bahasa yang padat dan simbolik",
            "Memiliki irama dan rima tertentu",
            "Mengandung majas dan kiasan",
            "Mengekspresikan perasaan dan emosi"
        ],
        types: [
            "Sonnet - puisi 14 baris dengan pola rima tertentu",
            "Balada - puisi naratif yang menceritakan kisah",
            "Pantun - puisi tradisional dengan pola a-b-a-b",
            "Syair - puisi naratif dengan pola a-a-a-a"
        ]
    },
    drama: {
        title: "🎪 Genre Drama",
        description: "Drama adalah karya sastra yang ditulis dalam bentuk dialog dan action, dimaksudkan untuk dipentaskan di atas panggung atau layar.",
        characteristics: [
            "Ditulis dalam bentuk dialog dan action",
            "Memiliki struktur babak dan adegan",
            "Menggunakan teknik teatrikal",
            "Dapat dipentaskan oleh aktor"
        ],
        types: [
            "Tragedi - berakhir sedih atau mengenaskan",
            "Komedi - menghibur dan berakhir bahagia",
            "Drama - campuran unsur tragis dan komis",
            "Musikal - drama yang dipadukan dengan musik"
        ]
    },
    fantasi: {
        title: "🧙‍♂️ Genre Fantasi",
        description: "Fantasi adalah genre yang menampilkan elemen supernatural, magis, atau tidak realistis yang tidak ada di dunia nyata.",
        characteristics: [
            "Mengandung elemen supernatural atau magis",
            "Memiliki dunia atau setting yang tidak realistis",
            "Sering menggunakan makhluk mitologis",
            "Mengeksplorasi kemungkinan yang tidak terbatas"
        ],
        types: [
            "High Fantasy - dunia fantasi yang terpisah dari dunia nyata",
            "Urban Fantasy - fantasi yang terjadi di dunia modern",
            "Dark Fantasy - fantasi dengan elemen horror",
            "Science Fantasy - campuran fantasi dan sains"
        ]
    },
    misteri: {
        title: "🔍 Genre Misteri",
        description: "Misteri adalah genre yang berfokus pada pemecahan teka-teki, kejahatan, atau peristiwa yang tidak dapat dijelaskan dengan mudah.",
        characteristics: [
            "Mengandung teka-teki atau kejahatan yang harus dipecahkan",
            "Memiliki suspense dan ketegangan",
            "Sering melibatkan detektif atau investigator",
            "Pembaca diajak untuk ikut memecahkan misteri"
        ],
        types: [
            "Detective Fiction - fokus pada detektif yang memecahkan kasus",
            "Cozy Mystery - misteri ringan tanpa kekerasan eksplisit",
            "Hard Boiled - misteri dengan suasana gelap dan keras",
            "Psychological Thriller - fokus pada aspek psikologis"
        ]
    }
};

function openGenreModal(genreType) {
    const genre = genreData[genreType];
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <h2 style="color: #667eea; margin-bottom: 20px;">${genre.title}</h2>
        <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">${genre.description}</p>
        
        <h3 style="color: #333; margin-bottom: 15px;">🔍 Karakteristik:</h3>
        <ul style="color: #666; line-height: 1.6; margin-bottom: 25px; padding-left: 20px;">
            ${genre.characteristics.map(char => `<li>${char}</li>`).join('')}
        </ul>
        
        <h3 style="color: #333; margin-bottom: 15px;">📝 Jenis-jenis:</h3>
        <ul style="color: #666; line-height: 1.6; padding-left: 20px;">
            ${genre.types.map(type => `<li>${type}</li>`).join('')}
        </ul>
    `;
    
    document.getElementById('genreModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('genreModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function startQuiz() {
    alert('🎉 Fitur kuis akan segera hadir! Tetap semangat belajar ya!');
}

function showRandomFact() {
    const facts = [
        "💡 Tahukah kamu? Novel pertama di dunia adalah 'The Tale of Genji' yang ditulis oleh Murasaki Shikibu pada abad ke-11!",
        "📚 Genre fantasi modern dimulai dari karya J.R.R. Tolkien dengan 'The Hobbit' dan 'The Lord of the Rings'.",
        "🎭 Drama tertua yang masih dimainkan hingga kini adalah karya-karya dari Yunani kuno seperti 'Oedipus Rex'.",
        "🔍 Sherlock Holmes adalah karakter detektif fiksi paling terkenal yang dibuat oleh Arthur Conan Doyle.",
        "📖 Puisi haiku berasal dari Jepang dan terdiri dari 3 baris dengan pola 5-7-5 suku kata."
    ];
    
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    alert(randomFact);
}

window.onclick = function(event) {
    const modal = document.getElementById('genreModal');
    if (event.target === modal) {
        closeModal();
    }
}

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

document.querySelectorAll('.genre-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(102, 126, 234, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});