// ToReplaceWithItsContentOnBuild

interface IProps {
	statement: string;
}

const HTMLComment = ({ statement }: IProps) => {
	return (
		<script
			className='to-replace-with-its-content-on-build'
			dangerouslySetInnerHTML={{
				__html: statement,
			}}
		/>
	);
};

export default HTMLComment;
