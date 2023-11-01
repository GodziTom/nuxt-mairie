export function useFilters() {
  const toggleType = (type) => {
    // logique de toggle
    const index = selectedTypes.value.indexOf(type);
    if (index !== -1) {
      selectedTypes.value.splice(index, 1);
    } else {
      selectedTypes.value.push(type);
    }
    console.log("selTyp", selectedTypes.value);
  };

  return { toggleType };
}
