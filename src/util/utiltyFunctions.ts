export const handleEnterKeyDown = (
  e: React.KeyboardEvent<HTMLDivElement>,
  func: Function
) => {
  if (e.key === 'Enter') {
    func();
  }
};
