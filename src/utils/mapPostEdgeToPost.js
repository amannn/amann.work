export default function mapPostEdgeToPost(edge) {
  const {id, frontmatter, parent} = edge.node;

  return {
    id,
    title: frontmatter.title,
    published: frontmatter.date,
    href: '/blog/' + parent.relativePath.split('/')[0],
    excerpt: frontmatter.excerpt
  };
}
