function wildcardMatch(str: string, pattern: string) {
  const parts = pattern.split("*");

  // 空 pattern 或者只包含 '*' 的情况
  if (parts.length === 1) return str === pattern;

  let currentIndex = 0;

  // 处理前面的固定部分
  if (!pattern.startsWith("*")) {
    if (!str.startsWith(parts[0])) return false;
    currentIndex = parts[0].length;
  }

  // 处理中间的部分
  for (let i = 1; i < parts.length - 1; i++) {
    const part = parts[i];
    const index = str.indexOf(part, currentIndex);
    if (index === -1) return false;
    currentIndex = index + part.length;
  }

  // 处理末尾的固定部分
  if (!pattern.endsWith("*")) {
    return str.endsWith(parts[parts.length - 1]);
  }

  return true;
}

export default wildcardMatch;
