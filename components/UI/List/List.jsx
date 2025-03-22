import { useTranslations } from 'next-intl';
import React from 'react';

function List({toTranslate, keys}) {
    const translate = useTranslations("aboutMe");

    return (
        <>
            {toTranslate && (
                <>
                    <h3>{translate(`${toTranslate}.title`)}</h3>
                    <ul>
                        {(keys !== undefined && keys.length > 0) && keys.map(key => (
                            <li key={key}>{translate(`${toTranslate}.list.${key}`)}</li>
                        ))}
                    </ul>

                </>)
            }
        </>
    );
}

export default List;