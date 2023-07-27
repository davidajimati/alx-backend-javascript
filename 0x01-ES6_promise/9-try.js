export default function guardrail(mathFunction) {
  const queue = [];
  return Promise.any(mathFunction())
    .then((data) => {
      queue.append(data);
      queue.append('Guardrail was processed');
    })
}
