import Link from "next/link";

const Post = props =>(
    <li>
        <Link as={`/post?title=${props.title}`}
        href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default () => (
  <div>
      <h2>My Blog</h2>
      <Post slug="nuevo post" title="Nuevo Post"></Post>
      <Post slug="Segundo post" title="Segundo Post"></Post>
      <Link href="/contact">
      <a>Contacto</a>
    </Link>
  </div>
);
