import React from 'react';
import '../assets/scss/main.scss';
import { Filter, FilterType } from './Filter';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

library.add(faFilter);

interface IFiltersProps {
  onChangeFilter: (field:string, value: string) => any;
}

interface IFiltersState {
  collapsed: boolean;
}

export class Filters extends React.Component<IFiltersProps,IFiltersState> {
  constructor(props:IFiltersProps) {
    super(props);
    this.state = { collapsed : false }
  }

  public render() {
    const onClick = () => {
        this.setState({
          collapsed: !this.state.collapsed
        });
    };
    const filterTime = (value:string) => {
        this.props.onChangeFilter('time', value);
    };
    const filterCenter = (value:string) => {
      this.props.onChangeFilter('center', value);
    };
    const filterPrice = (value:string) => {
      this.props.onChangeFilter('price', value);
    };
    return (
      <div className="row">
        <div className="col-12">
          <div className="filterHeader">
            <p>Filtrar</p>
            <a className="formButtonInverse ms-1" onClick={onClick}>
              <FontAwesomeIcon icon="filter" size="sm"/>
            </a>
          </div>
        </div>
        {!!!this.state.collapsed ? null : 
          <div className="col-12">
            <div className="row">
                <div className="col-4">
                  <Filter label="Centro" key="center" filterType={FilterType.combo} options={['Sevilla','Barcelona','Chicago']} onChange={filterCenter}/>
                </div>
                <div className="col-4">
                  <Filter label="Tiempo" key="time" filterType={FilterType.checkbox} options={['30','120','180']} onChange={filterTime}/>
                </div>
                <div className="col-4">
                  <Filter label="Precio" key="price" filterType={FilterType.range} min={60} max={140} onChange={filterPrice}/>
                </div>
            </div>
          </div>
        }
      </div>
    );
  }
}
export default Filters;
