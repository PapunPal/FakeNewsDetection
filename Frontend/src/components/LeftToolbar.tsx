import Button from "./Button";

export default function LeftToolbar({
  mode,
  setMode,
}: {
  mode: string;
  setMode: (m: "text" | "image" | "link") => void;
}) {
  return (
    <div className="h-full flex flex-col gap-4 items-center justify-start md:justify-center mt-4 md:mt-0 w-full">
      <Button
        label="Using Text"
        color={mode === "text" ? "blue" : "purple"}
        onClick={() => setMode("text")}
        className="w-full md:w-40 h-12"
      />
      <Button
        label="Using Image"
        color={mode === "image" ? "blue" : "purple"}
        onClick={() => setMode("image")}
        className="w-full md:w-40 h-12"
      />
      <Button
        label="Using Link"
        color={mode === "link" ? "blue" : "purple"}
        onClick={() => setMode("link")}
        className="w-full md:w-40 h-12"
      />
    </div>
  );
}
