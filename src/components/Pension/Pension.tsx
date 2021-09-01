import React, { FunctionComponent } from 'react';

type PensionProps = {
  title: string;
  list: Array<string>;
  radioName: string;
};

export const Pension: FunctionComponent<PensionProps> = ({
  title,
  list,
  radioName
}) => {
  console.log('Pension');
  return (
    <>
      <div className="title">{title}</div>
      <ul>
        {list.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
      <div className="block--radio">
        <input type="radio" id={radioName} name="pension" value={radioName} />
        <label htmlFor="pension">{radioName}</label>
      </div>
    </>
  );
};
