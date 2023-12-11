import React, { Fragment } from 'react'

const Filter = ({ filterData }) => {
    return (
        <Fragment>
            {
                filterData.map((data)=>{
                    return (<button>
                        {data.title}
                    </button>)
                })
            }

        </Fragment>
    )
}

export default Filter
