import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const Shared: React.FunctionComponent<import('../base/SvgIcon').IconProps> = (
  props: import('../base/SvgIcon').IconProps
): JSX.Element => (
  <SvgIcon title='Shared' {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.7009 4C11.3874 4 11.0858 4.05446 10.8081 4.16982C10.5531 4.27578 10.4323 4.5684 10.5383 4.8234C10.6442 5.0784 10.9369 5.19923 11.1919 5.09326C11.3341 5.03416 11.5034 5 11.7009 5C11.8973 5 12.0664 5.03402 12.2086 5.09299C12.349 5.15193 12.4698 5.23856 12.5702 5.35386C12.6717 5.47002 12.7604 5.62418 12.8243 5.8254C12.8884 6.02745 12.9272 6.27647 12.9272 6.57692V7.73061C12.8706 7.77971 12.8056 7.83708 12.7402 7.89659C12.6498 7.97885 12.5507 8.0726 12.4719 8.1574C12.4338 8.1984 12.3894 8.249 12.352 8.3023C12.3337 8.3284 12.3078 8.3681 12.2856 8.4169C12.2694 8.4525 12.2231 8.5594 12.2371 8.699C12.2368 8.6953 12.2368 8.6965 12.2368 8.7043C12.2369 8.7154 12.2371 8.7394 12.2364 8.7814C12.2357 8.8271 12.2344 8.8791 12.233 8.9355L12.2317 8.9912C12.2299 9.0662 12.2281 9.1467 12.2282 9.2152C12.2283 9.2493 12.2287 9.2848 12.2302 9.3177C12.2309 9.333 12.2322 9.3603 12.2361 9.3923C12.2687 9.9964 12.7877 10.2598 13.0816 10.3932C13.1983 10.4462 13.3068 10.491 13.4092 10.5333C13.6447 10.6306 13.8481 10.7148 14.0456 10.8542L14.054 10.8598C14.1977 10.9569 14.327 11.0563 14.4402 11.1636C14.5548 11.2722 14.6527 11.3867 14.7328 11.5122L14.7336 11.5134C14.8137 11.638 14.879 11.778 14.9255 11.9397C14.9712 12.1008 14.9988 12.2883 14.9988 12.5079V13.5C14.9988 13.7761 15.2227 14 15.4988 14C15.775 14 15.9988 13.7761 15.9988 13.5V12.5079C15.9988 12.203 15.9603 11.9228 15.8873 11.6658L15.8869 11.6644C15.8133 11.4085 15.7076 11.1794 15.5753 10.9734C15.4442 10.7682 15.2909 10.5921 15.1281 10.4378C14.965 10.2832 14.7905 10.1508 14.6179 10.034C14.3217 9.826 13.9608 9.6771 13.6993 9.5692C13.6207 9.5368 13.5511 9.5081 13.4949 9.4826C13.3477 9.4158 13.2754 9.3689 13.2407 9.3359C13.2381 9.3334 13.236 9.3313 13.2344 9.3295C13.2337 9.3105 13.232 9.2915 13.2292 9.2726C13.2286 9.2606 13.2282 9.2414 13.2282 9.2141C13.2282 9.1597 13.2296 9.0908 13.2314 9.0153L13.2326 8.964C13.234 8.9096 13.2354 8.8539 13.2362 8.805C13.2838 8.7564 13.3455 8.6979 13.4134 8.6361C13.4956 8.5612 13.5791 8.4886 13.6427 8.4341C13.6743 8.4071 13.7006 8.3849 13.7188 8.3695L13.7397 8.352L13.745 8.3476L13.7465 8.3464C13.861 8.2514 13.9272 8.1103 13.9272 7.96154V6.57692C13.9272 6.19199 13.8777 5.8387 13.7774 5.5229C13.677 5.20644 13.5255 4.92735 13.3234 4.69603C13.1201 4.46278 12.8732 4.28719 12.5943 4.17035L12.593 4.16982C12.3154 4.05449 12.0138 4 11.7009 4ZM12.2371 8.699L12.7346 8.649L12.2374 8.7019C12.2373 8.7009 12.2372 8.6999 12.2371 8.699ZM13.2297 9.2815C13.2297 9.2816 13.2296 9.2805 13.2295 9.2783L13.2297 9.2815ZM11.2054 9.983L10.3319 10.7859C10.341 10.846 10.3514 10.9122 10.3627 10.9791C10.3824 11.0951 10.4036 11.2053 10.4239 11.2889C10.4266 11.3001 10.4292 11.3101 10.4315 11.3191C10.4669 11.3449 10.5205 11.3765 10.6003 11.4125C10.7268 11.4696 10.8801 11.521 11.0674 11.581L11.1453 11.6059H11.1454C11.4782 11.7115 11.9224 11.8524 12.2598 12.1028C12.5757 12.3369 12.891 12.6327 13.1252 13.035C13.3619 13.4416 13.5 13.9304 13.5 14.5266V15.5C13.5 15.7761 13.2761 16 13 16H5C4.72386 16 4.5 15.7761 4.5 15.5V14.5266C4.5 13.9295 4.6369 13.4408 4.87276 13.0344C5.10617 12.6322 5.42098 12.3374 5.73658 12.1041C6.07227 11.8561 6.51426 11.7161 6.84642 11.6108L6.92837 11.5848C7.11554 11.5248 7.26908 11.4732 7.39607 11.4157C7.46355 11.3851 7.5128 11.3574 7.54843 11.3335L7.55052 11.3242C7.5707 11.2342 7.59483 11.1143 7.61854 10.9915C7.63283 10.9175 7.64668 10.8438 7.65906 10.7771L6.79512 9.983C6.69211 9.8883 6.63348 9.7548 6.63348 9.6149V7.57333C6.63348 6.8726 6.9976 6.16988 7.37549 5.74667C7.78012 5.2935 8.354 5 9.0003 5C9.6463 5 10.2197 5.29405 10.6245 5.74667C11.0022 6.16963 11.3671 6.87234 11.3671 7.57333V9.6149C11.3671 9.7548 11.3084 9.8883 11.2054 9.983ZM10.4468 11.3709C10.4493 11.3779 10.4507 11.3806 10.4507 11.3806C10.4507 11.3806 10.4503 11.3796 10.4496 11.3777C10.449 11.376 10.4481 11.3737 10.4468 11.3709Z'
      />
    </React.Fragment>
  </SvgIcon>
);

export default Shared;
