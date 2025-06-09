const genreData = {
    seksbebas: {
      title: "🚫 Seks Bebas",
      description:
        "Seks bebas adalah perilaku hubungan seksual yang dilakukan di luar ikatan pernikahan yang sah, tanpa tanggung jawab, dan sering kali dilakukan dengan pasangan berbeda atau tanpa perlindungan.",
      causes: [
        "Kurangnya pendidikan seksual yang benar",
        "Pengaruh media dan internet",
        "Tekanan teman sebaya",
        "Kurangnya pengawasan orang tua",
        "Pernikahan dini atau putus sekolah",
        "Cinta buta atau bujuk rayu pasangan",
      ],
      impacts: {
        health: [
          "Kehamilan yang tidak diinginkan (KTD)",
          "Penularan penyakit menular seksual (PMS): HIV/AIDS, sifilis, gonore",
          "Aborsi yang tidak aman (bisa menyebabkan infertilitas atau kematian)",
        ],
        psychological: [
          "Rasa bersalah dan trauma",
          "Depresi dan kecemasan",
          "Penurunan harga diri",
        ],
        social: [
          "Putus sekolah",
          "Pengucilan sosial",
          "Ketidakmampuan membina keluarga harmonis di masa depan",
        ],
      },
      facts: [
        "5–10% remaja pernah melakukan hubungan seksual pranikah (SDKI BKKBN 2022)",
        "Sekitar 70% kehamilan remaja tidak direncanakan",
        "Indonesia memiliki angka aborsi remaja tinggi, terutama akibat kehamilan yang tidak diinginkan",
        "Remaja usia 15–24 tahun merupakan kelompok tertinggi terinfeksi HIV baru di beberapa provinsi",
      ],
      prevention: [
        "Pendidikan seksualitas yang komprehensif",
        "Penguatan karakter dan remaja tangguh",
        "Aktif dalam kegiatan positif seperti PIK-R",
        "Berani berkata 'TIDAK' pada ajakan negatif",
        "Memiliki rencana masa depan dan tujuan hidup yang jelas",
      ],
    },
    HIV: {
      title: "🦠 HIV/AIDS",
      description:
        "HIV adalah virus yang menyerang sistem kekebalan tubuh, khususnya sel CD4. AIDS adalah stadium akhir dari infeksi HIV, ditandai dengan turunnya kekebalan tubuh secara drastis dan munculnya penyakit infeksi oportunistik.",
      definitions: {
        hiv: "HIV (Human Immunodeficiency Virus) - Virus yang menyerang sistem kekebalan tubuh, khususnya sel CD4. Jika tidak ditangani, HIV melemahkan sistem imun sehingga tubuh rentan terhadap infeksi dan penyakit.",
        aids: "AIDS (Acquired Immune Deficiency Syndrome) - Stadium akhir dari infeksi HIV, ditandai dengan turunnya kekebalan tubuh secara drastis dan munculnya penyakit infeksi oportunistik (misalnya TBC, pneumonia, kanker tertentu).",
      },
      transmission: {
        note: "HIV tidak menular lewat udara, pelukan, makanan, atau air. Virus ini hanya dapat ditularkan melalui:",
        methods: [
          "Hubungan seksual tidak aman (tanpa kondom, terutama dengan banyak pasangan)",
          "Penggunaan jarum suntik bersama (terutama pada pengguna NAPZA)",
          "Transfusi darah yang tidak disaring",
          "Penularan dari ibu ke anak saat kehamilan, persalinan, atau menyusui",
        ],
      },
      symptoms: {
        title: "Tahapan Infeksi HIV",
        stages: [
          {
            stage: "Tahap awal (Acute Infection)",
            symptoms: "demam, sakit tenggorokan, ruam",
          },
          {
            stage: "Tahap laten klinis",
            symptoms: "tanpa gejala, bisa berlangsung bertahun-tahun",
          },
          {
            stage: "AIDS",
            symptoms:
              "berat badan turun drastis, infeksi kronis, sariawan parah, diare berkepanjangan",
          },
        ],
      },
      prevention: {
        title: "Pencegahan HIV/AIDS pada Remaja",
        methods: {
          sexuality_education: {
            title: "A. Edukasi Seksualitas Sehat",
            points: [
              "Menunda hubungan seksual sampai menikah",
              "Setia pada satu pasangan",
              "Gunakan kondom jika berisiko",
            ],
          },
          avoid_drugs: {
            title: "B. Jauhi NAPZA",
            points: [
              "Hindari berbagi jarum suntik",
              "Edukasi teman sebaya tentang risiko penularan HIV",
            ],
          },
          testing: {
            title: "C. Tes dan Konseling Sukarela (VCT)",
            description:
              "Remaja yang aktif seksual atau memiliki faktor risiko disarankan melakukan tes HIV secara berkala",
          },
          sterile_equipment: {
            title: "D. Hindari Tindik & Tattoo tidak steril",
            description:
              "Peralatan yang tidak disterilkan bisa menjadi jalur penularan HIV",
          },
        },
      },
      impacts: {
        title: "Dampak HIV/AIDS bagi Remaja",
        effects: [
          "Stigma dan diskriminasi dari lingkungan",
          "Masalah kesehatan jangka panjang",
          "Gangguan pendidikan dan masa depan",
          "Beban psikologis (depresi, isolasi sosial)",
        ],
      },
      important_facts: {
        title: "Fakta Penting tentang HIV/AIDS",
        facts: [
          "HIV tidak menyebar lewat bersalaman, pelukan, atau berbagi makanan",
          "Orang dengan HIV bisa hidup sehat dan normal dengan pengobatan antiretroviral (ARV)",
          "Semakin dini dideteksi, semakin besar peluang hidup sehat dan mencegah penularan",
        ],
      },
    },
    pup: {
      title: "⏰ Pendewasaan Usia Perkawinan (PUP)",
      description:
        "Pendewasaan Usia Perkawinan (PUP) adalah suatu upaya untuk meningkatkan usia saat seseorang menikah, dengan tujuan agar calon pengantin memiliki kesiapan fisik, mental, emosional, sosial, dan ekonomi.",
      ageLimit: {
        minimum:
          "19 tahun untuk laki-laki maupun perempuan (UU No. 16 Tahun 2019)",
        ideal: {
          male: "≥25 tahun",
          female: "≥21 tahun",
        },
        reason: [
          "Siap secara biologis/reproduksi",
          "Matang secara emosional dan sosial",
          "Stabil secara pendidikan dan ekonomi",
        ],
      },
      importance: {
        health:
          "Menikah terlalu muda (di bawah 20 tahun) berisiko tinggi bagi ibu dan bayi: komplikasi kehamilan, persalinan prematur, anemia, dan kematian ibu/melahirkan",
        psychological:
          "Usia remaja belum siap mengelola konflik, emosi, dan tanggung jawab keluarga",
        education:
          "Menikah muda sering mengganggu kelanjutan pendidikan dan mempersempit peluang kerja",
        divorce:
          "Data menunjukkan pasangan yang menikah terlalu muda memiliki angka perceraian lebih tinggi",
      },
      impacts: {
        education: "Putus sekolah",
        health: [
          "Kehamilan usia remaja",
          "Kematian ibu dan bayi meningkat",
        ],
        economic: "Kemiskinan berkelanjutan",
        social: [
          "Risiko kekerasan dalam rumah tangga (KDRT)",
          "Rentan terhadap eksploitasi seksual dan ketimpangan gender",
        ],
      },
      prevention: [
        "Edukasi & Informasi melalui PIK-R (Pusat Informasi dan Konseling Remaja) tentang pentingnya merencanakan masa depan, karier, dan keluarga",
        "Pendampingan Sebaya - remaja saling mendukung dan memberi contoh positif dalam lingkungan sekolah dan masyarakat",
        "Komunikasi Orang Tua & Remaja - orang tua perlu menjadi tempat terbuka untuk berdiskusi tentang cinta, pernikahan, dan masa depan",
        "Kegiatan Positif Remaja - terlibat dalam ekstrakurikuler, organisasi, dan pelatihan life skills untuk menunda usia perkawinan",
      ],
    },
    lifeskills: {
      title: "🌟 Keterampilan Hidup (Life Skills)",
      description:
        "Keterampilan hidup adalah kemampuan seseorang untuk mengelola diri, berinteraksi, dan mengambil keputusan secara efektif dalam menghadapi tantangan kehidupan sehari-hari. Dalam konteks Program GENRE, life skill bertujuan membentuk remaja yang mandiri, percaya diri, mampu membuat pilihan sehat, tahan terhadap tekanan negatif, dan siap menghadapi masa depan.",
      types: {
        personal: {
          title: "Keterampilan Personal (Personal Skills)",
          description:
            "Kemampuan untuk mengenal dan mengelola diri sendiri",
          skills: [
            "Mengenal potensi diri",
            "Percaya diri",
            "Mengelola emosi dan stres",
            "Berpikir kritis dan kreatif",
            "Mengembangkan rasa tanggung jawab",
          ],
        },
        social: {
          title: "Keterampilan Sosial (Social Skills)",
          description:
            "Kemampuan untuk membangun hubungan sehat dengan orang lain",
          skills: [
            "Komunikasi efektif",
            "Empati",
            "Kerja sama dan kolaborasi",
            "Menolak tekanan negatif (assertive)",
            "Menyelesaikan konflik dengan damai",
          ],
        },
        academic_career: {
          title: "Keterampilan Akademik dan Karier",
          description:
            "Kemampuan untuk merencanakan masa depan dan mandiri secara ekonomi",
          skills: [
            "Pengambilan keputusan",
            "Perencanaan karier dan keuangan",
            "Kemandirian belajar",
            "Time management",
          ],
        },
      },
      importance: [
        "Menjadi dasar dalam menghindari perilaku berisiko: seks bebas, NAPZA, pernikahan dini",
        "Membantu remaja dalam menghadapi perubahan fisik dan psikologis",
        "Membentuk karakter dan identitas diri yang kuat",
        "Meningkatkan kesiapan menghadapi dunia kerja dan kehidupan dewasa",
        "Membantu membuat keputusan sehat, termasuk dalam perencanaan kehidupan berkeluarga",
      ],
      expected_outcomes: [
        "Mampu membuat keputusan sehat dan bertanggung jawab",
        "Aktif dalam komunitas dan organisasi",
        "Menjadi agen perubahan (role model) bagi teman sebaya",
        "Siap secara mental, emosional, dan sosial dalam memasuki jenjang dewasa dan berkeluarga",
      ],
      genre_goals: [
        "Mandiri dan percaya diri",
        "Mampu membuat pilihan yang sehat",
        "Tahan terhadap tekanan negatif",
        "Siap menghadapi masa depan",
      ],
    },
    napza: {
      title: "⚠️ NAPZA (Narkotika, Psikotropika, dan Zat Adiktif)",
      description:
        "NAPZA adalah Narkotika, Psikotropika, dan Zat Adiktif lainnya. Istilah ini digunakan untuk menggambarkan zat-zat kimia yang mempengaruhi sistem saraf pusat dan dapat menyebabkan ketergantungan fisik maupun psikologis.",
      characteristics: [
        "Mempengaruhi sistem saraf pusat",
        "Menyebabkan ketergantungan fisik dan psikologis",
        "Mengubah kesadaran dan perilaku",
        "Berbahaya bagi kesehatan dan kehidupan sosial",
      ],
      types: [
        "Narkotika - Morfin, Heroin, Ganja, Kokain, Opium",
        "Psikotropika - Ekstasi, Shabu-shabu, Diazepam, LSD",
        "Zat Adiktif Lainnya - Nikotin, Alkohol, Lem aibon, Kafein berlebihan",
      ],
    },
    misteri: {
      title: "🔍 Genre Misteri",
      description:
        "Misteri adalah genre yang berfokus pada pemecahan teka-teki, kejahatan, atau peristiwa yang tidak dapat dijelaskan dengan mudah.",
      characteristics: [
        "Mengandung teka-teki atau kejahatan yang harus dipecahkan",
        "Memiliki suspense dan ketegangan",
        "Sering melibatkan detektif atau investigator",
        "Pembaca diajak untuk ikut memecahkan misteri",
      ],
      types: [
        "Detective Fiction - fokus pada detektif yang memecahkan kasus",
        "Cozy Mystery - misteri ringan tanpa kekerasan eksplisit",
        "Hard Boiled - misteri dengan suasana gelap dan keras",
        "Psychological Thriller - fokus pada aspek psikologis",
      ],
    },
  };

  function openGenreModal(genreType) {
    const genre = genreData[genreType];
    const modalContent = document.getElementById("modalContent");

    if (genreType === "napza") {
      modalContent.innerHTML = `
                <h2 style="color: #dc3545; margin-bottom: 20px;">${genre.title}</h2>
                <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">${genre.description}</p>
                
                <h3 style="color: #333; margin-bottom: 15px;">⚠️ Jenis-jenis NAPZA:</h3>
                <div style="margin-bottom: 25px;">
                    <h4 style="color: #dc3545; margin-bottom: 10px;">A. Narkotika</h4>
                    <p style="color: #666; margin-bottom: 10px; font-size: 0.9rem;">Zat atau obat yang berasal dari tanaman atau bukan tanaman yang dapat menyebabkan penurunan kesadaran dan ketergantungan.</p>
                    <p style="color: #666; margin-bottom: 15px;"><strong>Contoh:</strong> Morfin, Heroin, Ganja, Kokain, Opium</p>
                    
                    <h4 style="color: #dc3545; margin-bottom: 10px;">B. Psikotropika</h4>
                    <p style="color: #666; margin-bottom: 10px; font-size: 0.9rem;">Zat yang bekerja pada susunan saraf pusat dan menyebabkan perubahan aktivitas mental dan perilaku.</p>
                    <p style="color: #666; margin-bottom: 15px;"><strong>Contoh:</strong> Ekstasi, Shabu-shabu, Diazepam, LSD</p>
                    
                    <h4 style="color: #dc3545; margin-bottom: 10px;">C. Zat Adiktif Lainnya</h4>
                    <p style="color: #666; margin-bottom: 10px; font-size: 0.9rem;">Zat yang bukan narkotika/psikotropika tetapi dapat menyebabkan ketergantungan.</p>
                    <p style="color: #666; margin-bottom: 25px;"><strong>Contoh:</strong> Nikotin, Alkohol, Lem aibon, Kafein berlebihan</p>
                </div>
                
                <h3 style="color: #333; margin-bottom: 15px;">💔 Dampak Penyalahgunaan:</h3>
                <div style="margin-bottom: 25px;">
                    <h4 style="color: #dc3545; margin-bottom: 10px;">Dampak Fisik:</h4>
                    <ul style="color: #666; line-height: 1.4; margin-bottom: 15px; padding-left: 20px; font-size: 0.9rem;">
                        <li>Gangguan sistem saraf</li>
                        <li>Penurunan fungsi organ (hati, ginjal, paru)</li>
                        <li>Penurunan berat badan drastis</li>
                        <li>Risiko infeksi HIV/AIDS</li>
                    </ul>
                    
                    <h4 style="color: #dc3545; margin-bottom: 10px;">Dampak Psikologis:</h4>
                    <ul style="color: #666; line-height: 1.4; margin-bottom: 15px; padding-left: 20px; font-size: 0.9rem;">
                        <li>Halusinasi dan delusi</li>
                        <li>Depresi dan kecemasan</li>
                        <li>Agresivitas</li>
                        <li>Gangguan mental jangka panjang</li>
                    </ul>
                    
                    <h4 style="color: #dc3545; margin-bottom: 10px;">Dampak Sosial:</h4>
                    <ul style="color: #666; line-height: 1.4; margin-bottom: 25px; padding-left: 20px; font-size: 0.9rem;">
                        <li>Putus sekolah</li>
                        <li>Pelanggaran hukum (kriminalitas)</li>
                        <li>Menurunnya produktivitas</li>
                        <li>Mengganggu keharmonisan keluarga</li>
                    </ul>
                </div>
                
                <h3 style="color: #333; margin-bottom: 15px;">🛡️ Pencegahan:</h3>
                <ul style="color: #666; line-height: 1.4; padding-left: 20px; font-size: 0.9rem;">
                    <li><strong>Pencegahan Primer:</strong> Edukasi dan pembentukan karakter sejak dini</li>
                    <li><strong>Pencegahan Sekunder:</strong> Identifikasi dini dan konseling</li>
                    <li><strong>Pencegahan Tersier:</strong> Rehabilitasi dan reintegrasi sosial</li>
                </ul>
            `;
    } else if (genreType === "seksbebas") {
      modalContent.innerHTML = `
    <h2 style="color: #dc3545; margin-bottom: 20px;">${genre.title}</h2>
    <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">${
      genre.description
    }</p>
    
    <h3 style="color: #333; margin-bottom: 15px;">🧠 Penyebab:</h3>
    <ul style="color: #666; line-height: 1.6; margin-bottom: 25px; padding-left: 20px;">
        ${genre.causes.map((item) => `<li>${item}</li>`).join("")}
    </ul>

    <h3 style="color: #333; margin-bottom: 15px;">💥 Dampak:</h3>
    <div style="margin-bottom: 25px;">
        <h4 style="color: #dc3545; margin-bottom: 10px;">Dampak Kesehatan:</h4>
        <ul style="color: #666; line-height: 1.6; margin-bottom: 15px; padding-left: 20px;">
            ${genre.impacts.health
              .map((item) => `<li>${item}</li>`)
              .join("")}
        </ul>

        <h4 style="color: #dc3545; margin-bottom: 10px;">Dampak Psikologis:</h4>
        <ul style="color: #666; line-height: 1.6; margin-bottom: 15px; padding-left: 20px;">
            ${genre.impacts.psychological
              .map((item) => `<li>${item}</li>`)
              .join("")}
        </ul>

        <h4 style="color: #dc3545; margin-bottom: 10px;">Dampak Sosial:</h4>
        <ul style="color: #666; line-height: 1.6; margin-bottom: 25px; padding-left: 20px;">
            ${genre.impacts.social
              .map((item) => `<li>${item}</li>`)
              .join("")}
        </ul>
    </div>

    <h3 style="color: #333; margin-bottom: 15px;">📊 Fakta:</h3>
    <ul style="color: #666; line-height: 1.6; margin-bottom: 25px; padding-left: 20px;">
        ${genre.facts.map((item) => `<li>${item}</li>`).join("")}
    </ul>

    <h3 style="color: #333; margin-bottom: 15px;">🛡️ Pencegahan:</h3>
    <ul style="color: #666; line-height: 1.6; padding-left: 20px;">
        ${genre.prevention.map((item) => `<li>${item}</li>`).join("")}
    </ul>
`;
    } else if (genreType === "HIV") {
      modalContent.innerHTML = `
    <h2 style="color: #dc3545; margin-bottom: 20px;">${genre.title}</h2>
    <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">${
      genre.description
    }</p>
    
    <h3 style="color: #333; margin-bottom: 15px;">📖 Definisi:</h3>
    <ul style="color: #666; line-height: 1.6; margin-bottom: 25px; padding-left: 20px;">
        <li><strong>HIV:</strong> ${genre.definitions.hiv}</li>
        <li><strong>AIDS:</strong> ${genre.definitions.aids}</li>
    </ul>
    
    <h3 style="color: #333; margin-bottom: 15px;">🦠 Cara Penularan:</h3>
    <p style="color: #666; line-height: 1.6; margin-bottom: 15px;">${
      genre.transmission.note
    }</p>
    <ul style="color: #666; line-height: 1.6; margin-bottom: 25px; padding-left: 20px;">
        ${genre.transmission.methods
          .map((method) => `<li>${method}</li>`)
          .join("")}
    </ul>
    
    <h3 style="color: #333; margin-bottom: 15px;">⚠️ ${
      genre.symptoms.title
    }:</h3>
    <ul style="color: #666; line-height: 1.6; margin-bottom: 25px; padding-left: 20px;">
        ${genre.symptoms.stages
          .map(
            (stage) => `
            <li><strong>${stage.stage}:</strong> ${stage.symptoms}</li>
        `
          )
          .join("")}
    </ul>
    
    <h3 style="color: #333; margin-bottom: 15px;">🛡️ Pencegahan HIV/AIDS pada Remaja:</h3>
    <div style="color: #666; line-height: 1.6; margin-bottom: 25px;">
        <h4 style="color: #dc3545; margin-bottom: 10px;">${
          genre.prevention.methods.sexuality_education.title
        }</h4>
        <ul style="padding-left: 20px;">
            ${genre.prevention.methods.sexuality_education.points
              .map((point) => `<li>${point}</li>`)
              .join("")}
        </ul>
        <h4 style="color: #dc3545; margin-bottom: 10px;">${
          genre.prevention.methods.avoid_drugs.title
        }</h4>
        <ul style="padding-left: 20px;">
            ${genre.prevention.methods.avoid_drugs.points
              .map((point) => `<li>${point}</li>`)
              .join("")}
        </ul>
        <h4 style="color: #dc3545; margin-bottom: 10px;">${
          genre.prevention.methods.testing.title
        }</h4>
        <p>${genre.prevention.methods.testing.description}</p>
        <h4 style="color: #dc3545; margin-bottom: 10px;">${
          genre.prevention.methods.sterile_equipment.title
        }</h4>
        <p>${genre.prevention.methods.sterile_equipment.description}</p>
    </div>

    <h3 style="color: #333; margin-bottom: 15px;">💥 Dampak HIV/AIDS bagi Remaja:</h3>
    <ul style="color: #666; line-height: 1.6; margin-bottom: 25px; padding-left: 20px;">
        ${genre.impacts.effects
          .map((effect) => `<li>${effect}</li>`)
          .join("")}
    </ul>

    <h3 style="color: #333; margin-bottom: 15px;">📊 Fakta Penting tentang HIV/AIDS:</h3>
    <ul style="color: #666; line-height: 1.6; padding-left: 20px;">
        ${genre.important_facts.facts
          .map((fact) => `<li>${fact}</li>`)
          .join("")}
    </ul>
`;
    } else if (genreType === "lifeskills") {
      modalContent.innerHTML = `
    <h2 style="color: #28a745; margin-bottom: 20px;">${genre.title}</h2>
    <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">${
      genre.description
    }</p>
    
    <h3 style="color: #333; margin-bottom: 15px;">🎯 Tujuan Program GENRE:</h3>
    <ul style="color: #666; line-height: 1.6; margin-bottom: 25px; padding-left: 20px;">
        ${genre.genre_goals.map((item) => `<li>${item}</li>`).join("")}
    </ul>

    <h3 style="color: #333; margin-bottom: 15px;">🌟 Jenis-Jenis Keterampilan Hidup:</h3>
    <div style="margin-bottom: 25px;">
        <h4 style="color: #007bff; margin-bottom: 10px;">A. ${
          genre.types.personal.title
        }</h4>
        <p style="color: #666; font-style: italic; margin-bottom: 10px;">${
          genre.types.personal.description
        }</p>
        <ul style="color: #666; line-height: 1.6; margin-bottom: 15px; padding-left: 20px;">
            ${genre.types.personal.skills
              .map((item) => `<li>${item}</li>`)
              .join("")}
        </ul>

        <h4 style="color: #007bff; margin-bottom: 10px;">B. ${
          genre.types.social.title
        }</h4>
        <p style="color: #666; font-style: italic; margin-bottom: 10px;">${
          genre.types.social.description
        }</p>
        <ul style="color: #666; line-height: 1.6; margin-bottom: 15px; padding-left: 20px;">
            ${genre.types.social.skills
              .map((item) => `<li>${item}</li>`)
              .join("")}
        </ul>

        <h4 style="color: #007bff; margin-bottom: 10px;">C. ${
          genre.types.academic_career.title
        }</h4>
        <p style="color: #666; font-style: italic; margin-bottom: 10px;">${
          genre.types.academic_career.description
        }</p>
        <ul style="color: #666; line-height: 1.6; margin-bottom: 25px; padding-left: 20px;">
            ${genre.types.academic_career.skills
              .map((item) => `<li>${item}</li>`)
              .join("")}
        </ul>
    </div>

    <h3 style="color: #333; margin-bottom: 15px;">💡 Mengapa Life Skills Penting bagi Remaja?</h3>
    <ul style="color: #666; line-height: 1.6; margin-bottom: 25px; padding-left: 20px;">
        ${genre.importance.map((item) => `<li>${item}</li>`).join("")}
    </ul>

    <h3 style="color: #333; margin-bottom: 15px;">🎖️ Hasil yang Diharapkan:</h3>
    <ul style="color: #666; line-height: 1.6; padding-left: 20px;">
        ${genre.expected_outcomes
          .map((item) => `<li>${item}</li>`)
          .join("")}
    </ul>
`;
    } else if (genreType === "pup") {
      modalContent.innerHTML = `
    <h2 style="color: #28a745; margin-bottom: 20px;">${genre.title}</h2>
    <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">${
      genre.description
    }</p>
    
    <h3 style="color: #333; margin-bottom: 15px;">📅 Batas Usia Menikah:</h3>
    <div style="margin-bottom: 25px;">
        <h4 style="color: #28a745; margin-bottom: 10px;">Usia Minimum:</h4>
        <p style="color: #666; line-height: 1.6; margin-bottom: 15px; padding-left: 20px;">${
          genre.ageLimit.minimum
        }</p>
        
        <h4 style="color: #28a745; margin-bottom: 10px;">Usia Ideal:</h4>
        <ul style="color: #666; line-height: 1.6; margin-bottom: 15px; padding-left: 20px;">
            <li>Laki-laki: ${genre.ageLimit.ideal.male}</li>
            <li>Perempuan: ${genre.ageLimit.ideal.female}</li>
        </ul>
        
        <h4 style="color: #28a745; margin-bottom: 10px;">Alasan Usia Ideal:</h4>
        <ul style="color: #666; line-height: 1.6; margin-bottom: 25px; padding-left: 20px;">
            ${genre.ageLimit.reason
              .map((item) => `<li>${item}</li>`)
              .join("")}
        </ul>
    </div>
    
    <h3 style="color: #333; margin-bottom: 15px;">⚡ Pentingnya PUP:</h3>
    <div style="margin-bottom: 25px;">
        <h4 style="color: #28a745; margin-bottom: 10px;">Kesehatan Reproduksi:</h4>
        <p style="color: #666; line-height: 1.6; margin-bottom: 15px; padding-left: 20px;">${
          genre.importance.health
        }</p>
        
        <h4 style="color: #28a745; margin-bottom: 10px;">Kematangan Psikologis:</h4>
        <p style="color: #666; line-height: 1.6; margin-bottom: 15px; padding-left: 20px;">${
          genre.importance.psychological
        }</p>
        
        <h4 style="color: #28a745; margin-bottom: 10px;">Pendidikan dan Karier:</h4>
        <p style="color: #666; line-height: 1.6; margin-bottom: 15px; padding-left: 20px;">${
          genre.importance.education
        }</p>
        
        <h4 style="color: #28a745; margin-bottom: 10px;">Menurunkan Risiko Perceraian:</h4>
        <p style="color: #666; line-height: 1.6; margin-bottom: 25px; padding-left: 20px;">${
          genre.importance.divorce
        }</p>
    </div>
    
    <h3 style="color: #333; margin-bottom: 15px;">💥 Dampak Pernikahan Dini:</h3>
    <div style="margin-bottom: 25px;">
        <h4 style="color: #dc3545; margin-bottom: 10px;">Dampak Pendidikan:</h4>
        <p style="color: #666; line-height: 1.6; margin-bottom: 15px; padding-left: 20px;">${
          genre.impacts.education
        }</p>
        
        <h4 style="color: #dc3545; margin-bottom: 10px;">Dampak Kesehatan:</h4>
        <ul style="color: #666; line-height: 1.6; margin-bottom: 15px; padding-left: 20px;">
            ${genre.impacts.health
              .map((item) => `<li>${item}</li>`)
              .join("")}
        </ul>
        
        <h4 style="color: #dc3545; margin-bottom: 10px;">Dampak Ekonomi:</h4>
        <p style="color: #666; line-height: 1.6; margin-bottom: 15px; padding-left: 20px;">${
          genre.impacts.economic
        }</p>
        
        <h4 style="color: #dc3545; margin-bottom: 10px;">Dampak Sosial:</h4>
        <ul style="color: #666; line-height: 1.6; margin-bottom: 25px; padding-left: 20px;">
            ${genre.impacts.social
              .map((item) => `<li>${item}</li>`)
              .join("")}
        </ul>
    </div>
    
    <h3 style="color: #333; margin-bottom: 15px;">🛡️ Strategi Pencegahan:</h3>
    <ul style="color: #666; line-height: 1.6; padding-left: 20px;">
        ${genre.prevention.map((item) => `<li>${item}</li>`).join("")}
    </ul>
`;
    } else {
      modalContent.innerHTML = `
                <h2 style="color: #667eea; margin-bottom: 20px;">${
                  genre.title
                }</h2>
                <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">${
                  genre.description
                }</p>
                
                <h3 style="color: #333; margin-bottom: 15px;">🔍 Karakteristik:</h3>
                <ul style="color: #666; line-height: 1.6; margin-bottom: 25px; padding-left: 20px;">
                    ${genre.characteristics
                      .map((char) => `<li>${char}</li>`)
                      .join("")}
                </ul>
                
                <h3 style="color: #333; margin-bottom: 15px;">📝 Jenis-jenis:</h3>
                <ul style="color: #666; line-height: 1.6; padding-left: 20px;">
                    ${genre.types
                      .map((type) => `<li>${type}</li>`)
                      .join("")}
                </ul>
            `;
    }

    document.getElementById("genreModal").style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    document.getElementById("genreModal").style.display = "none";
    document.body.style.overflow = "auto";
  }

  function startQuiz() {
    alert("🎉 Fitur kuis akan segera hadir! Tetap semangat belajar ya!");
  }

  function showRandomFact() {
    const facts = [
      "💡 Tahukah kamu? Novel pertama di dunia adalah 'The Tale of Genji' yang ditulis oleh Murasaki Shikibu pada abad ke-11!",
      "📚 Genre fantasi modern dimulai dari karya J.R.R. Tolkien dengan 'The Hobbit' dan 'The Lord of the Rings'.",
      "🎭 Drama tertua yang masih dimainkan hingga kini adalah karya-karya dari Yunani kuno seperti 'Oedipus Rex'.",
      "🔍 Sherlock Holmes adalah karakter detektif fiksi paling terkenal yang dibuat oleh Arthur Conan Doyle.",
      "📖 Puisi haiku berasal dari Jepang dan terdiri dari 3 baris dengan pola 5-7-5 suku kata.",
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    alert(randomFact);
  }

  window.onclick = function (event) {
    const modal = document.getElementById("genreModal");
    if (event.target === modal) {
      closeModal();
    }
  };

  window.addEventListener("load", function () {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease-in-out";

    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 100);
  });

  document.querySelectorAll(".genre-card").forEach((card) => {
    card.addEventListener("click", function (e) {
      const ripple = document.createElement("div");
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