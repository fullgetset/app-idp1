'use client';

import { useState } from 'react';

export default function Catalog(params) {
  const [state, setState] = useState(0);

  return (
    <div>
      <button onClick={() => setState((prev) => (prev += 1))}>+1</button>

      <div>{state}</div>
    </div>
  );
}
