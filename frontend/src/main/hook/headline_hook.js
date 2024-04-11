import { useState } from 'react';

export const useHeadlineHook = () => {
    const [headline, setHeadline] = useState('');

    return { headline, setHeadline };
};
