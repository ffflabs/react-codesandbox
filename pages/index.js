import { useEffect, useState } from "react";
import Link from "next/link";

function HomePage() {
  const [comp, setComp] = useState();
  useEffect(() => {
    if (window) {
      import("@uiw/react-codemirror").then((obj) => {
        if (!comp) {
          setComp(obj.default);
        }
      });
    }
  }, []);

  const Comps = comp;
  return (
    <div>
      <div>
        Welcome to Next.js!
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      {Comps && (
        <Comps
          value="const a = 0;"
          options={{
            mode: "jsx"
          }}
        />
      )}
    </div>
  );
}

export default HomePage;
