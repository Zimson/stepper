import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import ResultPage from '../ResultPage';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import InfoField from '../../components/InfoField';

const propTypes = {
  switchPage: PropTypes.func.isRequired,
  updateVm: PropTypes.func.isRequired,
  selectedVm: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
    startStatus: PropTypes.bool,
  }).isRequired,
};

const defaultProps = {};

class StepTwoPage extends PureComponent {
  constructor() {
    super();
    this.inputs = {};
    this.form = null;
  }

  state = {
    showResult: false,
    isSubmit: false,
    updatedVm: {},
  };

  handleSubmit = event => {
    event.preventDefault();

    const validatedFields = Object.keys(this.inputs)
      .map(key => {
        const { value, required } = this.inputs[key].refInput;
        let input = undefined;

        if (!value && required) {
          input = this.inputs[key];
          input.setError();
        }

        return input;
      })
      .filter(input => input);

    if (validatedFields.length) return;

    const { diskSize, diskName, startStatus } = this.form.elements;

    this.setState(
      {
        ...this.state,
        isSubmit: true,
        updatedVm: {
          id: this.props.selectedVm.id,
          name: diskName.value,
          size: Number(diskSize.value),
          startStatus: startStatus.checked,
        },
      },
      () => {
        setTimeout(() => {
          this.props.updateVm(this.state.updatedVm);
          this.setState({
            ...this.state,
            showResult: true,
          });
        }, 500);
      }
    );
  };

  render() {
    const { id, name, size, startStatus } = this.props.selectedVm;
    const { isSubmit, showResult, updatedVm } = this.state;

    return (
      <Fragment>
        {!showResult ? (
          <form
            onSubmit={this.handleSubmit}
            ref={form => (this.form = form)}
            noValidate
          >
            <InfoField disabled={isSubmit}>{id}</InfoField>
            <Input
              name="diskName"
              value={name}
              ref={descInput => (this.inputs.descInput = descInput)}
              disabled={isSubmit}
              required
            />
            <Input
              name="diskSize"
              type="number"
              label="Размер диска"
              value={size < 1 ? '' : size.toString()}
              ref={sizeInput => (this.inputs.sizeInput = sizeInput)}
              placeholder="100"
              disabled={isSubmit}
              required
            />
            <Checkbox
              name="startStatus"
              checked={startStatus}
              disabled={isSubmit}
            />
            <Button
              title="Назад"
              onClick={this.props.switchPage(0)}
              disabled={isSubmit}
            >
              Назад
            </Button>
            <Button
              type="submit"
              title="Создать"
              onClick={() => {}}
              disabled={isSubmit}
            >
              Создать
            </Button>
          </form>
        ) : (
          <ResultPage switchPage={this.props.switchPage} resultVm={updatedVm} />
        )}
      </Fragment>
    );
  }
}

StepTwoPage.propTypes = propTypes;
StepTwoPage.defaultProps = defaultProps;

export default StepTwoPage;