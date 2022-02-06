import React, {FC, useEffect, useState} from 'react';
import MyList from '../components/MyList';

const About: FC = () => {


    return (
			<div>
				<h1>
					Мое первое адекватное приложение на React
				</h1>
				<div>
					<div>
						<span>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae incidunt porro magnam? Possimus odit architecto, aliquid recusandae commodi autem maxime totam magni dignissimos corrupti, dolore incidunt officiis vel, cum amet?
						</span>
						<div>
							<MyList>
								
							</MyList>
						</div>
					</div>
				</div>
			</div>
    );
};

export default About;