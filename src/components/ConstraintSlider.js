import React from 'react';
import { Icon, Slider } from 'antd';

const ConstraintSlider = (({ iconType, value, onChange, text }) => {
  return (
    < section className="d-flex flex-column" >
      <div className="d-flex w-500 align-items-center">
        <Icon className="font-1-5 mr-4" type={iconType} />
        <Slider className="w-200" value={value} min={0} max={60} onChange={onChange} />
      </div>
      <span className="text-center">{text}</span>
    </section >
  );
});

export default ConstraintSlider;