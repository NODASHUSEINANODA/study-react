import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import classes from "./Main.module.css";

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headline
        page={props.page}
        code={<code className={classes.code}>pages/{props.page}.js</code>}
        onClick={() => alert("クリック！！！")}
      >
        foo
      </Headline>
      <Links />
    </main>
  );
}
