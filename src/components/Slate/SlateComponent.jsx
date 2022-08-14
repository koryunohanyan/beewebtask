import React, { useCallback, useMemo } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor, Element as SlateElement } from "slate";
import { withHistory } from "slate-history";

import { withLayout } from "./withLayout";
import Element from "./Element";

const ForcedLayout = ({ item }) => {
  const renderElement = useCallback((props) => <Element {...props} />, []);

  const editor = useMemo(
    () => withLayout(withHistory(withReact(createEditor()))),
    []
  );

  return (
    <div
      style={{
        border: "1px solid grey",
        marginBottom: "5px",
        paddingLeft: "10px",
        background: "white",
      }}
    >
      <Slate editor={editor} value={item}>
        <Editable
          renderElement={renderElement}
          placeholder="Enter a title…"
          spellCheck
          autoFocus
        />
      </Slate>
    </div>
  );
};

export default ForcedLayout;
