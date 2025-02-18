export default function Cell({data, id, handleMove}) {
  return <div id={id} className={`cell ${data}`} onClick={() => handleMove(id)}></div>;
}
