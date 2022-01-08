import React, { useState } from 'react';
import 'react-bootstrap-drawer/lib/style.css';
import {
	Col,
	Collapse,
	Container,
	Row,
} from 'react-bootstrap';
import { Drawer, } from 'react-bootstrap-drawer';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Dashboard = (props) => {
    const [open, setOpen] = useState(false);
	const {admin} = useAuth();
	const handleToggle = () => setOpen(!open);
    return (

		<div>
			<Drawer { ...props }>
			<Drawer.Toggle onClick={ handleToggle } />

			<Collapse in={ open }>
				<Drawer.Overflow>
					<Drawer.ToC>
					    <Link style={{textDecoration: 'none', marginLeft: '100px'}} to="/review">Review</Link>
                        <br />
						<Link style={{textDecoration: 'none', marginLeft: '100px'}} to="/pay">Payment</Link>
						<br />
                        {admin && <div>
							<Link style={{textDecoration: 'none', marginLeft: '100px'}} to="/manageProducts">Manage Products</Link>
                        <br />
                        <Link style={{textDecoration: 'none', marginLeft: '100px'}} to="/makeAdmin">MakeAnAdmin</Link>
                        <br />
                        <Link style={{textDecoration: 'none', marginLeft: '100px'}} to="/addProduct">AddProduct</Link>
                        <br />
							</div>}
						<Drawer.Header href="/">Home</Drawer.Header>

						<Drawer.Nav>
							<Drawer.Item href="/Products">Products</Drawer.Item>
						</Drawer.Nav>
					</Drawer.ToC>
				</Drawer.Overflow>
			</Collapse>
		</Drawer>
     	{/* <Switch>
			<Route exact path={path}>
				<ManageProducts></ManageProducts>
			</Route>
			<Route path={`${path}/makeAdmin`}>
				<MakeAdmin></MakeAdmin>
			</Route>
		</Switch> */}
		</div>
			
        );
};

const Application = (props) => {
	return(
		<Container fluid>
			<Row className="flex-xl-nowrap">
				<Col as={ Dashboard } xs={ 12 } md={ 3 } lg={ 2 } />
				<Col xs={ 12 } md={ 9 } lg={ 10 }>{ props.children }</Col>
			</Row>
		</Container>
	)
}


export default Dashboard;