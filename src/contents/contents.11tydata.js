const path = require('path');

module.exports = {
  layout: 'article.njk',
  eleventyComputed: {
    eleventyNavigation: {
      title: (data) => data.title,
      key: (data) => {
        const filepath = data.page.filePathStem;
        if (path.basename(filepath) == 'index') {
          return path.dirname(data.page.filePathStem);
        } else {
          return data.page.filePathStem;
        }
      },
      parent: (data) => {
        const filepath = data.page.filePathStem;
        if (path.basename(filepath) == 'index') {
          const dirname = path.dirname(path.dirname(data.page.filePathStem));
          return dirname == '/' ? undefined : dirname;
        } else {
          return path.dirname(data.page.filePathStem);
        }
      },
      order: (data) => data.order,
    }
  }
}
