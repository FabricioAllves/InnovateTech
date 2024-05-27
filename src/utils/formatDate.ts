// 1946-03-06T22:01:33.861Z => return 06/03/1946

export function formatDate(dataISO: string) {
  const data = new Date(dataISO);
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}
