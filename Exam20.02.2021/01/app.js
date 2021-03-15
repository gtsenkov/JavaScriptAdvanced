function solve() {
   let author = document.querySelector('#creator');
   let title = document.querySelector('#title');
   let category = document.querySelector('#category');
   let content = document.querySelector('#content');

   let creatBtn = document.getElementsByClassName('btn create')[0];

   let posts = document.querySelectorAll('section')[1];

   creatBtn.addEventListener('click', () => add(e))


   function add(e) {

      e.preventDefault();

      let posts = document.querySelectorAll('section')[1];

      let archBtn = createE('button', 'Archive', 'btn archive');
      let delBtn = createE('button', 'Delete', 'btn delete');
      let div = createE('div');
      div.className = 'buttons';
      div.appendChild(delBtn);
      div.appendChild(archBtn);

      let contentParag = createE('p', content.value);

      let creatorParag = createE('p', 'Creator:');
      let strongCre = createE('strong', author.value);
      creatorParag.appendChild(strongCre);

      let categoryParag = createE('p', 'Category:');
      let strongCateg = createE('strong', category.value);
      categoryParag.appendChild(strongCateg);

      let h1 = createE('h1', title.value);

      let article = createE('article');
      article.appendChild(h1);
      article.appendChild(categoryParag);
      article.appendChild(creatorParag);
      article.appendChild(contentParag);
      article.appendChild(div);

      posts.appendChild(article);
   }

   function createE(type, content, className) {
      const result = document.createElement(type);
      result.textContent = content;
      if (className) {
         result.className = className;
      }
      return result;
   }
}

