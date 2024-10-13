document.addEventListener('DOMContentLoaded', function() {
  // GitHub 사용자 이름 설정
  const username = 'p0tat019';

  // GitHub API에서 프로젝트 목록 가져오기
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
      const projectList = document.getElementById('project-list');
      repos.forEach(repo => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description || '설명이 없습니다.'} <br> <a href="${repo.html_url}" target="_blank">Repository 보기</a>`;
        projectList.appendChild(li);
      });
    })
    .catch(error => console.error('Error fetching repositories:', error));
});
