import { useState } from 'react';
import "./style.css";

export type FileData = Readonly<{
  id: number;
  name: string;
  children?: ReadonlyArray<FileData>
}>;

function FileObject({ file }: Readonly<{ file: FileData}>) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const { name, children: fileChildren } = file;

  const isDirectory = Boolean(fileChildren);
  return (
    <li>
      <button
        className={[
          "file-button",
          isDirectory && "file-button-directory",
        ]
          .filter(Boolean)
          .join(" ")
        }
        onClick={() => {
          if (!isDirectory) {
            return;
          }
          setExpanded(!expanded)
        }}
      >
      { isDirectory && <>{expanded ? "- ": "+ "}</>}
      <span>{name}</span>
      </button>
      {
        expanded && fileChildren && fileChildren.length > 0 && <FileList list={fileChildren} />
      }
    </li>
  )
}

function FileList({ list }: Readonly<{ list: ReadonlyArray<FileData>}>) {
  // const directories = list.filter((file) => file.children);

  return (
    <ul className='file-list'>
      {
        list.map((file) => <FileObject key={file.id} file={file} />)
      }
    </ul>
  )
}


export default function FileExplorer({ data }: Readonly<{data: ReadonlyArray<FileData>}>) {
  return (
    <div>
      <FileList list={data} />
    </div>
  )
}