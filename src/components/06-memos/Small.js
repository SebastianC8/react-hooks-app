import React, { memo } from 'react'

/**
 * Con el React.memo() el componente se renderiza ├║nicamente si sus props cambian
 */
export const Small = memo(({ value }) => {

    console.log('show again');

    return (
        <small>{value}</small>
    )
})
