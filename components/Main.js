import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import styles from "../styles/Home.module.css";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline
        page={props.page}
        code={<code className={styles.code}>pages/{props.page}.js</code>}
        onClick={() => alert("クリック！！！")}
      >
        foo
      </Headline>
      <Links />
    </main>
  );
}
