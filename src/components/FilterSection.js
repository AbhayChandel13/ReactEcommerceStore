import React from "react";
import styled from "styled-components";

const FilterSection = () => {
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            //value={text}
            //onChange={updateFilterValue}
          />
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default FilterSection;
