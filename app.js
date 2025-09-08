const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
});

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format('MMMM Do, YYYY');
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
  })
  .join('');

   const btn = document.getElementById("modeBtn");
    const body = document.body;

    btn.addEventListener("click", () => {
      body.classList.toggle("dark");
      
      // Change button text
      if (body.classList.contains("dark")) {
        btn.textContent = "Light Mode";
      } else {
        btn.textContent = "Dark Mode";
      }
    });

articlesContainer.innerHTML = articlesData;
