import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

function App() {
  const [path, setPath] = useState("");

  async function sendGetPath() {
    if (window.electron) {
      console.log("yes");
      const folderPath = await window.electron.openFolderDialog();
      await fetch("/api/send-path", {
        method: "POSt",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ path: folderPath }),
      })
        .then((response) => response.json())
        .then((data) => setPath(data.path))
        .catch((err) => console.error(err));
    } else {
      console.error('the is no electron')
    }
  }

  return (
    <div>
      <h1 className="text-red-500">hell im erfan</h1>
      <button className="border-2 border-black p-3" onClick={sendGetPath}>
        Open dev file path
      </button>
      {path ? <p>path: {path}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
