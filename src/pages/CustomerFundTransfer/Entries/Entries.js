import React, { useState, useMemo } from 'react';
import EntryTab from './EntryTab';
import EntryPanel from './EntryPanel';
import SingleEntry from './SingleEntry';
import MultipleEntries from './MultipleEntries';

const Entries = () => {
  const [page, setPage] = useState(0);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const mainContent = useMemo(
    () => (
      <>
        <EntryTab value={value} handleChange={handleChange} />
        <EntryPanel value={value} index={0}>
          <SingleEntry setPage={setPage} />
        </EntryPanel>
        <EntryPanel value={value} index={1}>
          <MultipleEntries />
        </EntryPanel>
      </>
    ),
    [value]
  );

  const componentMap = useMemo(
    () => ({
      0: mainContent,
      2: <SingleEntry setPage={setPage} />,

      1: <MultipleEntries setPage={setPage} />
    }),
    [mainContent]
  );

  return <>{componentMap[page]}</>;
};

export default Entries;
