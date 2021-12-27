import _ from "lodash";
import PropTypes from "prop-types";
export function Paginate(itemList, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(itemList).slice(startIndex).take(pageSize).value();
}
Paginate.propTypes = {
  itemList: PropTypes.array.isRequired,
  pageNumber: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
};
