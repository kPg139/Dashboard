function showSection(sectionId) {
    // すべてのセクションを非表示にする
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // 指定されたセクションを表示する
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

// 初期表示
showSection('courses');