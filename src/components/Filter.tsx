import React from 'react';
import '../assets/scss/main.scss';

export enum FilterType{
  checkbox = "checkbox",
  range = "range",
  combo = "combo"
}

interface FilterProps {
  label: string;
  filterType: FilterType;
  options?: string[];
  min?: number;
  max?: number;
  onChange?: () => void;
}

interface FilterState{
  valueRange: number
}

export class Filter extends React.Component<FilterProps,FilterState> {
  constructor(props: FilterProps) {
    super (props);
    this.state = {
      valueRange: 50
    }
  }

  public changeRange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const wrap = document.querySelector(".filterRangeWrap");
    if (wrap != null) {
      const range = wrap.querySelector(".filterRange");
      const bubble = wrap.querySelector(".filterRangeValue");
        this.setRangeValue(range, bubble);
    }
    
  }

  public setRangeValue(range: any, bubble: any) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;
  
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    this.setState({valueRange: range.value});
  }

  public render() {
    const { label, filterType, options, min, max, ...props } = this.props;
    return (
      <div className="filter">        
        { (() => {
            switch(filterType){
              case FilterType.checkbox:
                return(
                  <div className="">
                    <label className="form-label">{label}</label>
                    <div>
                      {(options != null && Array.isArray(options) && options.length > 0) ? options.map((option) => (
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" id={"inlineCheckbox" + option} value={option} key={'input-'+option}/>
                          <label className="form-check-label" htmlFor={"inlineCheckbox" + option} key={'label-' + option}>{option}</label>
                        </div>
                      )) : null}
                    </div>
                  </div>
                );
              case FilterType.range:
                var newVal = 0;
                if (min!= null && max != null) {
                  newVal = Number(((this.state.valueRange - min) * 100) / (max - min));
                }
                return(
                  <div className="">
                    <label htmlFor="range" className="form-label">{label}</label>
                    <div className="filterRangeGroup">
                      <div className="filterGroupItem">
                        {min}
                      </div>
                      <div className="filterGroupItem">
                        <div className="filterRangeWrap">
                          <input type="range" className="form-range filterRange" min={min} max={max} id="range" onInput={this.changeRange}></input>                          
                          <output  className="filterRangeValue" style={{left : 'calc('+newVal+'% + ('+(8 - newVal * 0.15)+'px))'}}>{this.state.valueRange}</output>
                        </div>
                      </div>
                      <div className="filterGroupItem">
                        {max}
                      </div>
                    </div>
                  </div>
                );
              case FilterType.combo:
                return(
                  <div className="">
                    <label htmlFor="select" className="form-label">{label}</label>
                    <select className="form-select filterSelect" id="select">
                      <option value="-">Seleccione el Centro</option>
                      {options != null ? options.map((option) => (
                        <option value={option} key={option}>{option}</option>
                      )) : null}
                    </select>
                  </div>
                );
              default:
                break;
            }
          }) ()}
      </div>
    );
  }
}
