/* eslint react/require-default-props: 0 */
import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable */

    const DragContext = React.createContext();

export default (
   _,
) => {

    class DragProvider extends React.Component {
        static propTypes = {
            data: PropTypes.array.isRequired,
            columns: PropTypes.array.isRequired,
            children: PropTypes.node.isRequired,
            options: PropTypes.shape({
                afterDragDrop: PropTypes.func,
              })
        }

        handleDragDrop = (fromIndex, toIndex) => {
            console.log('CALLED', fromIndex, toIndex);
            console.log(this.props);
            // const { afterDragDrop } = this.props.options;
            // this.props.options.afterDragDrop(fromIndex, toIndex);
            // if (_.isFunction(afterDragDrop)) afterDragDrop(fromIndex, toIndex);
        }

        render() {
            let { data } = this.props;


            return (
                <DragContext.Provider
                    value={{
                        data,
                        onDragDrop: this.handleDragDrop,
                        otions: {},
                    }}
                >
                    {this.props.children}
                </DragContext.Provider>
            );
        }
    }

    return {
        Provider: DragProvider,
    };
};

export const Consumer = DragContext.Consumer;