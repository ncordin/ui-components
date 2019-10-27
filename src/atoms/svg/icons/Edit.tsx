import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const Edit: React.FunctionComponent<import('../base/SvgIcon').IconProps> = (
  props: import('../base/SvgIcon').IconProps
): JSX.Element => (
  <SvgIcon title='Edit' {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.5213 4.42559C14.0888 3.85814 15.0086 3.85814 15.576 4.42559C16.1433 4.99291 16.1436 5.91285 15.5758 6.48145C15.3806 6.67684 15.3808 6.99342 15.5762 7.18856C15.7716 7.38369 16.0882 7.38349 16.2833 7.18811C17.2409 6.22933 17.2412 4.67657 16.2831 3.71848C15.3251 2.76051 13.7722 2.76051 12.8142 3.71848C12.619 3.91374 12.619 4.23032 12.8142 4.42559C13.0095 4.62085 13.3261 4.62085 13.5213 4.42559ZM12.1398 5.09965C12.0461 5.00588 11.9189 4.9532 11.7863 4.9532C11.6537 4.9532 11.5265 5.00588 11.4327 5.09965L3.8369 12.6955C3.76709 12.7653 3.71951 12.8542 3.70015 12.951L3.00971 16.4042C2.97694 16.5681 3.02825 16.7376 3.14646 16.8558C3.26468 16.974 3.43414 17.0253 3.59807 16.9925L7.05028 16.3021C7.14708 16.2827 7.23599 16.2351 7.3058 16.1653L14.9016 8.5685C15.0969 8.37323 15.0969 8.05667 14.9016 7.86141L12.1398 5.09965ZM4.13734 15.8649L4.65106 13.2955L11.7863 6.16031L13.841 8.21499L6.7057 15.3512L4.13734 15.8649Z'
      />
    </React.Fragment>
  </SvgIcon>
);

export default Edit;
