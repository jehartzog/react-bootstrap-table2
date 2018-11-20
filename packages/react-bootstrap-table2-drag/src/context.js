/* eslint react/require-default-props: 0 */
import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable */

export default () => {
    const DragContext = React.createContext();

    class DragProvider extends React.Component {
        static propTypes = {
            data: PropTypes.array.isRequired,
            columns: PropTypes.array.isRequired,
            children: PropTypes.node.isRequired,
        }

        handleDragDrop = opts => {
            console.log(opts);
        }

        render() {
            let { data } = this.props;

            return (
                <DragContext.Provider
                    value={{
                        data,
                        onDragDrop: this.handleDragDrop,
                    }}
                >
                    {this.props.children}
                </DragContext.Provider>
            );
        }
    }

    return {
        Provider: DragProvider,
        Consumer: DragContext.Consumer
    };
};
