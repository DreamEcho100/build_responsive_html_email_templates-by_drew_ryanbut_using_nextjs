// ToReplaceWithItsContentOnBuild

interface IProps {
	statement: string;
	removeExtraSpaces?: boolean;
}

const HTMLComment = ({ statement, removeExtraSpaces }: IProps) => {
	return (
		<script
			className='to-replace-with-its-content-on-build'
			dangerouslySetInnerHTML={{
				__html:
					'<!--' +
					(removeExtraSpaces
						? statement.trim().replace(/\s+/, ' ')
						: statement) +
					'-->',
			}}
		/>
	);
};

export default HTMLComment;
