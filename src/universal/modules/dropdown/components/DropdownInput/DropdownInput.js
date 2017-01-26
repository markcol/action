import React from 'react';
import withStyles from 'universal/styles/withStyles';
import {css} from 'aphrodite-local-styles/no-important';
import FontAwesome from 'react-fontawesome';
import FieldBlock from 'universal/components/FieldBlock/FieldBlock';
import FieldLabel from 'universal/components/FieldLabel/FieldLabel';
import appTheme from 'universal/styles/theme/appTheme';
import ui from 'universal/styles/ui';
import {Menu, MenuItem} from 'universal/modules/menu';
import Button from 'universal/components/Button/Button';

const originAnchor = {
  vertical: 'bottom',
  horizontal: 'right'
};

const targetAnchor = {
  vertical: 'top',
  horizontal: 'right'
};

// {menuItems.map((item, idx) =>
//   <MenuItem
//     isActive={item.isActive}
//     key={`MenuItem${idx}`}
//     label={item.label}
//     onClick={item.handleClick}
//   />
// )}

const DropdownInput = (props) => {
  const {input: {name}, label, styles} = props;
  const handleCreateNew = () => {

  };
  const toggle = <FontAwesome className={css(styles.downButton)} name="chevron-down"/>;
  const createNew = <Button label="Create New Organization" onClick={handleCreateNew}/>;
  return (
    <FieldBlock>
      {label && <FieldLabel label={label} htmlFor={name}/>}
      <div className={css(styles.inputBlock)}>
        <span className={css(styles.field)}>Marimar's Organization</span>
        <Menu
          originAnchor={originAnchor}
          menuWidth="10rem"
          targetAnchor={targetAnchor}
          toggle={toggle}
          toggleHeight="1.5rem"
          label="Select Organization:"
        >
          <MenuItem
            isActive
            key={`MenuItem1`}
            label={createNew}
          />
        </Menu>
      </div>
    </FieldBlock>
  )
};

const styleThunk = () => ({
  downButton: {
    cursor: 'pointer',
    position: 'absolute',
    right: '1rem',
    top: '.375rem'
  },

  field: {
    appearance: 'none',
    border: 0,
    borderBottom: '1px solid transparent',
    borderRadius: 0,
    boxShadow: 'none',
    display: 'block',
    fontFamily: appTheme.typography.sansSerif,
    fontSize: appTheme.typography.s4,
    lineHeight: '1.75rem',
    margin: '0',
    padding: `.125rem ${ui.fieldPaddingHorizontal}`,
    width: '100%',
  },

  inputBlock: {
    background: appTheme.palette.mid10l,
    borderColor: appTheme.palette.mid40l,
    position: 'relative'
  },
});

export default withStyles(styleThunk)(DropdownInput);
