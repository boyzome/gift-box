const envelope = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.heart');
const textContainer = document.getElementById('text');
const photoBackground = document.getElementById('photo-background');
const giftButton = document.getElementById('gift-button');

const letterText = `<strong></strong>Gửi Em,...🌸
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           Nhân ngày Quốc tế Phụ nữ 8/3,
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           anh muốn gửi đến em những điều dịu dàng nhất.
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           Cảm ơn em vì đã luôn xinh đẹp theo cách của riêng mình,
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           và mang đến cho mọi người thật nhiều năng lượng tích cực.
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           Chúc em luôn rạng rỡ như ánh nắng ban mai ☀️,
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           luôn mỉm cười thật tươi và hạnh phúc mỗi ngày.
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           Mong rằng mọi điều tốt đẹp nhất ✨,
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           sẽ luôn đến bên em thật nhẹ nhàng và trọn vẹn.
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           Chúc em thành công trong những điều em theo đuổi,
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           và luôn tự tin với chính mình ❤️.
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           Dù hôm nay hay bất cứ ngày nào,
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           em vẫn luôn xứng đáng được yêu thương,
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           được trân trọng và được nâng niu.
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           Hy vọng ngày 8/3 của em,
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           sẽ ngập tràn hoa, quà và những lời chúc ngọt ngào 💐.
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           Cảm ơn em vì đã là chính em,
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           một cô gái tuyệt vời và đầy bản lĩnh ☺️.
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           Mong rằng nụ cười ấy sẽ luôn hiện diện trên môi em,
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           không chỉ riêng hôm nay mà cả những ngày sau nữa.
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           Chúc em một ngày 8/3 thật ý nghĩa,
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           thật hạnh phúc và trọn vẹn.
                           <p></p>
                           <p style="text-indent: 15px; margin-top: 10px;"></p>
                           Luôn vui vẻ và tỏa sáng nhé ❤️
                           <p></p>
                           <p class="love" style="text-align: center; font-weight: bold; margin-block: 15px;"></p>
                           ❤️Anh Yêu Em❤️
                           <p></p>`;

let typingStarted = false;
let waveInterval = null;

function spawnWave() {
    const oldPhotos = document.querySelectorAll('.random-photo');
    oldPhotos.forEach(p => {
        p.classList.remove('show');
        setTimeout(() => p.remove(), 1200);
    });

    const isMobile = window.innerWidth <= 600;
    const rows = isMobile ? 4 : 3;
    const cols = isMobile ? 3 : 4;
    const totalPhotos = 12;

    let positions = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            positions.push({ row: r, col: c });
        }
    }
    positions.sort(() => Math.random() - 0.5);

    for (let i = 0; i < totalPhotos; i++) {
        const img = document.createElement('img');
        img.src = `./style/Anh_${(i % 14) + 1}.jpeg`;
        img.classList.add('random-photo');

        const pos = positions[i];
        const cellWidth = 100 / cols;
        const cellHeight = 100 / rows;

        const jitterX = (Math.random() - 0.5) * (cellWidth * 0.6);
        const jitterY = (Math.random() - 0.5) * (cellHeight * 0.6);

        const left = (pos.col * cellWidth) + (cellWidth / 2) + jitterX;
        const top = (pos.row * cellHeight) + (cellHeight / 2) + jitterY;

        const rotation = (Math.random() - 0.5) * 30;

        img.style.left = `${left}%`;
        img.style.top = `${top}%`;
        img.style.setProperty('--rotation', `${rotation}deg`);
        img.style.transitionDelay = `${Math.random() * 1}s`;

        photoBackground.appendChild(img);

        setTimeout(() => {
            img.classList.add('show');
        }, 100);
    }
}

// Chỉ lắng nghe sự kiện click trên heart
heart.addEventListener('click', () => {
    envelope.classList.toggle('flap');
    envelope.classList.toggle('open');

    if (envelope.classList.contains('open')) {
        const music = document.getElementById('bg-music');
        if (music) {
            music.play().catch(e => console.log("Audio play failed:", e));
        }
        spawnWave();
        waveInterval = setInterval(spawnWave, 7000);

        if (!typingStarted) {
            typingStarted = true;
            setTimeout(() => {
                startTyping();
            }, 2000);
        }
    } else {
        clearInterval(waveInterval);
        const existingPhotos = document.querySelectorAll('.random-photo');
        existingPhotos.forEach(p => {
            p.classList.remove('show');
            setTimeout(() => p.remove(), 1200);
        });
    }
});

function startTyping() {
    let i = 0;
    textContainer.innerHTML = '';

    function type() {
        if (i < letterText.length) {
            if (letterText.charAt(i) === '<') {
                let tagEnd = letterText.indexOf('>', i);
                if (tagEnd !== -1) {
                    textContainer.innerHTML += letterText.substring(i, tagEnd + 1);
                    i = tagEnd + 1;
                }
            } else {
                textContainer.innerHTML += letterText.charAt(i);
                i++;
            }

            const letter = document.querySelector('.letter');
            letter.scrollTop = letter.scrollHeight;

            setTimeout(type, 30);
        } else {
            document.body.classList.add('typing-done');
            setTimeout(() => {
                giftButton.classList.add('show');
                const letter = document.querySelector('.letter');
                letter.scrollTop = letter.scrollHeight;
            }, 500);
        }
    }

    type();
}

giftButton.addEventListener('click', () => {
    if (typeof window.initUniverse === 'function') {
        window.initUniverse();
    }
});

