import React, { Component } from 'react'

class Paginator extends Component<{ lastPage: number, handlePageChange: any }> {
    page = 1;
    last_page = 0;

    next = () => {
        if (this.page === this.props.lastPage) return;

        this.page++;
        this.props.handlePageChange(this.page);

    }

    previous = () => {
        if (this.page === 1) return;
        this.page--;
        this.props.handlePageChange(this.page);

    }


    render() {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#" onClick={this.previous}>Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#" onClick={this.next}>Next</a></li>
                </ul>
            </nav>
        )
    }
}

export default Paginator;
