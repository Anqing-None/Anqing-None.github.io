import dayjs from "dayjs";
import { createContentLoader } from "vitepress";

export default createContentLoader("posts/**/*.md", {
  includeSrc: false, // include raw markdown source?
  render: false, // include rendered full page HTML?
  excerpt: true, // include excerpt?
  transform(rawData) {
    const posts = rawData
      .filter((raw) => !raw.frontmatter.ignore)
      .sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
      })
      .map((page) => {
        const { excerpt, frontmatter, url } = page;
        const fmtDate = dayjs(frontmatter.date).format("YYYY-MM-DD");
        const year = dayjs(frontmatter.date).format("YYYY");
        const month = dayjs(frontmatter.date).format("MM");
        const groupDate = dayjs(frontmatter.date).format("YYYY年MM月");

        frontmatter.date = fmtDate;

        if (frontmatter.update) {
          frontmatter.update = dayjs(frontmatter.update).format("YYYY-MM-DD");
        }
        return {
          excerpt,
          frontmatter,
          url,
          year,
          month,
          groupDate,
        };
      });
    return posts;
  },
});
