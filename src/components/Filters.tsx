import React from 'react';
import '../assets/scss/main.scss';
import { Filter, FilterType } from './Filter';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

library.add(faFilter);

interface FiltersProps {
  collapsed: boolean;
  onFilterClick: (collpase: boolean) => any;
}

export class Filters extends React.Component<FiltersProps,{}> {
  constructor(props: FiltersProps) {
    super(props);
  }

  public render() {
    const onClick = () => {
        this.props.onFilterClick(!this.props.collapsed);
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
        {!!!this.props.collapsed ? null : 
          <div className="col-12">
            <div className="row">
                <div className="col-4">
                  <Filter label="Centro" key="center" filterType={FilterType.combo} options={['Sevilla','Barcelona','Chicago']}/>
                </div>
                <div className="col-4">
                  <Filter label="Tiempo" key="time" filterType={FilterType.checkbox} options={['15\'','30\'','120\'']}/>
                </div>
                <div className="col-4">
                  <Filter label="Precio" key="price" filterType={FilterType.range} min={40} max={180}/>
                </div>
            </div>
          </div>
        }
      </div>
    );
  }
}
