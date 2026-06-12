import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';

export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={cn('text-sm text-red-600 dark:text-red-400', className)}>
            {message}
        </p>
    ) : null;
}

InputError.propTypes = {
    message: PropTypes.any,
    className: PropTypes.string,
};
