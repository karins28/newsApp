//selected should come from parent
import {useState} from "react";
import {FormControl, InputGroup} from "react-bootstrap";

export const FilterComponent = ({category, text, onChange}) => {
    const onChangeCategory = (category) => {
        onChange(category.currentTarget.value, text);
    }
    return (<div className={"filter-container"}>
        <FormControl
            className="input-container"
            value={text}
            defaultValue={'enter text'}
            placeholder="Enter text"
            onChange={item => {
                onChange(category, item.target.value)
            }}
        />
        <InputGroup className={"categories-container"} defaultValue={category}>
            <InputGroup.Radio value="business" name="category" aria-label="Radio 1" onChange={onChangeCategory}
                              selected={category === 'business'}/>Business
            <InputGroup.Radio value="general" name="category" aria-label="Radio 2" onChange={onChangeCategory}
                              selected={category === 'general'}/>General
            <InputGroup.Radio value="health" name="category" aria-label="Radio 3" onChange={onChangeCategory}
                              selected={category === 'health'}/>Health
            <InputGroup.Radio value="science" name="category" aria-label="Radio 3" onChange={onChangeCategory}
                              selected={category === 'science'}/>Science
        </InputGroup>
    </div>);
}
