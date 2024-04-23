interface GenerateIDType {
  (id?: string): string;
}
export const getGenerateID: GenerateIDType = id => {
  if (typeof id !== 'undefined') {
    return id;
  }

  return (performance.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    ''
  );
};
