const  duplicateIds = () => {
    const elements = [...document.querySelectorAll('[id]')];
    const ids = elements.map(el => el.id);
    const dups = elements.filter(el => ids.filter(id => id === el.id).length > 1);

    return dups;
  }
