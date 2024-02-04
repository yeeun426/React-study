import React, { useRef } from "react";
// prettier-ignore
function App() {
  const content1Ref = useRef<HTMLDivElement>(null);
  const content2Ref = useRef<HTMLDivElement>(null);
  const content3Ref = useRef<HTMLDivElement>(null);

  const onContent1Click = () => {
    content1Ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onContent2Click = () => {
    content2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onContent3Click = () => {
    content3Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <ul
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          background: "teal",
          padding: "20px",
        }}
      >
        <li onClick={onContent1Click}>content1</li>
        <li onClick={onContent2Click}>content2</li>
        <li onClick={onContent3Click}>content3</li>
      </ul>

      <div ref={content1Ref} style={{ height: "500px", background: "skyblue" }}>
        content1
      </div>
      <div ref={content2Ref} style={{ height: "500px", background: "orange" }}>
        content2
      </div>
      <div ref={content3Ref} style={{ height: "500px", background: "gray" }}>
        content3
      </div>
    </div>
  );
}

export default App;
