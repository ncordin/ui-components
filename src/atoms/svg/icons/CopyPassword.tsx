import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const CopyPassword: React.FunctionComponent<
  import('../base/SvgIcon').IconProps
> = (props: import('../base/SvgIcon').IconProps): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 2.5C3 2.22386 3.22386 2 3.5 2H5.5C5.77614 2 6 2.22386 6 2.5C6 2.77614 5.77614 3 5.5 3H4V3.5C4 3.77614 3.77614 4 3.5 4C3.22386 4 3 3.77614 3 3.5V2.5ZM7 2.5C7 2.22386 7.22386 2 7.5 2H9.5C9.77614 2 10 2.22386 10 2.5C10 2.77614 9.77614 3 9.5 3H7.5C7.22386 3 7 2.77614 7 2.5ZM11 2.5C11 2.22386 11.2239 2 11.5 2H13.5C13.7761 2 14 2.22386 14 2.5V3.5C14 3.77614 13.7761 4 13.5 4C13.2239 4 13 3.77614 13 3.5V3H11.5C11.2239 3 11 2.77614 11 2.5ZM3.5 5C3.77614 5 4 5.22386 4 5.5V7.5C4 7.77614 3.77614 8 3.5 8C3.22386 8 3 7.77614 3 7.5V5.5C3 5.22386 3.22386 5 3.5 5ZM3.5 9C3.77614 9 4 9.22386 4 9.5V11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5V9.5C3 9.22386 3.22386 9 3.5 9ZM3.5 13C3.77614 13 4 13.2239 4 13.5V14H4.5C4.77614 14 5 14.2239 5 14.5C5 14.7761 4.77614 15 4.5 15H3.5C3.22386 15 3 14.7761 3 14.5V13.5C3 13.2239 3.22386 13 3.5 13ZM6 17.5C6 17.7761 6.22386 18 6.5 18H16.5C16.7761 18 17 17.7761 17 17.5V5.5C17 5.22386 16.7761 5 16.5 5H6.5C6.22386 5 6 5.22386 6 5.5V17.5ZM11.9983 9.69124C11.9983 9.4151 11.7745 9.19124 11.4983 9.19124C11.2222 9.19124 10.9983 9.4151 10.9983 9.69124V11.0031L9.76482 10.6024C9.50219 10.517 9.22012 10.6608 9.1348 10.9234C9.04948 11.186 9.19322 11.4681 9.45585 11.5534L10.6899 11.9544L9.92073 13.0153C9.75863 13.2388 9.80846 13.5515 10.032 13.7136C10.2556 13.8756 10.5682 13.8258 10.7303 13.6023L11.4978 12.5438L12.2627 13.6017C12.4246 13.8255 12.7371 13.8757 12.9609 13.7139C13.1847 13.5521 13.2349 13.2396 13.0731 13.0158L12.306 11.9549L13.5439 11.5535C13.8066 11.4683 13.9505 11.1863 13.8653 10.9237C13.7801 10.661 13.4981 10.5171 13.2354 10.6023L11.9983 11.0035V9.69124ZM7 17H16V6H7V17Z'
      />
    </React.Fragment>
  </SvgIcon>
);

export default CopyPassword;
