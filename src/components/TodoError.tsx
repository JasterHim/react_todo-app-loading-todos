import React, { useEffect } from 'react';
import cn from 'classnames';
import { Error } from '../utils/Enum';

type Props = {
  hasError: string
  setHasError: (value: Error) => void
};

export const TodoError: React.FC<Props> = ({
  hasError,
  setHasError,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setHasError(Error.NOTHING);
    }, 3000);
  }, [hasError]);

  return (
    <div
      className={cn(
        'notification is-danger is-light has-text-weight-normal',
        {
          hidden: !hasError,
        },
      )}
    >
      {/* eslint-disable-next-line */}
      <button
        type="button"
        className="delete"
        onClick={() => {
          setHasError(Error.NOTHING);
        }}
      />

      {hasError === Error.ADD && 'Unable to add a todo'}
      {hasError === Error.DELETE && 'Unable to delete a todo'}
      {hasError === Error.UPDATE && 'Unable to update a todo'}
      {hasError === Error.FETCH && 'Error with fetch todos request'}
    </div>
  );
};