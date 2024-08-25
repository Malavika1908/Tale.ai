function showStoryDetails() {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('story-details').style.display = 'block';
}

function showContentForm() {
    document.getElementById('story-details').style.display = 'none';
    document.getElementById('content-section').style.display = 'block';
}

function generatePreview() {
    // Retrieve values from the form elements
    const storyName = document.getElementById('storyName').value;
    const characterName = document.getElementById('characterName').value;
    const interests = Array.from(document.getElementById('interests').selectedOptions).map(option => option.value);
    const readingLevel = document.getElementById('reading-level').value;
    const tone = document.getElementById('tone').value;
    const length = document.getElementById('length').value;
    const additionalNotes = document.getElementById('additional-notes').value;

    // Initialize story content
    let storyParagraphs = [];

    // Generate story content based on interests
    let storyContent = "";

    if (interests.includes('technology')) {
        storyContent += `In a futuristic world dominated by technology, ${characterName} embarks on an extraordinary quest. Known for their tech-savvy skills, they explore advanced gadgets and uncover secrets that could change the world.
        
        Their journey takes them through high-tech cities and hidden labs, where they encounter enigmatic characters and face groundbreaking challenges. `;
        storyContent += `Every discovery leads to new questions and adventures. ${characterName} navigates through a web of intrigue, where every technological advancement comes with its own set of mysteries. They decode complex algorithms and harness cutting-edge technology, weaving their path through a labyrinth of innovation. `;
    } else if (interests.includes('science')) {
        storyContent += `${characterName}, a brilliant scientist, delves into the mysteries of the universe. Their journey involves groundbreaking discoveries and challenges that push the boundaries of human knowledge. They explore distant galaxies, conduct revolutionary experiments, and unravel the secrets of quantum physics. `;
        storyContent += `Each discovery brings new insights, and ${characterName} faces ethical dilemmas and unexpected consequences. Their journey through scientific wonders and moral choices shapes a narrative of profound impact, as they strive to understand the universe and their place within it. `;
    } else if (interests.includes('history')) {
        storyContent += `In a historical adventure, ${characterName} travels through time to witness significant events and meet legendary figures. Their journey includes pivotal moments such as the construction of ancient wonders, revolutionary wars, and the rise and fall of empires. `;
        storyContent += `Each historical era offers its own challenges and revelations. ${characterName} interacts with famous historical figures, learns from their experiences, and influences the course of history. Their adventures are marked by rich historical detail and dramatic encounters. `;
    } else if (interests.includes('literature')) {
        storyContent += `${characterName} finds themselves within the pages of classic literature. Their adventures take them through famous novels, where they meet iconic characters and face trials inspired by beloved stories. Their journey blurs the line between fiction and reality. `;
        storyContent += `As ${characterName} traverses through literary worlds, they encounter epic battles, solve intricate mysteries, and experience timeless romances. The narrative weaves together elements of various genres, creating a rich tapestry of literary adventures. `;
    } else if (interests.includes('sports')) {
        storyContent += `As an avid sports enthusiast, ${characterName} takes on challenges in various athletic disciplines. From competitive events to personal training, their journey is filled with rigorous training sessions, high-stakes competitions, and moments of triumph and defeat. `;
        storyContent += `The narrative captures the spirit of sportsmanship, teamwork, and determination. ${characterName} faces fierce rivals and overcomes physical and mental obstacles, crafting a story of perseverance and success. `;
    } else if (interests.includes('music')) {
        storyContent += `${characterName}, a gifted musician, embarks on a melodious journey. They explore different musical genres, collaborate with other artists, and perform in diverse settings. Their story is a symphony of experiences, from composing new melodies to performing in grand concerts. `;
        storyContent += `Each note and rhythm contributes to their growth as an artist. ${characterName} navigates the world of music, experiencing its highs and lows, and their story unfolds through harmonious and lyrical moments. `;
    } else if (interests.includes('art')) {
        storyContent += `${characterName} delves into the vibrant world of art. Their journey involves creating masterpieces, exploring art movements, and engaging with other artists. The narrative highlights their artistic evolution, from initial inspiration to the creation of their own unique style. `;
        storyContent += `Through exhibitions and artistic challenges, ${characterName} experiences the profound impact of art on both themselves and society. Their story is a rich exploration of creativity and expression. `;
    } else {
        storyContent += `${characterName} embarks on a remarkable journey filled with unique experiences and challenges. Their adventures span various realms, offering a rich and diverse narrative. Each chapter of their story brings new insights and developments. `;
        storyContent += `As ${characterName} navigates through their journey, they encounter a variety of characters, face unexpected trials, and achieve significant milestones. Their adventure is a tapestry of experiences that come together to form a compelling and engaging narrative. `;
    }

    // Add body based on tone
    if (tone === 'formal') {
        storyContent += `The journey of ${characterName} is described with precision and detail. Every action and decision is carefully documented, providing a structured and comprehensive account of their experiences. `;
    } else if (tone === 'informal') {
        storyContent += `In a friendly and conversational style, ${characterName}'s adventures are narrated with warmth and humor. The story feels personal and relatable, with a casual tone that invites readers to connect with the protagonist. `;
    } else if (tone === 'humorous') {
        storyContent += `The story is infused with humor and light-hearted moments. ${characterName} encounters amusing situations and quirky characters, making the journey entertaining and full of laughs. `;
    } else if (tone === 'serious') {
        storyContent += `The narrative takes a serious tone, focusing on the profound and significant aspects of ${characterName}'s journey. The story explores deep themes and emotional challenges. `;
    } else {
        storyContent += `The narrative combines various tones, capturing a dynamic range of emotions and experiences. The story evolves with a mix of seriousness, humor, and casual moments. `;
    }

    // Add conclusion based on length
    if (length === 'short') {
        storyContent += `In a concise and impactful manner, ${characterName} achieves their main objective, leaving a memorable mark on their world. Their adventure, though brief, is both satisfying and poignant.`;
    } else if (length === 'intermediate') {
        storyContent += `Throughout their journey, ${characterName} encounters a series of meaningful events that lead to a fulfilling resolution. Their adventure is engaging and offers a satisfying narrative arc.`;
    } else if (length === 'advanced') {
        storyContent += `Spanning across an extensive and immersive adventure, ${characterName} faces numerous challenges and growth opportunities. Their story is richly detailed and concludes with a profound resolution.`;
    } else {
        storyContent += `The adventure unfolds with a balanced narrative, offering a rich story that captures the essence of ${characterName}'s journey without being overly brief or excessively detailed.`;
    }

    // Ensure content length is at least 1000 words
    const wordsPerParagraph = 200;
    while (storyContent.split(' ').length < 1000) {
        storyContent += ` ${storyContent}`;
    }

    // Include additional notes if provided
    if (additionalNotes) {
        storyContent += ` Additionally, ${additionalNotes}`;
    }

    // Construct the final story
    const previewText = `
        Title: "${storyName}"
        
        ${storyContent}
    `;

    // Display the generated preview text in the HTML element
    document.getElementById('preview-text').innerText = previewText;

    // Make the content preview section visible
    document.getElementById('content-preview').style.display = 'block';
}
